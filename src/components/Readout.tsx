type Reading = {
	id: string;
	label: string;
	value: string;
	/** Bar length as a fraction of the gauge, 0–1. */
	level: number;
	over: boolean;
};

const READINGS: Reading[] = [
	{
		id: "CC",
		label: "Cyclomatic complexity",
		value: "max 31",
		level: 0.78,
		over: true,
	},
	{ id: "DUP", label: "Duplication", value: "8.2%", level: 0.62, over: true },
	{
		id: "DEAD",
		label: "Dead code",
		value: "0 blocks",
		level: 0.04,
		over: false,
	},
	{
		id: "DEP",
		label: "Dependency cycles",
		value: "2 cycles",
		level: 0.4,
		over: true,
	},
	{
		id: "CBO",
		label: "Class coupling",
		value: "max 9",
		level: 0.3,
		over: false,
	},
];

const HEALTH = 74;

export default function Readout() {
	return (
		<figure
			aria-label="Sample pyscn analysis readout"
			className="border border-[var(--border-light)] bg-[var(--bg-card)]"
		>
			<figcaption className="flex items-baseline justify-between gap-4 border-b border-[var(--border-subtle)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
				<span>Structural readout</span>
				<span aria-hidden="true">sample run</span>
			</figcaption>

			<div className="border-b border-[var(--border-subtle)] px-4 py-4">
				<div className="mb-2 flex items-baseline justify-between">
					<span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
						Health
					</span>
					<span className="font-mono text-sm text-[var(--text-secondary)]">
						grade B
					</span>
				</div>
				<div className="flex items-baseline gap-3">
					<span className="font-mono text-5xl font-bold leading-none text-[var(--text-primary)]">
						{HEALTH}
					</span>
					<span className="font-mono text-sm text-[var(--text-muted)]">
						/ 100
					</span>
				</div>
				<div className="mt-3 h-1.5 bg-[var(--bg-subtle)]">
					<div
						className="gauge-fill h-full bg-[var(--brand-blue)]"
						style={{ width: `${HEALTH}%` }}
					/>
				</div>
			</div>

			<dl className="px-4 py-2">
				{READINGS.map((r, i) => (
					<div
						key={r.id}
						className="grid grid-cols-[3.5rem_1fr_5rem_1rem] items-center gap-2 border-b border-[var(--border-subtle)] py-2.5 last:border-b-0"
					>
						<dt className="font-mono text-[11px] font-bold tracking-wide text-[var(--text-label)]">
							{r.id}
						</dt>
						<dd className="h-1 bg-[var(--bg-subtle)]">
							<div
								className="gauge-fill h-full"
								style={{
									width: `${r.level * 100}%`,
									animationDelay: `${150 + i * 90}ms`,
									backgroundColor: r.over
										? "var(--reading-over)"
										: "var(--reading-ok)",
								}}
							/>
						</dd>
						<dd
							className="text-right font-mono text-xs text-[var(--text-secondary)]"
							title={r.label}
						>
							{r.value}
						</dd>
						<dd
							className="text-center font-mono text-[10px]"
							style={{
								color: r.over ? "var(--reading-over)" : "var(--reading-ok)",
							}}
						>
							<span aria-hidden="true">{r.over ? "▲" : "●"}</span>
							<span className="sr-only">
								{r.over ? "over threshold" : "within threshold"}
							</span>
						</dd>
					</div>
				))}
			</dl>

			<div className="border-t border-[var(--border-subtle)] bg-[var(--bg-ink)] px-4 py-2.5 font-mono text-xs text-white/80">
				<span className="mr-2 select-none text-white/40">$</span>
				uvx pyscn@latest analyze .
			</div>
		</figure>
	);
}
