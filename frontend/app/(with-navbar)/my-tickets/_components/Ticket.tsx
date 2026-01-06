"use client";

import Image from "next/image";
import { ITicket } from "./ITicket";
import { useState } from "react";

export default function Ticket({ticket}: {ticket: ITicket}) {
	const [isQrOpen, setIsQrOpen] = useState(false);

	return (
		<>
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors gap-4">
				<div className="flex items-center gap-4">
					<div className="flex justify-center items-center p-3 bg-[#1C1719] rounded-lg text-white/50">
						<span className="material-symbols-outlined relative left-[0.5px]">confirmation_number</span>
					</div>
					<div>
						<p className="text-white font-bold">{ticket.name}</p>
						<p className="text-white/40 text-sm">Ticket #TK-{ticket.orderId}-{ticket.id}</p>
					</div>
				</div>
				<div className="flex items-center gap-3 w-full sm:w-auto">
					<button onClick={() => setIsQrOpen(true)} className="flex-1 sm:flex-none flex items-center cursor-pointer justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-bold border border-primary/20">
						<span className="material-symbols-outlined text-lg">qr_code</span>
						View QR
					</button>
					<button className="flex items-center justify-center p-2 cursor-pointer rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
						<span className="material-symbols-outlined">download</span>
					</button>
				</div>
			</div>
			<div onClick={() => setIsQrOpen(false)} className={`fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-500 ${isQrOpen || "hidden!"}`}>
				<div className="w-full h-full flex justify-center items-center px-10">
					<Image onClick={e => e.stopPropagation()} fill className="w-full! max-w-175 h-auto! relative! border-2 border-white" src={`data:image/png;base64,${ticket.qr}`} alt="Ticket QR code"/>
				</div>
			</div>
		</>
	);
}