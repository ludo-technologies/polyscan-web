import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostLang = "en" | "ja";

export type PostMeta = {
	slug: string;
	title: string;
	description: string;
	/** ISO date (YYYY-MM-DD) the post was published. */
	date: string;
	tags: string[];
	lang: PostLang;
	/** Drafts are excluded from every listing, feed, and sitemap. */
	draft: boolean;
};

export type Post = PostMeta & {
	content: string;
};

function readPost(fileName: string): Post {
	const slug = fileName.replace(/\.mdx?$/, "");
	const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
	const { data, content } = matter(raw);

	if (typeof data.title !== "string" || typeof data.date !== "string") {
		throw new Error(
			`content/blog/${fileName}: "title" and "date" are required`,
		);
	}

	return {
		slug,
		title: data.title,
		description: typeof data.description === "string" ? data.description : "",
		date: data.date,
		tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
		lang: data.lang === "ja" ? "ja" : "en",
		draft: data.draft === true,
		content,
	};
}

function allPosts(): Post[] {
	if (!fs.existsSync(POSTS_DIR)) return [];

	return fs
		.readdirSync(POSTS_DIR)
		.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
		.map(readPost)
		.sort((a, b) => b.date.localeCompare(a.date));
}

/** Published posts, newest first. Drafts never appear in production. */
export function getPosts(): Post[] {
	const includeDrafts = process.env.NODE_ENV !== "production";
	return allPosts().filter((p) => includeDrafts || !p.draft);
}

export function getPost(slug: string): Post | undefined {
	return getPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string, lang: PostLang = "en"): string {
	return new Date(`${date}T00:00:00Z`).toLocaleDateString(
		lang === "ja" ? "ja-JP" : "en-US",
		{ year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
	);
}
