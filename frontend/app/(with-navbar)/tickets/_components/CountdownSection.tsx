"use client";

import { getCountdown, initialCountdown } from "@/lib/countdown";
import { useEffect, useState } from "react";

export default function CountdownSection() {
	const [countdown, setCountdown] = useState(initialCountdown);
	useEffect(() => {
		const interval = setInterval(() => setCountdown(getCountdown()), 1000)

		return () => {
			clearInterval(interval);
		}
	},[]);

	return (
		<div className="lg:col-span-4 bg-surface-dark border border-surface-border rounded-xl p-6 flex flex-col justify-center">
					<h3 className="text-white text-sm font-medium uppercase tracking-widest mb-4 text-center">Time Until Drop</h3>
					<div className="grid grid-cols-4 gap-2">
						<div className="flex flex-col items-center p-2 bg-background-dark/50 rounded-lg border border-surface-border">
							<span className="text-2xl font-bold text-white font-mono">{countdown.days}</span>
							<span className="text-[10px] text-gray-400 uppercase">Days</span>
						</div>
						<div className="flex flex-col items-center p-2 bg-background-dark/50 rounded-lg border border-surface-border">
							<span className="text-2xl font-bold text-white font-mono">{countdown.hours}</span>
							<span className="text-[10px] text-gray-400 uppercase">Hrs</span>
						</div>
						<div className="flex flex-col items-center p-2 bg-background-dark/50 rounded-lg border border-surface-border">
							<span className="text-2xl font-bold text-white font-mono">{countdown.minutes}</span>
							<span className="text-[10px] text-gray-400 uppercase">Min</span>
						</div>
						<div className="flex flex-col items-center p-2 bg-primary/10 rounded-lg border border-primary/30">
							<span className="text-2xl font-bold text-primary font-mono animate-pulse">{countdown.seconds}</span>
							<span className="text-[10px] text-primary uppercase">Sec</span>
						</div>
					</div>
				</div>
	);
}