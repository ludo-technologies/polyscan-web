import type { ReactNode } from "react";
import BotFooter from "@/components/pyscn-bot/BotFooter";
import Navigation from "@/components/pyscn-bot/Navigation";
import { isPyscnBotLoggedIn } from "@/lib/pyscn-bot-session";

export default async function PyscnBotMarketingLayout({
	children,
}: {
	children: ReactNode;
}) {
	const isLoggedIn = await isPyscnBotLoggedIn();

	return (
		<>
			<Navigation isLoggedIn={isLoggedIn} />
			{children}
			<BotFooter />
		</>
	);
}
