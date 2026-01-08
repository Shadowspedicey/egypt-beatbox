namespace EgyptBeatbox.Application.Orders
{
	public record ViewOrderDTO(
		string Id,
		string Name,
		string CustomerName,
		string CustomerEmail,
		string CustomerPhoneNumber,
		string Status,
		decimal TotalPrice,
		DateTime Date,
		IEnumerable<ViewUserTicketDTO> Items
	);
}
