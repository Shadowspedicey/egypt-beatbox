using Microsoft.AspNetCore.Identity;

namespace EgyptBeatbox.Infrastructure.Data
{
	public class AppUser : IdentityUser<Guid>
	{
		public virtual ICollection<AppRole> Roles { get; set; } = [];
	}
}
