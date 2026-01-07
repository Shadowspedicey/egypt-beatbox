import { orderStatus } from "@/lib/OrderStatus";
import ITicket from "./ITicket";

export default interface IOrder {
	id: number,
	date: Date,
	totalPrice: number,
	customerName: string,
	customerPhoneNumber: string,
	status: orderStatus,
	items: ITicket[]
}