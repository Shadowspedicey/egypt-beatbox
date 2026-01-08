using EgyptBeatbox.Application.Admins;
using EgyptBeatbox.Application.Carts;
using EgyptBeatbox.Application.Orders;
using EgyptBeatbox.Application.Tickets;
using EgyptBeatbox.Application.Users;
using Microsoft.Extensions.DependencyInjection;

namespace EgyptBeatbox.Application
{
	public static class DependencyInjection
	{
		public static IServiceCollection AddApplication(this IServiceCollection services)
		{
			services.AddScoped<IAdminService, AdminService>();
			services.AddScoped<ICartService, CartService>();
			services.AddScoped<IOrderService, OrderService>();
			services.AddScoped<ITicketService, TicketService>();
			services.AddScoped<IScannerService, ScannerService>();
			services.AddScoped<IUserService, UserService>();

			return services;
		}
	}
}
