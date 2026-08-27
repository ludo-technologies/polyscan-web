import { getPosts } from "@/lib/posts";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

function escapeXml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&apos;");
}

export function GET() {
	const siteUrl = getSiteUrl();
	const posts = getPosts().filter((post) => !post.draft);

	const items = posts
		.map((post) => {
			const url = `${siteUrl}/blog/${post.slug}`;
			return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
		})
		.join("\n");

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Polyscan blog</title>
    <link>${siteUrl}/blog</link>
    <description>Notes on code quality, static analysis, and keeping AI-generated codebases maintainable.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

	return new Response(xml, {
		headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
	});
}
