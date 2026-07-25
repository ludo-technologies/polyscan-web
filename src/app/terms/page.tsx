import type { Metadata } from "next";
import Link from "next/link";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
	title: "Terms of Service — polyscan",
	description:
		"Terms for using the polyscan website. The analyzers themselves are open source and governed by the MIT License in their repositories.",
	alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "2026-07-26";

export default function TermsPage() {
	return (
		<main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
			<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
				Legal
			</p>
			<h1 className="mb-3 text-4xl font-black tracking-tight text-[var(--text-primary)] sm:text-5xl">
				Terms of Service
			</h1>
			<p className="mb-12 text-sm text-[var(--text-muted)]">
				Last updated: {LAST_UPDATED}
			</p>

			<div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						1. Acceptance of these terms
					</h2>
					<p>
						These Terms of Service (&quot;Terms&quot;) govern your use of this
						website (&quot;the Site&quot;), operated by Ludo Technologies Inc.
						(&quot;we&quot;, &quot;us&quot;). By accessing the Site you agree to
						these Terms. If you do not agree, do not use the Site.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						2. What the Site is
					</h2>
					<p>
						The Site is an informational website about polyscan and its
						analyzers. It documents what the software does, how to install it,
						and how to use it with AI coding agents. It does not process your
						code: the analyzers run locally on your own machine or CI runner.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						3. The software is licensed separately
					</h2>
					<p>
						These Terms cover the Site only. The polyscan analyzers, the shared
						core module, and the Agent Skills are open source and are licensed
						under the MIT License found in their respective repositories. Your
						rights to use, modify, and redistribute that software come from
						those licenses, not from these Terms, and nothing here restricts
						them.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						4. Site content and intellectual property
					</h2>
					<p>
						The text, layout, and graphics of the Site are owned by us or our
						licensors. You may quote and link to the Site with attribution. You
						may not copy it wholesale to present it as your own, or use our
						names and logos in a way that implies endorsement or affiliation
						that does not exist.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						5. Acceptable use
					</h2>
					<p>
						Do not attempt to disrupt or gain unauthorized access to the Site or
						its infrastructure, scrape it in a way that degrades service for
						others, or use it to distribute malware or unlawful content.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						6. No warranty
					</h2>
					<p>
						The Site is provided &quot;as is&quot; and &quot;as available&quot;,
						without warranties of any kind, express or implied, including
						merchantability, fitness for a particular purpose, and
						non-infringement. Documentation, benchmarks, and examples on the
						Site may be incomplete or out of date, and analysis results produced
						by the software are engineering signals rather than guarantees about
						the correctness, security, or quality of your code.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						7. Limitation of liability
					</h2>
					<p>
						To the maximum extent permitted by law, we are not liable for any
						indirect, incidental, special, consequential, or punitive damages,
						or for lost profits, lost data, or business interruption, arising
						out of your use of the Site or of decisions made on the basis of its
						content.
					</p>
					<p className="mt-3">
						To the extent we are found liable despite the above, our total
						aggregate liability for any claim related to the Site is limited to
						JPY 1,000. Some jurisdictions do not allow certain limitations of
						liability, in which case the limitations apply only to the extent
						permitted by law.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						8. Third-party links
					</h2>
					<p>
						The Site links to third-party destinations such as GitHub, PyPI, and
						npm. We do not control them and are not responsible for their
						content or practices. Their own terms apply once you follow a link.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						9. Changes to the Site or these Terms
					</h2>
					<p>
						We may change, suspend, or discontinue any part of the Site at any
						time. We may also update these Terms as the Site evolves or as the
						law requires; when we make material changes we will update the
						&quot;last updated&quot; date above. Continued use of the Site after
						a change indicates acceptance of the revised Terms.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						10. Governing law and venue
					</h2>
					<p>
						These Terms are governed by the laws of Japan, without regard to its
						conflict-of-laws rules. Any dispute arising out of or relating to
						these Terms or the Site will be submitted to the exclusive
						jurisdiction of the Yokohama District Court, Japan, as the court of
						first instance, except where applicable consumer protection law
						gives you a different non-waivable right.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						11. Miscellaneous
					</h2>
					<p>
						If any provision of these Terms is held to be unenforceable, the
						remaining provisions remain in full force and effect. Our failure to
						enforce a provision is not a waiver of our right to do so later. You
						may not assign these Terms without our consent. We may assign these
						Terms in connection with a reorganization or sale of our business.
					</p>
				</section>

				<section>
					<h2 className="mb-3 text-xl font-bold text-[var(--text-primary)]">
						12. Contact
					</h2>
					<p>
						Questions about these Terms:{" "}
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
