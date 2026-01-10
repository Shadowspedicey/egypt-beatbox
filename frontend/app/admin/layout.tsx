"use client";

import Navbar from "./_components/Navbar";
import { useAuthContext } from "@/app/_components/AuthContext";
import { isTokenAdmin } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingPage from "../_components/LoadingPage";
import { useLoading } from "../_components/LoadingContext";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	const { accessToken } = useAuthContext();
	const router = useRouter();
	const { setIsLoading } = useLoading();

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
	}, [accessToken, router, setIsLoading]);

	return (
		<>
			<Navbar />
			{children}
		</>
	);
}