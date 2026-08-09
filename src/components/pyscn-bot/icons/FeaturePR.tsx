export default function FeaturePR({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				d="M16 13V15.5C16 17.5 14.5 19 12.5 19H8"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-bot-primary-400"
			/>
			<path
				d="M8 5V19"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="text-gray-400"
			/>
			<circle
				cx="8"
				cy="5"
				r="2"
				className="text-gray-400"
				stroke="currentColor"
				strokeWidth="2"
				fill="white"
			/>
			<circle
				cx="8"
				cy="19"
				r="2"
				className="text-gray-400"
				stroke="currentColor"
				strokeWidth="2"
				fill="white"
			/>
			<circle
				cx="16"
				cy="13"
				r="2"
				className="text-bot-primary-600"
				stroke="currentColor"
				strokeWidth="2"
				fill="white"
			/>
		</svg>
	);
}
