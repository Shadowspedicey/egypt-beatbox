import { eventDateInEgypt } from "@/lib/countdown";
import { format } from "date-fns";
import venue from "@/app/(with-navbar)/venue/_components/venue.json";
import Order from "./_components/Order";
import IOrder from "./_components/IOrder";
import { isSignedIn } from "@/lib/auth";
import { redirect } from "next/navigation";
import { paths } from "@/app/_components/paths";
import { TicketStatus } from "@/lib/TicketStatus";

export default async function Page() {
	const isLoggedIn = await isSignedIn();

	const nActiveTickets = 2;
	const nTotalTickets = 5;
	const orders: IOrder[] = [
		{
			id: 1234,
			date: new Date(),
			totalPrice: 500,
			state: TicketStatus.Pending,
			items: [
				{id:9876,name: "Standard", orderId:1234, qr:"iVBORw0KGgoAAAANSUhEUgAAAnsAAAJ7AQMAAACh+sXUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURQAAAP///6XZn90AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAN5SURBVHja7dtLktowEIDhpliw5Ag6yhxtOBpH0RFYsqDSCbLbaskuajI2icb6exOC8Vd61XTpJQvxqb9ETjrFXSQ8/32InFWvz58c04OrfC32DQZKCLhHkIENuNtOOaqPWIAXq0kG/0T6arCLd+9DlQHXgUKVaUN6mSpTwreW8CaTbaApky05XEZNH1McfAkbBgMlpIQMbEpICRnYC6BU88jH2hLuE5T+SthhlRnYDGyGza6HjdpDA2OhuCXTL5bw+6A0D4b+QKGEjEOqDPije9lFnUZdTGk0xd+uwX4TDIDtgQLYQacwbABbGTazcKluOesVCbCMsDUogO2Bob8SdghKf1WmDXsAqzyodUadpnDPfb1pUvjiHe0PjM2DtOF6UOnl1SBVbhDsspdTnN3nPGN080gHfuQznDp+G6WO7cBACQHpFNoQcPghbbhhG9qcMIzXFewIi+aV0IXNPBcHK8S2oDYPxv5KCMjA3mUJATsCh7BvljcKXRp1YFbyaZZNQQEEbABkYAMyDvfShnVKDOP7d/H39WKRO9MPzK4LAbgWpFNoQzplH71MCaXFYZPCHfCMRe685HRroCk1OH3cFlRKSAmpMp3yT6rcIag9VtkeWoRCsUOhWuwOWlzzOynGyeOmoADSKQ1UGRAQcFegi5iVKGWUNwVvshSAgICAgIBbgo/5aZaDvXXxNxdmtjvYMqVHQEBAQMDxjzIlbBJ0UT18xrhdN/7P3VyQVyucgICAgICALYJ2NFPE2aXiznq6DcB6VVTGNAoICAgICNgsWD+0OGkV9uAjf3WVMgsvbhQCAgICAgK2Ber8ZIrO9wzLfOs+2uQREBAQELBnUH4AaOFWQt2SaXFzQeslUxfVZY3twNgfqM2DdEoPVaYNG6wyfxy2qLIuRblReMqNc64/5iM1snQ8Zj0Ymwe1P5BOabDKtCHgLsE3jMOFmOfYIaarEAYWh0J1nC9vDApgB2DoDxRAQMD/BZb3+uLi5LG8CmHXJ1I8ZudoAAEBAQEBWwbteMwxg0N8VudDXyyZ5h1FQEBAQEDAN4Jqqc4ns2ecx2MvR7NTpEnh4VXWAwQEBAQEbByUvNipz9xZKrfiEoPm1AsICAgICNg06CIWE0H30XbwLNwKpxQTTkBAQEBAwHbBWZii1c2F4dWPrNQxLpkCAgICAgK2CGr8Dba6XdLhZAoyAAAAAElFTkSuQmCC"}
			]
		}
	];

	if (!isLoggedIn)
		redirect(paths.login);
	return (
		<div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-10">
			<div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between mb-12">
				<div className="flex flex-col gap-4">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
						<span className="material-symbols-outlined text-lg text-primary fill-1">verified</span>
						<span className="text-primary text-xs font-bold uppercase tracking-wider">Verified Member</span>
					</div>
					<h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">My Tickets</h1>
					<p className="text-white/50 text-base md:text-lg font-normal leading-relaxed max-w-xl">Manage your access passes and view your purchase history for the upcoming championship.</p>
				</div>
				<div className="flex flex-wrap gap-4">
					<div className="flex flex-col justify-between rounded-2xl p-5 bg-[#1C1719] border border-primary/30 shadow-[0_0_30px_-10px_rgba(41,121,255,0.2)] min-w-40 flex-1 sm:flex-none">
						<div className="flex items-center gap-2 text-primary mb-2">
							<span className="material-symbols-outlined">confirmation_number</span>
							<span className="text-sm font-bold uppercase tracking-wide">Active</span>
						</div>
						<p className="text-white text-4xl font-bold">{nActiveTickets}</p>
					</div>
					<div className="flex flex-col justify-between rounded-2xl p-5 bg-[#1C1719] border border-white/5 min-w-40 flex-1 sm:flex-none hover:border-white/10 transition-colors">
						<div className="flex items-center gap-2 text-white/50 mb-2">
							<span className="material-symbols-outlined">history</span>
							<span className="text-sm font-bold uppercase tracking-wide">History</span>
						</div>
						<p className="text-white text-4xl font-bold">{nTotalTickets}</p>
					</div>
				</div>
			</div>
			<div className="mb-12">
				<h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
					<span className="w-1.5 h-8 bg-primary rounded-full"></span>
					Upcoming Event
				</h2>
				<div className="group relative flex flex-col lg:flex-row bg-[#1C1719] rounded-[2rem] overflow-hidden border border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300">
					<div className="lg:w-5/12 min-h-75 lg:min-h-100 relative overflow-hidden">
						<div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-[#1C1719] via-transparent to-transparent z-10 opacity-90"></div>
						<div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105" data-alt="Dark moody stage with red lighting and beatboxer silhouette" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMLdSbw7e0LiXKcKEmrwXjiuMNbCgm0nN1YJjLyxTNvk_1Q7ygxPWigJNRk1VKRboCaJzImRIf9IR0BU9jgkllX5K1Enij2AlGtpqu1Xuvz2mH-ye-hpE9iRxHwHZkPnOlb_en8R-SzbTAIvwNsssyCmRYf9NrJYFWEOI78WUQr28iG7hCtHu00SStfwkQSf-jdL5t8Hnn6AUAfAhEFQ-smFR8-JHwOGP8KHEkLW3M-rYidFYl_ZPuCFuY0e1N_Uw3iUeizcje6UMI")' }}>
						</div>
					</div>
					<div className="flex-1 p-6 md:p-10 flex flex-col justify-between gap-8">
						<div className="flex flex-col justify-between h-full">
							<div className="flex justify-between items-start mb-4">
								<h3 className="text-white text-3xl md:text-4xl font-black leading-tight max-w-2xl">Egyptian Beatbox Championship 2026</h3>
								<div className="hidden sm:flex bg-white p-2.5 rounded-xl shadow-lg shrink-0">
									<span className="material-symbols-outlined text-black text-4xl">qr_code_2</span>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row flex-wrap gap-y-3 gap-x-8 text-white/70">
								<div className="flex items-center gap-2.5">
									<div className="p-1.5 rounded-full bg-white/5 text-primary">
										<span className="material-symbols-outlined text-lg">calendar_month</span>
									</div>
									<span className="font-medium">{format(eventDateInEgypt, "MMM d, y • p")}</span>
								</div>
								<div className="flex items-center gap-2.5">
									<div className="p-1.5 rounded-full bg-white/5 text-primary">
										<span className="material-symbols-outlined text-lg">location_on</span>
									</div>
									<span className="font-medium" data-location="Cairo International Stadium">{venue.name}, {venue.area}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-6 mb-16">
				<div className="flex items-center justify-between">
					<h2 className="text-white text-2xl font-bold flex items-center gap-3">
						<span className="w-1.5 h-8 bg-primary rounded-full"></span>
						Transaction History
					</h2>
				</div>
				<div className="w-full flex flex-col gap-4">
					{
						orders.map(o => <Order key={o.id} order={o} />)
					}
				</div>
			</div>
		</div>
	);
}