import { ticketStatus } from "./TicketStatus";

export default interface IRecentScan {
	id?: number | null,
	status: ticketStatus,
	customerName?: string | null,
	name?: string | null,
	date: Date,
}