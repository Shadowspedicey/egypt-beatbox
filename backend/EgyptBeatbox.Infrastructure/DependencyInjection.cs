using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Application.Users;
using EgyptBeatbox.Infrastructure.Authentication;
using EgyptBeatbox.Infrastructure.Data;
using EgyptBeatbox.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace EgyptBeatbox.Infrastructure
{
	public static class DependencyInjection
	{
		public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
		{
			var connectionString = configuration.GetConnectionString("Database");
			services.AddDbContext<AppDbContext>(options =>
				options
					.UseLazyLoadingProxies()
					.UseNpgsql(connectionString)
			);

			services.AddIdentityCore<AppUser>(options =>
			{
				options.User.RequireUniqueEmail = true;
				options.User.AllowedUserNameCharacters = null!;

				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequiredUniqueChars = 0;
				options.Password.RequireDigit = false;
				options.Password.RequireLowercase = false;
				options.Password.RequireUppercase = false;
			})
				.AddRoles<AppRole>()
				.AddEntityFrameworkStores<AppDbContext>();

			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
				.AddJwtBearer(options =>
				{
					options.MapInboundClaims = false;
					options.TokenValidationParameters = new()
					{
						IssuerSigningKey = new SymmetricSecurityKey(Convert.FromBase64String(configuration.GetSection("Jwt")["Key"]!)),
						ValidateIssuer = false,
						ValidateAudience = false,
						ValidateLifetime = true,
						ValidateIssuerSigningKey = true,
						ClockSkew = TimeSpan.Zero,
						RoleClaimType = "role"
					};
				});

			services.AddScoped<IUserManager, AppUserManager>();
			services.AddScoped<IUnitOfWork, UnitOfWork>();

			return services;
		}
	}
}
