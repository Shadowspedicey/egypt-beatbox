namespace EgyptBeatbox.Application.Users
{
	public readonly record struct SignupUserDTO(
		string FirstName,
		string LastName,
		string Email,
		string Password,
		string PhoneNumber
	);
}
