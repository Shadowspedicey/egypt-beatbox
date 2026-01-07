export const OrderStatus = {
	Pending: "Pending",
	Paid: "Paid",
	Used: "Used",
} as const;

export type orderStatus =
  typeof OrderStatus[keyof typeof OrderStatus];