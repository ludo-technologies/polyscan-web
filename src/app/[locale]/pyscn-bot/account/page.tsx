import type { Metadata } from "next";
import AccountView from "@/components/pyscn-bot/AccountView";

export const metadata: Metadata = {
	title: "My Account - Pyscn Bot",
	description: "View your Pyscn Bot account and plan status",
	robots: { index: false, follow: false },
};

export default function AccountPage() {
	return <AccountView />;
}
