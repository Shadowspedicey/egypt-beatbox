export default function SalesChart() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
			<div className="lg:col-span-2 bg-card-dark rounded-xl border border-white/5 p-6 md:p-8 shadow-lg shadow-black/20">
				<div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4">
					<div>
						<h3 className="text-lg font-bold text-white">Sales Velocity</h3>
						<p className="text-gray-400 text-sm">Revenue generated over the last 30 days</p>
					</div>
					<div className="flex flex-col items-end">
						<span className="text-2xl font-bold text-white">$12,450</span>
						<span className="text-sm font-medium text-green-400 flex items-center gap-1">
							<span className="material-symbols-outlined text-sm">trending_up</span> +15% vs last month
						</span>
					</div>
				</div>
				<div className="relative w-full h-64">
					<svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
						<defs>
							<linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
								<stop offset="0%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0.2 }}></stop>
								<stop offset="100%" style={{ stopColor: "var(--color-primary)", stopOpacity: 0 }}></stop>
							</linearGradient>
						</defs>
						<line className="text-white/5" stroke="currentColor" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="800" y1="150" y2="150"></line>
						<line className="text-white/5" stroke="currentColor" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="800" y1="100" y2="100"></line>
						<line className="text-white/5" stroke="currentColor" stroke-dasharray="4 4" stroke-width="1" x1="0" x2="800" y1="50" y2="50"></line>
						<path className="fill-primary/10" d="M0,150 C100,150 150,80 200,80 C250,80 300,120 350,120 C400,120 450,40 500,40 C550,40 600,90 650,90 C700,90 750,20 800,20 V200 H0 Z" style={{ fill: "url(#gradient)" }}></path>
						<path className="stroke-primary" d="M0,150 C100,150 150,80 200,80 C250,80 300,120 350,120 C400,120 450,40 500,40 C550,40 600,90 650,90 C700,90 750,20 800,20" fill="none" stroke-linecap="round" stroke-width="3"></path>
						<circle className="fill-card-dark stroke-primary" cx="200" cy="80" r="5" stroke-width="2"></circle>
						<circle className="fill-card-dark stroke-primary" cx="500" cy="40" r="5" stroke-width="2"></circle>
						<circle className="fill-card-dark stroke-primary" cx="800" cy="20" r="5" stroke-width="2"></circle>
					</svg>
					<div className="flex justify-between mt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
						<span>Week 1</span>
						<span>Week 2</span>
						<span>Week 3</span>
						<span>Week 4</span>
					</div>
				</div>
			</div>
			<div className="bg-card-dark rounded-xl border border-white/5 p-6 md:p-8 flex flex-col shadow-lg shadow-black/20">
				<h3 className="text-lg font-bold text-white mb-6">Ticket Types</h3>
				<div className="flex flex-col gap-6 flex-1 justify-center">
					<div className="flex flex-col gap-2">
						<div className="flex justify-between text-sm font-medium mb-1">
							<span className="text-gray-300">Standard Access</span>
							<span className="text-white font-bold">850 / 1200</span>
						</div>
						<div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
							<div className="bg-primary w-[70%] h-3 rounded-full shadow-[0_0_10px_rgba(41,121,255,0.4)]"></div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between text-sm font-medium mb-1">
							<span className="text-gray-300">VIP Experience</span>
							<span className="text-white font-bold">450 / 500</span>
						</div>
						<div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
							<div className="bg-white/40 w-[90%] h-3 rounded-full"></div>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex justify-between text-sm font-medium mb-1">
							<span className="text-gray-300">Backstage Pass</span>
							<span className="text-white font-bold">150 / 300</span>
						</div>
						<div className="w-full bg-white/5 rounded-full h-3 overflow-hidden">
							<div className="bg-white/20 w-1/2 h-3 rounded-full"></div>
						</div>
					</div>
				</div>
				<button className="mt-6 w-full py-3 rounded-lg border border-white/10 text-sm font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
					Manage Allocations
				</button>
			</div>
		</div>
	)
}