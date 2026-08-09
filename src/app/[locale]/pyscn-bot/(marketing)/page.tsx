import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import FeatureAudit from "@/components/pyscn-bot/icons/FeatureAudit";
import FeaturePR from "@/components/pyscn-bot/icons/FeaturePR";
import Logo from "@/components/pyscn-bot/icons/Logo";
import MetricClones from "@/components/pyscn-bot/icons/MetricClones";
import MetricComplexity from "@/components/pyscn-bot/icons/MetricComplexity";
import MetricCoupling from "@/components/pyscn-bot/icons/MetricCoupling";
import MetricDeadCode from "@/components/pyscn-bot/icons/MetricDeadCode";
import { Link } from "@/i18n/navigation";
import { pyscnBotAlternates } from "@/lib/pyscn-bot-metadata";
import { isPyscnBotLoggedIn } from "@/lib/pyscn-bot-session";

const rich = { strong: (chunks: React.ReactNode) => <strong>{chunks}</strong> };

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const { canonical, languages } = pyscnBotAlternates(locale, "/pyscn-bot");
	return {
		title: "polyscan Bot - AI Code Review for Python & TypeScript",
		description: t("hero.description").replace(/<[^>]*>/g, ""),
		alternates: { canonical, languages },
	};
}

export default async function PyscnBotLandingPage() {
	const t = await getTranslations();
	const isLoggedIn = await isPyscnBotLoggedIn();

	return (
		<>
			{/* Hero Section */}
			<section className="pt-32 pb-20 bg-gradient-to-b from-bot-primary-50 to-white overflow-hidden">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<div className="inline-flex items-center gap-2 bg-bot-primary-100 text-bot-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-bot-primary-200 shadow-sm">
						<span className="w-2 h-2 bg-bot-primary-500 rounded-full animate-pulse" />
						{t("hero.badge")}
					</div>

					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
						{t("hero.title")}
						<br className="md:hidden" />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-bot-primary-500 to-bot-primary-700">
							{t("hero.titleHighlight")}
						</span>{" "}
						{t("hero.titleEnd")}
					</h1>

					<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
						{t.rich("hero.description", rich)}
					</p>

					{isLoggedIn ? (
						<Link
							href="/pyscn-bot/account"
							className="inline-flex items-center gap-3 bg-gradient-to-r from-bot-primary-500 to-bot-primary-700 text-white px-10 py-5 rounded-2xl text-xl font-bold mb-16 shadow-2xl shadow-bot-primary-600/40 hover:shadow-bot-primary-600/60 hover:-translate-y-1 transition-all"
						>
							<svg
								className="w-6 h-6"
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
							href="/pyscn-bot/api/auth?plan=free"
							className="inline-flex items-center gap-3 bg-gradient-to-r from-bot-primary-500 to-bot-primary-700 text-white px-10 py-5 rounded-2xl text-xl font-bold mb-16 shadow-2xl shadow-bot-primary-600/40 hover:shadow-bot-primary-600/60 hover:-translate-y-1 transition-all"
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							{t("trial.hero")}
						</a>
					)}

					<div className="block mt-10">
						<span className="bg-bot-primary-50 border border-bot-primary-200 rounded-xl px-6 py-4 text-base text-bot-primary-700 font-medium inline-block">
							{t("hero.freeNote")}
						</span>
					</div>
				</div>
			</section>

			{/* Differentiator Section */}
			<section className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("diff.title")}
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							{t("diff.subtitle")}
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
							<div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
								<svg
									className="w-6 h-6 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("diff.traditional._")}
							</h3>
							<ul className="space-y-3 text-gray-600">
								{(["1", "2", "3", "4", "5"] as const).map((n) => (
									<li key={n} className="flex items-start gap-3">
										<span className="text-gray-400 leading-6">-</span>
										<span className="leading-6">
											{t(`diff.traditional.${n}`)}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div className="bg-bot-primary-50 rounded-2xl p-8 border border-bot-primary-100 ring-4 ring-bot-primary-50 shadow-xl shadow-bot-primary-100">
							<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-bot-primary-600/30">
								<Logo className="w-10 h-10 text-bot-primary-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{t("diff.pyscnBot._")}
							</h3>
							<ul className="space-y-3 text-gray-700">
								{(["1", "2", "3", "4", "5"] as const).map((n) => (
									<li key={n} className="flex items-start gap-3">
										<span className="text-bot-primary-600 font-bold leading-6">
											+
										</span>
										<span className="leading-6">
											{t.rich(`diff.pyscnBot.${n}`, rich)}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 bg-gray-50">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("features.title")}
						</h2>
					</div>

					<div className="space-y-8">
						{/* PR Review */}
						<div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
							<div className="flex flex-col md:flex-row gap-6 items-center">
								<div className="flex-1">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-bot-primary-50 rounded-xl flex items-center justify-center">
											<FeaturePR className="w-7 h-7" />
										</div>
										<h3 className="text-2xl font-bold text-gray-900">
											{t("features.pr.title")}
										</h3>
									</div>
									<p className="text-gray-600 leading-relaxed">
										{t("features.pr.description")}
									</p>
								</div>
								<div className="flex-1">
									{/* biome-ignore lint/performance/noImgElement: marketing asset ported as-is, not worth next/image tuning here */}
									<img
										src="/pyscn-bot/pyscn-pr-demo.png"
										alt="PR Review Demo"
										className="rounded-2xl shadow-lg border border-gray-200 w-full"
									/>
								</div>
							</div>
						</div>

						{/* Weekly Audit */}
						<div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
							<div className="flex flex-col md:flex-row-reverse gap-6 items-center">
								<div className="flex-1">
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 bg-bot-accent-50 rounded-xl flex items-center justify-center">
											<FeatureAudit className="w-7 h-7" />
										</div>
										<h3 className="text-2xl font-bold text-gray-900">
											{t("features.audit.title")}
										</h3>
									</div>
									<p className="text-gray-600 leading-relaxed">
										{t("features.audit.description")}
									</p>
								</div>
								<div className="flex-1">
									<video
										src="/pyscn-bot/pyscn-audit-demo.mp4"
										poster="/pyscn-bot/pyscn-audit-demo-poster.jpg"
										autoPlay
										loop
										muted
										playsInline
										preload="none"
										className="rounded-2xl shadow-lg border border-gray-200 w-full"
									>
										<track kind="captions" />
									</video>
								</div>
							</div>
						</div>

						{/* YAML Configuration */}
						<div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-gray-100">
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-1">
									<div className="flex items-center gap-4 mb-6">
										<div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
											<svg
												className="w-7 h-7 text-green-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<h3 className="text-2xl font-bold text-gray-900">
											{t("features.config.title")}
										</h3>
									</div>
									<p className="text-gray-600 leading-relaxed text-lg mb-6">
										{t("features.config.description")}
									</p>
									<ul className="space-y-3 text-gray-600">
										<li className="flex items-start gap-3">
											<span className="text-green-600 font-bold leading-6">
												•
											</span>
											<span className="leading-6">
												{t("features.config.option1")}
											</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-green-600 font-bold leading-6">
												•
											</span>
											<span className="leading-6">
												{t("features.config.option2")}
											</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-green-600 font-bold leading-6">
												•
											</span>
											<span className="leading-6">
												{t("features.config.option3")}
											</span>
										</li>
									</ul>
								</div>
								<div className="w-full md:flex-1">
									<div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm shadow-lg">
										<div className="flex items-center gap-2 mb-4">
											<div className="w-3 h-3 rounded-full bg-red-500" />
											<div className="w-3 h-3 rounded-full bg-yellow-500" />
											<div className="w-3 h-3 rounded-full bg-green-500" />
											<span className="text-gray-400 text-xs ml-2">
												.github/pyscn-bot.yml
											</span>
										</div>
										<pre className="text-gray-300 leading-relaxed">
											<code>
												<span className="text-gray-500">
													# {t("features.config.comment.language")}
												</span>
												{"\n"}
												<span className="text-green-400">language</span>
												<span className="text-gray-400">:</span>{" "}
												<span className="text-amber-400">ja</span>
												{"\n\n"}
												<span className="text-gray-500">
													# {t("features.config.comment.target")}
												</span>
												{"\n"}
												<span className="text-green-400">
													target_directories
												</span>
												<span className="text-gray-400">:</span>
												{"\n  "}
												<span className="text-gray-400">-</span>{" "}
												<span className="text-amber-400">src/</span>
												{"\n\n"}
												<span className="text-gray-500">
													# {t("features.config.comment.audit")}
												</span>
												{"\n"}
												<span className="text-green-400">audit_interval</span>
												<span className="text-gray-400">:</span>{" "}
												<span className="text-amber-400">weekly</span>
											</code>
										</pre>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section id="how-it-works" className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("how.title")}
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							{t("how.subtitle")}
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
							<div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110 duration-300">
								<MetricComplexity className="w-12 h-12" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-lg">
								{t("how.complexity.title")}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{t("how.complexity.desc")}
							</p>
						</div>

						<div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
							<div className="w-20 h-20 bg-yellow-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110 duration-300">
								<MetricDeadCode className="w-12 h-12" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-lg">
								{t("how.deadcode.title")}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{t("how.deadcode.desc")}
							</p>
						</div>

						<div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
							<div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110 duration-300">
								<MetricClones className="w-12 h-12" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-lg">
								{t("how.clones.title")}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{t("how.clones.desc")}
							</p>
						</div>

						<div className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
							<div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110 duration-300">
								<MetricCoupling className="w-12 h-12" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2 text-lg">
								{t("how.coupling.title")}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{t("how.coupling.desc")}
							</p>
						</div>
					</div>

					<div className="text-center mt-12">
						<Link
							href="/pyscn-bot/how-it-works"
							className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 transition-all"
						>
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
							{t("tech.title")}
							<svg
								className="w-5 h-5"
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
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-20 bg-gray-50">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							{t("pricing.title")}
						</h2>
						<p className="text-gray-600">{t("pricing.subtitle")}</p>
					</div>

					<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
						{/* Free Plan */}
						<div className="bg-white rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								{t("pricing.free._")}
							</h3>
							<div className="mb-6 flex items-baseline gap-1">
								<span className="text-4xl font-bold text-gray-900">$0</span>
								<span className="text-gray-500 text-sm">/month</span>
							</div>
							<ul className="space-y-3 mb-8 flex-grow">
								{(["feature1", "feature2", "feature3"] as const).map((f) => (
									<li
										key={f}
										className="flex items-center gap-3 text-gray-700 text-sm"
									>
										<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
											<svg
												className="w-3 h-3 text-green-600"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										{t(`pricing.free.${f}`)}
									</li>
								))}
							</ul>
							<div className="mt-auto">
								{isLoggedIn ? (
									<Link
										href="/pyscn-bot/account"
										className="block text-center bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors border border-gray-200"
									>
										{t("nav.mypage")}
									</Link>
								) : (
									<a
										href="/pyscn-bot/api/auth?plan=free"
										className="block text-center bg-gray-50 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors border border-gray-200"
									>
										{t("pricing.free.cta")}
									</a>
								)}
								<p className="text-center text-xs mt-2 invisible">
									placeholder
								</p>
							</div>
						</div>

						{/* Pro Plan */}
						<div className="bg-bot-primary-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl shadow-bot-primary-900/20 flex flex-col">
							<div className="absolute top-0 right-0 w-32 h-32 bg-bot-primary-500/30 rounded-full blur-3xl -translate-y-16 translate-x-16" />
							<div className="absolute bottom-0 left-0 w-32 h-32 bg-bot-accent-500/30 rounded-full blur-3xl translate-y-16 -translate-x-16" />

							<div className="relative flex flex-col flex-grow">
								<div className="absolute top-0 right-0 bg-amber-400 text-gray-900 px-2 py-1 rounded-full text-xs font-bold">
									{t("trial.badge")}
								</div>
								<h3 className="text-2xl font-bold mb-3">
									{t("pricing.pro._")}
								</h3>
								<div className="mb-6 flex items-baseline gap-1">
									<span className="text-4xl font-bold">
										{t("pricing.pro.price")}
									</span>
									<span className="text-bot-primary-200 text-sm">
										{t("pricing.pro.unit")}
									</span>
								</div>
								<ul className="space-y-3 mb-8 flex-grow">
									{(
										["feature1", "feature2", "feature3", "feature4"] as const
									).map((f) => (
										<li key={f} className="flex items-center gap-3 text-sm">
											<div className="w-5 h-5 rounded-full bg-bot-primary-500 flex items-center justify-center flex-shrink-0">
												<svg
													className="w-3 h-3 text-white"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													aria-hidden="true"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													/>
												</svg>
											</div>
											{t(`pricing.pro.${f}`)}
										</li>
									))}
								</ul>
								<div className="mt-auto">
									{isLoggedIn ? (
										<Link
											href="/pyscn-bot/account"
											className="block text-center bg-white text-bot-primary-600 px-6 py-3 rounded-xl font-bold hover:bg-bot-primary-50 transition-colors"
										>
											{t("nav.mypage")}
										</Link>
									) : (
										<a
											href="/pyscn-bot/api/auth?plan=pro"
											className="block text-center bg-white text-bot-primary-600 px-6 py-3 rounded-xl font-bold hover:bg-bot-primary-50 transition-colors"
										>
											{t("pricing.pro.cta.button")}
										</a>
									)}
									<p className="text-center text-bot-primary-200 text-xs mt-2">
										{isLoggedIn ? "" : t("pricing.pro.cta._")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{t("cta.title")}
					</h2>
					<p className="text-xl text-gray-600 mb-10">{t("cta.description")}</p>
					{isLoggedIn ? (
						<Link
							href="/pyscn-bot/account"
							className="inline-block bg-bot-primary-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-bot-primary-700 transition-all shadow-lg shadow-bot-primary-600/30 hover:shadow-xl hover:shadow-bot-primary-600/40"
						>
							{t("nav.mypage")}
						</Link>
					) : (
						<a
							href="/pyscn-bot/api/auth?plan=free"
							className="inline-block bg-bot-primary-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-bot-primary-700 transition-all shadow-lg shadow-bot-primary-600/30 hover:shadow-xl hover:shadow-bot-primary-600/40"
						>
							{t("cta.button")}
						</a>
					)}
				</div>
			</section>
		</>
	);
}
