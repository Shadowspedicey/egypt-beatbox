import Image from "next/image";

export default function LoadingPage() {
	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-background-dark select-none">
			<div className="relative w-50 left-1/2 -translate-x-1/2 h-full animate-breathe">
				<Image fill className="object-contain" src="/logo.jpg" alt="ass" />
			</div>
		</div>
	);
}