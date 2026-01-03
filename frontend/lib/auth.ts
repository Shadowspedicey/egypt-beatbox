import { cookies } from "next/headers";

export async function isSignedIn() {
	const cookieStore = await cookies();
	const token = cookieStore.get("auth_token");

	return Boolean(token);
}