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
		<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link href="/pyscn-bot" className="flex items-center gap-1 group">
					<Logo className="w-12 h-12 group-hover:scale-105 transition-transform" />
					<BotWordmark className="text-xl" />
				</Link>
				<div className="flex items-center gap-4 lg:gap-6">
					<a
						href={featuresHref}
						className="text-gray-600 hover:text-gray-900 transition-colors hidden md:block text-sm"
					>
						{t("nav.features")}
					</a>
					<Link
						href="/pyscn-bot/how-it-works"
						className="text-gray-600 hover:text-gray-900 transition-colors hidden md:block text-sm"
					>
						{t("nav.howItWorks")}
					</Link>
					<a
						href={pricingHref}
						className="text-gray-600 hover:text-gray-900 transition-colors hidden md:block text-sm"
					>
						{t("nav.pricing")}
					</a>
					<Link
						href="/pyscn-bot/contact"
						className="text-gray-600 hover:text-gray-900 transition-colors hidden md:block text-sm"
					>
						{t("nav.contact")}
					</Link>
					<LanguageSwitcher />
					{isLoggedIn ? (
						<Link
							href="/pyscn-bot/account"
							className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-bot-primary-500 to-bot-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-bot-primary-600 hover:to-bot-primary-700 transition-all shadow-md shadow-bot-primary-500/25"
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
							className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-bot-primary-500 to-bot-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-bot-primary-600 hover:to-bot-primary-700 transition-all shadow-md shadow-bot-primary-500/25"
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
