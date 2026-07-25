# Contributing to codescan.dev

Thanks for your interest in contributing! Here's how to get started.

## What lives here

This repository is the polyscan website served at [codescan.dev](https://codescan.dev) — a static Next.js app with no backend.

The analyzers themselves are developed elsewhere. Issues about pyscn, jscan, or the shared core belong in [ludo-technologies/polyscan](https://github.com/ludo-technologies/polyscan) or [ludo-technologies/pyscn](https://github.com/ludo-technologies/pyscn); reference documentation is written in `pyscn/website` (MkDocs).

## Development setup

```bash
git clone https://github.com/ludo-technologies/polyscan-web.git
cd polyscan-web
bun install
bun run dev
# open http://localhost:3000
```

Environment variables are all optional — copy `.env.example` to `.env.local` if you need to override the site URL or enable analytics.

## Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run linting, tests, and a production build:
   ```bash
   bun run lint
   bun run test
   bun run build
   ```
5. Commit your changes and push to your fork
6. Open a Pull Request against `main`

## Guidelines

- Keep PRs focused — one feature or fix per PR
- Follow the existing code style (enforced by [Biome](https://biomejs.dev/))
- Reuse the CSS custom properties in `src/app/globals.css` instead of hard-coding colors
- Keep copy accurate: the analyzers run locally and upload nothing, so nothing on the site should imply otherwise
- Add tests for new functionality

## Reporting Issues

Please use [GitHub Issues](https://github.com/ludo-technologies/polyscan-web/issues) to report bugs or suggest features. Include steps to reproduce for bug reports.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
