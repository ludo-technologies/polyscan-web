import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const GA_MEASUREMENT_ID_RAW = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID_RAW)
	? GA_MEASUREMENT_ID_RAW
	: "";

const archivo = Archivo({
	variable: "--font-archivo",
	subsets: ["latin"],
	axes: ["wdth"],
});

const jetbrains = JetBrains_Mono({
	variable: "--font-jetbrains",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(getSiteUrl()),
	title: "Polyscan — Code quality analyzers for AI agents",
	description:
		"Open source code quality analyzers for Python, JavaScript/TypeScript, Go, Rust, and C++. One command scores your codebase and shows what to fix first: dead code, duplicate code, complexity, dependency cycles, and class coupling.",
	keywords: [
		"code quality analyzer",
		"Python static analysis",
		"TypeScript code quality",
		"Go code quality",
		"Rust code quality",
		"C++ code quality",
		"duplicate code detection",
		"cyclomatic complexity",
		"dead code detection",
		"AI coding agent tools",
	],
	openGraph: {
		title: "Polyscan — Code quality analyzers for AI agents",
		description:
			"One command scores your whole codebase and shows what to fix first. pyscn for Python, polyscan for JavaScript/TypeScript, Go, Rust, and C++ — open source, built with Go and tree-sitter.",
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
			<body className={`${archivo.variable} ${jetbrains.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
