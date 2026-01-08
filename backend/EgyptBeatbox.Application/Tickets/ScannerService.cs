using EgyptBeatbox.Application.Errors;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;

namespace EgyptBeatbox.Application.Tickets
{
	public class ScannerService(IUnitOfWork unitOfWork) : IScannerService
	{
		private readonly IUnitOfWork _unitOfWork = unitOfWork;

		public async Task<Result> ScanTicket(Guid ticket)
		{
			UserTicket? userTicket = await _unitOfWork.UserTickets.FirstOrDefault(t => t.Value == ticket);
			if (userTicket is null)
				return Result.Fail(new NotFoundError<UserTicket>("Ticket not found"));

			if (userTicket.IsUsed)
				return Result.Fail(new ConflictError<UserTicket>("Ticket has already been used"));

			if (userTicket.Order.Status != OrderStatus.Paid)
				return Result.Fail(new ValidationError<UserTicket>("Ticket order is not paid"));

			userTicket.MarkAsUsed();
			await _unitOfWork.SaveChanges();
			return Result.Ok();
		}
	}
}
