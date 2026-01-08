namespace EgyptBeatbox.Api.Controllers.Auth
{
	/// <summary>
	/// Login request payload.
	/// </summary>
	public record LoginRequest(string Email, string Password);
}
