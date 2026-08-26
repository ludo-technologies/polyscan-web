import Link from "next/link";
import { LINKS } from "@/lib/links";

const navLinks = [
	{ label: "Analyzers", href: "/#analyzers" },
	{ label: "Blog", href: "/blog" },
	{ label: "Docs", href: LINKS.docs, external: true },
	{ label: "GitHub", href: LINKS.monorepo, external: true },
];

export default function Header() {
	return (
		<header className="relative z-20 border-b border-[var(--border-light)] bg-[var(--bg-body)]/90 backdrop-blur">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
				<Link href="/" className="type-display inline-flex items-baseline">
					<span className="text-lg font-bold text-[var(--text-primary)]">
						poly
					</span>
					<span className="text-lg font-bold text-[var(--brand-blue)]">
						scan
					</span>
				</Link>
				<nav aria-label="Primary">
					<ul className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] sm:gap-6">
						{navLinks.map((link) => (
							<li key={link.href}>
								{link.external ? (
									<a
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-blue)]"
									>
										{link.label}
									</a>
								) : (
									<Link
										href={link.href}
										className="text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-blue)]"
									>
										{link.label}
									</Link>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
