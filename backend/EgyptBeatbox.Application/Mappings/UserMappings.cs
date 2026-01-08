using EgyptBeatbox.Application.Users;
using EgyptBeatbox.Domain.Entities.Users;

namespace EgyptBeatbox.Application.Mappings
{
	public static class UserMappings
	{
		public static ViewUserDTO ToViewUserDTO(this User user)
		{
			return new ViewUserDTO
			(
				user.Id,
				user.FullName.ToString(),
				user.Email.ToString(),
				user.PhoneNumber.ToString(),
				user.Roles.Select(r => r.Name),
				user.CreatedAt
			);
		}
	}
}
