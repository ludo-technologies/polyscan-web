export default function FeatureAudit({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<circle
				cx="11"
				cy="11"
				r="7"
				stroke="currentColor"
				strokeWidth="2"
				className="text-bot-accent-500"
			/>
			<path
				d="M20 20L16 16"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-bot-accent-500"
			/>
			<path
				d="M8 11H14"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-bot-accent-300"
			/>
			<path
				d="M11 8V14"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-bot-accent-300"
			/>
		</svg>
	);
}
