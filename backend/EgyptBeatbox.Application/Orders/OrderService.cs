using EgyptBeatbox.Application.Errors;
using EgyptBeatbox.Application.Mappings;
using EgyptBeatbox.Application.Repositories;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Users;
using EgyptBeatbox.Domain.Shared;
using FluentResults;

namespace EgyptBeatbox.Application.Orders
{
	public class OrderService(IUnitOfWork unitOfWork) : IOrderService
	{
		private readonly IUnitOfWork _unitOfWork = unitOfWork;

		public async Task<Result<ShortId>> CreateOrder(Guid customerId, PhoneNumber paidBy)
		{
			User? user = await _unitOfWork.Users.GetById(customerId);
			if (user is null)
				return Result.Fail(new NotFoundError<User>("User not found"));

			Order order = new(user.Cart, paidBy);
			await _unitOfWork.Orders.Add(order);
			user.ClearCart();
			await _unitOfWork.SaveChanges();
			return Result.Ok(order.Id);
		}

		public async Task<Result> DeleteOrder(ShortId orderId)
		{
			Order? order = await _unitOfWork.Orders.GetById(orderId);
			if (order is null)
				return Result.Fail(new NotFoundError<Order>("Order not found"));

			await _unitOfWork.Orders.Remove(order);
			await _unitOfWork.SaveChanges();
			return Result.Ok();
		}

		public async Task<Result<IEnumerable<ViewOrderDTO>>> GetAllOrders()
		{
			IEnumerable<Order> orders = await _unitOfWork.Orders.GetAll();
			var orderDtos = orders.OrderByDescending(o => o.CreatedAt).Select(o => o.ToViewOrderDTO());
			return Result.Ok(orderDtos);
		}

		public async Task<Result<IEnumerable<ViewOrderDTO>>> GetOrders(Guid customerId)
		{
			User? user = await _unitOfWork.Users.GetById(customerId);
			if (user is null)
				return Result.Fail(new NotFoundError<User>("User not found"));

			IEnumerable<Order> orders = user.Orders;
			var orderDtos = orders.OrderByDescending(o => o.CreatedAt).Select(o => o.ToViewOrderDTO());
			return Result.Ok(orderDtos);
		}

		public async Task<Result> ConfirmOrder(ShortId orderId)
		{
			Order? order = await _unitOfWork.Orders.GetById(orderId);
			if (order is null)
				return Result.Fail(new NotFoundError<Order>("Order not found"));

			order.ConfirmOrder();
			await _unitOfWork.SaveChanges();
			return Result.Ok();
		}
	}
}
