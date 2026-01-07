using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Tickets;
using EgyptBeatbox.Domain.Shared;
using QRCoder;

namespace EgyptBeatbox.Domain.Entities.Users
{
	public class UserTicket : Entity<ShortId>
	{
		public virtual Ticket Ticket { get; private set; }
		public virtual Order Order { get; private set; }
		public Guid Value { get; init; }
		public bool IsUsed { get; private set; } = false;
		public DateTime? UsedAt { get; private set; }
		public Money Price { get; private set; }
		public string QrCode => GetQRCode();
		protected UserTicket() { }
		public UserTicket(Order order, Ticket ticket)
		{
			Id = ShortId.Generate();
			Value = Guid.NewGuid();
			Price = ticket.Price;
			Ticket = ticket;
			Order = order;
		}
		public void MarkAsUsed()
		{
			if (Order.Status != OrderStatus.Paid)
				throw new ApplicationException("Cannot use a ticket from an unpaid order.");

			IsUsed = true;
			UsedAt = DateTime.UtcNow;
		}

		private string GetQRCode()
		{
			using var qrCodeData = QRCodeGenerator.GenerateQrCode(Value.ToString(), QRCodeGenerator.ECCLevel.Q);
			using var base64Renderer = new Base64QRCode(qrCodeData);
			return base64Renderer.GetGraphic(20);
		}
	}
}
