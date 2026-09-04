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
	title: "Polyscan — Structural codebase health for AI-written code",
	description:
		"Measure complexity, duplication, dead code, dependencies, and class design across your entire codebase. Run it once with the open-source CLI or track structural decay every week with the GitHub App.",
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
		title: "Polyscan — Structural codebase health for AI-written code",
		description:
			"Measure your whole codebase once with the open-source CLI, then track structural decay every week with the GitHub App.",
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
