using EgyptBeatbox.Domain.Entities.Carts;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Users
{
	public class User : Entity<Guid>
	{
		public FullName FullName { get; private set; }
		public EmailAddress? Email { get; protected set; } = null;
		public PhoneNumber PhoneNumber { get; private set; }
		public virtual Cart Cart { get; private set; }
		public virtual IEnumerable<Order> Orders => _orders;
		private readonly IList<Order> _orders = [];
		public IReadOnlyCollection<Role>? Roles { get; protected set; } = null;
		public IEnumerable<UserTicket> UserTickets => Orders.SelectMany(o => o.UserTickets);
		public DateTime CreatedAt { get; } = DateTime.UtcNow;
		protected User() { }
		public User(FullName fullName, EmailAddress email, PhoneNumber phoneNumber)
		{
			Id = Guid.NewGuid();
			Cart = new Cart(this);
			FullName = fullName;
			Email = email;
			PhoneNumber = phoneNumber;
		}

		public void ClearCart()
		{
			Cart.Clear();
		}

		public void SetRoles(IReadOnlyCollection<Role> roles)
		{
			if (Roles is null)
				Roles = roles;
			else
				throw new InvalidOperationException("User's roles are already set.");
		}

		public void SetEmail(EmailAddress email)
		{
			Email = email;
		}

		public void ClearRoles()
		{
			Roles = null;
		}
	}
}
