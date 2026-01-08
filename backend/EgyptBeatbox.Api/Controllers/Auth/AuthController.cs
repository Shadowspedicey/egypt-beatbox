using EgyptBeatbox.Application.Users;
using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;
using Microsoft.AspNetCore.Mvc;
using static EgyptBeatbox.Api.Helpers;

namespace EgyptBeatbox.Api.Controllers.Auth
{
	/// <summary>
	/// Authentication endpoints (login, signup, refresh token).
	/// Uses <see cref="IUserManager"/> for core operations.
	/// All error responses use RFC 7807 Problem Details.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	public class AuthController : ControllerBase
	{
		private readonly IUserManager _userManager;
		private readonly ILogger<AuthController> _logger;

		public AuthController(IUserManager userManager, ILogger<AuthController> logger)
		{
			_userManager = userManager ?? throw new ArgumentNullException(nameof(userManager));
			_logger = logger ?? throw new ArgumentNullException(nameof(logger));
		}

		/// <summary>
		/// Login using email and password. Returns JWT token + refresh token on success.
		/// </summary>
		/// <param name="request">Login payload</param>
		/// <returns>TokenDTO with JWT and refresh token</returns>
		/// <response code="200">Login successful</response>
		/// <response code="400">Validation error</response>
		/// <response code="401">Invalid credentials</response>
		/// <response code="404">User not found</response>
		[HttpPost("login")]
		[ProducesResponseType(typeof(TokenDTO), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 401)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> Login([FromBody] LoginRequest request)
		{
			if (request is null)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid request", "Request body is required."));

			EmailAddress email;
			try
			{
				email = new EmailAddress(request.Email);
			}
			catch (Exception ex)
			{
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid email", ex.Message));
			}

			Result<TokenDTO> result = await _userManager.Login(email, request.Password);
			return result.ToActionResult();
		}

		/// <summary>
		/// Signup a new user and return tokens.
		/// </summary>
		/// <param name="request">Signup payload</param>
		/// <returns>TokenDTO with JWT and refresh token</returns>
		/// <response code="201">Signup successful (created)</response>
		/// <response code="400">Validation error</response>
		[HttpPost("signup")]
		[ProducesResponseType(typeof(TokenDTO), 201)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		public async Task<IActionResult> Signup([FromBody] SignupRequest request)
		{
			if (request is null)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid request", "Request body is required."));

			var dto = new SignupUserDTO
			{
				FirstName = request.FirstName,
				LastName = request.LastName,
				Email = request.Email,
				PhoneNumber = request.PhoneNumber,
				Password = request.Password
			};

			Result<TokenDTO> result = await _userManager.Signup(dto);
			if (result.IsSuccess)
			{
				// return 201 Created with token payload
				return Created(string.Empty, result.Value);
			}

			return result.ToActionResult();
		}

		/// <summary>
		/// Refresh JWT using a refresh token.
		/// </summary>
		/// <param name="request">Refresh token request</param>
		/// <returns>New TokenDTO</returns>
		/// <response code="200">Token refreshed</response>
		/// <response code="400">Validation error</response>
		/// <response code="404">Refresh token not found</response>
		[HttpPost("refresh")]
		[ProducesResponseType(typeof(TokenDTO), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> Refresh([FromBody] RefreshRequest request)
		{
			if (request is null)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid request", "Request body is required."));

			Result<TokenDTO> result = await _userManager.RefreshToken(request.RefreshToken);
			return result.ToActionResult();
		}
	}
}