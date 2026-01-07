import Link from "next/link";
import paths from "../_components/paths";
import Statistics from "./_components/Statistics";
import UsersTable from "./_components/UsersTable";
import Filtering from "./_components/Filtering";
import IUser from "./_components/IUser";

export default function Page() {
	const users: IUser[] = [
		{
			id: "ahmed-id",
			name: "Ahmed",
			email: "ahmedkhaled@gmail.com",
			createdAt: new Date(),
			phoneNumber: "010985614477",
			role: "User"
		}
	]

	return (
		<main className="flex-1 w-full max-w-350 mx-auto px-4 md:px-8 py-8 flex flex-col gap-8 lg:ml-72">
			<nav className="flex items-center gap-2 text-sm text-gray-400">
				<Link href={paths.dashboard} className="hover:text-primary transition-colors">Dashboard</Link>
				<span className="material-symbols-outlined text-[16px]">chevron_right</span>
				<span className="text-primary font-medium">All Users</span>
			</nav>
			<div className="flex-1 overflow-y-auto custom-scrollbar">
				<div className="max-w-7xl flex flex-col gap-8">
					<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
						<div>
							<h2 className="text-3xl font-black text-white tracking-tight">All Users List</h2>
							<p className="mt-1 text-gray-400">Manage registered participants and championship attendees.</p>
						</div>
					</div>
					<Statistics totalUsers={users.length}/>
					<Filtering />
					<div className="overflow-hidden rounded-lg border border-white/5 bg-background-card shadow-sm">
						<div className="overflow-x-auto custom-scrollbar">
							<UsersTable users={users}/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}