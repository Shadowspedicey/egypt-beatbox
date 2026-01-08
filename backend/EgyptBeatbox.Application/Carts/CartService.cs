
using EgyptBeatbox.Application.Errors;
using EgyptBeatbox.Application.Mappings;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Domain.Entities.Carts;
using EgyptBeatbox.Domain.Entities.Tickets;
using EgyptBeatbox.Domain.Entities.Users;
using FluentResults;

namespace EgyptBeatbox.Application.Carts
{
	public class CartService(IUnitOfWork unitOfWork) : ICartService
	{
		private readonly IUnitOfWork _unitOfWork = unitOfWork;

		public async Task<Result<ViewCartDTO>> AddToCart(Guid customerId, Guid productId)
		{
			User? user = await _unitOfWork.Users.GetById(customerId);
			if (user is null)
				return Result.Fail(new NotFoundError<User>("User not found."));

			Ticket? ticket = await _unitOfWork.Tickets.GetById(productId);
			if (ticket is null)
				return Result.Fail(new NotFoundError<Ticket>("Ticket not found."));

			Cart cart = user.Cart;
			cart.AddItem(new(cart, ticket, 1));
			await _unitOfWork.SaveChanges();
			return Result.Ok(cart.ToViewCartDTO());
		}

		public async Task<Result<ViewCartDTO>> GetCart(Guid customerId)
		{
			User? user = await _unitOfWork.Users.GetById(customerId);
			if (user is null)
				return Result.Fail(new NotFoundError<User>("User not found."));

			Cart cart = user.Cart;
			return Result.Ok(cart.ToViewCartDTO());
		}

		public async Task<Result<ViewCartDTO>> RemoveFromCart(Guid customerId, Guid productId)
		{
			User? user = await _unitOfWork.Users.GetById(customerId);
			if (user is null)
				return Result.Fail(new NotFoundError<User>("User not found."));

			Ticket? ticket = await _unitOfWork.Tickets.GetById(productId);
			if (ticket is null)
				return Result.Fail(new NotFoundError<Ticket>("Ticket not found."));

			Cart cart = user.Cart;
			cart.RemoveItem(new(cart, ticket, 1));
			await _unitOfWork.SaveChanges();
			return Result.Ok(cart.ToViewCartDTO());
		}
	}
}
