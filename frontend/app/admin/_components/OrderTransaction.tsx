import { format } from "date-fns";
import IOrder from "./IOrder";
import { OrderStatus } from "@/lib/OrderStatus";

export default function OrderTransaction({order}: {order: IOrder}) {
	const paidCss = "bg-green-900/30 text-green-400 border border-green-500/20";
	const pendingCss = "bg-yellow-900/30 text-yellow-400 border border-yellow-500/20";
	const usedCss = "bg-gray-900/30 text-gray-400 border border-gray-500/20";

	return (
		<tr className="group hover:bg-white/5 transition-colors">
			<td className="hidden sm:table-cell px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm font-mono text-primary font-medium">#ORD-{order.id}</td>
			<td className="px-4 md:px-6 h-0! whitespace-nowrap">
				<div className="flex items-center gap-3">
					{/* <div className="h-8 w-8 rounded-full bg-gray-700 bg-cover bg-center border border-white/10" data-alt="Avatar of customer Mark Wilson" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAJCH2xHOlUrPCKASpA5dnLa5tVfiu7X0NqvgFr0306_qudGHbZysHdvRtQPtpSc3UqbLXnaUFPkHorzuRpZrPTOtf-Y024hTreTbQgDiDkcpa-R6-wK7uZoUbDF65D6TpKQ9ZWn3c-T9pkSBIBdU8bdocPJ_oesFfqcNWslbrVvqvO_wzpwbOZGgAz8RYDccDqUeoPgWN2aNASxQRHkzYOtHl1ucaJPv1PnjOJTsIkTdWiYaz0X8K9m8KPuJinupJG_7u6dwAdSr7')" }}></div> */}
					<div className="text-sm font-semibold text-white">{order.customerName}</div>
				</div>
			</td>
			<td className="hidden md:table-cell px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm text-gray-300">{order.orderName}</td>
			<td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-sm text-gray-400">{format(order.date, "MMM dd, y")}</td>
			<td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap">
				<span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status == OrderStatus.Paid && paidCss} ${order.status == OrderStatus.Pending && pendingCss} ${order.status == OrderStatus.Used && usedCss}`}>
					{order.status}
				</span>
			</td>
		</tr>
	);
}