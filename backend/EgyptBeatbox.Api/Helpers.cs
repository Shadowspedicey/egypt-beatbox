using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace EgyptBeatbox.Api
{
	public static class Helpers
	{
		public static IActionResult ToActionResult(this Result result)
		{
			if (result.IsSuccess)
			{
				// When no value is present but operation succeeded, return OK.
				return new OkResult();
			}

			var problems = BuildProblemFromErrors(result.Errors);
			return new ObjectResult(problems) { StatusCode = problems.Status ?? 500 };
		}

		public static IActionResult ToActionResult<T>(this Result<T> result)
		{
			if (result.IsSuccess)
			{
				return new OkObjectResult(result.Value);
			}

			var problems = BuildProblemFromErrors(result.Errors);
			return new ObjectResult(problems) { StatusCode = problems.Status ?? 500};
		}

		// Build a ProblemDetails (or ValidationProblemDetails) from FluentResults errors.
		private static ProblemDetails BuildProblemFromErrors(IReadOnlyList<IError> errors)
		{
			if (errors == null || errors.Count == 0)
				return CreateProblem(StatusCodes.Status500InternalServerError, "Unknown error", "An unknown error occurred.");

			// Prefer the first error as primary
			var primary = errors.First();

			// Determine status from metadata if present
			int status = StatusCodes.Status400BadRequest;
			if (primary.Metadata.TryGetValue("ErrorType", out var et))
			{
				var errorType = et?.ToString();
				status = errorType switch
				{
					"NotFound" => StatusCodes.Status404NotFound,
					"Validation" => StatusCodes.Status400BadRequest,
					"Authentication" => StatusCodes.Status401Unauthorized,
					_ => StatusCodes.Status500InternalServerError
				};
			}
			else if (primary.Message?.Contains("Invalid credentials", StringComparison.OrdinalIgnoreCase) == true)
			{
				status = StatusCodes.Status401Unauthorized;
			}

			// If there are multiple validation errors, produce ValidationProblemDetails
			if (errors.Any(e => e.Metadata.TryGetValue("ErrorType", out var m) && m?.ToString() == "Validation") || errors.Count > 1)
			{
				var validation = new ValidationProblemDetails
				{
					Title = "One or more validation errors occurred.",
					Status = status,
					Detail = primary.Message,
				};

				// collect messages grouped (use index keys to avoid duplications)
				int i = 0;
				foreach (var err in errors)
				{
					validation.Errors.Add($"error_{i++}", new[] { err.Message });
				}

				return validation;
			}

			// Single error -> ProblemDetails
			return CreateProblem(status, primary.GetType().Name, primary.Message);
		}

		public static ProblemDetails CreateProblem(int status, string title, string detail)
		{
			return new ProblemDetails
			{
				Status = status,
				Title = title,
				Detail = detail
			};
		}

		public static Guid GetUserId(this ClaimsPrincipal cp) => Guid.Parse(cp.FindFirst("sub")!.Value);
	}
}
