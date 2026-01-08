import { orderStatus } from "@/lib/OrderStatus"
import ICustomer from "./ICustomer"
import ITicket from "../../_components/ITicket"

export default interface IOrder {
	id: number,
	date: Date,
	totalPrice: number,
	customerName: string,
	customerEmail: string,
	customerPhoneNumber: string,
	paidBy: string,
	status: orderStatus,
	items: ITicket[]
}