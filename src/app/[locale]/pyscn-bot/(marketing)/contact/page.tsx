import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/pyscn-bot/ContactForm";
import { Link } from "@/i18n/navigation";
import { pyscnBotAlternates } from "@/lib/pyscn-bot-metadata";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const { canonical, languages } = pyscnBotAlternates(
		locale,
		"/pyscn-bot/contact",
	);
	return {
		title: `${t("contact.title")} - Ludo Technologies`,
		description: t("contact.description"),
		alternates: { canonical, languages },
	};
}

export default async function ContactPage() {
	const t = await getTranslations();

	return (
		<main className="pt-24 pb-16">
			<div className="max-w-xl mx-auto px-6">
				<Link
					href="/pyscn-bot"
					className="inline-flex items-center gap-2 text-bot-primary-600 hover:text-bot-primary-700 mb-8"
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
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					{t("legal.backToHome")}
				</Link>

				<h1 className="text-4xl font-bold text-gray-900 mb-4">
					{t("contact.title")}
				</h1>
				<p className="text-gray-600 mb-8">{t("contact.description")}</p>

				<ContactForm />
			</div>
		</main>
	);
}
