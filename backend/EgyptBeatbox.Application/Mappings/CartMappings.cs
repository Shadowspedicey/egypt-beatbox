using EgyptBeatbox.Application.Carts;
using EgyptBeatbox.Domain.Entities.Carts;

namespace EgyptBeatbox.Application.Mappings
{
	public static class CartMappings
	{
		public static ViewCartItemDTO ToViewCartItemDTO(this CartItem cartItem)
		{
			return new ViewCartItemDTO(
				cartItem.Item.Id,
				cartItem.Item.Name,
				cartItem.Quantity,
				cartItem.TotalPrice.Amount
			);
		}
		public static ViewCartDTO ToViewCartDTO(this Cart cart)
		{
			var items = cart.Items.Select(item => item.ToViewCartItemDTO());
			return new ViewCartDTO(
				items,
				cart.TotalPrice.Amount
			);
		}
	}
}
