import type { Metadata } from "next";
import CommandBlock from "@/components/CommandBlock";
import { LINKS } from "@/lib/links";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

const checks = [
	{
		icon: "🧹",
		title: "Dead code",
		body: "Unreachable code you can safely delete, found by walking the control flow graph rather than guessing.",
	},
	{
		icon: "📋",
		title: "Duplicate code",
		body: "Copy-pasted and structurally similar code worth merging — Type 1-4 clone detection via tree edit distance.",
	},
	{
		icon: "🌀",
		title: "Complexity",
		body: "Functions that are hard to read and hard to test, ranked by cyclomatic complexity so you know where to start.",
	},
	{
		icon: "🏗️",
		title: "Dependencies",
		body: "Circular imports and unstable module dependencies, plus the module communities your codebase actually forms.",
	},
	{
		icon: "🧩",
		title: "Class design",
		body: "Classes that do too much or depend on too much, measured with CBO coupling and LCOM cohesion.",
	},
];

const analyzers = [
	{
		name: "pyscn",
		language: "Python",
		body: "The original analyzer. Ships a CLI, an MCP server, and Agent Skills, and powers pyscn-bot.",
		command: "uvx pyscn@latest analyze .",
		links: [
			{ label: "GitHub", href: LINKS.pyscn },
			{ label: "PyPI", href: LINKS.pypi },
			{ label: "Docs", href: LINKS.docs },
		],
	},
	{
		name: "jscan",
		language: "JavaScript / TypeScript",
		body: "The same analysis for JS and TS, distributed on npm with prebuilt binaries — no toolchain to install.",
		command: "npx jscan analyze src/",
		links: [
			{ label: "GitHub", href: LINKS.jscan },
			{ label: "npm", href: LINKS.npm },
		],
	},
	{
		name: "core",
		language: "Go module",
		body: "The language-agnostic engine behind both: APTED tree edit distance, LSH/MinHash clone indexing, CFG analysis, coupling and cohesion metrics.",
		command: "go get github.com/ludo-technologies/polyscan/core",
		links: [{ label: "GitHub", href: LINKS.core }],
	},
];

const agentSteps = [
	"Analyze the code quality of the src/ directory",
	"Find duplicate code and help me refactor it",
	"Show me complex code and help me simplify it",
];

const faqs = [
	{
		q: "What does polyscan actually measure?",
		a: "Structure, not style. Dead code, duplicate code, cyclomatic complexity, module dependency cycles, and class coupling and cohesion — the things that make a codebase expensive to change. It is not a linter or a formatter, and it complements rather than replaces them.",
	},
	{
		q: "Why does this matter for AI-generated code?",
		a: "Coding agents produce working code quickly, but they tend to duplicate logic and grow functions rather than refactor. Those problems compound silently. polyscan gives you and your agent a measurement to work against, so cleanup becomes a concrete task instead of a vague feeling.",
	},
	{
		q: "Do I need to install anything?",
		a: "No. uvx and npx run the analyzers directly. Both ship as single Go binaries built with tree-sitter, so a full analysis is fast enough to run on every commit.",
	},
	{
		q: "Which languages are supported?",
		a: "Python via pyscn and JavaScript/TypeScript via jscan today. Because the analysis lives in a language-agnostic Go core, adding a language mostly means implementing parsing and classification — C++, Go, and Rust are planned.",
	},
	{
		q: "Is it open source?",
		a: "Yes, MIT licensed. The analyzers, the shared core, and the Agent Skills are all public on GitHub.",
	},
];

const FAQ_JSON_LD = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map(({ q, a }) => ({
		"@type": "Question",
		name: q,
		acceptedAnswer: { "@type": "Answer", text: a },
	})),
});

