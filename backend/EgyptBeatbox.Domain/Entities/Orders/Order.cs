using EgyptBeatbox.Domain.Entities.Carts;
using EgyptBeatbox.Domain.Entities.Users;
using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Orders
{
	public class Order : Entity<ShortId>
	{
		public string Name => _items.Aggregate("", (name, item) => name + $"{item.Quantity}x {item.Name}");
		public virtual User Customer { get; private set; }
		public virtual IEnumerable<OrderItem> Items => _items;
		private readonly IList<OrderItem> _items = [];
		public virtual IEnumerable<UserTicket> UserTickets => _userTickets;
		private readonly IList<UserTicket> _userTickets = [];
		public OrderStatus Status { get; private set; } = OrderStatus.Pending;
		public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
		public Money TotalAmount => Items.Aggregate(Money.Zero(Currency.EGP), (sum, item) => sum + item.TotalPrice);
		protected Order() { }
		public Order(User customer, IEnumerable<OrderItem> items)
		{
			Id = ShortId.Generate();
			Customer = customer;
			foreach (var item in items)
				_items.Add(item);
		}
		public Order(Cart cart)
		{
			Id = ShortId.Generate();
			Customer = cart.Customer;
			foreach (var cartItem in cart.Items)
				_items.Add(new OrderItem(cart.Id, cartItem.Item.Id, cartItem.Item.Price , cartItem.Quantity, cartItem.Item.Name));
			foreach (var cartItem in cart.Items)
				for (int i = 0; i < cartItem.Quantity; i++)
					_userTickets.Add(new UserTicket(this, cartItem.Item));
		}

		public void ConfirmOrder()
		{
			Status = OrderStatus.Paid;
		}
	}
}
