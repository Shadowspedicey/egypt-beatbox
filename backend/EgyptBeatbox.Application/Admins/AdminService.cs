using EgyptBeatbox.Application.Mappings;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Application.Users;
using EgyptBeatbox.Domain.Entities.Orders;
using FluentResults;

namespace EgyptBeatbox.Application.Admins
{
	public class AdminService(IUnitOfWork unitOfWork, IUserManager userManager) : IAdminService
	{
		private readonly IUnitOfWork _unitOfWork = unitOfWork;
		private readonly IUserManager _userManager = userManager;

		public async Task<Result<ViewDashboardDTO>> ViewDashboardDTO()
		{
			IEnumerable<OrderItem> orderItems = (await _unitOfWork.Orders.GetAll()).SelectMany(o => o.Items);
			var totalTicketsSold = orderItems.Sum(oi => oi.Quantity);
			var totalRevenue = orderItems.Sum(oi => oi.TotalPrice.Amount);
			int pendingApprovals = await _unitOfWork.Orders.Count(o => o.Status == OrderStatus.Pending);
			var recentOrders = await _unitOfWork.Orders.GetLastN(5, orderingClause: o => o.CreatedAt);
			foreach (var user in recentOrders.Select(o => o.Customer).DistinctBy(c => c.Id))
				await _userManager.LoadEmail(user);
			return new ViewDashboardDTO(totalTicketsSold, totalRevenue, pendingApprovals, recentOrders.Select(o => o.ToViewOrderDTO()));
		}
	}
}
