export default function Statistics({totalUsers}: {totalUsers: number}) {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<div className="rounded-xl border border-white/5 bg-background-card p-5 shadow-sm">
				<div className="flex items-start justify-between">
					<div>
						<p className="text-sm font-medium text-gray-400">Total Users</p>
						<p className="mt-2 text-3xl font-bold text-white">{totalUsers.toLocaleString("en-EG")}</p>
					</div>
					<div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-500">
						<span className="material-symbols-outlined">group</span>
					</div>
				</div>
			</div>
			{/* <div className="rounded-xl border border-white/5 bg-background-card p-5 shadow-sm">
				<div className="flex items-start justify-between">
					<div>
						<p className="text-sm font-medium text-gray-400">New Today</p>
						<p className="mt-2 text-3xl font-bold text-white">45</p>
					</div>
					<div className="rounded-lg bg-blue-500/10 p-2 text-blue-500">
						<span className="material-symbols-outlined">person_add</span>
					</div>
				</div>
				<div className="mt-4 flex items-center gap-1 text-xs">
					<span className="font-medium text-emerald-500">+12%</span>
					<span className="text-gray-400">from yesterday</span>
				</div>
			</div>
			<div className="rounded-xl border border-white/5 bg-background-card p-5 shadow-sm">
				<div className="flex items-start justify-between">
					<div>
						<p className="text-sm font-medium text-gray-400">Active Now</p>
						<p className="mt-2 text-3xl font-bold text-white">320</p>
					</div>
					<div className="rounded-lg bg-purple-500/10 p-2 text-purple-500">
						<span className="material-symbols-outlined">bolt</span>
					</div>
				</div>
				<div className="mt-4 flex items-center gap-1 text-xs">
					<span className="font-medium text-emerald-500">+1.5%</span>
					<span className="text-gray-400">engagement rate</span>
				</div>
			</div>
			<div className="rounded-xl border border-white/5 bg-background-card p-5 shadow-sm">
				<div className="flex items-start justify-between">
					<div>
						<p className="text-sm font-medium text-gray-400">Banned Users</p>
						<p className="mt-2 text-3xl font-bold text-white">12</p>
					</div>
					<div className="rounded-lg bg-red-500/10 p-2 text-red-500">
						<span className="material-symbols-outlined">block</span>
					</div>
				</div>
				<div className="mt-4 flex items-center gap-1 text-xs">
					<span className="font-medium text-red-500">-0.5%</span>
					<span className="text-gray-400">decrease</span>
				</div>
			</div> */}
		</div>
	);
}