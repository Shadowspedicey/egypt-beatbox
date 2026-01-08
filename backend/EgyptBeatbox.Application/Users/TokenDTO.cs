namespace EgyptBeatbox.Application.Users
{
	public class TokenDTO
	{
		public required Guid UserId { get; set; }
		public required string Token { get; set; }
		public required string RefreshToken { get; set; }
	}
}
