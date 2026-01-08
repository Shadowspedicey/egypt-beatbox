using EgyptBeatbox.Application.Mappings;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;

namespace EgyptBeatbox.Application.Users
{
	public class UserService(IUnitOfWork unitOfWork, IUserManager userManager) : IUserService
	{
		private readonly IUnitOfWork _unitOfWork = unitOfWork;
		private readonly IUserManager _userManager = userManager;
		public async Task<Result<IEnumerable<ViewUserDTO>>> GetAllUsers()
		{
			IEnumerable<User> users = await _unitOfWork.Users.GetAll();
			foreach (var user in users)
			{
				await _userManager.LoadRoles(user);
				await _userManager.LoadEmail(user);
			}
			var usersDTO = users.Select(user => user.ToViewUserDTO());
			return Result.Ok(usersDTO);
		}
	}
}
