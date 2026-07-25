import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
	const siteUrl = getSiteUrl();
	const routes = ["", "/blog", "/privacy", "/terms"];

	return [
		...routes.map((route) => ({ url: `${siteUrl}${route}` })),
		...getPosts()
			.filter((post) => !post.draft)
			.map((post) => ({
				url: `${siteUrl}/blog/${post.slug}`,
				lastModified: post.date,
			})),
	];
}
