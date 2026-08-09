"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { CONTACT_VALIDATION } from "@/lib/pyscn-bot-contact";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
	const t = useTranslations();
	const [status, setStatus] = useState<Status>("idle");
	const [errorText, setErrorText] = useState("");

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus("submitting");

		const form = event.currentTarget;
		const formData = new FormData(form);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			message: formData.get("message"),
		};

		try {
			const response = await fetch("/pyscn-bot/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
			const result = await response.json();

			if (response.ok) {
				form.reset();
				setStatus("success");
			} else {
				setErrorText(result.error || "An error occurred");
				setStatus("error");
			}
		} catch {
			setErrorText("Network error. Please try again.");
			setStatus("error");
		}
	}

	if (status === "success") {
		return (
			<div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
				<h2 className="text-lg font-semibold text-green-800 mb-2">
					{t("contact.success.title")}
				</h2>
				<p className="text-green-700">{t("contact.success.message")}</p>
			</div>
		);
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						{t("contact.name")} <span className="text-red-500">*</span>
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						maxLength={CONTACT_VALIDATION.NAME_MAX_LENGTH}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bot-primary-500 focus:border-bot-primary-500 transition-colors"
					/>
				</div>

				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						{t("contact.email")} <span className="text-red-500">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						maxLength={CONTACT_VALIDATION.EMAIL_MAX_LENGTH}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bot-primary-500 focus:border-bot-primary-500 transition-colors"
					/>
				</div>

				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700 mb-2"
					>
						{t("contact.message")} <span className="text-red-500">*</span>
					</label>
					<textarea
						id="message"
						name="message"
						required
						rows={6}
						minLength={CONTACT_VALIDATION.MESSAGE_MIN_LENGTH}
						maxLength={CONTACT_VALIDATION.MESSAGE_MAX_LENGTH}
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bot-primary-500 focus:border-bot-primary-500 transition-colors resize-none"
					/>
				</div>

				<button
					type="submit"
					disabled={status === "submitting"}
					className="w-full bg-bot-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-bot-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{t("contact.submit")}
				</button>
			</form>

			{status === "error" && (
				<div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
					<h2 className="text-lg font-semibold text-red-800 mb-2">
						{t("contact.error.title")}
					</h2>
					<p className="text-red-700">{errorText}</p>
				</div>
			)}
		</>
	);
}
