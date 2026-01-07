import IUser from "./IUser";
import User from "./User";

export default function UsersTable({users}: {users: IUser[]}) {
	return (
		<table className="w-full text-left text-sm">
			<thead className="border-b border-white/5 bg-surface text-gray-400">
				<tr>
					<th className="px-6 py-4 font-medium uppercase tracking-wider text-xs" scope="col">User</th>
					<th className="px-6 py-4 font-medium uppercase tracking-wider text-xs" scope="col">Role</th>
					<th className="px-6 py-4 font-medium uppercase tracking-wider text-xs" scope="col">Registration Date</th>
					<th className="px-6 py-4 font-medium uppercase tracking-wider text-xs text-right" scope="col">Actions</th>
				</tr>
			</thead>
			<tbody className="divide-y divide-white/5">
				{
					users.map(u => <User key={u.id} user={u} />)
				}
			</tbody>
		</table>
	);
}