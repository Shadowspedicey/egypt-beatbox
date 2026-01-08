namespace EgyptBeatbox.Application.Users
{
	public readonly record struct ViewUserDTO(
		Guid Id,
		string Name,
		string Email,
		string PhoneNumber,
		IEnumerable<string> Roles,
		DateTime CreatedAt
	);
}
