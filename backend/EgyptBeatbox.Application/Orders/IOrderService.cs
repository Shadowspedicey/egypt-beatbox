using EgyptBeatbox.Domain.Shared;
using FluentResults;

namespace EgyptBeatbox.Application.Orders
{
	public interface IOrderService
	{
		public Task<Result<ShortId>> CreateOrder(Guid customerId);
		public Task<Result<IEnumerable<ViewOrderDTO>>> GetOrders(Guid customerId);
		public Task<Result<IEnumerable<ViewOrderDTO>>> GetAllOrders();
		public Task<Result> ConfirmOrder(ShortId orderId);
		public Task<Result> DeleteOrder(ShortId orderId);
	}
}
