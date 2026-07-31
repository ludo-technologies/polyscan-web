import { renderToReadableStream } from "react-dom/server.browser";
import { describe, expect, it } from "vitest";
import PostBody from "./PostBody";

/**
 * MDX renders markdown tables only when remark-gfm is wired in. Without it a
 * table degrades into one paragraph of literal pipe characters, which still
 * builds, still contains every cell's text, and still passes any check that
 * greps the page for its contents. The first post to use a table shipped that
 * way. These assert on the rendered element, not on the text.
 */
async function render(source: string) {
	// PostBody is an async server component and MDXRemote suspends, so the
	// synchronous renderers cannot be used here.
	const element = await PostBody({ source });
	const stream = await renderToReadableStream(element);
	await stream.allReady;
	return await new Response(stream).text();
}

describe("PostBody", () => {
	it("renders a markdown table as a table", async () => {
		const html = await render(
			["| model | n |", "| --- | ---: |", "| gpt-5 | 303 |"].join("\n"),
		);
		expect(html).toContain("<table>");
		expect(html).toContain("<th>model</th>");
		expect(html).toContain("<td>gpt-5</td>");
		expect(html).not.toContain("| gpt-5 |");
	});

	it("keeps every row of a multi-row table", async () => {
		const rows = ["alpha", "beta", "gamma", "delta"];
		const html = await render(
			[
				"| model | n |",
				"| --- | ---: |",
				...rows.map((r, i) => `| ${r} | ${i} |`),
			].join("\n"),
		);
		expect(html.match(/<tr>/g)).toHaveLength(rows.length + 1);
	});

	it("renders an escaped less-than without double-escaping it", async () => {
		// `<0.001` would be read as the start of a JSX tag, so posts write
		// `&lt;0.001`. It has to survive as one `<`, not as `&lt;`.
		const html = await render(
			["| p |", "| ---: |", "| &lt;0.001 |"].join("\n"),
		);
		expect(html).toContain("&lt;0.001");
		expect(html).not.toContain("&amp;lt;");
	});

	it("renders other gfm constructs", async () => {
		const html = await render("~~struck~~ and https://example.com");
		expect(html).toContain("<del>");
		expect(html).toContain('href="https://example.com"');
	});

	it("routes internal links through next/link and opens external ones safely", async () => {
		const html = await render("[docs](/blog) and [pyscn](https://example.com)");
		expect(html).toContain('href="/blog"');
		expect(html).toContain('rel="noopener noreferrer"');
	});
});
