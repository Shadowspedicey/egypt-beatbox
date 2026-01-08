using EgyptBeatbox.Application.Orders;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Users;

namespace EgyptBeatbox.Application.Mappings
{
	public static class OrderMappings
	{
		public static ViewOrderDTO ToViewOrderDTO(this Order order)
		{
			return new ViewOrderDTO
			(
				order.Id.Value,
				order.Customer.FullName.ToString(),
				order.Customer.Email.Value,
				order.Customer.PhoneNumber.Number,
				order.PaidBy.Number,
				order.Status.ToString(),
				order.TotalAmount.Amount,
				order.CreatedAt,
				order.UserTickets.Select(t => new ViewUserTicketDTO(t.Id.ToString(), t.Order.Id.ToString(), t.Ticket.Name, t.Price.Amount, t.QrCode)).ToList()
			);
		}
	}
}
