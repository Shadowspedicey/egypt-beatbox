using FluentResults;

namespace EgyptBeatbox.Application.Tickets
{
	internal interface IScannerService
	{
		public Task<Result> ScanTicket(Guid ticket);
	}
}
