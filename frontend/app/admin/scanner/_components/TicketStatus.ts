export const TicketStatus = {
	Pending: "Pending",
	Valid: "Valid",
	Invalid: "Invalid",
	Used: "Used"
} as const;

export type ticketStatus =
  typeof TicketStatus[keyof typeof TicketStatus];