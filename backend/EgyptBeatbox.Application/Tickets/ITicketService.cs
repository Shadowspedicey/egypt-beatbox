using FluentResults;

namespace EgyptBeatbox.Application.Tickets
{
	public interface ITicketService
	{
		public Task<Result<IEnumerable<ViewTicketDTO>>> GetAllTickets();
	}
}
