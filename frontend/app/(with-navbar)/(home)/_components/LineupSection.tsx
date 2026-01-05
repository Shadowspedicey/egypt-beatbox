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
					<div className="group relative cursor-pointer">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of a male beatboxer looking intense" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjdxS9vDBQ9mXuER8l5MguYN-YCbp-szDwz4HVfMZIaU2WZoypvxKYh9iuVPXfAiI33O0KARzB4eUXtJZq6up6lHW9Ct1-azMP0bpkiPornrtdj_hlNdi99yIZsl28gc90N1BFnFdPMboGezL6K5GyLDDiEQONGXYcajXC2ctfFzUNlEnvL0nN7l9Cyt189q6b4f20YMq7xDs_SxjBFklkPCtUuOd2q1wh2MfIfFeeJ89_HJMDeSAScajRJmCtwq6oPoBWoOZn0A4U" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">United Kingdom</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Reeps One</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</div>
					<div className="group relative cursor-pointer lg:mt-16">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of a female beatboxer with microphone" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2pp31cQUDcZhihbUPWk9ItZQh4Opt11eLX1so9Pl4zaicdO3KBY9_efXq6xYPnyr87wXnx0w3EZR9rjQp_gqrTMgPyaH1DZP5fT0dXDSzzW-ZK9nmBl2me2gg4HlTHHnoqtwMgaCyM7PDvdRAlsXAfPkpx_-_qR14-NxvSBidpBzqUUZchL1Pa0OyW5iQSLctAa-33CKibhphEbZ07n7NWnmey2oNhYg9aRAXliHCbG1f6ioN_b2BnIbeLsjgaMhk4nMzlxcuhrV-" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">USA</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Kaila</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</div>
					<div className="group relative cursor-pointer">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of a male beatboxer performing" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBFL6kBHL0g4215rowWvYBr25w9yOqJXhZDvPp7vhHwoZcA0626u1Nx9ZI9UWIyJLg_IoUK6aQREeE4UPKXNHB6PVr_nEjYioF0YRlRBMCQgEaawoSQlTL4RJ3FWA4HV8bJihHVoqnF3AYBtXyb9u_3qrtInvuX-FH4vKKFsOiUE35wefZ4BVol1G-uXYD0XPCKHtPKXXmHdXtCiwZfpaOaDgZ6rWJk0fNbuGRYe0UNQNHBT78vJIXDQgIreEAekIAU4nLbi9n-DqZ" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">Australia</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">Tom Thum</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</div>
					<div className="group relative cursor-pointer lg:mt-16">
						<div className="relative w-full aspect-3/4 overflow-hidden rounded-[2rem] bg-surface-dark shadow-2xl border border-white/5 group-hover:border-primary/50 transition-colors duration-500">
							<Image fill alt="Portrait of a beatboxer in a hoodie" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9Ig7iWtRGAVfBJ6Hux4G2TsVae9KZ7A5qjqSGFZfnRkXAlx7R2q8TTMvcaUuDPewucwomUK43Cgq1_qusw3YqSTvReYFgTD4k-bLswmWSB7T_ItsIBt-bhT1BV_YVzNAe-3scgEm9LiN0w4FWHtuNEfrsKsAjJ0_IWyZ6UiaNGjFTn2AzzUTSYwHHlGri4XdQXvF21XG4Y0NVhSin1-Z3LP0SW5Ink976525RUlY3iLW7xgkF8Z680iNWLXNrrCnNA53mo3BFtuoK" />
							<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
							<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
								<p className="text-primary text-xs font-bold tracking-widest uppercase mb-1">USA</p>
								<h3 className="text-white text-3xl font-black uppercase italic leading-none mb-4">NaPoM</h3>
								<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(41,121,255,0.5)]">
									<span className="material-symbols-outlined">arrow_outward</span>
								</span>
							</div>
						</div>
					</div>
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