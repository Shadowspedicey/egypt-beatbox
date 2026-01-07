import { orderStatus } from "@/lib/OrderStatus";

export default interface IOrder {
	id: number,
	customerName: string,
	orderName: string,
	date: Date,
	status: orderStatus
}