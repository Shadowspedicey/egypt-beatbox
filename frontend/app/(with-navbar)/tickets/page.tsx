"use client";

import { eventDateInEgypt } from "@/lib/countdown";
import { format } from "date-fns";
import CountdownSection from "./_components/CountdownSection";
import Ticket from "./_components/Ticket";
import { ITicket } from "./_components/Ticket";
import CartItem, { ICartItem } from "./_components/CartItem";
import { useEffect, useState } from "react";
import LoadingPage from "@/app/_components/LoadingPage";
import PaymentInstructions from "./_components/PaymentInstructions";
import IOrder from "./_components/IOrder";
import api from "@/lib/api";

export default function Page() {
	const [isLoading, setIsLoading] = useState(false);
	const [cart, setCart] = useState<ICart>({ items: [], totalPrice: 0 });
	const [tickets, setTickets] = useState<ITicket[]>([]);

	useEffect(() => {
		async function loadCart() {
			const cartResponse = await api.get("/carts");
			console.log(cartResponse.data);
			setCart(cartResponse.data);
		};
		async function loadTickets() {
			const ticketsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL!}/tickets`);
			if (ticketsResponse.ok) {
				setTickets(await ticketsResponse.json())
			}
		};
		loadCart();
		loadTickets();
	}, []);

	const [order, setOrder] = useState<IOrder | null | undefined>();
	const handleProcceedToPayment = async () => {
		setIsLoading(true);
		const totalPrice = cart.totalPrice;
		const orderId = (await api.post("/orders")).data.orderId;
		setOrder({ id: orderId, totalPrice });
		setIsLoading(false);
	}

	const incrementQuantity = async (ticket: ITicket) => {
		const response = await api.post("/carts",
			{
				productId: ticket.id
			}
		);
		setCart(response.data);
	};

	const decrementQuantity = async (ticket: ITicket) => {
		const response = await api.post("/carts/remove",
			{
				productId: ticket.id
			}
		);
		setCart(response.data);
	};

	if (isLoading)
		return <LoadingPage />
	if (order != null && order != undefined)
		return <PaymentInstructions order={order} />
	return (
		<main className="grow w-full max-w-360 mx-auto px-4 md:px-10 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
				<div className="lg:col-span-8 relative rounded-xl overflow-hidden min-h-75 flex flex-col justify-end p-8 group" data-alt="Dark moody image of a beatboxer on stage with red stage lighting and smoke" style={{ backgroundImage: 'linear-gradient(to top, rgba(36,30,32,0.95), rgba(36,30,32,0.2)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQlABmLNoGssr7w2WBYAScVWqx8be95H2H6b6Qjk4w879Kq_A9qGBTiB9wKI6DUaBiSvhg5PhTxoi1QGW_7TsLvMR5aBJtsWsG1ejLmcXG21bbfOxQBJABY38_gctBFyzsFV34gteGV6Hv9FuecfDdhX4zVloYkMf9sJ_uzjJCV1SNSwq0H2mPoxv0hiZS-ljsGHA0tXVyC9lyFR8REmNVabzfSK_fjhHx3SdgYzzsSZiqt8kblBCNgA4z6CyLdVlZau5o7W9uY8KR")', backgroundSize: "cover", backgroundPosition: "center" }}>
					<div className="relative z-10">
						<span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">{format(eventDateInEgypt, "MMMM do y")}</span>
						<h1 className="text-white text-4xl md:text-5xl font-black leading-none tracking-tight mb-2">SECURE YOUR SPOT</h1>
						<p className="text-gray-300 text-lg max-w-xl">Join the rhythm at (Location) for the biggest beatbox battle in the Middle East.</p>
					</div>
				</div>
				<CountdownSection />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
				<div className="lg:col-span-8 space-y-8">
					<div className="flex items-baseline justify-between border-b border-surface-border pb-4">
						<h2 className="text-3xl font-bold text-black dark:text-white">Select Tickets</h2>
						{/* <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
							<span className="material-symbols-outlined text-base">info</span>
							Max 6 tickets per order
						</span> */}
					</div>
					<div className="space-y-4">
						{
							tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} quantity={cart.items.find(ci => ci.id == ticket.id)?.quantity ?? 0}/>)
						}
					</div>
				</div>
				<div className="lg:col-span-4 lg:sticky lg:top-24">
					<div className="bg-surface-dark border border-surface-border rounded-xl p-6 shadow-2xl shadow-black/50">
						<h3 className="text-xl font-bold text-white mb-6 border-b border-surface-border pb-4">Order Summary</h3>
						<div className="space-y-4 mb-6">
							{
								cart.items.map(ci => <CartItem key={ci.id} item={ci} />)
							}
						</div>
						{/* <div className="border-t border-dashed border-surface-border my-4"></div> */}
						<div className="space-y-2 mb-6">
							{/* <div className="flex justify-between text-sm text-gray-400">
								<span>Subtotal</span>
								<span>EGP 2400</span>
							</div>
							<div className="flex justify-between text-sm text-gray-400">
								<span>Service Fees</span>
								<span>EGP 50</span>
							</div> */}
							<div className="flex justify-between items-center pt-4 mt-2 border-t border-surface-border">
								<span className="text-lg font-bold text-white">Total</span>
								<span className="text-2xl font-black text-primary">EGP {cart.totalPrice}</span>
							</div>
						</div>
						<button onClick={handleProcceedToPayment} className="cursor-pointer w-full flex items-center justify-center gap-2 h-12 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20">
							Proceed to Payment
							<span className="material-symbols-outlined text-sm">arrow_forward</span>
						</button>
						<p className="text-center text-[10px] text-gray-500 mt-4">
							By proceeding, you agree to our Terms of Service. Tickets are non-refundable.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}

interface ICart {
	items: ICartItem[],
	totalPrice: number
}