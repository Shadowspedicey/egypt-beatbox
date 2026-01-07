import Link from "next/link";
import { paths } from "./paths";
import Logo from "./Logo";

export default function SidebarNavbar({isMenuOpen, setIsMenuOpen, isLoggedIn, isAdmin, path}: {isMenuOpen: boolean, setIsMenuOpen: (state: boolean) => void, isLoggedIn: boolean, isAdmin: boolean, path: string}) {
	const selectedElementCss = "bg-primary/10 text-primary ring-1 ring-primary/20 transition hover:bg-primary/20";
	const selectedElementSvgCss = "text-primary";

	return <div className={`fixed right-0 top-0 z-50 h-full w-full max-w-sm bg-background-dark shadow-2xl transition-transform duration-300 ease-out sm:w-100 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
		{/* Drawer Header */}
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

		{/* Scrollable Content Area */}
		<div className="flex h-[calc(100%-160px)] flex-col justify-between overflow-y-auto p-6">
			{/* User Profile Section */}
			{ isLoggedIn &&
				<div className="mb-8 flex items-center gap-4 rounded-2xl bg-primary-darker p-4 shadow-inner">
					<div
						className="size-12 overflow-hidden rounded-full border-2 border-primary"
						style={{
							backgroundImage:
								"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB0nZicaxVRgn5DHx0Fhpsj88hD3n2rKPhtRTCW7yXSykXxk99OxYcFEVo2ibKl3MChD571jq-ua7smJ8xdWbwfCJescKYv8kz9nwS4bYV0THI_vTb3ES3h9G1-RigzBPd8O6FOS3OHSbN95jRMs1ali3-YTdmrZ_fk-hIdIfncpCBK46A50AQrsSHX9lNfAfgbnUOmV-HJqstYAnZIMvv8Hnoo8TgRy9fCSf3Z-hZ-qhfPF6tBa6zebhe2NZXG087IkBweIWfeNE4')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
					<div className="flex flex-col">
						<h3 className="text-base font-bold text-white">Ahmed Khaled</h3>
					</div>
				</div>
			}

			{/* Navigation Links */}
			<nav className="flex flex-1 flex-col gap-2" onClick={() => setIsMenuOpen(false)}>
				<Link href={paths.home} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.home && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.home && selectedElementSvgCss}`}>
						home
					</span>
					<span className="text-base font-medium">Home</span>
				</Link>
				<Link href={paths.lineup} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.lineup && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.lineup && selectedElementSvgCss}`}>
						person
					</span>
					<span className="text-base font-medium">Lineup</span>
				</Link>
				<Link href={paths.tickets} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.tickets && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.tickets && selectedElementSvgCss}`}>confirmation_number</span>
					<span className="text-base font-bold">Tickets</span>
				</Link>
				<Link href={paths.venue} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.venue && selectedElementCss}`}>
					<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.venue && selectedElementSvgCss}`}>
						stadium
					</span>
					<span className="text-base font-medium">Venue</span>
				</Link>
				{ isLoggedIn &&
					<Link href={paths.myTickets} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.myTickets && selectedElementCss}`}>
						<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.myTickets && selectedElementSvgCss}`}>confirmation_number</span>
						<span className="text-base font-bold">My Tickets</span>
					</Link>
				}
				{ isAdmin &&
					<Link href={paths.admin} className={`group flex items-center gap-4 text-gray-300 rounded-xl px-4 py-3 transition hover:bg-primary-darker ${path === paths.admin && selectedElementCss}`}>
						<span className={`material-symbols-outlined text-gray-400 group-hover:text-primary fill-1 text-2xl ${path == paths.admin && selectedElementSvgCss}`}>admin_panel_settings</span>
						<span className="text-base font-bold">Admin Panel</span>
					</Link>
				}
				{/* <div className="my-2 border-t border-[#364252]"></div>
				<a
					className="group flex items-center gap-4 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-[#2a303c] hover:text-white"
					href="#"
				>
					<span className="material-symbols-outlined text-2xl text-gray-400 transition group-hover:text-primary">
						settings
					</span>
					<span className="text-base font-medium">Settings</span>
				</a>
				<a
					className="group flex items-center gap-4 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-[#2a303c] hover:text-white"
					href="#"
				>
					<span className="material-symbols-outlined text-2xl text-gray-400 transition group-hover:text-primary">
						help
					</span>
					<span className="text-base font-medium">Support</span>
				</a> */}
			</nav>
		</div>

		{/* Drawer Footer (Fixed Bottom) */}
		<div className="absolute bottom-0 w-full border-t border-[#364252] bg-background-dark p-6">
			<div className="flex flex-col gap-4">
				{ isLoggedIn
					? <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-darker py-3 text-sm font-bold text-white transition hover:bg-red-500/10 hover:text-red-500 hover:ring-1 hover:ring-red-500/50">
							<span className="material-symbols-outlined text-[20px]">logout</span>
							Logout
					</button>
					: <>
						<Link href={paths.login} className="flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
                        	Login
						</Link>
						<Link href={paths.signup} className="flex w-full items-center justify-center rounded-full bg-primary hover:bg-primary-dark px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform active:scale-95">
							Register
						</Link>
					</>

				}
			</div>
		</div>
	</div>
}