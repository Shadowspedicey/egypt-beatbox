using EgyptBeatbox.Application.Orders;

namespace EgyptBeatbox.Application.Admins
{
	public readonly record struct ViewDashboardDTO(
		int TotalTicketsSold,
		decimal TotalRevenue,
		int PendingApprovals,
		IEnumerable<ViewOrderDTO> RecentOrders
	);
}
