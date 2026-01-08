using EgyptBeatbox.Domain.Entities.Events;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Tickets;
using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;

namespace EgyptBeatbox.Application.Repositories
{
	public interface IUnitOfWork
	{
		public IRepository<User> Users { get; }
		public IRepository<Order> Orders { get; }
		public IRepository<Ticket> Tickets { get; }
		public IRepository<Event> Events { get; }
		public IRepository<UserTicket> UserTickets { get; }

		Task<Result> ExecuteTransaction(Func<Task<Result>> fn);
		Task<Result<T>> ExecuteTransaction<T>(Func<Task<Result<T>>> fn);
		Task<int> SaveChanges();
	}
}
