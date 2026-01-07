import { OrderStatus } from "@/lib/OrderStatus";
import OrderTransaction from "./_components/OrderTransaction";
import IOrder from "./_components/IOrder";
import Link from "next/link";
import paths from "./_components/paths";
import { isAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Page() {
	const totalTicketsSold = 1450;
	const totalRevenue = 24500;
	const pendingApprovals = 125;

	const orders: IOrder[] = [
		{id:1234, customerName:"Ahmed Khaled", date:new Date(), orderName:"Vip Ticket", status: OrderStatus.Used}
	]

	if (!(await isAdmin()))
		redirect("/");
	return (
		<div className="relative flex min-h-screen w-full flex-row overflow-hidden">
			<main className="flex-1 flex flex-col min-h-screen bg-background-dark lg:ml-72">
				<div className="flex-1 px-4 py-6 md:p-8 lg:p-10 max-w-7xl mx-auto w-full flex flex-col gap-8">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
						<div className="flex flex-col gap-1">
							<h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Overview</h2>
							<p className="text-gray-400 font-medium">Real-time metrics for Egyptian Beatbox Championship 2026</p>
						</div>
						<div className="flex gap-3">
							<button className="flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-bold transition-colors">
								<span className="material-symbols-outlined text-[20px]">file_download</span>
								<span>Export</span>
							</button>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
						<div className=" bg-card-dark p-6 rounded-xl border border-white/5 flex flex-col justify-between min-h-35 lg:h-40 group hover:border-primary/50 shadow-lg shadow-black/20 transition-all">
							<div className="flex justify-between items-start">
								<div className="flex items-center justify-center bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
									<span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">confirmation_number</span>
								</div>
							</div>
							<div>
								<p className="text-gray-400 text-sm font-medium mb-1">Total Tickets Sold</p>
								<h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{totalTicketsSold.toLocaleString("eg-EG")}</h3>
							</div>
						</div>
						<div className="bg-card-dark p-6 rounded-xl border border-white/5 flex flex-col justify-between min-h-35 lg:h-40 group hover:border-primary/50 shadow-lg shadow-black/20 transition-all">
							<div className="flex justify-between items-start">
								<div className="flex items-center justify-center bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
									<span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">attach_money</span>
								</div>
							</div>
							<div>
								<p className="text-gray-400 text-sm font-medium mb-1">Total Revenue</p>
								<h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{totalRevenue.toLocaleString("eg-EG")} EGP</h3>
							</div>
						</div>
						<div className="bg-card-dark p-6 rounded-xl border border-white/5 flex flex-col justify-between min-h-35 lg:h-40 group hover:border-primary/50 shadow-lg shadow-black/20 transition-all">
							<div className="flex justify-between items-start">
								<div className="flex items-center justify-center bg-white/5 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
									<span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors">pending_actions</span>
								</div>
							</div>
							<div>
								<p className="text-gray-400 text-sm font-medium mb-1">Pending Approvals</p>
								<h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{pendingApprovals.toLocaleString("eg-EG")}</h3>
							</div>
						</div>
					</div>
					{/* <SalesChart /> */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center justify-between px-2">
							<h3 className="text-xl font-bold text-white">Recent Transactions</h3>
							<Link href={paths.orders} className="text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors">View All</Link>
						</div>
						<div className="bg-card-dark rounded-lg border border-white/5 overflow-hidden shadow-lg shadow-black/20">
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead className="bg-white/5 border-b border-white/5">
										<tr>
											<th className="hidden sm:table-cell px-4 md:px-6 py-3 md:py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Order ID</th>
											<th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Customer</th>
											<th className="hidden md:table-cell px-4 md:px-6 py-3 md:py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Order</th>
											<th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
											<th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-white/5">
										{
											orders.map(o => <OrderTransaction key={o.id} order={o} />)
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}