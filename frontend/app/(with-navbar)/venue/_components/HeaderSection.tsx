"use client";

import Image from "next/image";
import venueData from "./venue.json";
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";
import { Slide } from "@mui/material";

export default function HeaderSection() {
	const [snackbarOpen, setSnackbarOpen] = useState(false);

	return (
		<section className="relative flex h-[70vh] min-h-125 w-full items-end justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/50 to-transparent z-10"></div>
				<Image fill alt="Concert crowd with stage lights and energetic atmosphere" className="h-full w-full object-cover opacity-80" data-alt="Crowd cheering at a concert venue with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsFxbPj1xYzsA7EVNI4xoKLZ7bwRDA-seiHZ5KJpIn-4KLPYaM3BXHM2FxQr7JTiIWdRMd0Y1Gw04SNAj6UlgKImVmjVDxbr3uneIThw28o3W9fGdwnf2fI2fIO7S8sdRReH1oaniYM5xZBneUj4NmHM_MvCHrnMroyyAJNOdgjZGZuWM5OW2h-uqEUIr0NfhuJ7i3jKuchwHoYLGUvQo8XU0-lnQXmqRWK-NEHKv5ABHx2_-nlTLZtKBioWoRPKvajAbCQsal6jwv" />
			</div>
			<div className="relative z-20 flex w-full max-w-5xl flex-col items-center px-4 pb-16 text-center sm:px-6 lg:px-8">
				<div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary backdrop-blur-sm">
					<span className="material-symbols-outlined text-[16px]">location_on</span>
					Venue Information
				</div>
				<h1 className="mb-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
					Vibe Studio
				</h1>
				<p className="mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
					7 Mossadak, Dokki, Giza
				</p>
				<div className="flex flex-col gap-4 sm:flex-row">
					<a href={venueData.mapLink} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 hover:bg-primary-dark">
						<span className="material-symbols-outlined">map</span>
						Open in Maps
					</a>
					<button onClick={() => {navigator.clipboard.writeText(venueData.mapLink); setSnackbarOpen(true)}} className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 cursor-pointer">
						<span className="material-symbols-outlined">share</span>
						Share Location
					</button>
				</div>
			</div>
			<Snackbar
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={snackbarOpen}
				onClose={() => setSnackbarOpen(false)}
				autoHideDuration={2500}
				slots={{transition: Slide}}
				message="📋 Venue maps link copied to clipboard."
			/>
		</section>
	);
}