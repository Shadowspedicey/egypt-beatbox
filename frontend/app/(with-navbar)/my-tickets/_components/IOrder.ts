import { ITicket } from "./ITicket";

export default interface IOrder {
	id: number,
	date: Date,
	totalPrice: number,
	state: "Pending" | "Confirmed" | "Used",
	items: ITicket[]
}