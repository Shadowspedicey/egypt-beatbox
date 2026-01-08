using EgyptBeatbox.Application.Admins;
using EgyptBeatbox.Application.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EgyptBeatbox.Api.Controllers.Users
{
	[Route("api/[controller]")]
	[Authorize(Roles = "Admin")]
	[ApiController]
	public class AdminController(IUserService userService, IAdminService adminService) : ControllerBase
	{
		private readonly IUserService _userService = userService;
		private readonly IAdminService _adminService = adminService;
		/// <summary>
		/// Get all users (admin only).
		/// </summary>
		/// <returns>List of users</returns>
		/// <response code="200">Users retrieved</response>
		/// <response code="500">Internal server error</response>
		[HttpGet("users")]
		[ProducesResponseType(typeof(IEnumerable<ViewUserDTO>), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 500)]
		public async Task<IActionResult> GetAllUsers()
		{
			var result = await _userService.GetAllUsers();
			return result.ToActionResult();
		}

		/// <summary>
		/// Gets admin dashboard statistics.
		/// </summary>
		/// <returns>Admin dashboard statistics</returns>
		/// <response code="200">Statistics retrieved</response>
		/// <response code="500">Internal server error</response>
		[HttpGet("dashboard")]
		[ProducesResponseType(typeof(ViewDashboardDTO), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 500)]
		public async Task<IActionResult> GetDashboardStatistics()
		{
			var result = await _adminService.ViewDashboardDTO();
			return result.ToActionResult();
		}
	}
}
