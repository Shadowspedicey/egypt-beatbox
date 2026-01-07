import ITicket from "./ITicket";

export default function Ticket({ticket}: {ticket: ITicket}) {
	return (
		<div className="flex items-center justify-between bg-surface-dark p-4 rounded-lg border border-white/5">
			<div className="flex items-center gap-3">
				<div className="flex justify-center items-center bg-primary/20 p-2 rounded-lg overflow-hidden text-primary">
					<span className="material-symbols-outlined">confirmation_number</span>
				</div>
				<div>
					<p className="text-white text-sm font-medium">{ticket.name}</p>
					<p className="text-xs text-gray-400">TKT-{ticket.orderId}-{ticket.id}</p>
				</div>
			</div>
			<span className="text-white font-medium text-sm">EGP {ticket.price}</span>
		</div>
	);
}