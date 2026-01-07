import ITicketScanResult from "./ITicketScanResult";
import { TicketStatus } from "./TicketStatus";

export default function ScanResult({ticket}: {ticket: ITicketScanResult}) {
	const validTicketCss = "bg-primary/20 text-primary shadow-[0_0_20px] shadow-primary/50!";
	const invalidTicketCss = "bg-red-900/20 text-red-900 shadow-[0_0_20px] shadow-red-900/50!";

	return (
		<>
			<div className="flex items-center gap-2 my-4">
				<span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
				<span className="text-xs font-bold tracking-widest text-primary uppercase">Scan Result</span>
			</div>
			<div className="bg-background-dark border border-primary/30 rounded-xl p-6 text-center relative overflow-hidden group">
				<div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
				<div className="relative z-10 flex flex-col items-center">
					<div className={`size-20 rounded-full flex items-center justify-center mb-4 ${ticket.status == TicketStatus.Valid && validTicketCss} ${(ticket.status == TicketStatus.Invalid || ticket.status == TicketStatus.Pending) && invalidTicketCss}`}>
						<span className="material-symbols-outlined text-6xl!">{ticket.status == TicketStatus.Valid && "check_circle"}{ticket.status == TicketStatus.Used && "warning"}{(ticket.status == TicketStatus.Invalid || ticket.status == TicketStatus.Pending) && "close"}</span>
					</div>
					<h2 className="text-3xl font-bold text-white mb-1">ACCESS {ticket.status == TicketStatus.Valid ? "GRANTED" : "DENIED"}</h2>
					<div className="text-primary font-mono text-sm tracking-wider mb-6">{ticket.id != null && `#TKT-${ticket.id}`}</div>
					<div className="w-full space-y-3 text-left">
						<div className="bg-surface-dark/50 p-3 rounded-lg border border-surface-light flex justify-between items-center">
							<span className="text-gray-400 text-sm">Name</span>
							<span className="font-semibold text-white">{ticket.customerName}</span>
						</div>
						<div className="bg-surface-dark/50 p-3 rounded-lg border border-surface-light flex justify-between items-center">
							<span className="text-gray-400 text-sm">Type</span>
							<span className="text-white text-xs font-bold py-0.5 rounded uppercase">{ticket.name}</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}