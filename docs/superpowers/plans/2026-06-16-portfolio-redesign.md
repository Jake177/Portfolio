# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved single-page React portfolio redesign for AI workflow automation, internal tools, cloud solutions, and full-stack development.

**Architecture:** Keep the app as a Vite React SPA with anchor-based section navigation. Move portfolio content into central data modules, compose the page from focused section components, and use Framer Motion through a small local motion wrapper so reduced-motion handling is consistent.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, Framer Motion, lucide-react, ESLint.

---

## File Structure

- Modify `package.json` and `package-lock.json`: add `framer-motion` and `lucide-react`.
- Modify `index.html`: portfolio-specific title, description, Open Graph, and theme color.
- Replace `src/App.jsx`: composition-only app shell.
- Replace `src/index.css`: global visual system, Tailwind import, animation helpers, reduced-motion CSS, focus states.
- Create `src/data/profile.js`: hero, profile, stats, social/contact links.
- Create `src/data/services.js`: six service/focus-area cards.
- Create `src/data/projects.js`: featured projects and case studies.
- Create `src/data/skills.js`: categorized skills.
- Create `src/data/experience.js`: concise timeline entries.
- Replace `src/data/index.js`: compatibility barrel exports from new data files.
- Create `src/components/Layout.jsx`: page shell, background effects, main/footer composition.
- Replace `src/components/Navbar.jsx`: responsive section navigation with lucide mobile controls.
- Create `src/components/Footer.jsx`: compact footer with profile links.
- Create `src/components/SectionHeader.jsx`: consistent section heading copy.
- Create `src/components/AnimatedSection.jsx`: Framer Motion section reveal and stagger variants.
- Create `src/components/ButtonLink.jsx`: reusable CTA link.
- Replace `src/components/Home.jsx`: new `HeroSection` implementation while keeping export compatibility.
- Replace `src/components/AboutMe.jsx`: new `AboutSection` implementation while keeping export compatibility.
- Create `src/components/ServicesSection.jsx`.
- Replace `src/components/Projects.jsx`: new featured project and case-study composition.
- Replace `src/components/Skills.jsx`: grouped skills matrix.
- Create `src/components/ExperienceTimeline.jsx`.
- Replace `src/components/Contact.jsx`: contact CTA and form UI.
- Replace `src/components/NavigationCircles.jsx`: `BackToTopButton` implementation while keeping export compatibility.
- Remove `src/components/Loader.jsx` from app usage. Keep the file only if still referenced nowhere and deletion is safe.
- Keep `src/context/ThemeContext.jsx` only if still used. Remove it if the app is dark-mode-only and no components import it.

## Task 1: Dependencies and Data Model

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `src/data/profile.js`
- Create: `src/data/services.js`
- Create: `src/data/projects.js`
- Create: `src/data/skills.js`
- Create: `src/data/experience.js`
- Modify: `src/data/index.js`

- [ ] **Step 1: Install approved dependencies**

Run:

```bash
npm install framer-motion lucide-react --cache /tmp/npm-cache
```

Expected: `package.json` and `package-lock.json` include both packages.

- [ ] **Step 2: Create central data files**

Create data modules with named exports:

```js
export const profile = { /* name, role, headline, CTAs, contact links, summary, stats */ }
export const services = [ /* six service cards */ ]
export const projects = [ /* featured portfolio projects */ ]
export const caseStudies = [ /* selected business-focused case studies */ ]
export const skillGroups = [ /* categorized skill arrays */ ]
export const experience = [ /* concise timeline entries */ ]
```

Use conservative copy grounded in the existing project content.

- [ ] **Step 3: Replace data barrel exports**

Update `src/data/index.js` to re-export the new modules:

```js
export * from './profile'
export * from './services'
export * from './projects'
export * from './skills'
export * from './experience'
```

- [ ] **Step 4: Verify dependency/data stage**

Run:

```bash
npm run build
```

Expected: Build may still fail if old components import removed symbols. If it fails only because components have not been migrated yet, continue to Task 2.

## Task 2: Shared UI and Motion Primitives

