"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import BotWordmark from "./BotWordmark";
import Logo from "./icons/Logo";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationProps {
	isLoggedIn: boolean;
}

export default function Navigation({ isLoggedIn }: NavigationProps) {
	const t = useTranslations();
	const pathname = usePathname();
	const isHomePage = pathname === "/pyscn-bot";

	const featuresHref = isHomePage ? "#features" : "/pyscn-bot#features";
	const pricingHref = isHomePage ? "#pricing" : "/pyscn-bot#pricing";
	const mypageHref = isLoggedIn
		? "/pyscn-bot/account"
		: "/pyscn-bot/api/auth?plan=free";

	return (
		<nav className="fixed top-0 w-full bg-[var(--bg-body)]/90 backdrop-blur border-b border-[var(--border-light)] z-50">
			<div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
				<Link href="/pyscn-bot" className="flex items-center gap-1 group">
					<Logo className="w-10 h-10" />
					<BotWordmark className="text-xl" />
				</Link>
				<div className="flex items-center gap-4 lg:gap-6">
					<a
						href={featuresHref}
						className="text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors hidden md:block font-mono text-xs uppercase tracking-[0.15em]"
					>
						{t("nav.features")}
					</a>
					<Link
						href="/pyscn-bot/how-it-works"
						className="text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors hidden md:block font-mono text-xs uppercase tracking-[0.15em]"
					>
						{t("nav.howItWorks")}
					</Link>
					<a
						href={pricingHref}
						className="text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors hidden md:block font-mono text-xs uppercase tracking-[0.15em]"
					>
						{t("nav.pricing")}
					</a>
					<Link
						href="/pyscn-bot/contact"
						className="text-[var(--text-secondary)] hover:text-[var(--brand-blue)] transition-colors hidden md:block font-mono text-xs uppercase tracking-[0.15em]"
					>
						{t("nav.contact")}
					</Link>
					<LanguageSwitcher />
					{isLoggedIn ? (
						<Link
							href="/pyscn-bot/account"
							className="hidden sm:flex items-center gap-1.5 border border-[var(--brand-blue)] bg-[var(--brand-blue)] text-white px-4 py-2 text-sm font-medium hover:bg-[var(--brand-blue-hover)] transition-colors"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							{t("nav.mypage")}
						</Link>
					) : (
						<a
							href={mypageHref}
							className="hidden sm:flex items-center gap-1.5 border border-[var(--brand-blue)] bg-[var(--brand-blue)] text-white px-4 py-2 text-sm font-medium hover:bg-[var(--brand-blue-hover)] transition-colors"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
								/>
							</svg>
							{t("nav.mypage")}
						</a>
					)}
				</div>
			</div>
		</nav>
	);
}
