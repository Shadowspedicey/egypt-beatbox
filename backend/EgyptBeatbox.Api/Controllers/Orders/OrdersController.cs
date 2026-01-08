using EgyptBeatbox.Application.Orders;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Shared;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static EgyptBeatbox.Api.Helpers;

namespace EgyptBeatbox.Api.Controllers.Orders
{
	/// <summary>
	/// Order endpoints.
	/// - Admins can access all orders, delete and confirm orders.
	/// - Customers can create orders and list their own orders.
	/// Error responses use RFC 7807 ProblemDetails via helpers.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	[Authorize]
	public class OrdersController : ControllerBase
	{
		private readonly IOrderService _orderService;
		private readonly ILogger<OrdersController> _logger;

		public OrdersController(IOrderService orderService, ILogger<OrdersController> logger)
		{
			_orderService = orderService ?? throw new ArgumentNullException(nameof(orderService));
			_logger = logger ?? throw new ArgumentNullException(nameof(logger));
		}

		/// <summary>
		/// Create an order for the current user (customer).
		/// </summary>
		/// <returns>Short numeric order id</returns>
		/// <response code="200">Order created (returns short id)</response>
		/// <response code="400">Validation error</response>
		[HttpPost]
		[ProducesResponseType(typeof(ShortId), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		public async Task<IActionResult> CreateOrder()
		{
			// customer id from claims
			Guid customerId;
			try
			{
				customerId = User.GetUserId();
			}
			catch (Exception)
			{
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid user", "Unable to determine user id from claims."));
			}

			var result = await _orderService.CreateOrder(customerId);
			return result.ToActionResult();
		}

		/// <summary>
		/// Get orders.
		/// - If caller is Admin: use the optional ?customerId= GUID query to fetch orders for a specific customer.
		/// - If caller is Customer: customerId query is ignored and the id from claims is used.
		/// </summary>
		/// <param name="customerId">When called by admin, optional customer id to query for (GUID)</param>
		/// <returns>Orders (admin gets full view, customer gets restricted DTO)</returns>
		/// <response code="200">Orders returned</response>
		/// <response code="400">Bad request</response>
		/// <response code="404">User not found</response>
		[HttpGet]
		[ProducesResponseType(typeof(IEnumerable<ViewOrderDTO>), 200)]
		[ProducesResponseType(typeof(IEnumerable<CustomerOrderDTO>), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> GetOrders([FromQuery] Guid? customerId = null)
		{
			bool isAdmin = User.IsInRole("Admin");

			Guid targetCustomerId;
			if (isAdmin)
			{
				if (customerId is null || customerId == Guid.Empty)
					targetCustomerId = User.GetUserId();
				else
					targetCustomerId = customerId.Value;
			}
			else
			{
				try
				{
					targetCustomerId = User.GetUserId();
				}
				catch (Exception)
				{
					return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid user", "Unable to determine user id from claims."));
				}
			}

			var result = await _orderService.GetOrders(targetCustomerId);
			if (result.IsFailed)
				return result.ToActionResult();

			// Admin receives full DTOs
			if (isAdmin)
				return Ok(result.Value);

			// Customer receives restricted DTO shape
			var customerDtos = result.Value.Select(MapToCustomerDto);
			return Ok(customerDtos);
		}

		/// <summary>
		/// Get all orders. Admin only.
		/// </summary>
		/// <returns>All orders</returns>
		/// <response code="200">All orders returned</response>
		/// <response code="403">Forbidden</response>
		[HttpGet("all")]
		[Authorize(Roles = "Admin")]
		[ProducesResponseType(typeof(IEnumerable<ViewOrderDTO>), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 403)]
		public async Task<IActionResult> GetAllOrders()
		{
			var result = await _orderService.GetAllOrders();
			return result.ToActionResult();
		}

		/// <summary>
		/// Confirm an order (mark as paid). Admin only.
		/// </summary>
		/// <param name="orderId">Short 5-digit order id</param>
		/// <returns>No content on success</returns>
		/// <response code="200">Order confirmed</response>
		/// <response code="400">Invalid short id</response>
		/// <response code="404">Order not found</response>
		[HttpPost("{orderId}/confirm")]
		[Authorize(Roles = "Admin")]
		[ProducesResponseType(200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> ConfirmOrder([FromRoute] string orderId)
		{
			if (string.IsNullOrWhiteSpace(orderId))
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid orderId", "orderId is required."));

			ShortId id;
			try
			{
				id = new ShortId(orderId);
			}
			catch (Exception ex)
			{
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid orderId format", ex.Message));
			}

			var result = await _orderService.ConfirmOrder(id);
			return result.ToActionResult();
		}

		/// <summary>
		/// Delete an order. Admin only.
		/// </summary>
		/// <param name="orderId">Short 5-digit order id</param>
		/// <returns>No content on success</returns>
		/// <response code="200">Order deleted</response>
		/// <response code="400">Invalid short id</response>
		/// <response code="404">Order not found</response>
		[HttpDelete("{orderId}")]
		[Authorize(Roles = "Admin")]
		[ProducesResponseType(200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> DeleteOrder([FromRoute] string orderId)
		{
			if (string.IsNullOrWhiteSpace(orderId))
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid orderId", "orderId is required."));

			ShortId id;
			try
			{
				id = new ShortId(orderId);
			}
			catch (Exception ex)
			{
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid orderId format", ex.Message));
			}

			var result = await _orderService.DeleteOrder(id);
			return result.ToActionResult();
		}

		/// <summary>
		/// Gets an order. Admin only.
		/// </summary>
		/// <param name="orderId">Short 5-digit order id</param>
		/// <returns>No content on success</returns>
		/// <response code="200">Order retreived</response>
		/// <response code="400">Invalid short id</response>
		/// <response code="404">Order not found</response>
		[HttpGet("{orderId}")]
		[Authorize(Roles = "Admin")]
		[ProducesResponseType(200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> GetOrder([FromRoute] string orderId)
		{
			if (string.IsNullOrWhiteSpace(orderId))
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid orderId", "orderId is required."));

			ShortId id;
			try
			{
				id = new ShortId(orderId);
			}
			catch (Exception ex)
			{
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid orderId format", ex.Message));
			}

			var result = await _orderService.GetOrder(id);
			return result.ToActionResult();
		}

		private static CustomerOrderDTO MapToCustomerDto(ViewOrderDTO dto)
		{
			return new CustomerOrderDTO(
				Id: dto.Id,
				Date: dto.Date,
				TotalPrice: dto.TotalPrice,
				State: dto.Status,
				Items: dto.Items.Select(i => new CustomerTicketDTO(
					Id: i.Id,
					Name: i.Name,
					Qr: i.Qr,
					OrderId: i.OrderId
				)).ToList()
			);
		}
	}
}