import IRecentScan from "./IRecentScan";
import RecentScan from "./RecentScan"

export default function RecentScans({recentScans}: {recentScans: IRecentScan[]}) {
	return (
		<div className="flex-1 flex flex-col overflow-hidden">
			<div className="p-4 border-surface-light flex justify-between items-center bg-surface-dark z-10">
				<h3 className="font-bold text-sm text-gray-300">Recent Scans</h3>
			</div>
			<div className="flex-1 overflow-y-auto p-4 space-y-3">
				{
					recentScans.map(rs => <RecentScan key={rs.date.toDateString()} scan={rs} />)
				}
			</div>
		</div>
	);
}