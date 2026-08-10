import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
	// Scoped to the polyscan Bot section only — the rest of the site (/, /blog,
	// /privacy, /terms, etc.) must never pass through next-intl's middleware.
	// /pyscn-bot/api/* is excluded because it's rewritten to the Go backend
	// (see next.config.ts); letting next-intl touch it would locale-prefix
	// the proxied path and break the rewrite.
	matcher: [
		"/pyscn-bot",
		"/pyscn-bot/((?!api/).*)",
		"/(ja|zh)/pyscn-bot",
		"/(ja|zh)/pyscn-bot/((?!api/).*)",
	],
};
