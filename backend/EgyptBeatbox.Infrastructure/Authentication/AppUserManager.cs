using EgyptBeatbox.Application.Errors;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Application.Users;
using EgyptBeatbox.Domain.Entities.Users;
using EgyptBeatbox.Domain.Shared;
using EgyptBeatbox.Infrastructure.Data;
using EgyptBeatbox.Infrastructure.Repositories;
using FluentResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Net.NetworkInformation;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text.RegularExpressions;

namespace EgyptBeatbox.Infrastructure.Authentication
{
	public class AppUserManager(IConfiguration configuration, AppDbContext dbContext, UserManager<AppUser> userManager) : IUserManager
	{
		private readonly IConfiguration _config = configuration;
		private readonly AppDbContext _dbContext = dbContext;
		private readonly UserManager<AppUser> _userManager = userManager;

		public async Task<Result> LoadEmail(User user)
		{
			AppUser? appUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == user.IdentityId);
			if (appUser is null)
				return Result.Fail(new NotFoundError<AppUser>("The user associated with the provided identity ID doesn't exist."));

			user.SetEmail(new EmailAddress(appUser.Email!));
			return Result.Ok();
		}

		public async Task<Result> LoadRoles(User user)
		{
			AppUser? appUser = await _dbContext.Users.FirstOrDefaultAsync(u => u.Id == user.IdentityId);
			if (appUser is null)
				return Result.Fail(new NotFoundError<AppUser>("The user associated with the provided identity ID doesn't exist."));

			IList<string> roles = await _userManager.GetRolesAsync(appUser);
			user.SetRoles(roles.Select(r => new Role(r)).ToList());
			return Result.Ok();
		}

		public async Task<Result<TokenDTO>> Login(EmailAddress email, string password)
		{
			AppUser? userSearch = await _userManager.FindByNameAsync(email.Value);
			if (userSearch is null)
				return Result.Fail(new NotFoundError<AppUser>("The user with the provided email doesn't exist."));

			var authResult = await _userManager.CheckPasswordAsync(userSearch, password);
			if (!authResult)
				return Result.Fail(new AuthenticationError("Invalid credentials."));

			await _dbContext.SaveChangesAsync();

			return Result.Ok(await GetToken(userSearch));
		}

		public async Task<Result<TokenDTO>> Signup(SignupUserDTO signupDto)
		{
			PhoneNumber phoneNumber = default!;
			EmailAddress email = default!;
			try
			{
				phoneNumber = new PhoneNumber(signupDto.PhoneNumber);
				email = new EmailAddress(signupDto.Email);
			}
			catch (Exception ex)
			{
				return Result.Fail(new ValidationError<SignupUserDTO>(ex.Message));
			}

			AppUser appUser = new()
			{
				Id = Guid.NewGuid(),
				Email = email.Value,
				UserName = email.Value
			};

			User baseUser = new(
				appUser.Id,
				new FullName(signupDto.FirstName, signupDto.LastName),
				email,
				phoneNumber
			);

			var result = await _userManager.CreateAsync(appUser, signupDto.Password);
			if (!result.Succeeded)
				return Result.Fail(result.Errors.Select(e => new ValidationError<AppUser>(e.Description)));

			await _dbContext.AddAsync(baseUser);
			await _userManager.AddToRoleAsync(appUser, "Customer");

			return Result.Ok(await GetToken(appUser));
		}

		public async Task<Result<TokenDTO>> RefreshToken(string token)
		{
			if (string.IsNullOrEmpty(token))
				return Result.Fail(new ValidationError<RefreshToken>("Refresh token can't be null."));

			RefreshToken? refreshToken = await _dbContext.RefreshTokens.FirstOrDefaultAsync(rt => rt.Token == token);
			if (refreshToken is null)
				return Result.Fail(new NotFoundError<RefreshToken>("Refresh token doesn't exist."));

			if (refreshToken.User is null)
				return Result.Fail(new NotFoundError<RefreshToken>("User doesn't exist anymore."));

			if (refreshToken.ExpiresAt < DateTime.UtcNow)
				return Result.Fail(new AuthenticationError("Refresh token is expired. Please log in again."));

			var baseUserId = (await _dbContext.BaseUsers.FirstOrDefaultAsync(u => u.IdentityId == refreshToken.User.Id))!.Id;

			string newRefreshToken = GenerateRefreshToken();
			refreshToken.Token = newRefreshToken;
			refreshToken.ExpiresAt = DateTime.UtcNow.AddDays(14);
			await _dbContext.SaveChangesAsync();


			return Result.Ok(new TokenDTO { UserId = baseUserId, Token = await GenerateJwtToken(refreshToken.User, baseUserId), RefreshToken = newRefreshToken });
		}

		private async Task<TokenDTO> GetToken(AppUser user)
		{
			var baseUserId = (await _dbContext.BaseUsers.FirstOrDefaultAsync(u => u.IdentityId == user.Id))!.Id;

			string token = await GenerateJwtToken(user, baseUserId);

			string refreshToken = GenerateRefreshToken();
			RefreshToken? userRefreshToken = await _dbContext.RefreshTokens.FirstOrDefaultAsync(rt => rt.User == user);
			if (userRefreshToken is null)
			{
				userRefreshToken = new() { Token = refreshToken, User = user };
				await _dbContext.RefreshTokens.AddAsync(userRefreshToken);
			}
			else
				userRefreshToken.Token = refreshToken;
			userRefreshToken.ExpiresAt = DateTime.UtcNow.AddDays(14);
			await _dbContext.SaveChangesAsync();

			return new TokenDTO { UserId = baseUserId, Token = token, RefreshToken = refreshToken };
		}

		private async Task<string> GenerateJwtToken(AppUser user, Guid baseUserId)
		{
			var securityKey = new SymmetricSecurityKey(Convert.FromBase64String(configuration.GetSection("Jwt")["Key"] ?? throw new ArgumentException("Signing key can't be null.")));
			var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

			IList<Claim> claims = [
				new("jti", Guid.NewGuid().ToString()),
				new("iat", DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer32),
				new(JwtRegisteredClaimNames.Sub, baseUserId.ToString()),
			];

			foreach (var claim in GetUserClaims(user))
				claims.Add(claim);

			string userFullName = await _dbContext.BaseUsers.AsNoTracking().Where(u => u.Id == baseUserId).Select(u => u.FullName.ToString()).FirstAsync();
			claims.Add(new("name", userFullName));

			IEnumerable<Role> roles = user.Roles.Select(r => (Role)r);

			foreach (var role in roles)
				claims.Add(new("role", role));

			var token = new JwtSecurityToken(
				signingCredentials: credentials,
				issuer: "edu-app",
				claims: claims,
				expires: DateTime.UtcNow.AddMinutes(int.Parse(_config["Authentication:Schemes:Bearer:JwtTokenValidityPeriodInMinutes"] ?? "5"))
			);

			var tokenHandler = new JwtSecurityTokenHandler();
			return tokenHandler.WriteToken(token);
		}
		private static IEnumerable<Claim> GetUserClaims(AppUser user)
		{
			IList<Claim> claims = [];

			claims.Add(new("username", user.UserName!));

			return claims;
		}
		private static string GenerateRefreshToken() => Convert.ToBase64String(RandomNumberGenerator.GetBytes(32));
	}
}
