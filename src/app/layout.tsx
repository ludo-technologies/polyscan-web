import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const GA_MEASUREMENT_ID_RAW = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID_RAW)
	? GA_MEASUREMENT_ID_RAW
	: "";

const jakarta = Plus_Jakarta_Sans({
	variable: "--font-jakarta",
	subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
	variable: "--font-jetbrains",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(getSiteUrl()),
	title: "polyscan — Code quality analyzers for AI agents",
	description:
		"Open source code quality analyzers for Python and JavaScript/TypeScript. One command scores your codebase and shows what to fix first: dead code, duplicate code, complexity, dependency cycles, and class coupling.",
	keywords: [
		"code quality analyzer",
		"Python static analysis",
		"TypeScript code quality",
		"duplicate code detection",
		"cyclomatic complexity",
		"dead code detection",
		"AI coding agent tools",
	],
	openGraph: {
		title: "polyscan — Code quality analyzers for AI agents",
		description:
			"One command scores your whole codebase and shows what to fix first. pyscn for Python, jscan for JavaScript/TypeScript — open source, built with Go and tree-sitter.",
		type: "website",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			{GA_MEASUREMENT_ID && (
				<>
					<Script
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
						strategy="afterInteractive"
					/>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
					</Script>
				</>
			)}
			<body className={`${jakarta.variable} ${jetbrains.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
