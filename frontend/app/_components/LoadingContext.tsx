"use client";

import React, { createContext, useContext, useState } from "react";
import LoadingPage from "./LoadingPage";

export const LoadingContext = createContext<LoadingContextType | null>(null);

export function LoadingProvider({children}: {children: React.ReactNode}) {
	const [isLoading, setIsLoading] = useState(true);

	return <LoadingContext.Provider value={{setIsLoading}}>
		{ isLoading && <LoadingPage />}
		{children}
	</LoadingContext.Provider>
};

type LoadingContextType = {
	setIsLoading: (state: boolean) => void
}

export function useLoading() {
	const loading = useContext(LoadingContext);
	if (!loading) throw new Error();
	return loading;
}