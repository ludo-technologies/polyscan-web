import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
	title: "Privacy Policy — polyscan",
	description:
		"How the polyscan website handles visitor information. The site is informational only: it has no accounts, and the analyzers themselves run entirely on your own machine.",
	alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "2026-07-26";

export default function PrivacyPage() {
	return (
		<main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
			<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
				Legal
			</p>
			<h1 className="mb-3 text-4xl font-black tracking-tight text-[var(--text-primary)] sm:text-5xl">
				Privacy Policy
			</h1>
			<p className="mb-12 text-sm text-[var(--text-muted)]">
				Last updated: {LAST_UPDATED}
			</p>

			<div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						1. Overview
					</h2>
					<p>
						This policy covers this website (&quot;the Site&quot;), operated by
						Ludo Technologies Inc. (&quot;we&quot;, &quot;us&quot;), a company
						headquartered in Kanagawa, Japan. The Site is informational: it
						documents the polyscan open source analyzers and related projects.
					</p>
					<p className="mt-3">
						There are no accounts and nothing to sign up for. The analyzers
						themselves — pyscn, jscan, and the shared core module — run entirely
						on your own machine or CI runner. We never receive your source code,
						your analysis results, or the names of the projects you analyze.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						2. Information we process
					</h2>
					<ul className="list-disc space-y-3 pl-5">
						<li>
							<strong className="text-[var(--text-primary)]">
								Usage analytics.
							</strong>{" "}
							When analytics are enabled, we use Google Analytics to understand
							which pages are visited and how visitors arrive. This uses cookies
							and processes technical details such as your IP address, browser,
							device type, referring page, and the pages you view. We use it
							only in aggregate, to decide what to document next.
						</li>
						<li>
							<strong className="text-[var(--text-primary)]">
								Hosting logs.
							</strong>{" "}
							The Site is hosted on Vercel, which records standard request logs
							— IP address, user agent, requested path, timestamp — for
							delivery, security, and abuse prevention.
						</li>
						<li>
							<strong className="text-[var(--text-primary)]">
								Email you send us.
							</strong>{" "}
							If you contact us, we process your message and your email address
							in order to reply.
						</li>
					</ul>
					<p className="mt-4">
						We do not sell personal information, and we do not use it for
						advertising or profiling.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						3. Third-party services
					</h2>
					<p>
						The Site relies on a small number of providers that process data on
						our behalf or as independent controllers: Vercel (hosting) and
						Google Analytics (usage measurement). Web fonts are self-hosted at
						build time, so loading a page makes no request to a font CDN. Links
						to GitHub, PyPI, and npm are ordinary outbound links — once you
						follow one, that site&apos;s own privacy policy applies.
					</p>
					<p className="mt-3">
						These providers may store data outside Japan, including in the
						United States, and are bound by their own terms and privacy
						policies.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						4. Cookies
					</h2>
					<p>
						The Site sets no cookies of its own. Analytics cookies are set only
						when analytics are enabled. You can block or delete them in your
						browser, or install the{" "}
						<a
							href="https://tools.google.com/dlpage/gaoptout"
							target="_blank"
							rel="noopener noreferrer"
							className="font-medium text-[var(--brand-blue)] hover:underline"
						>
							Google Analytics Opt-out Browser Add-on
						</a>
						. The Site works normally without them, and we never use cookies for
						advertising.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						5. Retention
					</h2>
					<p>
						Analytics data is retained according to the retention period
						configured in Google Analytics. Hosting logs are retained for the
						period set by our hosting provider and then rotated out. Email
						correspondence is kept as long as needed to handle your enquiry and
						to keep a record of it.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						6. Your rights
					</h2>
					<p>
						Depending on where you live, you may have the right to request
						access to, correction of, or deletion of personal information we
						hold about you, and to object to certain processing. Because the
						Site holds so little, such a request will usually concern analytics
						data or email correspondence. Contact us at the address below and we
						will respond within a reasonable period.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						7. Children
					</h2>
					<p>
						The Site is intended for software developers and is not directed at
						children. We do not knowingly collect personal information from
						children.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						8. Changes
					</h2>
					<p>
						We may update this policy as the Site changes. The &quot;last
						updated&quot; date above always reflects the current version. If we
						add a feature that processes materially more information, we will
						say so here before it launches.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						9. Contact
					</h2>
					<p>
						Questions about this policy:{" "}
						<a
							href={`mailto:${LINKS.contactEmail}`}
							className="font-medium text-[var(--brand-blue)] hover:underline"
						>
							{LINKS.contactEmail}
						</a>
						.
					</p>
				</section>
			</div>

			<div className="mt-16 border-t border-[var(--border-subtle)] pt-6">
				<Link
					href="/"
					className="text-sm font-medium text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-blue-hover)]"
				>
					← Back to home
				</Link>
			</div>
		</main>
	);
}
