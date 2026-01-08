using EgyptBeatbox.Api.Controllers.Cart;
using EgyptBeatbox.Application.Carts;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static EgyptBeatbox.Api.Helpers;

namespace EgyptBeatbox.Api.Controllers.Carts
{
	/// <summary>
	/// Cart endpoints (get cart, add item, remove item).
	/// Uses <see cref="ICartService"/> for core operations.
	/// All error responses use RFC 7807 Problem Details via Helpers extensions.
	/// </summary>
	[Authorize]
	[ApiController]
	[Route("api/[controller]")]
	public class CartsController : ControllerBase
	{
		private readonly ICartService _cartService;
		private readonly ILogger<CartsController> _logger;

		public CartsController(ICartService cartService, ILogger<CartsController> logger)
		{
			_cartService = cartService ?? throw new ArgumentNullException(nameof(cartService));
			_logger = logger ?? throw new ArgumentNullException(nameof(logger));
		}

		/// <summary>
		/// Get the cart for a customer.
		/// </summary>
		/// <returns>ViewCartDTO with items and total price</returns>
		/// <response code="200">Cart retrieved</response>
		/// <response code="400">Bad request / invalid id</response>
		/// <response code="404">Customer not found</response>
		[HttpGet]
		[ProducesResponseType(typeof(ViewCartDTO), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> GetCart()
		{
			Guid customerId = User.GetUserId();
			if (customerId == Guid.Empty)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid customer id", "customerId can't be empty."));

			var result = await _cartService.GetCart(customerId);
			return result.ToActionResult();
		}

		/// <summary>
		/// Add an item (ticket) to a customer's cart.
		/// </summary>
		/// <returns>Updated ViewCartDTO</returns>
		/// <response code="200">Item added and cart returned</response>
		/// <response code="400">Bad request / invalid ids</response>
		/// <response code="404">Customer or product not found</response>
		[HttpPost]
		[ProducesResponseType(typeof(ViewCartDTO), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> AddToCart(CartItemDTO productDto)
		{
			Guid customerId = User.GetUserId();

			if (customerId == Guid.Empty)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid customer id", "customerId can't be empty."));
			if (productDto.ProductId == Guid.Empty)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid product id", "productId can't be empty."));

			var result = await _cartService.AddToCart(customerId, productDto.ProductId);
			return result.ToActionResult();
		}

		/// <summary>
		/// Remove one quantity of the specified product from the customer's cart.
		/// </summary>
		/// <returns>Updated ViewCartDTO</returns>
		/// <response code="200">Item removed and cart returned</response>
		/// <response code="400">Bad request / invalid ids</response>
		/// <response code="404">Customer or product not found</response>
		[HttpDelete("")]
		[ProducesResponseType(typeof(ViewCartDTO), 200)]
		[ProducesResponseType(typeof(ProblemDetails), 400)]
		[ProducesResponseType(typeof(ProblemDetails), 404)]
		public async Task<IActionResult> RemoveFromCart(CartItemDTO productDto)
		{
			Guid customerId = User.GetUserId();

			if (customerId == Guid.Empty)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid customer id", "customerId can't be empty."));
			if (productDto.ProductId == Guid.Empty)
				return BadRequest(CreateProblem(StatusCodes.Status400BadRequest, "Invalid product id", "productId can't be empty."));

			var result = await _cartService.RemoveFromCart(customerId, productDto.ProductId);
			return result.ToActionResult();
		}
	}
}