---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/HomeExperience.tsx", "src/app/home.module.css", "src/app/globals.css"]
---

# Homepage — expanding pink television

Mode: Experience. The owner approved the centered expanding TV, contained headline and television text treatment, and authorized consolidating the result into the only homepage and pushing directly to main on 2026-11-02.

## Direction

Preserve warm paper, ink, pink, local Manrope and IBM Plex Mono, thin rules, native SVG icons, square window chrome and the actual Canvas sculpture. The earlier service-first concept C remains historical evidence; the owner's subsequent centered-TV instructions supersede its opening layout.

The first viewport centers a wide television, resting at 70% desktop width (maximum 1120px), with 18px side margins on mobile. The unchanged business headline sits completely inside the pink screen and scales to its available width. It briefly comes into focus, keeps a faint static scanline mask and loses focus and opacity while lifting during scroll expansion. Background particles remain quieter behind readable text. The TV expands from its center to full bleed below the persistent navigation, holds briefly, and releases into ordinary scrolling. Reverse scroll restores the opening. Header anchors and a keyboard skip link bypass it.

Services, the three-step process, How I think and the footer follow. Service titles and descriptions pair horizontally on desktop and stack on mobile. How I think retains role, Melbourne location, AWS certification and social links alongside the exact approved quote. Keep Jake177 branding, the header email action and the correct contact address. Removed greeting, audience subtitle, company branding, private project links and duplicate contact sections stay removed.

## Motion and runtime

Later content reveals from blur on every viewport entry from either direction, resetting after leaving the reading viewport. Desktop blur is 14px, mobile 9px, entrance 1100ms and exit 240ms, with bounded sibling delays. Content stays stable while being read; keyboard focus reveals pending content immediately and preserves it until focus leaves.

Use passive scrolling, requestAnimationFrame, IntersectionObserver and scoped CSS with no new package, plugin or per-frame React state. The Canvas stays stage-sized while the camera and rectangular crop change, with its existing 30fps cap, pause control and offscreen/hidden suspension. Reduced motion removes sticky expansion, blur, texture and title choreography; short windows use a static TV. Default HTML/CSS keeps all copy visible without JavaScript and retains the local SVG fallback.

Reference behavior was inspected in Edge at https://reactbits.dev/animations/scroll-expand and https://reactbits.dev/animations/fade-content. Official ScrollExpand uses React/CSS, while official FadeContent uses GSAP. This implementation uses the native focus/opacity interpretation, not the GSAP Mist component.

## Consolidation and publishing

The shipping route is `/` (production `/Portfolio/`). The independent preview route and metadata have been removed. HomeExperience owns scroll behavior and header/hero; server-rendered page content remains in page.tsx and layout/motion styles in home.module.css. Retain the established main, services, approach and philosophy-title anchors. The retired ScrollMotion component and its obsolete rules are removed. No generated concept raster is shipped.

The owner authorized a direct main commit and the existing GitHub Pages deployment, without a PR. Local checks and deployed behavior must be verified for this consolidated route before reporting success.

## Existing tool limitation

The earlier independent review found no material UI defect. Impeccable's Windows engine could not resolve its automatic font-ranking browser; its stored build state remains spec: open. No state was forced or represented as passed. This local tooling limitation is separate from runnable lint, type checks, unit tests, static builds and browser verification.
