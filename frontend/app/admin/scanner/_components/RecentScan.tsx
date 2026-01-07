import { format } from "date-fns";
import IRecentScan from "./IRecentScan";
import { TicketStatus } from "./TicketStatus";

export default function RecentScan({scan}: {scan: IRecentScan}) {
	const validTicketCss = "text-green-500 border border-green-500/20 bg-green-500/10";
	const invalidTicketCss = "text-red-500 border border-red-500/20 bg-red-500/10";
	const usedTicketCss = "text-yellow-500 border border-yellow-500/20 bg-yellow-500/10";

	return (
		<div className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface-light/50 transition-colors border border-transparent hover:border-surface-light group">
			<div className={`size-10 rounded-full flex items-center justify-center shrink-0 ${scan.status == TicketStatus.Valid && validTicketCss} ${(scan.status == TicketStatus.Invalid || scan.status == TicketStatus.Pending) && invalidTicketCss} ${scan.status == TicketStatus.Used && usedTicketCss}`}>
				<span className="material-symbols-outlined text-xl">
					{scan.status == TicketStatus.Valid && "check"}
					{(scan.status == TicketStatus.Invalid || scan.status == TicketStatus.Pending) && "close"}
					{scan.status == TicketStatus.Used && "warning"}
				</span>
			</div>
			<div className="flex-1 min-w-0">
				<div className="flex justify-between items-center mb-0.5">
					<p className="text-sm font-semibold text-white truncate">{scan.customerName}</p>
					<span className="text-[10px] text-gray-500 font-mono">{format(scan.date, "p")}</span>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-xs text-gray-400 truncate">{scan.name}</p>
					<span className={`text-[10px] px-1.5 py-0.5 rounded ${scan.status == TicketStatus.Valid && validTicketCss} ${(scan.status == TicketStatus.Invalid || scan.status == TicketStatus.Pending) && invalidTicketCss} ${scan.status == TicketStatus.Used && usedTicketCss}`}>{scan.status}</span>
				</div>
			</div>
		</div>
	);
}