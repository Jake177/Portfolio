# James Ling — personal website

A personal website for James Ling, an independent IT Solutions Architect in Melbourne, Australia.
The English homepage covers Lark / Feishu automation and CRM integration, website and web app design, full-stack development, deployment and operations, iOS app development, consulting through ongoing maintenance, and the AWS Certified Solutions Architect – Associate qualification. Both project work and ongoing collaboration are supported through the existing email contact.

The homepage opens with a wide pink television containing the business headline and real particle artwork. Native scrolling expands it to full bleed while the headline loses focus and fades out. Service, process and philosophy content follows, with repeatable content reveals in both scroll directions. How I think pairs the role, Melbourne location, AWS certification and social links with the approved personal statement. The email action remains in the header, and the page ends with the Jake177 footer. On mobile, each section stacks in reading order.

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
- Scroll expansion, repeatable reveals and header: `src/app/HomeExperience.tsx`
- Homepage composition and motion styles: `src/app/home.module.css`
- Colors, typography and responsive styles: `src/app/globals.css`
- Particle animation and controls: `src/components/ParticlePlayground.tsx`
- Deterministic particle geometry: `src/lib/particles.ts`

The artwork supports pause/resume, respects changes to reduced-motion preferences, suspends animation offscreen and in hidden tabs, and lowers its particle count on touch devices. A local SVG poster remains available without JavaScript or Canvas. Introductory text and contact links are included in the static HTML.

The resting TV is square, sized to 72% of the available stage height, capped at 640px and constrained to the viewport width minus 36px. Its headline stays inside the pink screen. The title briefly comes into focus, retains a faint static scanline texture and fades with scroll. Content reveals use 14px blur on desktop and 9px on mobile, with a 1100ms entrance; leaving the reading viewport resets them for entry from either direction. Focus keeps interactive content visible. These effects use native scrolling, requestAnimationFrame, IntersectionObserver and scoped CSS, with no added dependency or per-frame React state. The design references React Bits Scroll Expand and Fade Content; the original GSAP Fade Content package is not installed.

There is one homepage and no separate motion-preview route. Reduced motion removes expansion and reveals; short windows receive a static composition. All content remains visible without JavaScript. The header remains the email entry point; duplicated contact sections stay removed.

This iteration covers the homepage and Next.js migration. Older redesign documents in `docs/superpowers/` describe the previous Vite implementation, not the current design.

## Design and review record

`DESIGN.md` records the implemented visual tokens and component rules; `.impeccable/design.json` supplies the design panel's extension metadata and component samples. The homepage composition and verification notes are in `.impeccable/surfaces/src-app-page-tsx.md`. The owner selected the service-first concept C and subsequently removed its duplicate contact strip and audience subtitle. The shipping artwork remains native Canvas with the existing SVG fallback.

Generated concepts, browser screenshots, comparison reports and Impeccable's local build/session state remain local and are ignored by Git. The independent visual review found no material UI defect. Impeccable's automatic Windows font-ranking check could not run; that local tooling limitation remains recorded without claiming its gates passed. Deployment uses the separate lint, type checking, tests and static build checks in the GitHub Pages workflow.
