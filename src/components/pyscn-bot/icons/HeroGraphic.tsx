export default function HeroGraphic({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			viewBox="0 0 800 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			aria-hidden="true"
		>
			{/* Left Side: Messy Code */}
			<g transform="translate(100, 100)">
				<rect
					x="0"
					y="0"
					width="120"
					height="180"
					rx="8"
					className="text-gray-50 fill-current stroke-gray-200"
					strokeWidth="2"
				/>
				<path
					d="M20 40h60"
					className="text-gray-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M20 60h40"
					className="text-gray-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M20 80h80"
					className="text-gray-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M20 100h30"
					className="text-red-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M60 100h40"
					className="text-gray-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M20 120h70"
					className="text-gray-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M20 140h50"
					className="text-gray-400 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
			</g>

			{/* Center: Polyscan Processing */}
			<g transform="translate(350, 150)">
				<path
					d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
					className="text-bot-primary-50 fill-current stroke-bot-primary-600"
					strokeWidth="4"
				/>
				<path
					d="M35 35C35 30 40 25 45 25H55C60 25 65 30 65 35V40H45C40 40 35 45 35 50V55H55C60 55 65 60 65 65V70C65 75 60 80 55 80H45C40 80 35 75 35 70"
					className="text-bot-primary-600 stroke-current"
					strokeWidth="6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<circle
					cx="45"
					cy="30"
					r="3"
					className="text-bot-accent-500 fill-current"
				/>
				<circle
					cx="55"
					cy="70"
					r="3"
					className="text-bot-accent-500 fill-current"
				/>

				<path
					d="M-130 40 C-80 40, -50 50, 0 50"
					className="text-gray-300 stroke-current"
					strokeWidth="2"
					strokeDasharray="8 8"
				>
					<animate
						attributeName="stroke-dashoffset"
						from="16"
						to="0"
						dur="1s"
						repeatCount="indefinite"
					/>
				</path>

				<path
					d="M100 50 C150 50, 180 40, 230 40"
					className="text-bot-primary-500 stroke-current"
					strokeWidth="3"
				>
					<animate
						attributeName="stroke-dashoffset"
						from="20"
						to="0"
						dur="1s"
						repeatCount="indefinite"
					/>
				</path>
			</g>

			{/* Right Side: Clean Code */}
			<g transform="translate(580, 100)">
				<rect
					x="0"
					y="0"
					width="120"
					height="180"
					rx="8"
					className="text-bot-primary-50 fill-current stroke-bot-primary-200"
					strokeWidth="2"
				/>
				<path
					d="M20 40h30"
					className="text-bot-primary-500 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M60 40h40"
					className="text-bot-primary-700 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>

				<path
					d="M20 70h30"
					className="text-bot-primary-500 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M60 70h40"
					className="text-bot-primary-700 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>

				<path
					d="M20 100h30"
					className="text-bot-primary-500 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M60 100h40"
					className="text-bot-primary-700 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>

				<path
					d="M20 130h30"
					className="text-bot-primary-500 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M60 130h40"
					className="text-bot-primary-700 stroke-current"
					strokeWidth="4"
					strokeLinecap="round"
				/>

				<circle
					cx="100"
					cy="20"
					r="12"
					className="text-green-500 fill-current"
				/>
				<path
					d="M94 20L98 24L106 16"
					stroke="white"
					strokeWidth="3"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
}
