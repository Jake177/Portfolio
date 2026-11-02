---
name: James Ling
description: Warm paper, precise typography and a playful pink experiment.
colors:
  paper: "#f7f4ef"
  ink: "#242323"
  pink: "#f386a1"
  line: "#c8c4bd"
  muted: "#625f5a"
  deep-pink: "#bb395b"
  chrome: "#efede7"
  window-shadow: "#d6d2cb"
  control-line: "#aaa69e"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(28px, 8cqw, 72px)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(32px, 3.4vw, 48px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(22px, 2.2vw, 32px)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(16px, 1.2vw, 18px)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  square: "0px"
spacing:
  compact: "12px"
  control: "16px"
  group: "24px"
  block: "32px"
  column: "40px"
  section-mobile: "48px"
  section: "64px"
components:
  email-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "12px 19px"
  email-outlined:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 16px"
  email-outlined-hover:
    backgroundColor: "{colors.pink}"
  text-link:
    textColor: "{colors.ink}"
    padding: "6px 0"
  navigation-link:
    textColor: "{colors.ink}"
    padding: "12px 0"
  service-row:
    textColor: "{colors.ink}"
    padding: "28px 0 30px"
  retro-window:
    backgroundColor: "{colors.chrome}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
  motion-toggle:
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "5px 8px"
---

# Design System: James Ling

## Overview

**Creative North Star: "Warm paper, pink experiment"**

The incumbent identity pairs a warm paper surface with dark ink and a concentrated pink field. Large, tightly set Manrope headings give the content confidence; IBM Plex Mono supplies a quieter technical voice in window chrome, compact labels and the footer.

The interface is open and ruled rather than enclosed in repeated cards. A real particle experiment inside a square retro window provides the playful signature. This document records the implemented visual system; the service-first homepage composition and its local review status live in the surface brief.

**Key Characteristics:**

- Warm paper, ink and a single pink accent family.
- Large sans-serif headings with restrained monospaced details.
- Fine rules, square controls and deliberate whitespace.
- A live Canvas experiment with a local SVG still fallback.

## Colors

The palette feels warm and tactile, with pink concentrated in the artwork and small identity or interaction accents. The frontmatter is the normative token record.

### Primary

- **Experiment Pink** (`pink`): the particle-stage field, text selection, button offset and hover fill.
- **Deep Pink** (`deep-pink`): small asterisks and punctuation that need stronger contrast against paper.

### Neutral

- **Warm Paper** (`paper`): the page background and reversed primary-action text.
- **Ink** (`ink`): headings, primary text, structural rules and primary actions.
- **Quiet Ink** (`muted`): supporting descriptions, location, certification and footer text.
- **Paper Rule** (`line`): quieter row separators, underlines and window stripes.
- **Window Chrome** (`chrome`): narrow title and control bars around the pink stage.
- **Window Offset** (`window-shadow`): the retro window's solid offset.
- **Control Stroke** (`control-line`): the small motion control's resting border.

**The Paper and Ink Rule.** Keep the content on paper with ink text and thin rules; use pink to punctuate the established identity and interaction.

## Typography

**Display and Body Font:** Manrope, with Arial and sans-serif fallbacks.
**Label/Mono Font:** IBM Plex Mono, with monospace fallback.

Both fonts are self-hosted through `next/font/local`. The pairing combines rounded, compact display lettering with matter-of-fact technical details. Use the supplied local files; the generated concept's approximate type is not a replacement font specification.

### Hierarchy

- **Display:** the frontmatter's display role is used inside the opening television. Its container-relative size follows the pink screen's available width, with a 28px minimum and 72px maximum. Desktop copy spans two lines and mobile wraps within the screen.
- **Headline:** medium-weight section headings use the headline role and balanced wrapping.
- **Title:** service and process titles share the title role and weight (600); mobile uses (24px).
- **Body:** service descriptions, process copy, section supporting prose and profile metadata share the body role and line-height (1.65). Service/process paragraphs have a maximum measure of (58ch). The role uses weight (600), while location and certification use the muted color at the same size.
- **Label:** the small service heading uses the label role in uppercase. Window chrome uses smaller mono details (10px); footer details are (10px), reducing to (9px) on mobile.
- **Quote:** the personal statement uses `clamp(28px, 3vw, 44px)`, weight (500), line-height (1.45) and letter-spacing (-0.025em). Its final phrase receives a pink underline.

**The Two Voices Rule.** Use Manrope for content and actions; reserve IBM Plex Mono for compact technical labels, window controls and footer details.

## Layout

The shared shell is centered with a maximum width of (1600px) and fluid side padding of `clamp(24px, 4vw, 60px)`. The intermediate breakpoint uses (32px) side padding; mobile uses (24px), reducing to (18px) below the narrowest breakpoint. Text blocks retain comfortable measures rather than stretching across every available column.

Open sections are separated by one-pixel ink rules. Repeated service and process entries use the quieter rule color. Major section padding is (64px) vertically on desktop and (48px) on mobile. Existing two-column section introductions and three-column process rows collapse into a single reading column at the mobile breakpoint. The homepage's specific opening proportions and content order are recorded in `.impeccable/surfaces/src-app-page-tsx.md`, not imposed on future screens.

The shared CSS roles are `--text-body`, `--text-title` and `--text-section`. How I think uses the same section-heading scale as the process section; its left column groups personal details and social links, with the unchanged quote on the right. The opening television is centered above the service section. Service rows pair their title and description horizontally on desktop and stack on mobile.

Responsive breakpoints are (1050px), (760px), (640px) and (370px), all maximum-width queries. Navigation links hide below (640px), while the wordmark and email action remain. The email address can wrap anywhere; no essential service copy depends on hovering or opening a disclosure.

## Elevation & Depth

Content sections remain flat. Depth is limited to the incumbent retro window and primary email action, using solid offsets without blur. These are specific existing brand devices, not a general elevation scale for every future surface.

### Shadow Vocabulary

- **Window offset:** `7px 7px 0 #d6d2cb`, supporting the retro frame.
- **Primary action:** `4px 4px 0 var(--pink)`; hover uses a (5px) offset with a (-1px, -1px) translation, and active uses a (1px) offset with a (3px, 3px) translation.

**The Flat Content Rule.** Keep ordinary content flat; retain solid offsets on the established window and primary action.

## Shapes

The interface uses square corners and one-pixel borders. Dividers and open rows establish grouping without making every item a box. The wordmark's asterisk, diagonal arrows, play/pause and plus marks are native inline SVG with square caps and miter joins; they do not rely on platform glyph substitution.

The artwork stage clips its content and uses an aspect ratio of (1.37) on desktop and (1.17) on mobile. The organic particle form contrasts with the rectilinear window rather than changing the surrounding component geometry.

## Components

### Primary email action

A compact, tactile rectangular action uses ink fill, paper text and the pink offset described above. It has a minimum width of (198px) and minimum height of (54px), with a diagonal SVG arrow. Hover and active movement are removed under reduced motion.

### Outlined email action

The header action uses an ink border, mono text and a minimum height of (44px). Its background becomes pink on hover over (180ms). Mobile reduces the horizontal padding and label size while preserving the minimum height.

### Navigation and text links

Header navigation is plain Manrope text with a fine hover underline. Social links use a quiet bottom rule that darkens on hover, plus the same diagonal arrow. Social links reach a minimum height of (44px) on mobile. Email text links underline on hover or use a persistent quiet underline in the final contact region.

All links and buttons share a visible ink focus outline (2px) offset by (5px). The skip link becomes visible on keyboard focus.

### Open rows

Service entries place a title above concise supporting copy, separated by a fine rule. Process entries use a top rule and small monospaced ordinal. They remain normal document content and stack naturally on mobile; they are not interactive cards.

### Retro particle window

Narrow pale title and footer bars frame the pink stage. The heading includes a native SVG asterisk and ruled stripes; the footer holds the pointer hint and motion control. The real Canvas animation is the artwork. Generated PNG concepts are development references, not shipping imagery.

The local `public/particle-poster.svg` remains visible before Canvas is ready, without JavaScript or Canvas, and when reduced motion is requested. The animation responds to fine pointers, offers pause/resume, suspends offscreen or in a hidden tab, and uses fewer particles on touch devices. Reduced motion disables the toggle as “Motion off”, hides the Canvas, removes transitions and restores ordinary scrolling.

### Contact regions and footer

Email actions sit alongside or above a wrapping email address and the collaboration note. Contact strips use ink rules. The footer returns to small mono text, the Jake177 handle and the existing pink asterisk.

## Scroll motion

The opening TV rests as a centered square, sized to 72% of the available stage height, capped at 640px and constrained by the viewport width with at least 18px side margins. Its text padding follows the frame width. Its business headline sits completely inside the screen, briefly focuses from blur and retains a faint static scanline mask without repeated flicker. Scrolling expands the TV from its center to full bleed below the sticky header. The title lifts, loses focus and fades; reverse scroll restores it. A short hold releases into normal page content.

Service, process and philosophy blocks repeatedly reveal from blur on entry from either direction. Leaving the reading viewport resets them; content remains stable while being read. Entrances take 1100ms with bounded sibling delays, exits 240ms; blur is 14px on desktop and 9px on mobile. Keyboard focus immediately reveals pending interactive content and keeps it visible. Reduced motion removes expansion, blur, texture and entrance choreography; short windows use a static TV. Default HTML and CSS keep all copy visible without JavaScript. Passive scroll callbacks update one batched animation frame without React state, and the Canvas loop retains its 30fps cap and visibility suspension. No additional animation dependency is installed.

## Do's and Don'ts

### Do:

- **Do** preserve the warm paper, ink, pink and locally served font pairing.
- **Do** use open content, thin rules and clear type hierarchy for service and process information.
- **Do** retain the real Canvas artwork, its pause control and the local SVG fallback.
- **Do** provide visible keyboard focus and readable single-column mobile content.
- **Do** keep the retro window and primary-action offsets specific to those established components.

### Don't:

- **Don't** replace the incumbent palette or local fonts with a generated concept's approximate colors or type.
- **Don't** use generated concept PNGs as substitutes for the live particle artwork.
- **Don't** turn every content group into a raised card or spread window chrome across ordinary prose.
- **Don't** add decorative monospaced labels where the current content hierarchy already works.
- **Don't** make essential information or contact actions depend on animation, hover or Canvas availability.
