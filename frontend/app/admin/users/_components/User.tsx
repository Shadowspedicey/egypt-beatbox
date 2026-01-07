import { format } from "date-fns";
import IUser from "./IUser";

export default function User({user}: {user: IUser}) {
	return (
		<tr className="group hover:bg-white/2 transition-colors">
			<td className="whitespace-nowrap px-6 py-4">
				<div className="flex items-center gap-3">
					{/* <div className="h-9 w-9 rounded-full bg-cover bg-center" data-alt="Portrait of user" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWcO4QcqHHUNLMxalXsQEw3AbCuv4U21DfNs7QZqq_IILAb4BIDKRAhsUXGZA3WMRmeMpM-ehpwJyXqxq6BRjhZ3vVkywpLrQnWMDwO6ELZ7ZLZ6rFBF_7zbiiSw7pLRvmkE7oq2YsjpCKrx1sbojoDFP2eUtn-cD4xOmee58ZrqMZ4VhIwyRPnSywGUgzxMSMaiKc5WgAyHcafDBJx9vlQ7YLZ0hpSTUrpijVEJnpf3fqp30OTiimbRc65lnyT31xL173KeaRMhR0')" }}></div> */}
					<div className="flex flex-col">
						<span className="font-medium text-white">{user.name}</span>
						<span className="text-xs text-gray-400">{user.email}</span>
					</div>
				</div>
			</td>
			<td className="whitespace-nowrap px-6 py-4 text-gray-400">{user.role}</td>
			<td className="whitespace-nowrap px-6 py-4 text-gray-400">{format(user.createdAt, "MMM dd, y")}</td>
			<td className="whitespace-nowrap px-6 py-4 text-right">
				<div className="flex items-center justify-end gap-2">
					<button className="flex justify-center items-center cursor-pointer rounded-lg p-1 text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors" title="View Profile">
						<span className="material-symbols-outlined text-[20px]">visibility</span>
					</button>
					{/* <button className="rounded p-1 text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors" title="Edit User">
						<span className="material-symbols-outlined text-[20px]">edit</span>
					</button>
					<button className="rounded p-1 text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-colors" title="Ban User">
						<span className="material-symbols-outlined text-[20px]">block</span>
					</button> */}
				</div>
			</td>
		</tr>
	)
}