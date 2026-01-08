using FluentResults;

namespace EgyptBeatbox.Application.Carts
{
	public interface ICartService
	{
		public Task<Result<ViewCartDTO>> GetCart(Guid customerId);
		public Task<Result<ViewCartDTO>> AddToCart(Guid customerId, Guid productId);
		public Task<Result<ViewCartDTO>> RemoveFromCart(Guid customerId, Guid productId);
	}
}