**Files:**
- Create: `src/components/Layout.jsx`
- Create: `src/components/Footer.jsx`
- Create: `src/components/SectionHeader.jsx`
- Create: `src/components/AnimatedSection.jsx`
- Create: `src/components/ButtonLink.jsx`
- Replace: `src/components/NavigationCircles.jsx`
- Modify: `src/index.css`

- [ ] **Step 1: Add motion wrapper**

Create `AnimatedSection.jsx` with Framer Motion variants and `useReducedMotion`.

- [ ] **Step 2: Add layout primitives**

Create `Layout`, `SectionHeader`, `ButtonLink`, `Footer`, and `BackToTopButton` components with accessible markup and reusable class names.

- [ ] **Step 3: Update global CSS tokens**

Replace the current yellow-heavy CSS with dark SaaS tokens, focus styles, background texture helpers, and reduced-motion fallbacks.

- [ ] **Step 4: Verify shared components compile**

Run:

```bash
npm run build
```

Expected: Build may still fail only because section components have not been migrated. Continue to Task 3.

## Task 3: Redesigned Sections

**Files:**
- Replace: `src/components/Navbar.jsx`
- Replace: `src/components/Home.jsx`
- Replace: `src/components/AboutMe.jsx`
- Create: `src/components/ServicesSection.jsx`
- Replace: `src/components/Projects.jsx`
- Replace: `src/components/Skills.jsx`
- Create: `src/components/ExperienceTimeline.jsx`
- Replace: `src/components/Contact.jsx`
- Replace: `src/App.jsx`

- [ ] **Step 1: Rebuild app composition**

`App.jsx` should render:

```jsx
<Layout>
  <Navbar />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <CaseStudiesSection />
    <SkillsSection />
    <ExperienceTimeline />
    <ContactSection />
  </main>
  <Footer />
  <BackToTopButton />
</Layout>
```

- [ ] **Step 2: Rebuild navigation**

Use section anchors, active-section tracking, mobile menu controls, and keyboard-accessible links.

- [ ] **Step 3: Build hero/about/services**

Use the approved headline, subheadline, CTAs, floating workflow cards, professional summary, and six focus-area cards.

- [ ] **Step 4: Build projects/case studies**

Use featured project cards with problem, solution, stack, key features, impact, and external links. Add two or three case studies from the same data.

- [ ] **Step 5: Build skills/experience/contact**

Use grouped skills, a concise timeline, contact links, and a non-submitting contact-form UI with accessible labels.

- [ ] **Step 6: Verify redesigned app compiles**

Run:

```bash
npm run build
```

Expected: Production build succeeds.

## Task 4: SEO, Cleanup, and Verification

**Files:**
- Modify: `index.html`
- Delete or leave unused only if safe: `src/components/Loader.jsx`
- Delete or leave unused only if safe: `src/context/ThemeContext.jsx`
- Modify: `README.md` if run instructions or feature summary are stale.

- [ ] **Step 1: Update SEO metadata**

Set title, description, Open Graph metadata, and theme color for the redesigned portfolio.

- [ ] **Step 2: Remove obsolete imports and dead app wiring**

Remove loader/theme usage from `App.jsx`. Delete obsolete files only after confirming no imports remain with:

```bash
rg "Loader|ThemeProvider|useTheme|ThemeContext|boxicon|bx-" src index.html
```

- [ ] **Step 3: Run static verification**

Run:

```bash
npm run lint
npm run build
```

Expected: both pass.

- [ ] **Step 4: Run browser verification**

Start the app:

```bash
npm run dev -- --host 127.0.0.1
```

Verify desktop and mobile:

- Hero copy and CTAs are visible with no overflow.
- Navbar scrolls to sections and mobile menu opens/closes.
- Project links are keyboard-focusable and open externally.
- Contact links work.
- Reduced-motion users are respected by Framer Motion and CSS.
- No obvious console errors.

## Self-Review

- Spec coverage: the tasks cover dependency additions, central data files, reusable components, all requested sections, motion, SEO/accessibility, performance cleanup, and verification.
- Placeholder scan: no `TBD` or unresolved implementation placeholders remain. Data copy must be conservative and grounded in current portfolio content.
- Type consistency: all modules use JavaScript named exports and JSX components, matching the current non-TypeScript Vite app.
