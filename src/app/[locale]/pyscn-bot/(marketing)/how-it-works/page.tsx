import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pyscnBotAlternates } from "@/lib/pyscn-bot-metadata";

const rich = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };
const richCodeStrong = {
	strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
	code: (chunks: React.ReactNode) => (
		<code className="bg-gray-100 px-1.5 py-0.5 rounded text-bot-primary-700 font-mono text-sm">
			{chunks}
		</code>
	),
};

const GITHUB_APP_INSTALL_URL = "https://github.com/apps/polyscan-app";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const { canonical, languages } = pyscnBotAlternates(
		locale,
		"/pyscn-bot/how-it-works",
	);
	return {
		title: `${t("tech.title")} - Polyscan`,
		description: t("tech.subtitle"),
		alternates: { canonical, languages },
	};
}

export default async function HowItWorksPage() {
	const t = await getTranslations();

	return (
		<main className="pt-24 pb-16">
			<div className="max-w-4xl mx-auto px-6">
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
					{t("tech.backToHome")}
				</Link>

				<header className="mb-20">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						{t("tech.title")}
					</h1>
					<p className="text-xl text-gray-600">{t("tech.subtitle")}</p>
				</header>

				{/* The Problem */}
				<section className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
						{t("tech.problem.title")}
					</h2>
					<div className="space-y-6 mb-16">
						<p className="text-lg text-gray-600 leading-relaxed">
							{t.rich("tech.problem.p1", rich)}
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							{t("tech.problem.p2")}
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							{t.rich("tech.problem.p3", rich)}
						</p>
					</div>
				</section>

				{/* The Solution */}
				<section className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
						{t("tech.solution.title")}
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed mb-12">
						{t.rich("tech.solution.p1", rich)}
					</p>

					<div className="space-y-8">
						<div className="bg-gradient-to-br from-bot-primary-50 to-white rounded-2xl p-8 border border-bot-primary-200">
							<div className="flex items-center gap-3 mb-4">
								<h3 className="font-bold text-gray-900 text-xl">
									{t("tech.features.audit.title")}
								</h3>
								<span className="bg-bot-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
									{t("tech.features.audit.badge")}
								</span>
							</div>
							<p className="text-gray-600 leading-relaxed">
								{t("tech.features.audit.desc")}
							</p>
						</div>

						<div className="bg-white rounded-2xl p-8 border border-gray-200">
							<div className="flex items-center gap-3 mb-4">
								<h3 className="font-bold text-gray-900 text-xl">
									{t("tech.features.review.title")}
								</h3>
								<span className="bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full">
									{t("tech.features.review.badge")}
								</span>
							</div>
							<p className="text-gray-600 leading-relaxed">
								{t("tech.features.review.desc")}
							</p>
						</div>
					</div>
				</section>

				{/* Dedicated analyzers per language */}
				<section className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
						{t("tech.languages.title")}
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed mb-10">
						{t.rich("tech.languages.p1", rich)}
					</p>

					<div className="grid md:grid-cols-3 gap-6">
						{(["item1", "item2", "item3"] as const).map((item) => (
							<div
								key={item}
								className="bg-gray-50 p-6 rounded-xl border border-gray-200"
							>
								<h4 className="font-bold text-gray-900 mb-3">
									{t(`tech.languages.${item}.title`)}
								</h4>
								<p className="text-gray-600 text-sm">
									{t(`tech.languages.${item}.desc`)}
								</p>
							</div>
						))}
					</div>
				</section>

				{/* Example Reviews */}
				<section className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
						{t("tech.example.title")}
					</h2>

					<div className="space-y-8">
						{[
							{
								id: "high-complexity",
								heading: t("tech.example.heading"),
								body: t.rich("tech.example.body", richCodeStrong),
								suggestion: t.rich("tech.example.suggestion", richCodeStrong),
							},
							{
								id: "code-clone",
								heading: t("tech.example2.heading"),
								body: t.rich("tech.example2.body", richCodeStrong),
								suggestion: t.rich("tech.example2.suggestion", richCodeStrong),
							},
						].map((example) => (
							<div
								key={example.id}
								className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg"
							>
								<div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
									<svg
										className="w-5 h-5 text-gray-500"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
									</svg>
									<span className="text-sm text-gray-600">
										{t("tech.example.label")}
									</span>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-2 mb-3">
										<span className="text-amber-500 text-lg">⚠️</span>
										<h3 className="font-bold text-gray-900">
											{example.heading}
										</h3>
									</div>
									<p className="text-gray-700 mb-4">{example.body}</p>
									<div className="bg-green-50 rounded-lg p-4 border border-green-200">
										<p className="text-green-800 text-sm">
											<strong>Suggestion:</strong>{" "}
											<span>{example.suggestion}</span>
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* How AI Agent Works */}
				<section className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
						{t("tech.agent.title")}
					</h2>
					<p className="text-lg text-gray-500 mb-6">
						{t("tech.agent.subtitle")}
					</p>
					<p className="text-lg text-gray-600 leading-relaxed mb-12">
						{t.rich("tech.agent.p1", rich)}
					</p>

					<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-12">
						<h3 className="font-bold text-gray-900 text-xl mb-8">
							{t("tech.agent.flow.title")}
						</h3>

						<div className="relative pl-10 border-l-2 border-bot-primary-200">
							{(["step1", "step2", "step3"] as const).map((step) => (
								<div key={step} className="relative mb-10">
									<div className="absolute -left-[29px] w-5 h-5 bg-bot-primary-500 rounded-full" />
									<p className="text-bot-primary-600 italic mb-2">
										&ldquo;{t(`tech.agent.flow.${step}.thought`)}&rdquo;
									</p>
									<code className="inline-block bg-gray-900 text-green-400 px-3 py-2 rounded text-sm font-mono">
										{t(`tech.agent.flow.${step}.tool`)}
									</code>
									<p className="text-gray-500 mt-2">
										→ {t(`tech.agent.flow.${step}.result`)}
									</p>
								</div>
							))}
							<div className="relative mb-6">
								<div className="absolute -left-[29px] w-5 h-5 bg-bot-primary-500 rounded-full" />
								<p className="text-bot-primary-600 italic">
									&ldquo;{t("tech.agent.flow.step4.thought")}&rdquo;
								</p>
							</div>
						</div>

						<div className="bg-green-50 rounded-xl p-6 border border-green-200 mt-8">
							<h4 className="font-bold text-green-800 text-lg mb-2">
								{t("tech.agent.flow.result.title")}
							</h4>
							<p className="text-green-700">
								{t("tech.agent.flow.result.desc")}
							</p>
						</div>
					</div>

					<div className="mb-12">
						<h3 className="font-bold text-gray-900 text-xl mb-4">
							{t("tech.agent.logic.title")}
						</h3>
						<p className="text-gray-600 leading-relaxed mb-4">
							{t("tech.agent.logic.p1")}
						</p>
						<p className="text-gray-600 leading-relaxed">
							{t("tech.agent.logic.p2")}
						</p>
					</div>

					<div className="bg-white rounded-2xl p-8 border border-gray-200">
						<h3 className="font-bold text-gray-900 text-xl mb-6">
							{t("tech.agent.tools.title")}
						</h3>
						<div className="space-y-5">
							{(
								[
									"complexity",
									"deadcode",
									"clones",
									"coupling",
									"architecture",
								] as const
							).map((tool) => (
								<div key={tool} className="flex items-start gap-4">
									<code className="bg-bot-primary-50 text-bot-primary-700 px-3 py-1 rounded text-sm font-mono flex-shrink-0">
										{t(`tech.agent.tools.${tool}.name`)}
									</code>
									<span className="text-gray-600">
										{t(`tech.agent.tools.${tool}.desc`)}
									</span>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Security */}
				<section className="mb-24">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
						{t("tech.security.title")}
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed mb-10">
						{t("tech.security.p1")}
					</p>

					<div className="space-y-6">
						{[
							{
								item: "item1",
								bg: "bg-blue-100",
								icon: "text-blue-600",
								path: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
							},
							{
								item: "item2",
								bg: "bg-green-100",
								icon: "text-green-600",
								path: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
							},
							{
								item: "item3",
								bg: "bg-purple-100",
								icon: "text-purple-600",
								path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
							},
						].map(({ item, bg, icon, path }) => (
							<div
								key={item}
								className="bg-gray-50 rounded-xl p-5 border border-gray-200"
							>
								<div className="flex items-start gap-4">
									<div
										className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center flex-shrink-0`}
									>
										<svg
											className={`w-5 h-5 ${icon}`}
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d={path}
											/>
										</svg>
									</div>
									<div>
										<h3 className="font-bold text-gray-900 mb-1">
											{t(`tech.security.${item}.title`)}
										</h3>
										<p className="text-gray-600">
											{t(`tech.security.${item}.desc`)}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<Link
						href="/pyscn-bot/privacy"
						className="inline-flex items-center gap-2 text-bot-primary-600 hover:text-bot-primary-700 mt-6"
					>
						{t("tech.security.link")}
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
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Link>
				</section>

				{/* CTA */}
				<section className="bg-gradient-to-br from-bot-primary-50 to-bot-primary-100 rounded-3xl p-10 md:p-16 text-center">
					<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
						{t("tech.cta.title")}
					</h2>
					<p className="text-lg text-gray-600 mb-10">{t("tech.cta.p1")}</p>
					<a
						href={GITHUB_APP_INSTALL_URL}
						className="inline-flex items-center gap-2 px-8 py-4 bg-bot-primary-600 text-white font-semibold rounded-xl hover:bg-bot-primary-700 transition-colors shadow-lg shadow-bot-primary-600/30"
					>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
						{t("tech.cta.button")}
					</a>
				</section>
			</div>
		</main>
	);
}
