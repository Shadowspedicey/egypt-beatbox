using EgyptBeatbox.Domain.Entities.Events;
using EgyptBeatbox.Domain.Shared;

namespace EgyptBeatbox.Domain.Entities.Tickets
{
	public class Ticket : Entity<Guid>
	{
		public string Name { get; private set; }
		public Tag Tag { get; private set; }
		public virtual Event Event { get; private set; }
		public Money Price { get; private set; }
		public string Description { get; private set; }
		public IEnumerable<Perk> Perks => _perks;
		private readonly IList<Perk> _perks = [];
		protected Ticket() { }
		public Ticket(string name, Tag tag, Money price, string description, IEnumerable<Perk> perks)
		{
			Id = Guid.NewGuid();
			Tag = tag;
			Name = name;
			Price = price;
			Description = description;
			foreach (var perk in perks)
				_perks.Add(perk);
		}
	}
}
