namespace EgyptBeatbox.Api.Controllers.Orders
{
	public record CustomerOrderDTO(string Id, DateTime Date, decimal TotalPrice, string State, IEnumerable<CustomerTicketDTO> Items);
}
