import { ITicket } from "./ITicket";
import {ticketStatus} from "@/lib/TicketStatus";

export default interface IOrder {
	id: number,
	date: Date,
	totalPrice: number,
	state: ticketStatus,
	items: ITicket[]
}