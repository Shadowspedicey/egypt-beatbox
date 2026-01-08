using EgyptBeatbox.Domain.Entities.Carts;
using EgyptBeatbox.Domain.Entities.Events;
using EgyptBeatbox.Domain.Entities.Orders;
using EgyptBeatbox.Domain.Entities.Tickets;
using EgyptBeatbox.Domain.Entities.Users;
using EgyptBeatbox.Domain.Shared;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EgyptBeatbox.Infrastructure.Data
{
	public class AppDbContext(DbContextOptions<AppDbContext> options) : IdentityDbContext<AppUser, AppRole, Guid>(options)
	{
		public DbSet<User> BaseUsers { get; set; }
		public DbSet<Order> Orders { get; set; }
		public DbSet<Ticket> Tickets { get; set; }
		public DbSet<Event> Events { get; set; }
		public DbSet<UserTicket> UserTickets { get; set; }
		public DbSet<CartItem> CartItems { get; set; }
		public DbSet<OrderItem> OrderItems { get; set; }
		public DbSet<RefreshToken> RefreshTokens { get; set; }

		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			builder.Entity<AppRole>(R =>
			{
				R.HasData(
					typeof(Role)
						.GetProperties(System.Reflection.BindingFlags.Public | System.Reflection.BindingFlags.Static)
						.Where(p => p.PropertyType == typeof(Role))
						.Select(p => (Role)p.GetValue(null)!)
						.Select((r, i) => new AppRole()
						{
							Id = Guid.Parse("00000000-0000-0000-0000-000000000000".Replace('0', (char)('0' + i + 1))),
							Name = r.Name,
							NormalizedName = r.Name!.ToUpper(),
							ConcurrencyStamp = i.ToString()
						})
				);
			});

			builder.Entity<RefreshToken>(RT =>
			{
				RT.HasKey(rt => rt.Id);
				RT.HasOne(rt => rt.User).WithOne().HasForeignKey<RefreshToken>(rt => rt.UserId).IsRequired(false).OnDelete(DeleteBehavior.Cascade);
				RT.Property(rt => rt.ExpiresAt);
				RT.Property(rt => rt.Token);

				RT.HasIndex(rt => rt.Token).IsUnique();
			});

			builder.Entity<User>(U =>
			{
				U.ToTable("Users");
				U.HasOne<AppUser>().WithOne().HasForeignKey<User>(u => u.IdentityId);
				U.OwnsOne(u => u.FullName, nameBuilder =>
				{
					nameBuilder.Property(n => n.FirstName).HasColumnName("FirstName").HasMaxLength(100).IsRequired();
					nameBuilder.Property(n => n.LastName).HasColumnName("LastName").HasMaxLength(100).IsRequired();
				});
				U.Property(u => u.PhoneNumber).HasConversion(phone => phone.Number, number => new PhoneNumber(number)).HasMaxLength(11).IsRequired();
				U.HasMany(u => u.Orders).WithOne();
				U.Ignore(u => u.Email);
				U.Ignore(u => u.Roles);
				U.Ignore(u => u.UserTickets);
			});

			builder.Entity<Cart>(C =>
			{
				C.ToTable("Carts");
				C.HasMany(c => c.Items).WithOne().IsRequired();
				C.HasOne(c => c.Customer).WithOne(c => c.Cart).HasForeignKey<Cart>();
			});

			builder.Entity<Order>(O =>
			{
				O.HasKey(o => o.Id);
				O.Property(o => o.Id).HasConversion(id => id.ToString(), str => new ShortId(str)).IsRequired();
				O.OwnsMany(o => o.Items, itemBuilder =>
				{
					itemBuilder.Property(i => i.Name).HasMaxLength(200).IsRequired();
					itemBuilder.HasOne<Ticket>().WithMany().HasForeignKey(oi => oi.TicketId);
					itemBuilder.Property(i => i.UnitPrice).HasConversion(money => money.Amount, amount => new(amount, Currency.EGP)).IsRequired();
				});
				O.HasMany(o => o.UserTickets).WithOne().IsRequired();
				O.HasOne(o => o.Customer).WithMany(u => u.Orders).IsRequired();
				O.HasMany(o => o.UserTickets).WithOne().IsRequired().OnDelete(DeleteBehavior.Cascade);
				O.Property(o => o.Status).HasConversion<string>().IsRequired().HasDefaultValue(OrderStatus.Pending);
			});

			builder.Entity<UserTicket>(UT =>
			{
				UT.HasKey(ut => ut.Id);
				UT.Property(ut => ut.Id).HasConversion(id => id.ToString(), str => new ShortId(str)).IsRequired();
				UT.HasOne(ut => ut.Ticket).WithMany().IsRequired().OnDelete(DeleteBehavior.Cascade);
				UT.Property(ut => ut.Price).HasConversion(money => money.Amount, amount => new(amount, Currency.EGP)).IsRequired();
				UT.Property(ut => ut.Value).IsRequired();
				UT.Property(ut => ut.IsUsed).IsRequired().HasDefaultValue(false);
				UT.Property(ut => ut.UsedAt).IsRequired(false);

				UT.HasIndex(ut => ut.Value).IsUnique();
			});

			builder.Entity<Ticket>(T =>
			{
				T.Property(t => t.Tag).HasConversion(t => t.ToString(), t => new Tag(t)).IsRequired();
				T.Property(t => t.Price).HasConversion(money => money.Amount, amount => new(amount, Currency.EGP)).IsRequired();
				T.OwnsMany(t => t.Perks, P =>
				{
					P.ToTable("TicketPerks");
					P.Property(p => p.Description).HasColumnName("Perk");
				});
			});

			builder.Entity<Event>(E =>
			{
				E.OwnsOne(e => e.Name, N =>
				{
					N.Property(n => n.Name).HasColumnName("Name").HasMaxLength(200).IsRequired();
					N.Property(n => n.Year).HasColumnName("Year").IsRequired();
				});
			});
		}
	}
}
