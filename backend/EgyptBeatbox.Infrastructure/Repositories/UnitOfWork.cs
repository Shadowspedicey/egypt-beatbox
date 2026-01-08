using EgyptBeatbox.Application.Errors;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Domain.Entities.Events;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Tickets;
using EgyptBeatbox.Domain.Entities.Users;
using EgyptBeatbox.Infrastructure.Data;
using FluentResults;

namespace EgyptBeatbox.Infrastructure.Repositories
{
	public class UnitOfWork(AppDbContext dbContext) : IUnitOfWork
	{
		public IRepository<User> Users => new Repository<User>(dbContext);

		public IRepository<Order> Orders => new Repository<Order>(dbContext);

		public IRepository<Ticket> Tickets => new Repository<Ticket>(dbContext);

		public IRepository<Event> Events => new Repository<Event>(dbContext);

		public IRepository<UserTicket> UserTickets => new Repository<UserTicket>(dbContext);

		public async Task<Result> ExecuteTransaction(Func<Task<Result>> fn)
		{
			var transactionResult = await ExecuteTransaction<object>(async () =>
			{
				var result = await fn();
				return result.IsSuccess ? Result.Ok<object>(null!) : Result.Fail(result.Errors);
			});

			return transactionResult.IsSuccess ? Result.Ok() : Result.Fail(transactionResult.Errors);
		}

		public async Task<Result<T>> ExecuteTransaction<T>(Func<Task<Result<T>>> fn)
		{
			await using var transaction = dbContext.Database.BeginTransaction();
			try
			{
				var result = await fn();

				if (!result.IsSuccess)
					await transaction.RollbackAsync();
				else
					await transaction.CommitAsync();

				return result;
			}
			catch (Exception ex)
			{
				await transaction.RollbackAsync();
				return Result.Fail(new InternalServerError(ex.Message));
			}
		}

		public async Task<int> SaveChanges()
		{
			return await dbContext.SaveChangesAsync();
		}
	}
}
