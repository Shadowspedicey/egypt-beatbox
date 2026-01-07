import { isAdmin, isSignedIn } from "@/lib/auth"
import Navbar from "../_components/Navbar"

export default async function LayoutWithNavbar({
	children,
}: {
	children: React.ReactNode
}) {
	const isLoggedIn = await isSignedIn();
	const isUserAdmin = await isAdmin();

	return (
		<>
			<Navbar isLoggedIn={isLoggedIn} isAdmin={isUserAdmin}/>
			{children}
		</>
	)
}