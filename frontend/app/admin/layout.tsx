"use client";

import Navbar from "./_components/Navbar";
import { useAuthContext } from "@/app/_components/AuthContext";
import { isTokenAdmin } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "../_components/LoadingPage";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const { accessToken } = useAuthContext();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean | null>(null);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			if (!accessToken) {
				router.replace("/");
				return;
			}
			if (!isTokenAdmin(accessToken)) {
				router.replace("/");
				return;
			}
			setIsLoading(false);
		})();
	}, [accessToken, router]);

	if (isLoading)
		return <LoadingPage />
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}