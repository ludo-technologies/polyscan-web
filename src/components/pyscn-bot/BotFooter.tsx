import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "./icons/Logo";

export default function BotFooter() {
	const t = useTranslations();

	return (
		<footer className="py-12 bg-gray-900 text-gray-400">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="flex items-center gap-2">
						<Logo className="w-10 h-10 text-gray-500" />
						<span className="font-semibold text-gray-300">Pyscn Bot</span>
					</div>
					<div className="flex flex-wrap items-center justify-center gap-6 text-sm">
						<a
							href="https://github.com/ludo-technologies/pyscn"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-200 transition-colors"
						>
							{t("footer.github")}
						</a>
						<Link
							href="/pyscn-bot/privacy"
							className="hover:text-gray-200 transition-colors"
						>
							{t("footer.privacy")}
						</Link>
						<Link
							href="/pyscn-bot/terms"
							className="hover:text-gray-200 transition-colors"
						>
							{t("footer.terms")}
						</Link>
						<Link
							href="/pyscn-bot/contact"
							className="hover:text-gray-200 transition-colors"
						>
							{t("nav.contact")}
						</Link>
						<a
							href="https://www.ludo-tech.org/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-200 transition-colors"
						>
							{t("footer.company")}
						</a>
					</div>
				</div>
				<div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
					<p className="text-gray-500">{t("footer.copyright")}</p>
				</div>
			</div>
		</footer>
	);
}
