using FluentResults;

namespace EgyptBeatbox.Application.Admins
{
	public interface IAdminService
	{
		public Task<Result<ViewDashboardDTO>> ViewDashboardDTO();
	}
}
