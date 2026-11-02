---
version: 1
slug: "src-app-motion-preview-page-tsx"
primary_target: "src/app/motion-preview/page.tsx"
related_targets: ["src/app/motion-preview/ScrollExpandPreview.tsx", "src/app/motion-preview/motion-preview.module.css"]
---

# Television expansion and content fade — proposal

The owner requested React Bits Scroll Expand as a pink-TV opening and Fade Content for later scroll reveals, with explicit approval before installing anything.

## Dependency decision

Official ScrollExpand TS/CSS imports React and CSS only. Official FadeContent currently imports gsap and gsap/ScrollTrigger. The current project declares no gsap dependency. No package, CLI or plugin was installed. This proposal uses the existing React/Canvas code, passive scroll events, requestAnimationFrame, IntersectionObserver and scoped CSS instead of installing the original FadeContent component.

Primary references: https://reactbits.dev/animations/scroll-expand and https://reactbits.dev/animations/fade-content. Source inspected in DavidHDev/react-bits under src/ts-default/Animations/{ScrollExpand,FadeContent}.

## Motion and composition

- Preserve the existing paper/pink/local fonts, square TV chrome, live sculpture and confirmed English content.
- Start with the existing business headline beside a compact television. Native scrolling expands the same framed pink stage across the viewport below the persistent navigation. Reverse scrolling restores the opening.
- Use one short expansion/hold interval, then release into normal service, process and philosophy content. Header navigation and the keyboard skip link can bypass the introduction.
- Later content fades from slight blur and vertical displacement on first entry, with bounded sibling delays. It stays visible on return. Focus reveals pending content immediately.
- Keep the Canvas raster at the stage size, changing its viewport camera and rectangular crop rather than reallocating the Canvas on every scroll frame. Existing pause and offscreen suspension remain.
- Reduced motion removes the sticky expansion and fades. Short windows get a static composition. Without JavaScript the initial composition and all following copy remain visible.

## Scope

Review URL: /motion-preview/. The current homepage is not replaced. The shared particle component gains an optional viewport ref with unchanged default behavior. Generated design images or external runtime libraries are not used. On 2026-11-02 the owner authorized pushing the current updates to main, triggering the existing Pages deployment. The proposal remains an independent route rather than replacing the homepage.
