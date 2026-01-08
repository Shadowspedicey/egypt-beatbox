namespace EgyptBeatbox.Infrastructure.Data
{
	public class RefreshToken
	{
		public int Id { get; set; }
		public Guid UserId { get; set; }
		public required virtual AppUser User { get; set; }
		public required string Token { get; set; }
		public DateTime ExpiresAt { get; set; }
	}
}
