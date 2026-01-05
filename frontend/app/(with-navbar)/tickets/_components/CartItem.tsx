import { ITicket } from "./Ticket";

export default function CartItem({item}: {item: ICartItem}) {
	return (
		<div className="flex justify-between items-start text-sm">
			<div className="text-gray-300">
				<p className="font-medium text-white">{item.ticket.title}</p>
				<p className="text-xs text-gray-500">x {item.quantity} tickets</p>
			</div>
			<span className="text-primary font-medium">EGP {item.quantity*item.ticket.price}</span>
		</div>
	);
}

export interface ICartItem {
	ticket: ITicket,
	quantity: number
}