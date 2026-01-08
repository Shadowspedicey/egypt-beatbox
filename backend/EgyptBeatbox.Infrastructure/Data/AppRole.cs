using EgyptBeatbox.Domain.Entities.Users;
using Microsoft.AspNetCore.Identity;

namespace EgyptBeatbox.Infrastructure.Data
{
	public class AppRole : IdentityRole<Guid>
	{
		public static explicit operator Role(AppRole role) => new(role.Name!);
	}
}
