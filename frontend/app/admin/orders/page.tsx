"use client";

import Link from "next/link";
import paths from "../_components/paths";
import Order from "./_components/Order";
import IOrder from "./_components/IOrder";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useLoading } from "@/app/_components/LoadingContext";

export default function Page() {
	const [orders, setOrders] = useState<IOrder[]>([]);
	const { setIsLoading } = useLoading();
	useEffect(() => {
		(async () => {
			const ordersResponse = await api.get("/orders/all");
			setOrders(ordersResponse.data);
			setIsLoading(false);
		})();
	}, [setIsLoading]);

	return (
		<main className="flex-1 w-full max-w-350 mx-auto px-4 md:px-8 py-8 flex flex-col gap-8 lg:ml-72">
			<nav className="flex items-center gap-2 text-sm text-gray-400">
				<Link href={paths.dashboard} className="hover:text-primary transition-colors">Dashboard</Link>
				<span className="material-symbols-outlined text-[16px]">chevron_right</span>
				<span className="text-primary font-medium">All Orders</span>
			</nav>
			<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-black text-white tracking-tight">All Orders List</h1>
					<p className="text-gray-400">Manage and view all ticket orders for Egyptian Beatbox Championship 2026</p>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between bg-surface-dark p-4 rounded-xl border border-white/5">
				<div className="flex-1 w-full lg:max-w-120">
					<div className="relative group">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
						</div>
						<input className="block w-full pl-10 pr-3 py-3 rounded-lg bg-background-dark border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Search orders by phone number..." type="text" />
					</div>
				</div>
				<div className="flex flex-wrap gap-2">
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-white font-medium text-sm border border-primary">
						<span>All Status</span>
						<span className="material-symbols-outlined text-[18px]">expand_more</span>
					</button>
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-dark hover:bg-surface-highlight text-gray-400 hover:text-white font-medium text-sm border border-white/10 transition-colors">
						<span>Paid</span>
					</button>
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-dark hover:bg-surface-highlight text-gray-400 hover:text-white font-medium text-sm border border-white/10 transition-colors">
						<span>Pending</span>
					</button>
					<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background-dark hover:bg-surface-highlight text-gray-400 hover:text-white font-medium text-sm border border-white/10 transition-colors">
						<span>Cancelled</span>
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
					<div className="col-span-1">Order ID</div>
					<div className="col-span-3">Customer</div>
					<div className="col-span-2">Date</div>
					<div className="col-span-2">Total</div>
					<div className="col-span-2">Status</div>
					<div className="col-span-2 text-right">Actions</div>
				</div>
				{
					orders.map(o => <Order key={o.id} order={o} />)
				}
			</div>
		</main>
	);
}