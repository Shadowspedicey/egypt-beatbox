using EgyptBeatbox.Application.Mappings;
using EgyptBeatbox.Application.Repositories;
using FluentResults;

namespace EgyptBeatbox.Application.Tickets
{
	public class TicketService(IUnitOfWork unitOfWork) : ITicketService
	{
		private readonly IUnitOfWork _unitOfWork = unitOfWork;
		public async Task<Result<IEnumerable<ViewTicketDTO>>> GetAllTickets()
		{
			var tickets = await _unitOfWork.Tickets.GetAll();
			return Result.Ok(tickets.Select(t => t.ToViewTicketDTO()));
		}
	}
}
