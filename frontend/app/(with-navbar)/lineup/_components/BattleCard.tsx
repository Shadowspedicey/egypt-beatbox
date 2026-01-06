import IContender from "./IContender";
import ContenderCard from "./ContenderCard";

export default function BattleCard(
	{
		finished = false,
		index,
		contenders,
		withBorder = false,
		fromBattleStartingFrom,
		reverse = false
	}: {
		finished?: boolean,
		index: number,
		contenders?:[IContender, IContender],
		withBorder?: boolean,
		fromBattleStartingFrom?: number,
		reverse?: boolean
	}) {
	if (contenders == undefined)
		contenders = [
			{
				name: "TBD",
				won: false
			},
			{
				name: "TBD",
				won: false
			}
		]

	return (
		<div className="match-card bg-surface border border-primary/30 rounded-2xl p-0 overflow-hidden shadow-[0_0_30px_-10px_rgba(41,121,255,0.15)] group">
			<div className="px-4 py-2 bg-linear-to-r from-primary/10 to-transparent border-b border-primary/20 flex justify-between items-center">
				<span className="text-[10px] font-bold uppercase tracking-widest text-primary glow-text">Battle {index}</span>
				{
					finished
						? <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1">Finished <span className="material-symbols-outlined text-[12px]">check_circle</span></span>
						: <span className="text-[10px] font-bold uppercase tracking-widest text-white flex items-center gap-1">
							<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Upcoming
						</span>
				}
			</div>
			<div className={`${withBorder ? "p-6 gap-6" : "p-4 gap-3"} flex flex-col`}>
				{
					contenders.sort(a => a.won ? -1 : 1).map((contender, i) =>
					<div key={index+i+contender.name}>
						<ContenderCard
							key={index+contender.name}
							contender={contender}
							fromBattle={fromBattleStartingFrom == undefined ? undefined : fromBattleStartingFrom+i} 
							reverse={reverse}
						/>
						{i == 0 && withBorder && <div className="w-full flex items-center gap-4 opacity-10"><div className="h-px bg-white w-full"></div></div>}
					</div>)
				}
			</div>
		</div>
	);
}