namespace EgyptBeatbox.Domain.Entities.Users
{
	public readonly record struct Role(string Name)
	{
		public static Role Customer => new("Customer");
		public static Role Admin => new("Admin");

		public static implicit operator string(Role role) => role.Name;
	}
}
