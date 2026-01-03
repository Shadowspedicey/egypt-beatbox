export default function HeaderSection() {
	return <div className="relative w-full h-[35vh] min-h-70 flex flex-col justify-end shrink-0">
		<div className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-40 mix-blend-luminosity" data-alt="Monochrome stage spotlight">
		</div>
		<div className="absolute inset-0 bg-linear-to-b from-primary/10 via-background-dark/90 to-background-dark"></div>
		<div className="relative z-10 px-6 pb-2 text-center flex flex-col items-center">
			<div className="h-20 w-20 bg-white rounded-full flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(41,121,255,0.3)] ring-4 ring-primary/20">
				<span className="material-symbols-outlined text-primary text-5xl">graphic_eq</span>
			</div>
			<h1 className="text-4xl font-black tracking-tighter text-white uppercase drop-shadow-md">
				EGYPT BEATBOX
			</h1>
			<div className="flex items-center gap-2 mt-2">
				<div className="h-px w-8 bg-primary/50"></div>
				<p className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
					Championship 2026
				</p>
				<div className="h-px w-8 bg-primary/50"></div>
			</div>
		</div>
	</div>
}