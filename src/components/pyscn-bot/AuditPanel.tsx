/* Weekly-audit readout: the bot's signature element. Report output is shown
   in English in every locale, the same way the real GitHub Issue reads. */

const WEEKS = [
	{ id: "w1", score: 82 },
	{ id: "w2", score: 80 },
	{ id: "w3", score: 81 },
	{ id: "w4", score: 78 },
	{ id: "w5", score: 77 },
	{ id: "w6", score: 76 },
	{ id: "w7", score: 74 },
	{ id: "w8", score: 71 },
];

const FINDINGS = [
	{ over: true, text: "CC 31  api/handlers.py:214" },
	{ over: true, text: "clone group +2  services/" },
	{ over: false, text: "dead code cleared" },
];

export default function AuditPanel() {
	const last = WEEKS.length - 1;

	return (
		<figure
			aria-label="Sample weekly audit report"
			className="border border-[var(--border-light)] bg-[var(--bg-card)] text-left"
		>
			<figcaption className="flex items-baseline justify-between gap-4 border-b border-[var(--border-subtle)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
				<span>Weekly audit</span>
				<span aria-hidden="true">report #12</span>
			</figcaption>

			<div className="border-b border-[var(--border-subtle)] px-4 py-4">
				<div className="flex items-end justify-between gap-6">
					<div>
						<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
							Health
						</span>
						<div className="mt-1 flex items-baseline gap-3">
							<span className="font-mono text-5xl font-bold leading-none text-[var(--text-primary)]">
								{WEEKS[last].score}
							</span>
							<span className="font-mono text-xs text-[var(--reading-over)]">
								▼ {WEEKS[last - 1].score - WEEKS[last].score} this week
							</span>
						</div>
					</div>
					<div
						className="flex h-14 items-end gap-1"
						role="img"
						aria-label={`Health score over 8 weeks, declining from ${WEEKS[0].score} to ${WEEKS[last].score}`}
					>
						{WEEKS.map((w, i) => (
							<div
								key={w.id}
								className="gauge-fill-y w-3"
								style={{
									height: `${w.score}%`,
									animationDelay: `${i * 70}ms`,
									backgroundColor:
										i === last
											? "var(--reading-over)"
											: "var(--brand-blue-light)",
								}}
							/>
						))}
					</div>
				</div>
			</div>

			<ul className="px-4 py-2">
				{FINDINGS.map((f) => (
					<li
						key={f.text}
						className="flex items-center gap-3 border-b border-[var(--border-subtle)] py-2.5 font-mono text-xs text-[var(--text-secondary)] last:border-b-0"
					>
						<span
							aria-hidden="true"
							className="text-[10px]"
							style={{
								color: f.over ? "var(--reading-over)" : "var(--reading-ok)",
							}}
						>
							{f.over ? "▲" : "●"}
						</span>
						<span className="sr-only">
							{f.over ? "over threshold:" : "resolved:"}
						</span>
						{f.text}
					</li>
				))}
			</ul>

			<div className="border-t border-[var(--border-subtle)] bg-[var(--bg-ink)] px-4 py-2.5 font-mono text-xs text-white/80">
				filed as GitHub Issue · every monday
			</div>
		</figure>
	);
}
