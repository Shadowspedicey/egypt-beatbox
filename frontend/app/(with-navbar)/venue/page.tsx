import HeaderSection from "./_components/HeaderSection";

export default function Page() {
	return (
		<main className="grow">
			<HeaderSection />
			{/* Perks section */}
			{/* <section className="relative z-20 -mt-8 px-4 sm:px-6">
				<div className="mx-auto max-w-5xl">
					<div className="grid grid-cols-2 gap-4 rounded-xl border border-white/5 bg-surface-dark p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-4 sm:gap-6 md:p-6">
						<div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
							<span className="material-symbols-outlined text-3xl text-primary">local_parking</span>
							<span className="text-sm font-semibold text-gray-200">Parking Available</span>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
							<span className="material-symbols-outlined text-3xl text-primary">accessible</span>
							<span className="text-sm font-semibold text-gray-200">Wheelchair Access</span>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
							<span className="material-symbols-outlined text-3xl text-primary">wine_bar</span>
							<span className="text-sm font-semibold text-gray-200">Bar &amp; Food</span>
						</div>
						<div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white/5 p-4 text-center transition-colors hover:bg-white/10">
							<span className="material-symbols-outlined text-3xl text-primary">directions_subway</span>
							<span className="text-sm font-semibold text-gray-200">Sadat Station</span>
						</div>
					</div>
				</div>
			</section> */}
			<section className="px-4 py-16 sm:px-6">
				<div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
					<div className="group relative overflow-hidden rounded-2xl bg-surface-dark p-8 transition-all hover:bg-[#362d38]">
						<div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20"></div>
						<div className="relative z-10 flex h-full flex-col justify-between gap-6">
							<div>
								<div className="mb-4 inline-flex items-center gap-2 text-primary">
									<span className="material-symbols-outlined">directions_bus</span>
									<span className="text-sm font-bold uppercase tracking-widest">Getting There</span>
								</div>
								<h3 className="mb-2 text-2xl font-bold text-white">Public Transit</h3>
								<p className="text-gray-400">Take Metro Line 2 to Sadat Station. The venue is a 5-minute walk along the Corniche from the main exit.</p>
							</div>
						</div>
					</div>
					<div className="group relative overflow-hidden rounded-2xl bg-surface-dark p-8 transition-all hover:bg-[#362d38]">
						<div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20"></div>
						<div className="relative z-10 flex h-full flex-col justify-between gap-6">
							<div>
								<div className="mb-4 inline-flex items-center gap-2 text-primary">
									<span className="material-symbols-outlined">schedule</span>
									<span className="text-sm font-bold uppercase tracking-widest">Timing</span>
								</div>
								<h3 className="mb-2 text-2xl font-bold text-white">Event Schedule</h3>
								<ul className="space-y-2 text-gray-400">
									<li className="flex items-center justify-between border-b border-white/5 pb-2">
										<span>Doors Open</span>
										<span className="font-medium text-white">12 PM</span>
									</li>
									<li className="flex items-center justify-between pt-2">
										<span>Main Event</span>
										<span className="font-medium text-white">2 PM</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="pb-16 px-4 sm:px-6">
				<div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-surface-dark">
					<div className="relative aspect-21/9 w-full bg-surface-dark">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.873155652733!2d31.2089717!3d30.040496700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458412ccd71ccd1%3A0xd6b2e11dbc207b70!2sVibe%20for%20Developing%20Arts!5e0!3m2!1sen!2seg!4v1767661381478!5m2!1sen!2seg" width="100%" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>
				</div>
			</section>
		</main>
	);
}