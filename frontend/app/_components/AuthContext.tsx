"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
	refreshAccessToken,
	setLogoutHandler,
	setAccessToken as libSetAccessToken,
	clearAuth,
	setRefreshTokenClient,
} from "@/lib/auth";
import LoadingPage from "./LoadingPage";

type AuthContextType = {
	accessToken: string | null;
	isLoggedIn: boolean;
	setAccessToken: (token: string | null) => void;
	logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [accessToken, setAccessTokenLocal] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const isLoggedIn = Boolean(accessToken);

	// wrapper to keep lib/auth and local state in sync
	const setAccessToken = (token: string | null) => {
		setAccessTokenLocal(token);
		libSetAccessToken(token);
	};

	const logout = useCallback(async () => {

		clearAuth();

		try {
			const bc = new BroadcastChannel("auth");
			bc.postMessage("logout");
			bc.close();
		} catch { }

		setAccessToken(null);
		setRefreshTokenClient(null);
		router.push("/login");
	}, [router]);

	useEffect(() => {
		(async () => {
		  try {
		    const token = await refreshAccessToken();
		    setAccessToken(token);
		  } catch {
		    setAccessToken(null);
		  } finally {
			setIsLoading(false);
		  }
		})();
	}, [])


	useEffect(() => {
		// register logout handler so lib/api can call it
		setLogoutHandler(logout);

		// listen for logout in other tabs
		let bc: BroadcastChannel | null = null;
		try {
			bc = new BroadcastChannel("auth");
			bc.onmessage = (e) => {
				if (e.data === "logout") {
					setAccessToken(null);
					router.push("/login");
				}
			};
		} catch { }

		return () => bc?.close();
	}, [logout, router]);

	if (isLoading)
		return <LoadingPage />
	return (
		<AuthContext.Provider value={{ accessToken, setAccessToken, logout, isLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuthContext = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("AuthContext missing");
	return ctx;
};
