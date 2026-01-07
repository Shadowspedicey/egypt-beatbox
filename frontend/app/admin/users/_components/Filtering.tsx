export default function Filtering() {
	return (
		<div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-background-card p-4 sm:flex-row sm:items-center">
			<div className="relative flex-1">
				<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[20px]">search</span>
				<input className="h-11 w-full rounded-lg border border-white/10 bg-surface pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Search by name, email, or phone number..." type="text" />
			</div>
			{/* <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
				<select className="h-11 cursor-pointer rounded-lg border border-white/10 bg-surface px-4 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary">
					<option>All Statuses</option>
					<option>Active</option>
					<option>Pending</option>
					<option>Banned</option>
				</select>
				<select className="h-11 cursor-pointer rounded-lg border border-white/10 bg-surface px-4 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary">
					<option>All Roles</option>
					<option>Admin</option>
					<option>Participant</option>
					<option>Attendee</option>
				</select>
				<button className="flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 text-sm font-medium text-white hover:bg-white/5 transition">
					<span className="material-symbols-outlined text-[20px]">filter_list</span>
					More
				</button>
				<button className="flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-surface px-4 text-sm font-medium text-white hover:bg-white/5 transition ml-auto sm:ml-0">
					<span className="material-symbols-outlined text-[20px]">download</span>
					Export
				</button>
			</div> */}
		</div>
	);
}