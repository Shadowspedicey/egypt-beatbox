"use client";

import { useAuthContext } from "@/app/_components/AuthContext";
import { useLoading } from "@/app/_components/LoadingContext";
import { setRefreshTokenClient } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SignUpForm() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { setAccessToken } = useAuthContext();
	const { setIsLoading } = useLoading();
	const router = useRouter();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		if (password != confirmPassword)
			return alert("Passwords don't match.");
		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					phoneNumber,
					password,
				}),
				credentials: "omit",
			});

			if (!res.ok) throw new Error(await res.json());
			const data = await res.json();
			setRefreshTokenClient(data.refreshToken);
			setAccessToken(data.token ?? null);
			router.push("/");
			await new Promise(resolve => setTimeout(resolve, 1000));
		} catch (err) {
			console.error(err);
			alert("Signup failed");
		}
		setIsLoading(false);
	};

	return (
		<form className="flex flex-col gap-5" onSubmit={onSubmit}>
			<div className="flex flex-col sm:flex-row gap-5">
				<label className="flex flex-col flex-1 group" htmlFor="first-name">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">First Name</span>
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 px-5 text-base transition-colors" placeholder="Enter first name" type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.currentTarget.value)} />
				</label>
				<label className="flex flex-col flex-1 group" htmlFor="last-name">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Last Name</span>
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 px-5 text-base transition-colors" placeholder="Enter last name" type="text" id="last-name" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />
				</label>
			</div>
			<label className="flex flex-col group" htmlFor="email">
				<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Email Address</span>
				<div className="relative">
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="name@example.com" type="email" id="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
					<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] group-focus-within:text-primary transition-colors">mail</span>
				</div>
			</label>
			<label className="flex flex-col group" htmlFor="phone-number">
				<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Phone Number</span>
				<div className="relative">
					<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="01000000000" type="text" id="phone-number" value={phoneNumber} onChange={e => setPhoneNumber(e.currentTarget.value)} />
					<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] group-focus-within:text-primary transition-colors">phone</span>
				</div>
			</label>
			<div className="flex flex-col sm:flex-row gap-5">
				<label className="flex flex-col flex-1 group" htmlFor="password">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Password</span>
					<div className="relative">
						<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="8+ characters" type="password" id="password" autoComplete="new-password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
						<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-[20px] group-focus-within:text-primary transition-colors">lock</span>
					</div>
				</label>
				<label className="flex flex-col flex-1 group" htmlFor="confirm-password">
					<span className="text-white text-sm font-medium leading-normal pb-2 ml-1 group-focus-within:text-primary transition-colors">Confirm Password</span>
					<div className="relative">
						<input className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-surface-border bg-surface-dark focus:border-primary h-12 placeholder:text-white/40 pl-11 pr-5 text-base transition-colors" placeholder="Repeat password" type="password" id="confirm-password" autoComplete="new-password" value={confirmPassword} onChange={e => setConfirmPassword(e.currentTarget.value)} />
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