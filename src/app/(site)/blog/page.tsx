import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
	title: "Blog — polyscan",
	description:
		"Notes on code quality, static analysis, and keeping AI-generated codebases maintainable, from the team behind pyscn and jscan.",
	alternates: {
		canonical: "/blog",
		types: { "application/rss+xml": "/blog/feed.xml" },
	},
};

export default function BlogIndex() {
	const posts = getPosts();

	return (
		<main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
			<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
				Blog
			</p>
			<h1 className="mb-3 text-4xl font-black tracking-tight text-[var(--text-primary)] sm:text-5xl">
				Writing
			</h1>
			<p className="mb-12 max-w-2xl text-[var(--text-secondary)]">
				Notes on code quality, static analysis, and keeping AI-generated
				codebases maintainable.
			</p>

			{posts.length === 0 ? (
				<p className="text-[var(--text-muted)]">No posts yet.</p>
			) : (
				<ul className="space-y-4">
					{posts.map((post) => (
						<li key={post.slug}>
							<Link
								href={`/blog/${post.slug}`}
								className="block rounded-lg border border-[var(--border-light)] bg-[var(--bg-card)] p-5 shadow-sm transition-colors hover:border-[var(--brand-blue)]"
							>
								<div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted)]">
									<time dateTime={post.date}>
										{formatDate(post.date, post.lang)}
									</time>
									{post.lang === "ja" && (
										<span className="rounded border border-[var(--border-subtle)] px-1.5 py-0.5 font-medium">
											日本語
										</span>
									)}
									{post.draft && (
										<span className="rounded border border-[var(--color-error)] px-1.5 py-0.5 font-medium text-[var(--color-error)]">
											Draft
										</span>
									)}
								</div>
								<h2 className="mb-1 text-xl font-bold text-[var(--text-primary)]">
									{post.title}
								</h2>
								<p className="text-sm leading-relaxed text-[var(--text-light)]">
									{post.description}
								</p>
							</Link>
						</li>
					))}
				</ul>
			)}

			<div className="mt-12 border-t border-[var(--border-subtle)] pt-6">
				<a
					href="/blog/feed.xml"
					className="text-sm font-medium text-[var(--brand-blue)] transition-colors hover:text-[var(--brand-blue-hover)]"
				>
					RSS feed
				</a>
			</div>
		</main>
	);
}
