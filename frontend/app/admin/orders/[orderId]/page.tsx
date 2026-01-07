import Link from "next/link";
import paths from "../../_components/paths";
import CustomerOrderInfo from "./_components/CustomerOrderInfo";
import IOrder from "./_components/IOrder";
import { OrderStatus } from "@/lib/OrderStatus";
import StatusManager from "./_components/StatusManager";

export default async function Page({params}: {params: Promise<PageProps>}) {
	const routeParams = await params;
	const paidCss = "bg-green-900/30 text-green-400 border border-green-500/20";
	const pendingCss = "bg-yellow-900/30 text-yellow-400 border border-yellow-500/20";
	const usedCss = "bg-gray-900/30 text-gray-400 border border-gray-500/20";

	const order: IOrder = {
		id: routeParams.orderId,
		customer: {
			name: "Ahmed Khaled",
			emailAddress: "ahmedkhaled@gmail.com",
			phoneNumber: "0109856344782"
		},
		date: new Date(),
		paidBy: "01247847544",
		status: OrderStatus.Paid,
		totalPrice: 500,
		items: [
			{
				id: 5678,
				name: "Standard Ticket",
				orderId: 1234,
				price: 500
			}
		]
	}

	return (
		<main className="flex-1 overflow-y-auto bg-background-dark relative">
			<div className="container mx-auto max-w-300 p-4 lg:p-8 flex flex-col gap-6">
				<div className="flex flex-wrap items-center gap-2 text-sm">
					<Link href={paths.dashboard} className="text-gray-400 hover:text-primary transition-colors">Dashboard</Link>
					<span className="material-symbols-outlined text-gray-400 text-[16px]">chevron_right</span>
					<Link href={paths.orders} className="text-gray-400 hover:text-primary transition-colors">All Orders</Link>
					<span className="material-symbols-outlined text-gray-400 text-[16px]">chevron_right</span>
					<span className="text-primary font-medium bg-white/5 px-2 py-0.5 rounded text-xs">#ORD-{order.id}</span>
				</div>
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-white/5 pb-6">
					<div className="flex flex-col gap-2">
						<div className="flex items-center gap-3">
							<h1 className="text-3xl lg:text-4xl font-black tracking-tight text-white">Order Details</h1>
							<span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wide flex items-center gap-1 ${order.status == OrderStatus.Paid && paidCss} ${order.status == OrderStatus.Pending && pendingCss} ${order.status == OrderStatus.Used && usedCss}`}>
								{order.status}
							</span>
						</div>
						<p className="text-gray-400 text-base lg:text-lg">Manage details for order placed by <span className="text-white font-medium">{order.customer.name}</span></p>
					</div>
					<div className="flex gap-3">
						<button className="px-4 py-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50 transition-all flex items-center gap-2 text-sm font-medium">
							<span className="material-symbols-outlined text-[18px]">cancel</span>
							Delete Order
						</button>
					</div>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 flex flex-col gap-6">
						<CustomerOrderInfo order={order} />
						<div className="bg-surface-dark rounded-lg border border-white/5 overflow-hidden">
							<div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/2">
								<h3 className="text-lg font-bold text-white flex items-center gap-2">
									<span className="material-symbols-outlined text-primary">confirmation_number</span>
									Tickets ({order.items.length})
								</h3>
							</div>
							<div className="flex flex-col">
								{
									order.items.map(t =>
										<div key={t.id} className="p-4 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b border-white/5 hover:bg-white/2 transition-colors group">
											<div className="flex items-center gap-4">
												<div className="flex flex-col">
													<p className="text-white font-medium">{t.name}</p>
													<p className="text-gray-400 text-xs"><span className="font-mono text-white/80">#TKT-{order.id}-{t.id}</span></p>
												</div>
											</div>
											<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
												<span className="px-2 py-1 rounded bg-green-500/10 text-green-500 border border-green-500/20 text-xs font-bold">Active</span>
												<p className="text-white font-mono font-medium">EGP {t.price}</p>
											</div>
										</div>
									)
								}
								<div className="bg-surface-dark overflow-hidden flex flex-col">
							<div className="p-6 flex flex-col gap-3">
								<div className="flex justify-between items-center">
									<span className="text-white font-bold">Total</span>
									<span className="text-primary text-xl font-bold font-mono">EGP {order.totalPrice.toLocaleString("en-EG")}</span>
								</div>
							</div>
						</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<StatusManager order={order}/>
					</div>
				</div>
			</div>
		</main>
	);
}

type PageProps = {
  orderId: number
};