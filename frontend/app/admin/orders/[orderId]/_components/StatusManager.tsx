"use client";

import { orderStatus, OrderStatus } from "@/lib/OrderStatus";
import IOrder from "./IOrder";
import { useState } from "react";
import { Slide, Snackbar } from "@mui/material";

export default function StatusManager({order}: {order: IOrder}) {
	const [status, setStatus] = useState(order.status);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const updateStatus = async () => {
		await new Promise(resolve => setTimeout(resolve, 2000));
		setSnackbarOpen(true);
	}

	return (
		<div className="bg-surface-dark rounded-lg border border-white/5 shadow-2xl shadow-black/50 overflow-hidden relative group">
			<div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/30 transition-colors duration-500"></div>
			<div className="p-5 border-b border-white/5 bg-white/2">
				<h3 className="text-lg font-bold text-white">Order Status</h3>
			</div>
			<div className="p-5 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label className="text-sm font-medium text-gray-400" htmlFor="status-select">Current Status</label>
					<div className="relative">
						<select onChange={e => setStatus(e.target.value as orderStatus)} value={status} className="w-full bg-background-dark border border-white/10 text-white rounded-lg px-4 py-3 appearance-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all cursor-pointer" id="status-select">
							<option value={OrderStatus.Pending}>Pending</option>
							<option value={OrderStatus.Paid}>Paid</option>
						</select>
						<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
					</div>
					<p className="text-xs text-gray-400 mt-1">Changing status to &apos;Confirmed&apos; will trigger email notifications to the customer.</p>
				</div>
				<button onClick={updateStatus} className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all flex justify-center items-center gap-2 mt-2">
					<span className="material-symbols-outlined">save</span>
					Update Status
				</button>
			</div>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={snackbarOpen}
				onClose={() => setSnackbarOpen(false)}
				autoHideDuration={2500}
				slots={{transition: Slide}}
				message={`Status changed to ${status} successfully!`}
			/>
		</div>
	);
}