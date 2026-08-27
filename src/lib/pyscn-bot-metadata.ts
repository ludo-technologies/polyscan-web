import { getSiteUrl } from "@/lib/site-url";

const LOCALES = ["en", "ja", "zh"] as const;

function localizedPath(locale: string, path: string): string {
	return locale === "en" ? path : `/${locale}${path}`;
}

/**
 * Builds `alternates.canonical` (self-referencing, per current locale) and
 * `alternates.languages` (hreflang, one entry per supported locale plus
 * x-default) for a Polyscan page. `path` is the unprefixed pathname, e.g.
 * "/pyscn-bot" or "/pyscn-bot/how-it-works".
 */
export function pyscnBotAlternates(locale: string, path: string) {
	const siteUrl = getSiteUrl();
	const languages: Record<string, string> = {
		"x-default": `${siteUrl}${path}`,
	};
	for (const l of LOCALES) {
		languages[l] = `${siteUrl}${localizedPath(l, path)}`;
	}
	return {
		canonical: `${siteUrl}${localizedPath(locale, path)}`,
		languages,
	};
}
