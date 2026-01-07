import Link from "next/link";
import paths from "./paths";
import Logo from "@/app/_components/Logo";

export default function SidebarNavbar({ isMenuOpen, setIsMenuOpen, path }: { isMenuOpen: boolean, setIsMenuOpen: (state: boolean) => void, path: string }) {
	const selectedElementCss = "bg-primary/10 text-primary ring-1 ring-primary/20 transition hover:bg-primary/20";
	const selectedElementSvgCss = "text-primary";

	return <div className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-background-dark shadow-2xl transition-transform duration-300 ease-out sm:w-100 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
		<div className="flex items-center justify-between border-b border-[#364252] p-6">
			<div className="flex items-center gap-3">
				<div className="flex size-8 items-center justify-center rounded-full text-white">
					<Logo />
				</div>
				<span className="text-lg font-bold tracking-tight text-white">EGYPT BEATBOX</span>
			</div>
			<button
				onClick={() => setIsMenuOpen(false)}
				className="group flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#364252] text-white transition hover:bg-red-500/20 hover:text-red-500"
			>
				<span className="material-symbols-outlined transition-transform group-hover:rotate-90">
					close
				</span>
			</button>
		</div>

		<div className="flex h-[calc(100%-160px)] flex-col justify-between overflow-y-auto p-6">
			<nav className="flex flex-1 flex-col gap-2" onClick={() => setIsMenuOpen(false)}>
				<Link href={paths.dashboard} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.dashboard && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.dashboard && selectedElementSvgCss}`}>
						dashboard
					</span>
					<span className="text-base font-medium">Dashboard</span>
				</Link>
				<Link href={paths.orders} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.orders && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path.startsWith(paths.orders) && selectedElementSvgCss}`}>confirmation_number</span>
					<span className="text-base font-bold">Orders</span>
				</Link>
				<Link href={paths.users} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.users && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.users && selectedElementSvgCss}`}>
						group
					</span>
					<span className="text-base font-medium">Users</span>
				</Link>
				<Link href={paths.scanner} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.scanner && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.scanner && selectedElementSvgCss}`}>
						qr_code
					</span>
					<span className="text-base font-medium">Scanner</span>
				</Link>
				<div className="my-2 border-t border-[#364252]"></div>
				<Link href="/" className="group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker">
					<span className="material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl">
						home
					</span>
					<span className="text-base font-medium">Home</span>
				</Link>
			</nav>
		</div>

		<div className="absolute bottom-0 w-full border-t border-[#364252] bg-background-dark p-6">
			<div className="flex flex-col gap-4">
				<button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-darker py-3 text-sm font-bold text-white transition hover:bg-red-500/10 hover:text-red-500 hover:ring-1 hover:ring-red-500/50">
					<span className="material-symbols-outlined text-[20px]">logout</span>
					Logout
				</button>
			</div>
		</div>
	</div>
}