namespace EgyptBeatbox.Domain.Entities.Users
{
	public record FullName(string FirstName, string LastName)
	{
		public override string ToString() => $"{FirstName} {LastName}";
	}
}