"use client";

import { useState } from "react";
import RecentScans from "./_components/RecentScans";
import ScanResult from "./_components/ScanResult"
import { TicketStatus } from "./_components/TicketStatus";
import IRecentScan from "./_components/IRecentScan";
import { Scanner } from "@yudiel/react-qr-scanner";

export default function Page() {
	const [recentScans, setRecentScans] = useState<IRecentScan[]>([
		{id:1234, customerName:"Ahmed Khaled",name:"Standard Ticket", status:TicketStatus.Invalid, date:new Date()}
	]);
	const [isScannerActive, setIsScannerActive] = useState(true);

	const handleScan = (codes: Array<{rawValue: string}>) => {
		if (!isScannerActive)
			return;
		const qrValue = codes[0].rawValue;
		// TODO: scanning logic
		setIsScannerActive(false);
	};

	return (
		<main className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
			<div className="flex-1 flex flex-col p-4 lg:p-6 overflow-y-auto">
				<div className="max-w-4xl px-5 mx-auto w-full flex flex-col gap-6">
					<div className={`bg-background-dark rounded-2xl p-1 relative group ${isScannerActive || "opacity-50 grayscale"}`}>
						<Scanner onScan={handleScan} paused={!isScannerActive}/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-surface-dark rounded-xl p-6 border border-surface-light flex flex-col justify-between">
							<div className="flex items-center justify-between">
								<span className="text-sm text-gray-400">Total Scanned</span>
								<span className="material-symbols-outlined text-gray-600">assessment</span>
							</div>
							<div>
								<div className="text-3xl font-bold text-white">1,248</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-100 xl:w-112.5 bg-surface-dark border-l border-surface-light flex flex-col">
				<div className="p-6 border-b border-surface-light bg-linear-to-b from-primary/10 to-transparent">
					<div className="flex gap-3 mt-4">
						<button onClick={() => setIsScannerActive(true)} className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/20">
							Scan Next
						</button>
					</div>
					<ScanResult ticket={{id:null, name:null, status: TicketStatus.Invalid, customerName:null}}/>
				</div>
				<RecentScans recentScans={recentScans}/>
			</div>
		</main>
	);
}