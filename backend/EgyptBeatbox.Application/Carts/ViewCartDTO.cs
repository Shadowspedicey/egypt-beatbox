namespace EgyptBeatbox.Application.Carts
{
	public record ViewCartDTO(IEnumerable<ViewCartItemDTO> Items, decimal TotalPrice);
}