const SOFTWARE_JSON_LD = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "polyscan",
	applicationCategory: "DeveloperApplication",
	operatingSystem: "macOS, Linux, Windows",
	description:
		"Open source code quality analyzers for Python and JavaScript/TypeScript. Detects dead code, duplicate code, complexity, dependency cycles, and class coupling, then scores the codebase and reports what to fix first.",
	license: "https://opensource.org/licenses/MIT",
	offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center overflow-hidden">
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
				dangerouslySetInnerHTML={{ __html: SOFTWARE_JSON_LD }}
			/>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: structured data
				dangerouslySetInnerHTML={{ __html: FAQ_JSON_LD }}
			/>

			<section
				id="top"
				className="relative z-10 w-full max-w-6xl px-4 pt-12 pb-8 sm:px-6 sm:pt-20 sm:pb-14"
			>
				<div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
					<p className="mb-4 inline-flex rounded-md border border-[var(--brand-blue-light)] bg-[var(--brand-blue-light)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
						Open source · Go + tree-sitter
					</p>
					<h1 className="mb-4 text-5xl font-black tracking-tight text-[var(--text-primary)] sm:mb-6 sm:text-7xl lg:text-8xl">
						<span>poly</span>
						<span className="text-[var(--brand-blue)]">scan</span>
					</h1>
					<p className="mb-4 max-w-2xl text-lg font-semibold leading-relaxed text-[var(--text-primary)] sm:text-2xl">
						Code quality analyzers for AI agents.
					</p>
					<p className="mb-8 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
						Building with Claude, Cursor, or Codex? Your agent writes code
						faster than anyone can review it. polyscan runs structural analysis
						over the whole codebase — one command scores it and shows what to
						fix first.
					</p>

					<div className="grid max-w-3xl gap-4 sm:grid-cols-2">
						<CommandBlock label="Python" command="uvx pyscn@latest analyze ." />
						<CommandBlock
							label="JavaScript / TypeScript"
							command="npx jscan analyze src/"
						/>
					</div>
					<p className="mt-3 text-sm text-[var(--text-muted)]">
						No installation, no sign-up, no code leaves your machine.
					</p>
				</div>
			</section>

			<div className="relative z-10 w-full max-w-6xl px-4 pb-20 sm:px-6">
				<section
					aria-labelledby="what-you-get-title"
					className="scroll-mt-24 border-t border-[var(--border-subtle)] pt-16"
					id="what-you-get"
				>
					<h2
						id="what-you-get-title"
						className="mb-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
					>
						What you get
					</h2>
					<p className="mb-10 max-w-3xl text-[var(--text-secondary)]">
						Every analyzer scores your codebase from 0-100 with an A-F grade and
						generates an HTML report, looking at your code from five angles.
					</p>
					<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{checks.map((c) => (
							<article
								key={c.title}
								className="rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-5 shadow-sm"
							>
								<div className="mb-2 text-2xl" aria-hidden="true">
									{c.icon}
								</div>
								<h3 className="mb-1 text-lg font-semibold text-[var(--text-primary)]">
									{c.title}
								</h3>
								<p className="text-sm leading-relaxed text-[var(--text-light)]">
									{c.body}
								</p>
							</article>
						))}
					</div>
				</section>

				<section
					aria-labelledby="analyzers-title"
					className="mt-20 scroll-mt-24"
					id="analyzers"
				>
					<h2
						id="analyzers-title"
						className="mb-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
					>
						One engine, one analyzer per language
					</h2>
					<p className="mb-10 max-w-3xl text-[var(--text-secondary)]">
						The analysis algorithms live in a shared, language-agnostic Go
						module. Each analyzer only implements parsing and classification, so
						Python and TypeScript are graded by the same rules.
					</p>
					<div className="grid gap-4 lg:grid-cols-3">
						{analyzers.map((a) => (
							<article
								key={a.name}
								className="flex flex-col rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-5 shadow-sm"
							>
								<div className="mb-1 flex items-baseline gap-2">
									<h3 className="text-xl font-bold text-[var(--text-primary)]">
										{a.name}
									</h3>
									<span className="text-xs font-medium text-[var(--text-muted)]">
										{a.language}
									</span>
								</div>
								<p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--text-light)]">
									{a.body}
								</p>
								<div className="mb-4 overflow-x-auto rounded border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-3 py-2 font-mono text-xs text-[var(--text-primary)]">
									{a.command}
								</div>
								<ul className="flex flex-wrap gap-3 text-sm">
									{a.links.map((l) => (
										<li key={l.href}>
											<a
												href={l.href}
												target="_blank"
												rel="noopener noreferrer"
												className="font-medium text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-blue-hover)]"
											>
												{l.label} →
											</a>
										</li>
									))}
								</ul>
							</article>
						))}
					</div>
					<p className="mt-6 text-sm text-[var(--text-muted)]">
						C++, Go, and Rust analyzers are planned.
					</p>
				</section>

				<section
					aria-labelledby="agents-title"
					className="mt-20 scroll-mt-24"
					id="agents"
				>
					<h2
						id="agents-title"
						className="mb-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
					>
						Built for coding agents
					</h2>
					<p className="mb-10 max-w-3xl text-[var(--text-secondary)]">
						The analyzers ship Agent Skills that teach an AI agent when and how
						to run each analysis — health checks, refactoring, architecture
						review, and CI-friendly reports. They work with Claude Code, Cursor,
						Codex, Gemini CLI, and others.
					</p>
					<div className="grid gap-6 lg:grid-cols-2">
						<div className="space-y-4">
							<CommandBlock
								label="pyscn Skills"
								command="uvx add-skills ludo-technologies/pyscn"
							/>
							<CommandBlock
								label="jscan Skills"
								command="npx skills add ludo-technologies/polyscan"
							/>
							<CommandBlock
								label="Claude Code plugin"
								command="claude plugin marketplace add ludo-technologies/polyscan"
							/>
						</div>
						<div className="rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-5 shadow-sm">
							<h3 className="mb-4 text-lg font-semibold text-[var(--text-primary)]">
								Then just ask
							</h3>
							<ul className="space-y-3">
								{agentSteps.map((s) => (
									<li
										key={s}
										className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-subtle)] px-4 py-3 text-sm text-[var(--text-light)]"
									>
										&ldquo;{s}&rdquo;
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				<section
					aria-labelledby="bot-title"
					className="mt-20 scroll-mt-24 rounded-lg border border-[var(--brand-blue)] bg-[var(--brand-blue-light)]/40 p-6 sm:p-8"
					id="bot"
				>
					<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
						Also from polyscan
					</p>
					<h2
						id="bot-title"
						className="mb-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl"
					>
						Pyscn Bot — code review that reads the architecture
					</h2>
					<p className="mb-6 max-w-3xl text-[var(--text-secondary)]">
						A GitHub App that reviews every pull request with pyscn in hand and
						files a weekly audit of the whole repository. Because it reviews
						with a static analyzer rather than the diff alone, it catches the
						structural problems a line-by-line reviewer never sees. Weekly
						audits are free for every repository.
					</p>
					<div className="flex flex-wrap gap-3">
						<a
							href={LINKS.pyscnBot}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex rounded-md border border-[var(--brand-blue)] bg-[var(--brand-blue)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-blue-hover)]"
						>
							Install Pyscn Bot →
						</a>
						<a
							href={LINKS.pyscnBotRepo}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex rounded-md border border-[var(--brand-blue)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand-blue)] transition-colors hover:bg-white/60"
						>
							Source on GitHub
						</a>
					</div>
				</section>

				<section
					aria-labelledby="faq-title"
					className="mt-20 scroll-mt-24"
					id="faq"
				>
					<h2
						id="faq-title"
						className="mb-10 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
					>
						Frequently asked questions
					</h2>
					<div className="space-y-3">
						{faqs.map(({ q, a }) => (
							<details
								key={q}
								className="group rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-5 shadow-sm open:bg-[var(--bg-subtle-hover)]"
							>
								<summary className="cursor-pointer list-none text-base font-semibold text-[var(--text-primary)]">
									<span className="mr-2 text-[var(--brand-blue)]">Q.</span>
									{q}
								</summary>
								<p className="mt-3 text-sm leading-relaxed text-[var(--text-light)]">
									{a}
								</p>
							</details>
						))}
					</div>
				</section>

				<section className="mt-24 rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-8 text-center shadow-sm">
					<h2 className="mb-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
						Score your codebase in one command
					</h2>
					<p className="mx-auto mb-6 max-w-xl text-[var(--text-secondary)]">
						Run it on the repository you are working in right now — it takes
						seconds and installs nothing.
					</p>
					<div className="mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-2">
						<CommandBlock command="uvx pyscn@latest analyze ." />
						<CommandBlock command="npx jscan analyze src/" />
					</div>
				</section>
			</div>
		</main>
	);
}
