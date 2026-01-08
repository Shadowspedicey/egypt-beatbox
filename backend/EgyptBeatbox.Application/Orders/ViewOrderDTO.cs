namespace EgyptBeatbox.Application.Orders
{
	public record ViewOrderDTO(
		string Id,
		string CustomerName,
		string CustomerEmail,
		string CustomerPhoneNumber,
		string PaidBy,
		string Status,
		decimal TotalPrice,
		DateTime Date,
		IEnumerable<ViewUserTicketDTO> Items
	);
}
