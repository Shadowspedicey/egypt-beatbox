"use client";

import Logo from "@/app/_components/Logo";
import Link from "next/link";
import paths from "./paths";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SidebarNavbar from "./SidebarNavbar";

export default function Navbar() {
	const path = usePathname();
	const activeItemCss = "bg-white/5 text-primary border-l-4 border-primary hover:bg-white/10";
	const nonActiveItemCss = "text-gray-400 hover:bg-white/5 hover:text-white";
	
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div>
			<aside className="hidden lg:flex w-72 flex-col border-r border-white/5 bg-[#1F191B] bottom-0 fixed left-0 top-0 z-50">
				<div className="flex flex-col h-full p-6 justify-between">
					<div>
						<div className="flex items-center gap-4 mb-10 px-2">
							<div className="text-white rounded-lg p-2 flex items-center justify-center shrink-0 w-15">
								<span className="material-symbols-outlined text-2xl"><Logo /></span>
							</div>
							<div className="flex flex-col">
								<h1 className="text-xl font-bold leading-tight tracking-tight text-white">EG BBX</h1>
								<p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">Admin Console</p>
							</div>
						</div>
						<nav className="flex flex-col gap-1">
							<Link href={paths.dashboard} className={`flex items-center gap-4 px-4 py-3 transition-all group ${path == paths.dashboard ? activeItemCss : nonActiveItemCss}`}>
								<span className="material-symbols-outlined group-hover:text-primary transition-colors filled">dashboard</span>
								<span className="font-semibold text-sm">Dashboard</span>
							</Link>
							<Link href={paths.orders} className={`flex items-center gap-4 px-4 py-3 group ${path.startsWith(paths.orders) ? activeItemCss : nonActiveItemCss}`}>
								<span className="material-symbols-outlined group-hover:text-primary transition-colors">confirmation_number</span>
								<span className="font-medium text-sm">Orders</span>
							</Link>
							<Link href={paths.users} className={`flex items-center gap-4 px-4 py-3 transition-colors group ${path == paths.users ? activeItemCss : nonActiveItemCss}`}>
								<span className="material-symbols-outlined group-hover:text-primary transition-colors">group</span>
								<span className="font-medium text-sm">Users</span>
							</Link>
							<Link href={paths.scanner} className={`flex items-center gap-4 px-4 py-3 transition-colors group ${path == paths.scanner ? activeItemCss : nonActiveItemCss}`}>
								<span className="material-symbols-outlined group-hover:text-primary transition-colors">qr_code</span>
								<span className="font-medium text-sm">Scanner</span>
							</Link>
							<div className="h-px bg-white/10 my-2 mx-4"></div>
							<Link href="/" className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-colors group">
								<span className="material-symbols-outlined group-hover:text-primary transition-colors">home</span>
								<span className="font-medium text-sm">Home</span>
							</Link>
						</nav>
					</div>
					<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
						<div className="h-10 w-10 rounded-full bg-gray-700 bg-cover bg-center shrink-0 border-2 border-primary/50" data-alt="Admin user profile picture showing a smiling woman" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAk5T9E1Lbs0s_yf4YszPA7TmjjjQpjLC1IBdZIfMY7MTwMjHCobzTi7l2wV43T3yO652dYX_z4awCwLquLR8VH34P412T4VpWMdp3As5f-DgYE3BTSdqAc9VMjxjlXQVXH64zuput8eTKapw_H0a68IECNyNVbaXKX9G7ogKm06Nm5AEElvxY7ZiSl4E3NEaLFQjkFEaQXVZs3SaQWkKHN_akFzz5ZgddS9h2fJPUqhQqdtmKhuXqycP9HphyDr8bXePhVKx-iLkHx')" }}></div>
						<div className="flex flex-col overflow-hidden">
							<span className="text-sm font-bold truncate text-white">Sarah J.</span>
							<span className="text-xs text-gray-400 truncate">Super Admin</span>
						</div>
						<button className="ml-auto text-gray-400 hover:text-primary transition-colors">
							<span className="material-symbols-outlined text-xl">logout</span>
						</button>
					</div>
				</div>
			</aside>
			<header className="lg:hidden sticky top-0 z-40 flex items-center justify-between p-4 bg-[#1F191B] border-b border-white/10">
				<div className="flex items-center gap-3">
					<div className="w-15">
						<Logo />
					</div>
					<span className="font-bold text-lg text-white">EG BBX</span>
				</div>
				<button onClick={() => setIsMenuOpen(true)} className="p-2 text-gray-300">
					<span className="material-symbols-outlined">menu</span>
				</button>
			</header>
			{/* Backdrop Overlay */}
			{isMenuOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
					onClick={() => setIsMenuOpen(false)}
				></div>
			)}
			<SidebarNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} path={path}/>
		</div>
	);
}