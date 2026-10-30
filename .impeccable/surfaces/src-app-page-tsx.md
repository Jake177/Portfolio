---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/globals.css"]
---

# Homepage — service-first opening

Mode: Persuade. Target: src/app/page.tsx and src/app/globals.css. Approved comp: .impeccable/mocks/decision/03-services.png, selected by the owner in chat on 2026-10-30.

## Direction contract

THESIS: Make the three concrete services readable in the opening viewport, with a smaller particle window supporting the personal identity.

OWN-WORLD: Preserve the existing paper, ink, pink, Manrope, IBM Plex Mono, thin rules, native SVG icons and retro window. Retain the actual particle implementation and reduced-motion fallback. The generated image's near-white tint does not replace the owner's pinned palette.

STORY: Understand the business value, recognize the relevant service, see the architect's identity and certification, and email about a project or ongoing collaboration.

FIRST VIEWPORT: Business headline above an asymmetric service/identity spread. Three open service rows on the left; compact retro window and identity/certification/social links on the right. The owner subsequently removed the audience subtitle and duplicate opening email strip, and changed the header wordmark to Jake177. Retain the header email action and final contact section. On mobile, stack headline, services and profile/art in DOM order.

FORM: Service-first opening, grounded structural candidate 2; seed 8f05f1d7. Keep the comp's short service copy. Continue with the existing process, exact personal quote and final contact/footer; the comp's copyright belongs at the actual page end.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implemented locally — 2026-10-30

The service-first opening is implemented in the existing visual world. The desktop opening grid uses a 1.625:1 service/profile ratio and a 64px gutter, reducing to 40px at 1050px. The compact profile column is raised beside the headline's second line. At 760px and below, it returns to normal flow after the services; later sections also stack. These are homepage-specific composition decisions, not global component rules. The owner's browser comment on 2026-10-30 removes the opening email strip as redundant with the final contact section; this refinement supersedes that region in the approved concept image.

The continuation preserves the three-step process, the exact approved philosophy quote, final email contact and Jake177 footer. The current Canvas interaction and existing local SVG poster remain. Generated concept PNGs are development references; no new raster was added to the shipping interface.

The actual palette, local typography, spacing, square controls, thin rules and signature window are documented in root DESIGN.md and .impeccable/design.json. The approved comp remains 03-services.png; the owner's selection does not approve A or B.

## Verification and remaining workflow item

Local lint, type checking, unit tests and static export passed. Browser navigation/contact and particle controls passed. Reduced-motion static fallback was verified and the browser preference was restored afterward. Overflow checks passed at 320px, 761px and 1050px.

Independent review used valid current captures: .impeccable/review/hero-repro.png (1536 × 1024), desktop.png (1440px CSS full page), mobile.png (390px CSS full page), and user-1216.png (1216px CSS width, DPR 1.5). The review found no material UI defect; its visual finding is recorded in .impeccable/review/finish-review-summary.json.

The review's overall disposition remains **fix** solely for automatic workflow persistence. Impeccable's Windows engine cannot resolve its font-ranking browser despite installed, working Playwright and compatible cached browsers. .impeccable/build/state.json remains at **spec: open**, with subsequent phases pending. No state was forced, advanced or represented as passed. This known tooling item remains open; screenshot judgment is independent evidence, not automatic gate completion.
