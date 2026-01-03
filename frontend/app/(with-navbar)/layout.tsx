import { isSignedIn } from "@/lib/auth"
import Navbar from "../_components/Navbar"

export default async function LayoutWithNavbar({
	children,
}: {
	children: React.ReactNode
}) {
	const isLoggedIn = await isSignedIn();

	return (
		<>
			<Navbar isLoggedIn={isLoggedIn}/>
			{children}
		</>
	)
}