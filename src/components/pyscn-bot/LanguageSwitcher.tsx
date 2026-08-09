"use client";

import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LANGUAGE_NAMES: Record<(typeof routing.locales)[number], string> = {
	en: "English",
	ja: "日本語",
	zh: "中文",
};

export default function LanguageSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		function onClickOutside(event: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("click", onClickOutside);
		return () => document.removeEventListener("click", onClickOutside);
	}, []);

	return (
		<div className="relative" ref={containerRef}>
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors rounded-lg border border-gray-300 hover:bg-gray-100 min-w-[120px]"
				aria-expanded={open}
				aria-haspopup="true"
			>
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
					/>
				</svg>
				<span>{LANGUAGE_NAMES[locale as keyof typeof LANGUAGE_NAMES]}</span>
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{open && (
				<div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
					{routing.locales.map((l) => (
						<Link
							key={l}
							href={pathname}
							locale={l}
							onClick={() => setOpen(false)}
							className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
								l === locale
									? "text-bot-primary-600 font-medium"
									: "text-gray-700"
							}`}
						>
							{LANGUAGE_NAMES[l]}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
