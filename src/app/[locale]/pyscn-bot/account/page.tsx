import type { Metadata } from "next";
import AccountView from "@/components/pyscn-bot/AccountView";

export const metadata: Metadata = {
	title: "My Account - polyscan Bot",
	description: "View your polyscan Bot account and plan status",
	robots: { index: false, follow: false },
};

export default function AccountPage() {
	return <AccountView />;
}
