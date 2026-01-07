import { cookies } from "next/headers";

export async function isSignedIn() {
	const cookieStore = await cookies();
	const token = cookieStore.get("auth_token");

	return Boolean(token);
}

export async function isAdmin() {
	await new Promise(resolve => setTimeout(resolve, 1500));
	const isLoggedIn = await isSignedIn();
	if (!isLoggedIn)
		return false;
	return true;
}