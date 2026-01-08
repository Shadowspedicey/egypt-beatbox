namespace EgyptBeatbox.Application.Orders
{
	public record ViewUserTicketDTO(
		string Id,
		string OrderId,
		string Name,
		decimal Price,
		string Qr
	);
}
