# Dating Essentials for Gen X — landing page

Source project for the webinar landing page at howtodatehumans.com/essentials.
Built with TanStack Start (React 19 + Vite + Tailwind CSS v4). No backend, no
API keys — everything is static except the booking link, which points at
Calendly.

## Where it lives

This folder is part of the howtodatehumans.com repository. The main site's
deploy workflow (`.github/workflows/deploy.yml`) builds it with
`bun run build:static` and copies the result into the site at `/essentials`,
so publishing is just: edit, commit, push to `main`.

Key files:

- `src/routes/index.tsx` — the whole page: copy, sections, links
- `src/styles.css` — Tailwind theme (colors, fonts)
- `src/assets/` — photos, video, logos used on the page
- `src/components/brand-marks.tsx` — inline SVG wordmarks (NYT, WeWork)

## Local preview

```bash
cd essentials
npm install            # once
npm run dev            # live preview at http://localhost:5173/essentials
npm run build:static   # same build the deploy runs; output in ./essentials-site/
```

The page is served under the `/essentials` path on purpose — asset URLs and
client-side routes are prefixed with it. It's set in `vite.config.ts`
(`vite.base` and `tanstackStart.router.basepath`).

`essentials-site/` is generated output (git-ignored) — never edit it by hand.

## Notes

- Copy on the page is final wording — change only on explicit request.
- Booking link: https://calendly.com/lakshmi-howtodatehumans/essentials
- External links open in new tabs; verify they still resolve after edits.
