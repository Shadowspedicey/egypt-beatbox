import Link from "next/link";
import HeaderSection from "./_components/Header";
import LoginForm from "./_components/LoginForm";
import { Metadata } from "next";

export default async function Page() {
	return (
		<div className="relative flex w-full flex-col bg-background-dark overflow-x-hidden min-h-screen ring-white/10 mx-auto">
			<HeaderSection />
			<div className="flex-1 flex flex-col px-6 pt-4 pb-8 w-full max-w-6xl mx-auto">
				<div className="mb-6 text-center">
					<h2 className="text-white tracking-tight text-xl font-bold">
						Welcome Back
					</h2>
				</div>
				<LoginForm />
				<div className="relative py-8">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-white/10"></div>
					</div>
					<div className="relative flex justify-center">
						<span className="bg-background-dark px-4 text-xs text-gray-500 font-medium tracking-wide">OR CONTINUE WITH</span>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<a href="" className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-surface-border bg-surface-dark hover:border-primary hover:bg-white! group transition-all duration-300">
						<svg className="h-5 w-5 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" viewBox="0 0 24 24">
							<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
							<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
							<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
							<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
						</svg>
					</a>
					<a href="" className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-surface-border bg-surface-dark hover:border-primary hover:bg-white! group transition-all duration-300">
						<svg className="h-5 w-5 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" viewBox="1.95 1.95 20 19.5">
							<path xmlns="http://www.w3.org/2000/svg" d="M22 12C22 6.47714 17.5229 1.99999 12 1.99999C6.47715 1.99999 2 6.47714 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79687C10.4375 7.29062 11.9304 5.90624 14.2146 5.90624C15.3087 5.90624 16.4531 6.10155 16.4531 6.10155V8.56249H15.1921C13.9499 8.56249 13.5625 9.33333 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z" fill="#0866FF"/>
						</svg>
					</a>
				</div>
				<div className="mt-auto pt-6 text-center">
					<p className="text-sm text-gray-400">
						Dont have an account yet?
						<Link href="/signup" className="font-bold text-primary hover:text-white transition-colors"> Sign up!</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export const metadata: Metadata = {
  title: "Egypt Beatbox | Login",
  description: "Log in to your Egypt Beatbox Championship account to manage your profile, events, and competitions.",
}
