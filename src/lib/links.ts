/**
 * External destinations referenced across the site. Kept in one place so the
 * docs host can be swapped to docs.codescan.dev without hunting through pages.
 */
export const LINKS = {
	monorepo: "https://github.com/ludo-technologies/polyscan",
	pyscn: "https://github.com/ludo-technologies/pyscn",
	/** Pyscn Bot's own landing page and checkout, served from the ludo-landing repo. */
	pyscnBot: "https://pyscn.ludo-tech.org",
	pyscnBotRepo: "https://github.com/ludo-technologies/pyscn-bot",
	jscan: "https://github.com/ludo-technologies/polyscan/tree/main/jscan",
	core: "https://github.com/ludo-technologies/polyscan/tree/main/core",
	pypi: "https://pypi.org/project/pyscn/",
	npm: "https://www.npmjs.com/package/jscan",
	docs: "https://docs.codescan.dev/",
	org: "https://ludo-tech.org",
	contactEmail: "contact@ludo-tech.org",
} as const;
