<div align="center">

# [codescan.dev](https://codescan.dev)

### The website for [polyscan](https://github.com/ludo-technologies/polyscan)

Landing page, documentation entry point, and blog for the polyscan code quality analyzers.

</div>

---

## What this repository is

This is the marketing and content site served at **[codescan.dev](https://codescan.dev)**. It is a static Next.js app — no database, no accounts, no API.

The software it documents lives elsewhere:

| Project | Repository |
|---|---|
| polyscan monorepo (`core`, `jscan`) | [ludo-technologies/polyscan](https://github.com/ludo-technologies/polyscan) |
| pyscn (Python analyzer) | [ludo-technologies/pyscn](https://github.com/ludo-technologies/pyscn) |
| Polyscan App (GitHub App backend) | [ludo-technologies/polyscan-app](https://github.com/ludo-technologies/polyscan-app) |

Reference documentation is published separately from `pyscn/website` (MkDocs) and served at [docs.codescan.dev](https://docs.codescan.dev/).

> This repository previously hosted codescan.dev, a hosted security scanner built on Semgrep, Gitleaks, and Trivy. That product was retired; its frontend and Go scan engine remain in the git history up to the `feat/polyscan-site` branch point.

## Development

```bash
bun install
bun run dev      # http://localhost:3000
```

| Command | Description |
|---|---|
| `bun run dev` | Start the dev server |
| `bun run build` | Production build |
| `bun run lint` | Biome check |
| `bun run format` | Biome format |
| `bun run test` | Vitest |

### Environment variables

All optional — see [`.env.example`](.env.example).

| Variable | Purpose |
|---|---|
| `SITE_URL` / `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap, and robots. Falls back to the Vercel URL, then `https://codescan.dev`. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID. Analytics are disabled when unset. |

## Deployment

Deployed on Vercel from `main`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
