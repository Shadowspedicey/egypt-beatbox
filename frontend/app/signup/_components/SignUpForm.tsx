"use client";

import { useLoading } from "@/app/_components/LoadingContext";
import { FormEvent, useState } from "react";

export default function SignUpForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { setIsLoading } = useLoading();

	const onSubmit = async (e: FormEvent) => {
		e.stopPropagation();
		setIsLoading(true);
		// TODO: validation
		// TODO: sign up logic
		await new Promise(resolve => setTimeout(resolve, 5000));
		setIsLoading(false);
	};

	return (
		<form className="flex flex-col gap-5" onSubmit={onSubmit}>
			<div className="flex flex-col sm:flex-row gap-5">
				<label className="flex flex-col flex-1 group">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">First Name</span>
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 px-5 text-base transition-colors" placeholder="Enter first name" type="text" value={firstName} onChange={e => setFirstName(e.currentTarget.value)} />
				</label>
				<label className="flex flex-col flex-1 group">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Last Name</span>
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 px-5 text-base transition-colors" placeholder="Enter last name" type="text" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />
				</label>
			</div>
			<label className="flex flex-col group">
				<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Email Address</span>
				<div className="relative">
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="name@example.com" type="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
					<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] group-focus-within:text-primary transition-colors">mail</span>
				</div>
			</label>
			<div className="flex flex-col sm:flex-row gap-5">
				<label className="flex flex-col flex-1 group">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Password</span>
					<div className="relative">
						<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="8+ characters" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
						<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] group-focus-within:text-primary transition-colors">lock</span>
					</div>
				</label>
				<label className="flex flex-col flex-1 group">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Confirm Password</span>
					<div className="relative">
						<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="Repeat password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.currentTarget.value)} />
						<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] group-focus-within:text-primary transition-colors">lock_reset</span>
					</div>
				</label>
			</div>
			<button className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-full h-12 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-dark shadow-[0_0_20px_rgba(41,121,255,0.3)] transition-all transform hover:scale-[1.01] active:scale-95">
				Create Account
			</button>
		</form>
	)
}