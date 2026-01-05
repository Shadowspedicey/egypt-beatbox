import Image from "next/image";
import IContender from "./IContender";

export default function ContenderCard({ contender, fromBattle, reverse }: { contender: IContender, fromBattle?: number, reverse: boolean }) {
	return (
		<div className={`flex items-center justify-between p-2 -mx-2 ${reverse && "flex-row-reverse"} ${contender.won ? "bg-white/5 border-l-[3px] border-primary" : "opacity-40 hover:opacity-100 transition-opacity"} ${contender.won && reverse && "border-r-[3px]! border-l-0!"}`}>
			<div className={`flex items-center gap-3 ${reverse && "flex-row-reverse"}`}>
					{
						contender.imgSrc == null
							? <div className="size-12 rounded-full border border-slate-600 bg-slate-800 flex items-center justify-center text-slate-500">?</div>
							: <div className="size-10 rounded-full ring-2 ring-primary p-0.5 bg-background-dark">
								<Image alt={contender.name} className="w-full h-full rounded-full object-cover" src={contender.imgSrc} />
							</div>
					}
				<div>
					<span className={`block text-white font-bold text-lg leading-none ${reverse && "text-right"}`}>{contender.name}</span>
					{contender.won && <span className="text-[10px] text-primary uppercase font-bold tracking-wider">Winner</span>}
					{fromBattle && <span className="text-[10px] text-slate-600 uppercase font-bold tracking-wider">From Battle {fromBattle}</span>}
				</div>
			</div>
			<span className={contender.won ? "text-2xl font-display font-bold text-primary" : "text-lg font-display text-slate-500"}>{contender.votes}</span>
		</div>
	);
}