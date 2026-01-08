import { ITicket } from "./ITicket";
import Ticket from "./Ticket"

export default function OrderDetails({tickets}: {tickets: ITicket[]}) {
	return (
		<div className="border-t border-white/5 bg-[#141011] p-6 lg:p-8">
				<div className="mb-4 text-xs font-bold uppercase tracking-widest text-white/30">Order Details</div>
				<div className="flex flex-col gap-4">
					{
						tickets.map(t => <Ticket key={t.id} ticket={t}/> )
					}
				</div>
				{/* <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
					<button className="text-sm text-primary hover:text-white transition-colors font-medium flex items-center gap-1">
						Download Invoice
						<span className="material-symbols-outlined text-lg">receipt_long</span>
					</button>
				</div> */}
			</div>
	);
}