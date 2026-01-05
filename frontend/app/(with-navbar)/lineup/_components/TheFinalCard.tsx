import { paths } from "@/app/_components/paths";
import Link from "next/link";

export default function TheFinalCard() {
	return (
		<div className="w-96 flex flex-col justify-center items-center z-20 relative">
			<div className="w-full bg-linear-to-b from-[#3A3436] to-surface rounded-3xl border border-primary/40 p-1 shadow-[0_0_60px_-10px_rgba(41,121,255,0.3)] hover:border-primary transition-all duration-500 group cursor-pointer relative overflow-hidden">
				<div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
				<div className="bg-surface rounded-[20px] p-6 relative z-10 h-full flex flex-col items-center">
					<div className="w-full flex justify-between items-center mb-8 border-b border-white/5 pb-4">
						<span className="text-xs text-primary font-black uppercase tracking-[0.3em] glow-text">The Final</span>
					</div>
					<div className="flex justify-between items-center w-full gap-2">
						<div className="flex flex-col items-center gap-3 text-center">
							<div className="size-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-inner">
								<span className="material-symbols-outlined text-3xl text-slate-600">person</span>
							</div>
							<div>
								<span className="block text-2xl font-black text-white tracking-tighter">TBD</span>
								<span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Semi A Winner</span>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center">
							<span className="text-3xl font-black text-slate-700 italic opacity-50 group-hover:text-primary group-hover:opacity-100 transition-all duration-300">VS</span>
						</div>
						<div className="flex flex-col items-center gap-3 text-center">
							<div className="size-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center shadow-inner">
								<span className="material-symbols-outlined text-3xl text-slate-600">person</span>
							</div>
							<div>
								<span className="block text-2xl font-black text-white tracking-tighter">TBD</span>
								<span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Semi B Winner</span>
							</div>
						</div>
					</div>
					<div className="mt-8">
						<Link href={paths.tickets} className="bg-white text-background-dark hover:bg-primary hover:text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/50">
							Ticket Info
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}