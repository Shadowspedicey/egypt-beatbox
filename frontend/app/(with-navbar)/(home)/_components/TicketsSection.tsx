import { paths } from "@/app/_components/paths";
import Link from "next/link";

export default function TicketsSection() {
	return (
		<section className="w-full bg-surface-dark py-24 px-4 md:px-10 relative overflow-hidden">
			<div className="absolute top-0 right-0 w-150 h-150 bg-primary rounded-full blur-[180px] pointer-events-none opacity-20"></div>
			<div className="absolute bottom-0 left-0 w-100 h-100 bg-primary rounded-full blur-[150px] pointer-events-none opacity-10"></div>
			<div className="mx-auto max-w-300 relative z-10">
				<div className="text-center mb-20">
					<h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-6">SECURE YOUR SPOT</h2>
					<p className="text-gray-400 max-w-lg mx-auto text-lg">Choose your experience. From the crowd&apos;s energy to exclusive backstage access.</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
					<div className="opacity-0 pointer-events-none flex flex-col rounded-[2.5rem] bg-background-dark/80 border border-white/5 p-10 transition-transform hover:-translate-y-2 backdrop-blur-sm group hover:border-primary/30">
						<div className="mb-6 flex justify-between items-start">
							<div>
								<span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-2">General</span>
								<h3 className="text-white text-2xl font-bold">Standard Pass</h3>
							</div>
						</div>
						<div className="flex items-baseline gap-1 mb-8">
							<span className="text-5xl font-bold text-primary">£450</span>
							<span className="text-gray-500">/ person</span>
						</div>
						<ul className="flex-1 space-y-5 mb-10">
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Full event access
							</li>
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Standing area
							</li>
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Access to merchandise stalls
							</li>
						</ul>
						<button className="w-full rounded-full border border-white/20 bg-transparent py-4 text-sm font-bold text-white group-hover:bg-primary/10 group-hover:border-primary group-hover:text-primary transition-colors">
							Select Ticket
						</button>
					</div>
					<div className="flex flex-col rounded-[2.5rem] bg-[#2A2326] border border-primary/40 p-10 relative transform md:scale-105 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 hover:shadow-[0_0_40px_rgba(41,121,255,0.2)] transition-shadow">
						<div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider shadow-lg">
							Most Popular
						</div>
						<div className="mb-6 flex justify-between items-start">
							<div>
								{/* VIP Badge */}
								{/* <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider mb-2">VIP</span> */}
								<h3 className="text-white text-2xl font-bold">Standard Pass</h3>
							</div>
						</div>
						<div className="flex items-baseline gap-1 mb-8">
							<span className="text-5xl font-bold text-white">£300</span>
							<span className="text-gray-500">/ person</span>
						</div>
						<ul className="flex-1 space-y-5 mb-10">
							<li className="flex items-start gap-4 text-white text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Premium viewing deck
							</li>
							<li className="flex items-start gap-4 text-white text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Fast track entry
							</li>
							<li className="flex items-start gap-4 text-white text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Private bar access
							</li>
							<li className="flex items-start gap-4 text-white text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Exclusive laminate
							</li>
						</ul>
						<Link href={paths.tickets} className="w-full rounded-full text-center bg-primary py-4 text-sm font-bold text-white hover:bg-white hover:text-primary shadow-lg shadow-primary/20 transition-all">
							Get Tickets
						</Link>
					</div>
					<div className="opacity-0 pointer-events-none flex flex-col rounded-[2.5rem] bg-background-dark/80 border border-white/5 p-10 transition-transform hover:-translate-y-2 backdrop-blur-sm group hover:border-primary/30">
						<div className="mb-6 flex justify-between items-start">
							<div>
								<span className="inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-2">Ultimate</span>
								<h3 className="text-white text-2xl font-bold">Backstage Pass</h3>
							</div>
						</div>
						<div className="flex items-baseline gap-1 mb-8">
							<span className="text-5xl font-bold text-primary">£1,500</span>
							<span className="text-gray-500">/ person</span>
						</div>
						<ul className="flex-1 space-y-5 mb-10">
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								All VIP benefits included
							</li>
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Meet &amp; Greet with Champions
							</li>
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Backstage lounge access
							</li>
							<li className="flex items-start gap-4 text-gray-300 text-sm">
								<span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
								Signed merchandise pack
							</li>
						</ul>
						<button className="w-full rounded-full border border-white/20 bg-transparent py-4 text-sm font-bold text-white group-hover:bg-primary/10 group-hover:border-primary group-hover:text-primary transition-colors">
							Select Ticket
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}