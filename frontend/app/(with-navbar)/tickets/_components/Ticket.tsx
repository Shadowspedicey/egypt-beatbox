import BestValueBadge from "./BestValueBadge";

export default function Ticket({ 
		bestValue = false,
		soldOut = false,
		ticket,
		incrementQuantity,
		decrementQuantity,
		quantity
	}:{
		bestValue?: boolean,
		soldOut?: boolean,
		ticket: ITicket,
		incrementQuantity: (ticket: ITicket) => void,
		decrementQuantity: (ticket: ITicket) => void,
		quantity: number
	}) {
	return (
		<div tabIndex={0} className={`group relative flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-surface-border focus:border-primary/20! bg-linear-to-r from-surface-dark to-[#3E3538] hover:border-primary transition-all duration-300 shadow-lg shadow-black/20 ${soldOut && "border-surface-border! bg-surface-dark opacity-60 cursor-not-allowed grayscale"}`}>
			{ bestValue && <BestValueBadge />}
			<div className="flex-1">
				<div className="flex items-center gap-3 mb-2">
					<h3 className="text-xl font-bold text-white">{ticket.name}</h3>
					<span className="bg-white/10 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide border border-white/20">{ticket.tag}</span>
				</div>
				<p className="text-gray-400 text-sm mb-4">{ticket.description}</p>
				<div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300">
					{
						ticket.perks.map((perk, i) =>
							<span key={i} className="flex items-center gap-1"><span className="material-symbols-outlined text-primary text-lg">check</span> {perk}</span>
						)
					}
				</div>
			</div>
			<div className="flex flex-col items-end justify-between gap-4 md:min-w-35">
				<div className="text-right">
					<div className="text-2xl font-black text-primary">EGP {ticket.price}</div>
					<div className="text-xs text-gray-500">per person</div>
				</div>
				<div className="flex items-center bg-background-dark rounded-full border border-surface-border p-1">
					<button onClick={() => decrementQuantity(ticket)} className={`size-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-surface-border transition-colors ${soldOut && "cursor-not-allowed"}`} disabled={soldOut}>
						<span className="material-symbols-outlined text-lg">remove</span>
					</button>
					<span className="w-8 text-center text-white font-medium">{quantity}</span>
					<button onClick={() => incrementQuantity(ticket)} className={`size-8 rounded-full flex items-center justify-center text-white bg-primary hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 ${soldOut && "cursor-not-allowed"}`} disabled={soldOut}>
						<span className="material-symbols-outlined text-lg">add</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export interface ITicket {
	id: string,
	name: string,
	tag: string,
	price: number,
	description: string,
	perks: string[]
}