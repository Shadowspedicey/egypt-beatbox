import { ticketStatus } from "./TicketStatus";

export default interface ITicketScanResult {
	id?: number | null,
	status: ticketStatus,
	customerName?: string | null,
	name?: string | null
}