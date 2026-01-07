using EgyptBeatbox.Domain.Entities.Tickets;
using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Carts
{
	public class CartItem : Entity<int>
	{
		public virtual Ticket Item { get; private set; }
		public virtual Cart Cart { get; private set; }
		public int Quantity { get; private set; }
		public Money TotalPrice => Item.Price * Quantity;

		protected CartItem() { }
		public CartItem(Cart cart, Ticket item, int quantity)
		{
			Item = item;
			Quantity = quantity;
			Cart = cart;
		}

		public void DecrementQuantity()
		{
			Quantity--;
		}

		public void IncrementQuantity()
		{
			Quantity++;
		}
	}
}
