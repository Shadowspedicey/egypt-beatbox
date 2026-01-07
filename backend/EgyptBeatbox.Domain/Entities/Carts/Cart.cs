using EgyptBeatbox.Domain.Entities.Users;
using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Carts
{
	public class Cart : Entity<int>
	{
		public virtual User Customer { get; private set; }
		public virtual ICollection<CartItem> Items => _items;
		private readonly IList<CartItem> _items = [];
		public Money TotalPrice => Items.Aggregate(Money.Zero(Currency.EGP), (sum, item) => sum + item.TotalPrice);

		protected Cart() { }
		public Cart(User customer)
		{
			Customer = customer;
		}

		public void AddItem(CartItem item)
		{
			var itemSearch = Items.FirstOrDefault(i => i.Item.Id == item.Item.Id);
			if (itemSearch is not null)
				itemSearch.IncrementQuantity();
			else
				_items.Add(item);
		}

		public void RemoveItem(CartItem item)
		{
			_items.Remove(item);
		}

		public void DecrementItemQuantity(CartItem item)
		{
			var itemSearch = Items.FirstOrDefault(i => i.Item.Id == item.Item.Id);
			if (itemSearch is not null)
			{
				if (itemSearch.Quantity > 1)
					itemSearch.DecrementQuantity();
				else
					_items.Remove(itemSearch);
			}
		}

		public void Clear()
		{
			_items.Clear();
		}
	}
}
