using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EgyptBeatbox.Infrastructure.Repositories
{
	public class Repository<T>(AppDbContext dbContext) : IRepository<T> where T : class
	{
		protected readonly AppDbContext _dbContext = dbContext;
		public async Task Add(T entity)
		{
			await _dbContext.Set<T>().AddAsync(entity);
		}

		public async Task AddRange(IEnumerable<T> entities)
		{
			await _dbContext.Set<T>().AddRangeAsync(entities);
		}

		public async Task<bool> All(Expression<Func<T, bool>> predicate)
		{
			return await _dbContext.Set<T>().AllAsync(predicate);
		}

		public async Task<bool> Any(Expression<Func<T, bool>> predicate)
		{
			return await _dbContext.Set<T>().AnyAsync(predicate);
		}

		public async Task<int> Count(Expression<Func<T, bool>>? predicate = null)
		{
			IQueryable<T> query = _dbContext.Set<T>();
			if (predicate is not null)
				query = query.Where(predicate);
			return await query.CountAsync();
		}

		public async Task<T?> FirstOrDefault(Expression<Func<T, bool>> predicate)
		{
			return await _dbContext.Set<T>().FirstOrDefaultAsync(predicate);
		}

		public virtual async Task<T?> GetById<K>(K id)
		{
			return await _dbContext.Set<T>().FindAsync(id);
		}

		public async Task<IEnumerable<T>> GetAll(params Expression<Func<T, bool>>?[] predicates)
		{
			IQueryable<T> query = _dbContext.Set<T>();

			foreach (var predicate in predicates.Where(p => p is not null).Select(p => p!))
				query = query.Where(predicate);

			return await query
				.ToListAsync();
		}

		public async Task<IEnumerable<T>> GetLastN<TKey>(int count, Expression<Func<T, TKey>> orderingClause, params Expression<Func<T, bool>>?[] predicates)
		{
			IQueryable<T> query = _dbContext.Set<T>();

			foreach (var predicate in predicates.Where(p => p is not null).Select(p => p!))
				query = query.Where(predicate);
			return await query
				.OrderByDescending(orderingClause)
				.Take(count)
				.OrderBy(orderingClause)
				.ToListAsync();
		}

		public async Task Reload(T entity)
		{
			await _dbContext.Entry(entity).ReloadAsync();
		}

		public Task Remove(T entity)
		{
			_dbContext.Set<T>().Remove(entity);
			return Task.CompletedTask;
		}
	}
}
