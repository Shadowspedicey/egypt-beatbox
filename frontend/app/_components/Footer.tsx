import Link from "next/link";
import { paths } from "./paths";

export default function Footer() {
	return (
		<footer className="mt-auto border-t border-surface-border bg-background-dark py-12 px-4 md:px-10">
			<div className="max-w-360 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2 text-white">
						<span className="font-bold">EG BBX</span>
					</div>
					<p className="text-gray-500 text-sm">Celebrating the art of human beatboxing in the heart of Egypt.</p>
				</div>
				<div>
					<h4 className="text-white font-bold mb-4">Event</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
						<li><Link className="hover:text-primary transition-colors" href={paths.tickets}>Tickets</Link></li>
						<li><Link className="hover:text-primary transition-colors" href={paths.lineup}>Lineup</Link></li>
						<li><Link className="hover:text-primary transition-colors" href={paths.venue}>Venue</Link></li>
					</ul>
				</div>
				<div><h4 className="text-white font-bold mb-4">Support</h4>
					<ul className="space-y-2 text-sm text-gray-400">
						<li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
						<li><a className="hover:text-primary transition-colors" href="#">FAQs</a></li>
						<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
					</ul>
				</div>
				{/* <div>
					<h4 className="text-white font-bold mb-4">Subscribe</h4>
					<div className="flex gap-2">
						<input className="bg-surface-dark border border-surface-border rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-primary" placeholder="Your email" type="email" />
						<button className="bg-primary text-white rounded-lg px-3 hover:bg-primary-dark transition-colors">
							<span className="material-symbols-outlined">send</span>
						</button>
					</div>
				</div> */}
			</div>
			<div className="flex flex-col md:flex-row justify-between gap-2 max-w-360 mx-auto mt-12 pt-8 border-t border-surface-border text-center text-sm text-gray-400">
				<div>Made by <a href="https://www.linkedin.com/in/ahmedkhaled1106" className="hover:text-red-900">Ahmed Khaled (Shadowspedicey)</a></div>
				<div>&copy; 2026 Egypt Beatbox. All rights reserved.</div>
			</div>
		</footer>
	);
}