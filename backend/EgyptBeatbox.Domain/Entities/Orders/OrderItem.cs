using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Orders
{
	public record OrderItem : IEquatable<OrderItem>
	{
		public int CartId { get; }
		public Guid TicketId { get; }
		public string Name { get; protected set; }
		public Money UnitPrice { get; protected set; }
		public int Quantity { get; protected set; }
		public Money TotalPrice => UnitPrice * Quantity;

		protected OrderItem() { }
		public OrderItem(int cartId, Guid ticketId, Money unitPrice, int quantity, string name)
		{
			if (unitPrice.Amount <= 0)
				throw new ArgumentException("Price must be positive");

			if (quantity <= 0)
				throw new ArgumentException("Quantity must be positive");

			CartId = cartId;
			TicketId = ticketId;
			UnitPrice = unitPrice;
			Quantity = quantity;
			Name = name;
		}

		public virtual bool Equals(OrderItem? other)
		{
			if (other is null)
				return false;
			return CartId == other.CartId && TicketId == other.TicketId;
		}
		public override int GetHashCode()
		{
			return HashCode.Combine(CartId, TicketId);
		}
	}
}
