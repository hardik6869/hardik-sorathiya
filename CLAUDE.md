@AGENTS.md

# Project rules: Hardik Sorathiya portfolio

Static-first personal portfolio. Next.js 16 (App Router, Cache Components), strict TypeScript, Tailwind CSS v4, Motion for React. Dark-first "editorial" design (see `docs/DESIGN.md`).

## Site structure

- `/` (Home, reached through the logo) shows every section: Hero → About → Work → Experience → Skills → Approach → Get in touch.
- Each nav link opens a page with **only** that section: `/about`, `/work`, `/experience`, `/skills`, `/approach`, `/contact`. The pages reuse the section components from `src/components/sections/`.
- Nav items live in `navItems` (`src/lib/site.ts`). "Get in touch" (`cta: true`) is the highlighted navbar button and is left out of the footer links.
- Case studies: `/projects/[slug]` (static, `ensureStatic = "navigation"`).
- Work shows client projects first, then a "Personal project" block (`kind: "personal"` in `src/content/projects.ts`). Personal projects are not anonymized and may link to their live site (`liveUrl`).

## Content rules

- **Nothing is invented.** Every claim, metric and project detail comes from the resume (`public/resume/`) or from Hardik directly. Don't add promises (e.g. reply times) he hasn't made.
- Designation is **"Software Engineer"**. Write years as digits ("nearly 5 years"). Use **"React.js"** (not "React" or "React.JS") in visible copy.
- Client work is **anonymized**: generic platform names, no client names, no real screenshots. Case studies are text-only (problem, role, key decisions, outcome).
- No company name in the hero. Location appears only in the footer ("Software Engineer · Gujarat, India").
- Never publish the phone number.
- All copy lives in typed data in `src/content/*.ts` (types in `src/types/content.ts`); components don't hard-code portfolio facts.

## Design rules (requested by Hardik)

- No looping or infinite motion (no marquees, rotating rings or floating elements). Entrances fade in once; hovers are subtle.
- No hero stat cards, no flow diagrams, no contact form, no number counters ("01 /").
- Keep spacing compact; the hero must fit one screen on laptops (sizes use `svh` on `lg`).

## Code

- Server Components by default; `"use client"` only for interactivity (header menu, theme toggle, `Reveal`, `ScrollText`, `ScrollProgress`, `SpotlightCard`, `BackToTop`).
- Pages must stay fully static: don't read cookies, headers or uncached data.
- Style with tokens from `src/styles/globals.css` (`bg-surface`, `text-muted`, `border-line`, `text-accent`, …), not raw hex values. Exceptions: icon tints (`iconTone` in `ui/icon.tsx`) and official brand colors (`brandColor` in `ui/icons.tsx`).
- Use `cn()` from `src/lib/utils.ts`. Reuse `Section`, `Container`, `Button`/`ButtonLink`, `TagList`, `IconTile`, `Availability`, `Reveal`.
- Keep dependencies minimal.

## Accessibility (WCAG 2.2 AA)

- One `h1` per page, logical heading order. Icon-only controls need an `aria-label`; external links announce "(opens in a new tab)".
- Text contrast at least 4.5:1 in **both** themes; adjust tokens, not individual components.
- Animate only `transform`/`opacity` (plus color for scroll-lit text). Motion respects reduced motion via `MotionConfig reducedMotion="user"`; CSS animations go inside `prefers-reduced-motion: no-preference`.

## Checks before finishing a change

```bash
npm run typecheck && npm run lint && npm run format:check && npm run build && npm run test:e2e
```
