"use client";

import { paths } from "@/app/_components/paths";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
	const onScrollButtonClick = () => {
		const element = document.getElementById("lineup");
    	element?.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-linear-to-b from-black/60 via-background-dark/40 to-background-dark z-10"></div>
				<Image fill alt="Concert crowd silhouette with stage lights" className="h-full w-full object-cover grayscale opacity-70" data-alt="Grayscale crowd at a concert with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbgAEsQx-JDapXv0pF7JHGCopAwscmkihKsBOvjK3DyxHAMRWljqb5f_TLSVTyTVnCY-au4jkgkJohAeWLVyweqWT3g3dPOsRuuNznJeE2sozlWw4rZ7YeA2uGGZzP73pMPSOWnVcHjUcFVGxSM0c4Y_WnhT8C3CTmJKUDUegFnPe4BIkxuCU7hm77jkbL8fvs654rEajTTBq3I9quvqiRDAOQCC5ihMCp6cFDX426RgIUFi4LBjw5V-WN18-wXoDk7ltR7sQil8Iq" />
			</div>
			<div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4 animate-fade-in-up">
				<a className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 backdrop-blur-md">
					<span className="relative flex h-3 w-3 mr-3">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
						<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
					</span>
					<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white">Official Announcement: Tickets Now Live</span>
				</a>
				<h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter mb-8 drop-shadow-2xl">
					EGYPTIAN <br />
					<span className="text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-primary">BEATBOX</span> <br />
					2026
				</h1>
				<p className="text-gray-300 text-lg md:text-2xl font-light max-w-3xl mb-12 leading-relaxed">
					The Championship returns to Cairo. Witness the vocal athleticism of the world&apos;s best.
				</p>
				<div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
					<Link href={paths.tickets} className="group relative flex items-center justify-center rounded-full h-16 px-12 bg-primary text-white text-lg font-bold tracking-wide transition-all transform hover:scale-105 shadow-[0_0_40px_var(--color-primary)] overflow-hidden">
						<span className="relative z-10 group-hover:text-primary transition-colors duration-300">BUY TICKETS</span>
						<div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
					</Link>
					<a href="https://drive.google.com/drive/folders/1Q0O2efH5x9nKc5BRClCqX2a4lKgL5W_D?usp=drive_link" target="_blank" className="flex items-center justify-center rounded-full h-16 px-12 bg-transparent hover:bg-primary/10 border border-white/30 hover:border-primary text-white hover:text-primary text-lg font-bold tracking-wide backdrop-blur-sm transition-all">
						<span className="material-symbols-outlined mr-2">play_circle</span>
						WATCH WILDCARDS
					</a>
				</div>
			</div>
			<button onClick={onScrollButtonClick} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 hover:text-primary transition-colors cursor-pointer">
				<span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
			</button>
		</div>
	)
}