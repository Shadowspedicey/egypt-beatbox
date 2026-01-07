import { ITicket } from "./ITicket";
import {orderStatus} from "@/lib/OrderStatus";

export default interface IOrder {
	id: number,
	date: Date,
	totalPrice: number,
	state: orderStatus,
	items: ITicket[]
}