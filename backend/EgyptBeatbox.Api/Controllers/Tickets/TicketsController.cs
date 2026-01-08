using EgyptBeatbox.Application.Tickets;
using Microsoft.AspNetCore.Mvc;

namespace EgyptBeatbox.Api.Controllers.Tickets
{
	[Route("api/[controller]")]
	[ApiController]
	public class TicketsController(ITicketService TicketService) : ControllerBase
	{
		private readonly ITicketService _ticketService = TicketService;

		
		[HttpGet]
		[ProducesResponseType(typeof(IEnumerable<ViewTicketDTO>), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 500)]
		public async Task<IActionResult> GetAllTickets()
		{
			var result = await _ticketService.GetAllTickets();
			return result.ToActionResult();
		}
	}
}
