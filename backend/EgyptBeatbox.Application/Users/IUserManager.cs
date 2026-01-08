using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;

namespace EgyptBeatbox.Application.Users
{
	public interface IUserManager
	{
		public Task<Result> Signup(SignupUserDTO dto);
		public Task<Result> Login(EmailAddress email, string password);
		public Task<Result> LoadRoles(User user);
		public Task<Result> LoadEmail(User user);
	}
}
