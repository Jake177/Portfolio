# James Ling — personal website

A personal website for James Ling, an independent IT Solutions Architect in Melbourne, Australia.
The English homepage covers Lark / Feishu automation and CRM integration, website and web app design, full-stack development, deployment and operations, iOS app development, consulting through ongoing maintenance, and the AWS Certified Solutions Architect – Associate qualification. Both project work and ongoing collaboration are supported through the existing email contact.

The service-first homepage opens with a dominant business headline and three concise service rows beside the real particle window. After the process section, How I think pairs the role, Melbourne location, AWS certification and social links with the approved personal statement. Shared type roles keep service/process headings and body copy consistent. The email action remains in the header, and the page ends with the Jake177 footer. On mobile, each section stacks in reading order.

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

The local scroll-motion preview adds reversible particle rotation/contraction and a small window tilt, sequential pink process rails, drawing service dividers and a closing quote underline. It uses passive scroll listeners and animation frames without a new dependency or per-frame React state. Pausing the artwork freezes its scroll response too. Reduced motion restores the static presentation; without JavaScript, all copy, rules and the quote underline remain visible. The header is the current email entry point; the duplicated lower contact sections have been removed.

An independent proposal at `/motion-preview/` studies a pink TV expanding across the viewport, followed by one-time content fades inspired by React Bits. It keeps the current homepage intact and adds no package dependencies. The official Scroll Expand source uses React/CSS; the current official Fade Content source uses GSAP, which has not been installed. The proposal uses native scrolling, clipping, IntersectionObserver and CSS instead. Reduced motion and short windows receive a static composition; server-rendered content remains visible without JavaScript. The preview route is marked noindex and remains separate from the homepage when deployed.

This iteration covers the homepage and Next.js migration. Older redesign documents in `docs/superpowers/` describe the previous Vite implementation, not the current design.

## Design and review record

`DESIGN.md` records the implemented visual tokens and component rules; `.impeccable/design.json` supplies the design panel's extension metadata and component samples. The homepage composition and verification notes are in `.impeccable/surfaces/src-app-page-tsx.md`. The owner selected the service-first concept C and subsequently removed its duplicate contact strip and audience subtitle. The shipping artwork remains native Canvas with the existing SVG fallback.

Generated concepts, browser screenshots, comparison reports and Impeccable's local build/session state remain local and are ignored by Git. The independent visual review found no material UI defect. Impeccable's automatic Windows font-ranking check could not run; that local tooling limitation remains recorded without claiming its gates passed. Deployment uses the separate lint, type checking, tests and static build checks in the GitHub Pages workflow.
