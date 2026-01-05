"use client";

import { intervalToDuration } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

export default function CountdownSection() {
	const [countdown, setCountdown] = useState<Countdown>({days: 0, hours: 0, minutes: 0, seconds: 0});
	function calculateCountdown() {
		const eventDateInEgypt = toZonedTime("2026-01-06 16:40:00", "Africa/Cairo");
		const diff = intervalToDuration({start: toZonedTime(new Date(), "Africa/Cairo"), end: eventDateInEgypt});
		setCountdown({
			days: diff.days ?? 0,
			hours: diff.hours ?? 0,
			minutes: diff.minutes ?? 0,
			seconds: diff.seconds ?? 0
		});
	};

	useEffect(() => {
	const intervalId = setInterval(calculateCountdown, 1000);
	console.log("ass");

	return () => {
		clearInterval(intervalId);
	};

	}, []);

	return (
		<section className="w-full bg-background-dark py-20 px-4 md:px-10 border-b border-white/5 relative">
			<div className="mx-auto max-w-300">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-surface-dark/50 rounded-xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
					<div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
					<div className="text-center lg:text-left max-w-md relative z-10">
						<h2 className="text-white text-4xl font-black leading-tight tracking-tight mb-4 uppercase">Battle <br /><span className="text-primary">Begins In</span></h2>
						<p className="text-gray-400 text-base">The countdown to the yearly Egyptian Beatbox Championship has started. Don&apos;t miss the opening ceremony.</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full lg:w-auto relative z-10">
						<div className="flex flex-col items-center gap-3">
							<div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-3xl bg-surface-dark border border-white/10 shadow-inner group hover:border-primary/30 transition-colors">
								<span className="text-white group-hover:text-primary transition-colors text-4xl md:text-5xl font-bold font-display">{countdown.days}</span>
							</div>
							<span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Days</span>
						</div>
						<div className="flex flex-col items-center gap-3">
							<div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-3xl bg-surface-dark border border-white/10 shadow-inner group hover:border-primary/30 transition-colors">
								<span className="text-white group-hover:text-primary transition-colors text-4xl md:text-5xl font-bold font-display">{countdown.hours}</span>
							</div>
							<span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Hours</span>
						</div>
						<div className="flex flex-col items-center gap-3">
							<div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-3xl bg-surface-dark border border-white/10 shadow-inner group hover:border-primary/30 transition-colors">
								<span className="text-white group-hover:text-primary transition-colors text-4xl md:text-5xl font-bold font-display">{countdown.minutes}</span>
							</div>
							<span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Mins</span>
						</div>
						<div className="flex flex-col items-center gap-3">
							<div className="relative flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-3xl bg-primary text-white shadow-[0_0_30px_rgba(41,121,255,0.25)] overflow-hidden">
								<div className="absolute inset-0 bg-white animate-pulse opacity-20"></div>
								<span className="relative text-white text-4xl md:text-5xl font-bold font-display">{countdown.seconds}</span>
							</div>
							<span className="text-primary text-xs uppercase tracking-widest font-bold">Secs</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

interface Countdown {
	days: number,
	hours: number,
	minutes: number,
	seconds: number
}