"use client";

import Navbar from "../_components/Navbar";

export default function LayoutWithNavbar({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}