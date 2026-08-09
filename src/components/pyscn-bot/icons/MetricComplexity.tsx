export default function MetricComplexity({
	className,
}: {
	className?: string;
}) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M12 4V10"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-red-500"
			/>
			<path
				d="M12 10L6 15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-red-500"
			/>
			<path
				d="M12 10L18 15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-red-500"
			/>
			<circle
				cx="12"
				cy="4"
				r="2"
				className="text-red-500"
				fill="currentColor"
			/>
			<circle
				cx="6"
				cy="15"
				r="2"
				className="text-red-500"
				fill="currentColor"
			/>
			<circle
				cx="18"
				cy="15"
				r="2"
				className="text-red-500"
				fill="currentColor"
			/>
		</svg>
	);
}
