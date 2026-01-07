import { format } from "date-fns";
import IOrder from "./IOrder";
import { OrderStatus } from "@/lib/OrderStatus";
import Ticket from "./Ticket";
import Link from "next/link";
import paths from "../../_components/paths";

export default function Order({order}: {order: IOrder}) {
	const paidCss = "bg-green-900/30 text-green-400 border border-green-500/20";
	const pendingCss = "bg-yellow-900/30 text-yellow-400 border border-yellow-500/20";
	const usedCss = "bg-gray-900/30 text-gray-400 border border-gray-500/20";
	
	return (
		<details className="group bg-surface-dark rounded-lg border border-white/5 overflow-hidden open">
			<summary className="list-none cursor-pointer hover:bg-[#383133] transition-colors duration-200">
				<div className="p-4 md:px-6 md:py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative">
					<div className="col-span-1 flex items-center gap-2">
						<span className="md:hidden text-gray-400 text-sm">ID:</span>
						<span className="text-white font-mono font-medium">#ORD-{order.id}</span>
					</div>
					<div className="col-span-3 flex items-center gap-3">
						<div className="flex flex-col">
							<span className="text-white font-medium">{order.customerName}</span>
							<span className="text-xs text-gray-400">{order.customerPhoneNumber}</span>
						</div>
					</div>
					<div className="col-span-2 text-gray-400 text-sm">
						<span className="md:hidden inline-block w-20">Date:</span>
						{format(order.date, "MMM dd, y")}
					</div>
					<div className="col-span-2 text-white font-medium">
						<span className="md:hidden inline-block w-20 text-gray-400 font-normal">Total:</span>
						EGP {order.totalPrice}
					</div>
					<div className="col-span-2">
						<span className="md:hidden inline-block w-20 text-gray-400 text-sm mr-1">Status:</span>
						<span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${order.status == OrderStatus.Paid && paidCss} ${order.status == OrderStatus.Pending && pendingCss} ${order.status == OrderStatus.Used && usedCss}`}>
							{order.status}
						</span>
					</div>
					<div className="col-span-2 hidden md:flex justify-end items-center gap-3">
						<Link href={`${paths.orders}/${order.id}`} className="text-primary hover:text-white transition-colors text-sm font-semibold">View Details</Link>
						<div className="text-gray-400 group-open:rotate-180 transition-transform duration-300">
							<span className="material-symbols-outlined">expand_more</span>
						</div>
					</div>
				</div>
			</summary>
			<div className="border-t border-white/5 bg-black/20 p-4 md:p-6 animate-in slide-in-from-top-2 duration-200">
				<div className="flex flex-col gap-6">
					<div className="flex-1 space-y-3">
						<h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Tickets in this order</h4>
						{
							order.items.map(t => <Ticket key={t.id} ticket={t} />)
						}
					</div>
					<div className="w-full md:w-64 flex flex-col gap-3 pt-2">
						<Link href={`${paths.orders}/${order.id}`} className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-4 rounded-lg transition-colors">
							<span>View Order Details</span>
							<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
						</Link>
					</div>
				</div>
			</div>
		</details>
	);
}