# James Ling — personal website

A personal website for James Ling, an independent IT Solutions Architect in Melbourne, Australia.
The English homepage covers Lark / Feishu automation and CRM integration, website and web app design, full-stack development, deployment and operations, iOS app development, consulting through ongoing maintenance, and the AWS Certified Solutions Architect – Associate qualification. Both project work and ongoing collaboration are supported through the existing email contact.

The service-first homepage opens with a dominant business headline and three concise service rows: business systems and automation, websites and web apps, and iOS apps. A smaller right-hand column holds the real particle window, role, Melbourne location, AWS certification, and social links. The page continues directly with the process, approved personal statement, final contact and Jake177 footer. Email actions remain in the header and final contact section. On mobile, services precede the stacked artwork and profile.

The existing warm paper and pink identity, local Manrope and IBM Plex Mono, thin rules and retro window remain. No client projects, case studies, or private iOS project links are displayed.

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

## Design and review record

`DESIGN.md` records the implemented visual tokens and component rules; `.impeccable/design.json` supplies the design panel's extension metadata and component samples. The homepage composition and verification notes are in `.impeccable/surfaces/src-app-page-tsx.md`. The owner selected the service-first concept C and subsequently removed its duplicate contact strip and audience subtitle. The shipping artwork remains native Canvas with the existing SVG fallback.

Generated concepts, browser screenshots, comparison reports and Impeccable's local build/session state remain local and are ignored by Git. The independent visual review found no material UI defect. Impeccable's automatic Windows font-ranking check could not run; that local tooling limitation remains recorded without claiming its gates passed. Deployment uses the separate lint, type checking, tests and static build checks in the GitHub Pages workflow.
