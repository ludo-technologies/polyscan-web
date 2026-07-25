"use client";

import { useState } from "react";

type Props = {
	command: string;
	label?: string;
};

export default function CommandBlock({ command, label }: Props) {
	const [copied, setCopied] = useState(false);

	async function copy() {
		try {
			await navigator.clipboard.writeText(command);
			setCopied(true);
			setTimeout(() => setCopied(false), 1600);
		} catch {
			// Clipboard is unavailable (insecure context, denied permission) — the
			// command is still selectable, so there is nothing to recover from.
		}
	}

	return (
		<div>
			{label && (
				<p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-blue)]">
					{label}
				</p>
			)}
			<div className="flex items-center gap-2 rounded-md border border-[var(--border-light)] bg-[var(--bg-ink)] px-4 py-3">
				<code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-white">
					<span className="mr-2 select-none text-[var(--text-dimmed)]">$</span>
					{command}
				</code>
				<button
					type="button"
					onClick={copy}
					aria-label={`Copy "${command}" to clipboard`}
					className="shrink-0 rounded border border-white/20 px-2 py-1 font-mono text-xs text-white/70 transition-colors hover:border-white/50 hover:text-white"
				>
					{copied ? "copied" : "copy"}
				</button>
			</div>
		</div>
	);
}
