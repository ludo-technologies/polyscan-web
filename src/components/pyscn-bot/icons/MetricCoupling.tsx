export default function MetricCoupling({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<circle
				cx="7"
				cy="12"
				r="3"
				stroke="currentColor"
				strokeWidth="2"
				className="text-purple-500"
			/>
			<circle
				cx="17"
				cy="12"
				r="3"
				stroke="currentColor"
				strokeWidth="2"
				className="text-purple-500"
			/>
			<path
				d="M10 12H14"
				stroke="currentColor"
				strokeWidth="2"
				className="text-purple-500"
			/>
		</svg>
	);
}
