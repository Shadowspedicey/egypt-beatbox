using FluentResults;

namespace EgyptBeatbox.Application.Users
{
	public interface IUserService
	{
		public Task<Result<IEnumerable<ViewUserDTO>>> GetAllUsers();
	}
}
