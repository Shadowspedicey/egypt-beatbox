import { format } from "date-fns";
import IOrder from "./IOrder";
import OrderDetails from "./OrderDetails";
import { OrderStatus } from "@/lib/OrderStatus";

export default function Order({order}: {order: IOrder}) {
	return (
		<details className={`group w-full bg-[#1C1719] border border-white/5 rounded-3xl overflow-hidden shadow-2xl ${order.status == OrderStatus.Paid && "open:ring-1 open:ring-primary/50"}`}>
			<summary className="w-full cursor-pointer list-none">
				<div className="flex flex-col lg:flex-row lg:items-center justify-between p-6 gap-6 bg-white/2 hover:bg-white/4 transition-colors">
					<div className="flex items-start lg:items-center gap-6">
						<div className={`flex flex-col items-center justify-center w-16 h-16 rounded-2xl ${order.status == OrderStatus.Paid ? "bg-primary/10 border border-primary/20" : "bg-white/5 border border-white/10"} shrink-0`}>
							<span className={`${order.status == OrderStatus.Paid ? "text-primary" : "text-white/60"} font-bold text-lg leading-none uppercase`}>{format(order.date, "MMM")}</span>
							<span className={`${order.status == OrderStatus.Paid ? "text-white" : "text-white/80"} font-bold text-2xl leading-none`}>{format(order.date, "dd")}</span>
						</div>
						<div className="flex flex-col gap-1">
							<h3 className="text-white font-bold text-lg md:text-xl">Early Bird - EBC 2026</h3>
							<p className="text-white/40 text-sm">Order #ORD-{order.id} • {order.items.length} Items</p>
						</div>
					</div>
					<div className="flex justify-between items-center gap-6 lg:gap-12 w-full lg:w-auto">
						<div className="flex flex-col">
							<span className="text-white/40 text-xs text-center uppercase tracking-widest mb-1">Total</span>
							<span className="text-white font-bold text-xl">{order.totalPrice} EGP</span>
						</div>
						<div className="flex flex-col items-start sm:items-end lg:items-center">
							<span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${order.status == OrderStatus.Paid ? "border-primary/20 bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/80"} tracking-wide uppercase`}>
								<span className={`w-1.5 h-1.5 rounded-full ${order.status == OrderStatus.Paid ? "bg-primary" : "bg-white/50"} animate-pulse`}></span>
								{order.status}
							</span>
						</div>
						<div>
							<div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center ${order.status == OrderStatus.Paid ? "text-primary" : "text-white"} group-open:bg-primary group-open:text-white transition-all duration-300`}>
								<span className="material-symbols-outlined relative left-[0.2px] top-px text-2xl group-open:rotate-180 transition-transform duration-300">expand_more</span>
							</div>
						</div>
					</div>
				</div>
			</summary>
			<OrderDetails tickets={order.items}/>
		</details>
	);
}