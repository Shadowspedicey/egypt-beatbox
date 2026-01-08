import { paths } from "@/app/_components/paths";
import Image from "next/image";
import Link from "next/link";

export default function LineupSection() {
	return (
		<section id="lineup" className="w-full bg-background-dark py-24 px-4 md:px-10">
			<div className="mx-auto max-w-300">
				<div className="flex text-center flex-col items-center sm:text-left sm:flex-row sm:items-end justify-between mb-16 gap-6">
					<div>
						<h2 className="text-white text-5xl md:text-6xl font-black uppercase mb-2">Featured</h2>
						<h2 className="text-transparent w-fit bg-clip-text bg-linear-to-r from-gray-200 to-primary text-5xl md:text-6xl font-black uppercase">Champions</h2>
					</div>
					<Link className="hidden sm:flex items-center gap-3 text-white text-sm font-bold border border-white/20 rounded-full px-6 py-3 hover:bg-primary hover:border-primary hover:text-white transition-all shadow-lg hover:shadow-primary/20" href={paths.lineup}>
						VIEW FULL LINEUP <span className="material-symbols-outlined text-lg">arrow_forward</span>
					</Link>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<a href="https://www.instagram.com/coztoxofficial/" target="_blank" className="group relative cursor-pointer">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of coztox" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="/artists/coztox.jpg" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Cairo</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Coztox</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</a>
					<a href="https://www.instagram.com/shehab.elnasery/" target="_blank" className="group relative cursor-pointer lg:mt-16">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of Shehab" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="/artists/shehab.jfif" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Giza</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Shehab</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</a>
					<a href="https://www.instagram.com/ashh._._._/" target="_blank" className="group relative cursor-pointer">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of a Ash" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="/artists/ash.jpg" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Cairo</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Ash</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</a>
					<a href="https://www.instagram.com/abdo_tarek_bbx/" target="_blank" className="group relative cursor-pointer lg:mt-16">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of Abdo Tarek" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="/artists/abdo-tarek.jpg" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Alexandria</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Abdo Tarek</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</a>
				</div>
				<div className="mt-12 flex justify-center sm:hidden">
					<Link className="flex items-center gap-2 text-white text-sm font-bold hover:text-white hover:bg-primary hover:border-primary transition-colors bg-surface-dark px-6 py-3 rounded-full border border-white/10" href={paths.lineup}>
						VIEW FULL LINEUP <span className="material-symbols-outlined text-lg">arrow_forward</span>
					</Link>
				</div>
			</div>
		</section>
	);
}