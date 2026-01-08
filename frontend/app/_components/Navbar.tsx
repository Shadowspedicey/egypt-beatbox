"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarNavbar from "./SidebarNavbar";
import Link from "next/link";
import { paths } from "./paths";
import Logo from "./Logo";
import { useAuthContext } from "./AuthContext";
import { isTokenAdmin, getUserNameFromToken } from "@/lib/auth";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const path = usePathname();
	const { accessToken, logout, isLoggedIn } = useAuthContext();

	const isAdmin = isTokenAdmin(accessToken);
	const userName = getUserNameFromToken(accessToken) ?? "";

	return (
		<>
			<header className={`${path == paths.home ? "fixed" : "sticky"} top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-md"`}>
				<div className="px-6 md:px-10 py-4 flex items-center justify-around max-w-360 mx-auto">
					<Link href={paths.home} className="relative flex h-10 w-20 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
						<Logo />
					</Link>

					<nav className="max-md:hidden flex text-center z-20 flex-1 justify-center gap-8">
						<Link href={paths.home} className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${path === paths.home && "text-primary!"}`}>
							Home
						</Link>
						<Link href={paths.lineup} className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${path === paths.lineup && "text-primary!"}`}>
							Lineup
						</Link>
						<Link href={paths.tickets} className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${path === paths.tickets && "text-primary!"}`}>
							Tickets
						</Link>
						<Link href={paths.venue} className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${path === paths.venue && "text-primary!"}`}>
							Venue
						</Link>
						{ isLoggedIn &&
							<Link href={paths.myTickets} className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${path === paths.myTickets && "text-primary!"}`}>
								My Tickets
							</Link>
						}
						{ isAdmin &&
							<Link href={paths.admin} className={`text-gray-300 hover:text-primary transition-colors text-sm font-medium ${path === paths.admin && "text-primary!"}`}>
								Admin Panel
							</Link>
						}
					</nav>

					<div className="flex items-center gap-4 md:gap-6">
						<div className="h-6 w-px bg-white/10 hidden sm:block"></div>
						<div className="flex items-center gap-4">
							{ isLoggedIn 
								? <>
									<div className="flex items-center gap-3 group cursor-pointer">
										<div className="text-right hidden lg:block">
											<p className="text-white text-sm font-semibold leading-none">{userName || 'User'}</p>
										</div>
										<div
											className="relative size-10 rounded-full bg-cover bg-center ring-2 ring-transparent group-hover:ring-primary/50 transition-all"
											style={{
												backgroundImage:
													"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtTbYxO2k0aa3WzFxFIIfzP2NKti-iv8hQbJcyjPBjEAMqicjh93J_HvfBHEdqVIVYbB-sYzfWG2zcYCqRW7UBR95RxQ92uh11j4Imsym3ST187aEoV0GQfckaEz2Vt35UF8P9DUu26FN327g9KsFoBVPVFbIDXJUGasmXzNlcXT493hmi1hDIwjaq3K7QfI1f_Gq-mPbJAQmXMNzcWXud5c2FxvpCbFkyRK8adr9TsyMq6X4C4m1O5x7dJca_B4dThyKZnKxyc71N')",
											}}
										></div>
									</div>
									<button onClick={() => logout()} className="hidden sm:flex items-center justify-center h-10 px-6 rounded-full bg-primary hover:bg-[#00b8e6] text-white text-sm font-bold tracking-wide transition-all duration-300 shadow-lg shadow-primary/20">
										Logout
									</button>
								</>
								: <>
									<Link href={paths.login} className="hidden sm:flex w-full items-center justify-center rounded-full border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10">
										Login
									</Link>
									<Link href={paths.signup} className="hidden sm:flex w-full items-center justify-center rounded-full bg-primary hover:bg-primary-dark px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-transform active:scale-95">
										Register
									</Link>
								</>
							}
							<button
								onClick={() => setIsMenuOpen(true)}
								className="flex md:hidden text-white p-1 hover:text-primary transition-colors"
							>
								<span className="material-symbols-outlined">menu</span>
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Backdrop Overlay */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
					onClick={() => setIsMenuOpen(false)}
				></div>
			)}
			<SidebarNavbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} path={path}/>
		</>
	);
}