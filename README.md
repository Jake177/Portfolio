# James Ling — personal website

A concise personal homepage for James, Vibe Coder at StarX Technology Solutions.
Pink Molly styling combines warm paper, oversized type, a retro window, and an interactive pink particle sculpture. No client projects or case studies are displayed.

## Stack

- Next.js 16.3.6, App Router, React 19.3, TypeScript
- Tailwind CSS 4 and CSS design tokens
- Native Canvas 2D for particles; no animation or 3D runtime dependency
- Static export for GitHub Pages

## Local development

Use Node.js 24+ and npm:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Fonts and their open-source licenses live in `src/app/fonts/` and are served locally using `next/font/local`; builds do not contact Google Fonts.

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

`npm run build` exports the site to `out/`. Serve this directory with a static HTTP server to preview production; `next start` does not serve static exports.

## Deployment

The existing GitHub Pages workflow builds with `NEXT_PUBLIC_BASE_PATH=/Portfolio` (derived from the repository name), checks the code, and deploys `out/` when changes are pushed to `main`. Local development uses `/`.

For root-domain hosting, leave `NEXT_PUBLIC_BASE_PATH` unset. If the public URL changes, also update `metadataBase` in `src/app/layout.tsx`. No deployment is performed by local builds.

## Editing

- Identity and contact links: `src/data/profile.ts`
- Homepage copy and layout: `src/app/page.tsx`
- Colors, typography and responsive styles: `src/app/globals.css`
- Particle animation and controls: `src/components/ParticlePlayground.tsx`
- Deterministic particle geometry: `src/lib/particles.ts`

The artwork supports pause/resume, respects changes to reduced-motion preferences, suspends animation offscreen and in hidden tabs, and lowers its particle count on touch devices. A local SVG poster remains available without JavaScript or Canvas. Introductory text and contact links are included in the static HTML.

This iteration covers the homepage and Next.js migration. Older redesign documents in `docs/superpowers/` describe the previous Vite implementation, not the current design.
