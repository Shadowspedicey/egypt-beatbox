import TicketsSection from "./_components/TicketsSection";
import LineupSection from "./_components/LineupSection";
import HeroSection from "./_components/HeroSection";
import CountdownSection from "./_components/CountdownSection";
import { Metadata } from "next";

export default function Page() {
	return (
		<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
			<HeroSection />
			<CountdownSection />
			<LineupSection />
			<TicketsSection />
		</div>
	);
};

export const metadata: Metadata = {
	title: "Home"
}