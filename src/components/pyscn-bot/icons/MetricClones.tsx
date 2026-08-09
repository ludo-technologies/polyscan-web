export default function MetricClones({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<rect
				x="8"
				y="8"
				width="12"
				height="12"
				rx="2"
				stroke="currentColor"
				strokeWidth="2"
				className="text-blue-500"
				fill="white"
			/>
			<path
				d="M16 8V6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-blue-300"
			/>
		</svg>
	);
}
