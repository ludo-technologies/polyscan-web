export default function MetricDeadCode({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M9 21H15C16.1046 21 17 20.1046 17 19V7H7V19C7 20.1046 7.89543 21 9 21Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-yellow-500"
			/>
			<path
				d="M5 7H19"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-yellow-600"
			/>
			<path
				d="M10 11V17"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-yellow-400"
			/>
			<path
				d="M14 11V17"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				className="text-yellow-400"
			/>
		</svg>
	);
}
