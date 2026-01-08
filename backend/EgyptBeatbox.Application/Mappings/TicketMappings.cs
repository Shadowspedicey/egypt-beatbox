using EgyptBeatbox.Application.Tickets;
using EgyptBeatbox.Domain.Entities.Tickets;

namespace EgyptBeatbox.Application.Mappings
{
	public static class TicketMappings
	{
		public static ViewTicketDTO ToViewTicketDTO(this Ticket ticket)
		{
			return new ViewTicketDTO
			(
				ticket.Id,
				ticket.Name,
				ticket.Description,
				ticket.Tag.ToString(),
				ticket.Price.Amount,
				ticket.Perks.Select(p => p.ToString())
			);
		}
	}
}
