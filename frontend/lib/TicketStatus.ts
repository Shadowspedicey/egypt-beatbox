export const TicketStatus = {
	Pending: "Pending",
	Paid: "Paid",
	Used: "Used",
} as const;

export type ticketStatus =
  typeof TicketStatus[keyof typeof TicketStatus];