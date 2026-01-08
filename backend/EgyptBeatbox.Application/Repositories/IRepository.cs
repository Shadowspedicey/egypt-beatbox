using System.Linq.Expressions;

namespace EgyptBeatbox.Application.Repositories
{
	public interface IRepository<T>
	{
		Task Add(T entity);
		Task AddRange(IEnumerable<T> entities);
		Task<T?> GetById<K>(K id);
		Task<IEnumerable<T>> GetAll(params Expression<Func<T, bool>>?[] predicates);
		Task<IEnumerable<T>> GetLastN<TKey>(int count, Expression<Func<T, TKey>> orderingClause, params Expression<Func<T, bool>>?[] predicates);
		Task<T?> FirstOrDefault(Expression<Func<T, bool>> predicate);
		Task Reload(T entity);
		Task<int> Count(Expression<Func<T, bool>>? predicate = null);
		Task<bool> Any(Expression<Func<T, bool>> predicate);
		Task<bool> All(Expression<Func<T, bool>> predicate);
		Task Remove(T entity);
	}
}
