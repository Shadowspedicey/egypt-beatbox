import { isAdmin } from "@/lib/auth";
import Navbar from "./_components/Navbar";
import { redirect } from "next/navigation";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	if (!(await isAdmin()))
		redirect("/");
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}