import { cookies } from "next/headers";

/**
 * Presence-only check for the pyscn-bot session cookie, used to switch CTA
 * copy/links between "log in" and "my account". This does NOT verify the
 * JWT — that verification happens server-side on the Go backend when the
 * account/billing endpoints are called. It exists purely for UX.
 */
export async function isPyscnBotLoggedIn(): Promise<boolean> {
	const store = await cookies();
	return !!store.get("session")?.value;
}
