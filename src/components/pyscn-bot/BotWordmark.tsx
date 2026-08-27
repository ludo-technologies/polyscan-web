/* Two-tone "Polyscan" wordmark, following the poly+scan treatment in
   src/components/Header.tsx. The dark variant is for the bot footer's
   bg-gray-900 background, where --text-primary would be unreadable. */
export default function BotWordmark({
	variant = "light",
	className,
}: {
	variant?: "light" | "dark";
	className?: string;
}) {
	return (
		<span className={className}>
			<span
				className={`font-black tracking-tight ${
					variant === "dark" ? "text-gray-100" : "text-[var(--text-primary)]"
				}`}
			>
				Poly
			</span>
			<span
				className={`font-black tracking-tight ${
					variant === "dark"
						? "text-bot-primary-400"
						: "text-[var(--brand-blue)]"
				}`}
			>
				scan
			</span>
		</span>
	);
}
