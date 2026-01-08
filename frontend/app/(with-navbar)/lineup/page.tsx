import BattleCard from "./_components/BattleCard";
import TheFinalCard from "./_components/TheFinalCard";

export default function Page() {
	return (
		<main className="flex-1 w-full max-w-400 mx-auto px-4 md:px-8 py-10 flex flex-col">
			<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 relative">
				<div className="absolute -top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
				<div className="flex flex-col gap-3 relative z-10">
					<div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em]">
						<span className="material-symbols-outlined text-sm">emoji_events</span>
						<span>The Road to Glory</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[0.9]">
						Top 8 <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white">Bracket</span>
					</h1>
					<p className="text-slate-400 max-w-xl text-lg mt-2 font-light">
						Witness the clash of titans as the Top 8 contenders battle through elimination for the Egyptian Beatbox title.
					</p>
				</div>
				{/* <div className="bg-surface/50 backdrop-blur-sm p-1.5 rounded-xl border border-white/10 flex gap-1 relative z-10">
					<button className="px-6 py-2.5 rounded-lg text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20 transition-all">
						Solo Battle
					</button>
					<button className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all">
						Tag Team
					</button>
				</div> */}
			</div>
			<div className="bracket-scroll w-full overflow-x-auto pb-12 pt-4 pl-4 -ml-4">
				<div className="min-w-325 flex justify-center items-stretch relative py-8 px-4">
					<div className="w-72 flex flex-col justify-around py-10 gap-16 relative z-10">
						<BattleCard index={1} />
						<BattleCard index={2} />
					</div>
					<div className="w-20 relative">
						<div className="absolute top-[25%] left-0 w-1/2 h-0.5 bg-primary shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute top-[25%] right-1/2 w-0.5 h-[25%] bg-primary translate-x-px shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute top-[75%] left-0 w-1/2 h-0.5 bg-primary shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute bottom-[25%] right-1/2 w-0.5 h-[25%] bg-primary translate-x-px shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute top-[50%] left-1/2 w-1/2 h-0.5 bg-border-color"></div>
					</div>
					<div className="w-72 flex flex-col justify-center relative z-10">
						<div className="text-center mb-6">
							<span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Semi Final A</span>
						</div>
						<BattleCard index={5} withBorder fromBattleStartingFrom={1}/>
					</div>
					<div className="w-24 relative flex items-center">
						<div className="w-full h-0.5 bg-border-color"></div>
					</div>
					<TheFinalCard />
					<div className="w-24 relative flex items-center">
						<div className="w-full h-0.5 bg-border-color"></div>
					</div>
					<div className="w-72 flex flex-col justify-center relative z-10">
						<div className="text-center mb-6">
							<span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Semi Final B</span>
						</div>
						<BattleCard index={6} withBorder fromBattleStartingFrom={3} reverse/>
					</div>
					<div className="w-20 relative rotate-y-180">
						<div className="absolute top-[25%] left-0 w-1/2 h-0.5 bg-primary shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute top-[25%] right-1/2 w-0.5 h-[25%] bg-primary translate-x-px shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute top-[75%] left-0 w-1/2 h-0.5 bg-primary shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute bottom-[25%] right-1/2 w-0.5 h-[25%] bg-primary translate-x-px shadow-[0_0_8px_rgba(41,121,255,0.6)]"></div>
						<div className="absolute top-[50%] left-1/2 w-1/2 h-0.5 bg-border-color"></div>
					</div>
					<div className="w-72 flex flex-col justify-around py-10 gap-16 relative z-10">
						<BattleCard index={3} reverse/>
						<BattleCard index={4} reverse/>
					</div>
				</div>
			</div>
			<div className="mt-8 pt-6 flex flex-wrap items-center justify-between gap-6 px-4">
				<div className="flex gap-8 text-xs font-bold uppercase tracking-wider">
					<div className="flex items-center gap-3">
						<div className="w-8 h-0.5 bg-primary shadow-[0_0_8px_rgba(41,121,255,0.8)]"></div>
						<span className="text-white">Winner Path</span>
					</div>
				</div>
			</div>
		</main>
	);
}