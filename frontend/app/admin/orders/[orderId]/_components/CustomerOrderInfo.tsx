import IOrder from "./IOrder";
import { format } from "date-fns";

export default function CustomerOrderInfo({order}: {order: IOrder}) {
	return (
		<div className="bg-surface-dark rounded-lg border border-white/5 overflow-hidden">
			<div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/2">
				<h3 className="text-lg font-bold text-white flex items-center gap-2">
					<span className="material-symbols-outlined text-primary">person</span>
					Customer &amp; Order Info
				</h3>
			</div>
			<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6">
				<div className="flex flex-col gap-1.5">
					<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Customer Name</span>
					<p className="text-white text-base font-medium">{order.customerName}</p>
				</div>
				<div className="flex flex-col gap-1.5">
					<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Email Address</span>
					<p className="text-white text-base font-medium">{order.customerEmail}</p>
				</div>
				<div className="flex flex-col gap-1.5">
					<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Phone Number</span>
					<p className="text-white text-base font-medium">{order.customerPhoneNumber}</p>
				</div>
				<div className="flex flex-col gap-1.5">
					<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Purchase Date</span>
					<p className="text-white text-base font-medium">{format(order.date, "MMM dd, y • p")}</p>
				</div>
				<div className="flex flex-col gap-1.5">
					<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Order ID</span>
					<p className="text-white text-base font-medium font-mono">#ORD-{order.id}</p>
				</div>
				{/* <div className="flex flex-col gap-1.5">
					<span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Payment Method</span>
					<div className="flex items-center gap-2">
						<span className="material-symbols-outlined text-gray-400 text-[20px]">credit_card</span>
						<p className="text-white text-base font-medium">Mastercard ending in 4242</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}