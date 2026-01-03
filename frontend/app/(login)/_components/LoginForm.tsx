"use client";

import LoadingPage from "@/app/loading";
import { FormEvent, useState } from "react";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		// TODO: Login
		await new Promise(resolve => setTimeout(resolve, 5000));
		setIsLoading(false);
	}

	if (isLoading) return <LoadingPage />
	else return <form className="flex flex-col gap-5" onSubmit={onSubmit}>
		<label className="group flex flex-col gap-2">
			<p className="text-white/90 text-sm font-semibold ml-1">Email</p>
			<div className="relative transition-all group-focus-within:scale-[1.01]">
				<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
					<span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors text-[20px]">mail</span>
				</div>
				<input className="w-full h-14 bg-surface-dark border border-surface-border rounded-xl px-11 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium" placeholder="name@example.com" type="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
			</div>
		</label>
		<label className="group flex flex-col gap-2">
			<div className="flex justify-between items-center ml-1">
				<p className="text-white/90 text-sm font-semibold">Password</p>
				<a className="text-xs font-semibold text-gray-400 hover:text-primary! transition-colors" href="#">Forgot?</a>
			</div>
			<div className="relative transition-all group-focus-within:scale-[1.01]">
				<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
					<span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors text-[20px]">lock</span>
				</div>
				<input className="w-full h-14 bg-surface-dark border border-surface-border rounded-xl px-11 pr-12 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-medium" placeholder="••••••••" type={isPasswordVisible ? "text" : "password"} value={password} onChange={e => setPassword(e.currentTarget.value)} />
				<button className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-black transition-colors" type="button" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
					<span className="material-symbols-outlined text-[20px]">visibility</span>
				</button>
			</div>
		</label>
		<button className="mt-4 group relative flex w-full items-center justify-center overflow-hidden rounded-xl h-14 bg-primary! text-white text-base font-bold tracking-wide cursor-pointer hover:bg-primary-dark! active:scale-[0.98] transition-all">
			<span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity"></span>
			<span className="relative flex items-center gap-2">Log In<span className="material-symbols-outlined text-lg">arrow_forward</span></span>
		</button>
	</form>
}