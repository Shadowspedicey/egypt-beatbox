import { Metadata } from "next";
import SignUpForm from "./_components/SignUpForm";
import Link from "next/link";

export default function Page() {
	return (
		<div>
			<main className="flex min-h-screen flex-col-reverse lg:flex-row">
				<div className="relative w-full lg:w-5/12 xl:w-1/2 flex-none bg-[#181415] flex flex-col justify-end p-8 lg:p-12 overflow-hidden min-h-100">
					<div className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay grayscale" data-alt="Abstract dynamic crowd at a music event" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2ryA_KQHkwXJkfv6f_Qr50oP9htFIZBKufXbDJkGD0JszWo834bk3WU-Jsh4oK9fXMo5YRVsUAsgMjuiEGYLIbiL35S6aenE5s_mpDEL9go4G088uEZtUq8rnStzRMCQp9wQ2ESyX6UBQOzlWfe487WT6_TKtTJg5k0JaL4LVM1yps05U75xknBx2CAjgWM0snNqvjP5bIThdcqhqUNW9FS0Z4DZQ3SYA-bOTP6O_6iiE858ElBZbq2nRade28VItvvTtBR5RhGwt')" }}></div>
					<div className="absolute inset-0 z-0 bg-linear-to-t from-background-dark via-transparent to-background-dark/20"></div>
					<div className="relative z-10 flex flex-col gap-6">
						<div className="w-16 h-1 bg-white rounded-full mb-2"></div>
						<h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase">
							Unleash <br />
							<span className="text-gray-400">The Sound</span>
						</h1>
						<p className="text-gray-500 text-lg max-w-md">
							Secure your spot at the biggest beatbox event of the year. Join the community, track the battles, and witness history in the making.
						</p>
					</div>
				</div>
				<div className="w-full lg:w-7/12 xl:w-1/2 bg-background-dark flex flex-col justify-center px-4 py-10 sm:px-12 lg:px-20 xl:px-32">
					<div className="w-full max-w-lg mx-auto">
						<div className="mb-8">
							<h2 className="text-white text-3xl font-black tracking-tight mb-2">Create Account</h2>
							<p className="text-gray-500">Fill in your details below to get started.</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
							<a href="" className="flex items-center justify-center gap-3 h-12 bg-surface-dark border border-surface-border hover:border-white hover:bg-surface-dark/80 text-white rounded-full transition-all text-sm font-medium">
								<svg className="h-5 w-5" viewBox="0 0 24 24">
									<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
									<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
									<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
									<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
								</svg>
								Google
							</a>
							<a href="" className="flex items-center justify-center gap-3 h-12 bg-surface-dark border border-surface-border hover:border-white hover:bg-surface-dark/80 text-white rounded-full transition-all text-sm font-medium">
								<svg className="h-5 w-5 transition-all opacity-80 group-hover:opacity-100" viewBox="1.95 1.95 20 19.5">
									<path xmlns="http://www.w3.org/2000/svg" d="M22 12C22 6.47714 17.5229 1.99999 12 1.99999C6.47715 1.99999 2 6.47714 2 12C2 16.9913 5.65686 21.1283 10.4375 21.8785V14.8906H7.89844V12H10.4375V9.79687C10.4375 7.29062 11.9304 5.90624 14.2146 5.90624C15.3087 5.90624 16.4531 6.10155 16.4531 6.10155V8.56249H15.1921C13.9499 8.56249 13.5625 9.33333 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.8785C18.3431 21.1283 22 16.9913 22 12Z" fill="#0866FF" />
								</svg>
								Facebook
							</a>
						</div>
						<div className="relative flex py-2 items-center mb-6">
							<div className="grow border-t border-surface-border"></div>
							<span className="shrink-0 mx-4 text-gray-500 text-sm">Or continue with email</span>
							<div className="grow border-t border-surface-border"></div>
						</div>
						<SignUpForm />
						<div className="mt-8 text-center">
							<p className="text-gray-500 text-sm">
								Already have an account?
								<Link href="/" className="text-primary font-bold hover:underline transition-colors ml-1">Log In</Link>
							</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export const metadata: Metadata = {
  title: 'Egypt Beatbox | Signup',
  description: 'Sign up for Egypt Beatbox Championship and join Egypt’s official beatbox community. Compete, train, and connect with top beatboxers across Egypt.',
}