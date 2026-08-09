"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

/**
 * Shape returned by the Go backend's GET /pyscn-bot/api/account
 * (webauth.AccountInfo in pyscn-bot).
 */
interface AccountResponse {
	userId: number;
	login: string;
	planName: string; // "free" | "pro" | "team"
	isPaid: boolean;
	updatedAt: string | null;
	hasStripeSubscription: boolean;
}

type ViewState =
	| { status: "loading" }
	| { status: "error" }
	| { status: "ready"; data: AccountResponse };

export default function AccountView() {
	const t = useTranslations();
	const [state, setState] = useState<ViewState>({ status: "loading" });

	useEffect(() => {
		let cancelled = false;

		fetch("/pyscn-bot/api/account")
			.then(async (res) => {
				if (res.status === 401) {
					window.location.href = "/pyscn-bot/api/auth?plan=account";
					return;
				}
				if (!res.ok) throw new Error(`Unexpected status ${res.status}`);
				const data = (await res.json()) as AccountResponse;
				if (!cancelled) setState({ status: "ready", data });
			})
			.catch(() => {
				if (!cancelled) setState({ status: "error" });
			});

		return () => {
			cancelled = true;
		};
	}, []);

	if (state.status === "loading") {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
				<p className="text-slate-400">Loading…</p>
			</div>
		);
	}

	if (state.status === "error") {
		return (
			<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
				<p className="text-slate-400">
					Something went wrong. Please try again.
				</p>
			</div>
		);
	}

	const { login, userId, planName, isPaid, updatedAt, hasStripeSubscription } =
		state.data;

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
			<div className="max-w-2xl mx-auto px-4 py-16">
				<a
					href="/pyscn-bot"
					className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block"
				>
					&larr; Back to polyscan Bot
				</a>

				<h1 className="text-3xl font-bold mb-8">{t("nav.mypage")}</h1>

				<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
					<div className="flex items-center gap-4 mb-6">
						{/* biome-ignore lint/performance/noImgElement: external GitHub avatar URL, not a local/optimizable asset */}
						<img
							src={`https://github.com/${login}.png`}
							alt={login}
							className="w-16 h-16 rounded-full"
						/>
						<div>
							<h2 className="text-xl font-semibold">{login}</h2>
							<p className="text-slate-400">GitHub ID: {userId}</p>
						</div>
					</div>

					<div className="border-t border-slate-700 pt-6">
						<h3 className="text-lg font-medium mb-4">Plan Status</h3>

						<div className="flex items-center gap-3">
							<span
								className={`px-3 py-1 rounded-full text-sm font-medium ${
									isPaid
										? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
										: "bg-slate-700 text-slate-300"
								}`}
							>
								{planName.toUpperCase()}
							</span>
							{updatedAt && (
								<span className="text-slate-400 text-sm">
									since {new Date(updatedAt).toLocaleDateString()}
								</span>
							)}
						</div>

						{!isPaid && (
							<div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
								<p className="text-slate-300 mb-3">
									Upgrade to Pro for unlimited analysis
								</p>
								<a
									href="/pyscn-bot/api/auth?plan=pro"
									className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:opacity-90 transition"
								>
									Upgrade to Pro
								</a>
							</div>
						)}

						{hasStripeSubscription && (
							<div className="mt-6 pt-6 border-t border-slate-700">
								<h3 className="text-lg font-medium mb-4">Subscription</h3>
								<a
									href="/pyscn-bot/api/billing-portal"
									className="inline-block px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition"
								>
									Manage Subscription
								</a>
								<p className="text-slate-400 text-sm mt-2">
									Change plan, update payment method, or cancel
								</p>
							</div>
						)}
					</div>
				</div>

				<div className="mt-8 text-center">
					<a
						href="/pyscn-bot/api/logout"
						className="text-slate-400 hover:text-white transition"
					>
						Logout
					</a>
				</div>
			</div>
		</div>
	);
}
