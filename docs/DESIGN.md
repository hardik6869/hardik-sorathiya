# Design brief: Editorial Dark

**Direction:** a dark-first, magazine-style portfolio. Large Geist Sans type with italic **Instrument Serif** accent words, generous but compact spacing, and calm, purposeful motion. Light mode is available from the toggle.

## Signature moments

- **Hero:** a small accent line with the name (the h1) and role, then a large headline ("Building **scalable**, production-grade web apps with _React.js & Next.js._"): "scalable" gets a highlighter band that sweeps in once, hyphenated words never split. A summary from the resume (opens with **nearly 5 years** emphasized; end-to-end ownership, clients, unfamiliar codebases, guiding developers; no project details). Three compact highlights in a hairline strip (Mentoring & clients, Backend knowledge, AI-assisted delivery). Buttons (side by side on phones) and social icons after a hairline divider. The cut-out portrait has no background: on `lg` its column stretches to the text's height, so the photo runs from the name line down to the buttons. A soft accent shadow follows the silhouette and the photo fades out at the bottom and sides; it rises in once and lifts on hover as the shadow deepens. Below `lg` the portrait sits above the text; the portrait and the name line are centred, the rest stays left-aligned like the other sections. Sizes scale with viewport height so it fits one laptop screen.
- **About:** the lead paragraph lights up word by word as you scroll; Experience and Education are separate cards.
- **Work:** a 2-column grid of client project cards (icon, domain, title, summary, tags, "Read case study"), then a "Personal project" block whose single card spans both columns and adds a "Live site" link.
- **Experience:** the company name stays pinned while the highlights scroll as a timeline (a hairline links each icon to the next).
- **Skills:** seven cards in an asymmetric grid (7+5, 4+4+4, 5+7), mirroring the resume groups.
- **Approach:** a 2×2 grid of principle cards, then the AI-workflow panel.
- **Get in touch:** a full-width `surface` band: intro and availability on the left, Email / LinkedIn / GitHub link cards stacked on the right (below on smaller screens). The email may only break after the "@".
- **Case study:** breadcrumb, icon and domain, title and summary; then the sections as one document divided by rules (problem, role, key decisions as a checked list, outcome set off by an accent rule) beside a single, non-sticky details card (type, impact, stack, live site); previous/next links at the end.
- **Header:** the logo on the left (a name lockup: first name in Geist semibold, surname in the italic serif accent, and "Software Engineer" in small mono capitals beneath), linking Home; page links in a segmented pill (the current page is a raised `surface` chip) and the "Get in touch" button on the right. A soft shadow appears once the page scrolls. The mobile menu shows the logo, the page links (current page marked with an accent dot), then availability, "Get in touch" and Resume buttons and the social icons. Resume downloads live in the hero, mobile menu and footer, not the bar.
- **Floating buttons (bottom-right):** the theme toggle, always visible, with the back-to-top button stacked above it once you scroll.
- **Header and footer** sit on `surface` so they separate from the page `bg`, especially in light mode.
- **Footer:** the name (lockup without the role line), one line and "Software Engineer · Gujarat, India" on the left; a "Pages" column (Home plus the nav pages) and a "Connect" column (GitHub, LinkedIn, Email, Resume, each with its icon) on the right; copyright and "Built with" below, kept clear of the floating buttons.

## Tokens (`src/styles/globals.css`)

| Token                  | Dark (default)        | Light                 | Use                                  |
| ---------------------- | --------------------- | --------------------- | ------------------------------------ |
| `bg`                   | `#0a0a0b`             | `#f4f6f9`             | Page background                      |
| `surface`              | `#131316`             | `#ffffff`             | Cards, bands                         |
| `fg`                   | `#f5f5f4`             | `#0f1218`             | Text                                 |
| `muted`                | `#a1a1aa`             | `#51555e`             | Secondary text (≥ 4.5:1)             |
| `line` / `line-strong` | `#232327` / `#3a3a40` | `#e1e5ec` / `#c8ced8` | Borders, rules                       |
| `accent`               | `#8ea8ff`             | `#2f4fd6`             | Serif accents, CTAs, links, progress |
| `panel` / `panel-fg`   | `#141c38` / `#f5f5f4` | `#10131a` / `#f4f6f9` | AI-workflow panel                    |

The theme is set on `<html data-theme>` before first paint: the stored choice, otherwise dark. Availability uses Tailwind's emerald scale; icon tiles use one tint per meaning (`iconTone` in `src/components/ui/icon.tsx`); brand icons use official colors (`brandColor` in `src/components/ui/icons.tsx`).

## Typography

- Geist Sans for UI and body, Instrument Serif italic for accent words (`serif-accent`), Geist Mono for small metadata.
- Fluid scale: `text-display`, `text-h2`, `text-h3`, `text-lead`.
- Shadows stay tight (`shadow-sm`/`shadow-md`); no large glows around buttons or cards.

## Layout

- `Section`: a stacked header (`SectionLabel`, a small uppercase pill with an accent dot, then a large h2 and optional intro) above full-width content. `tone="band"` alternates the surface.
- Home shows every section; each nav page (`/about`, `/work`, …) renders a single section with tighter top spacing.

## Motion

| Effect                | Implementation                                                   |
| --------------------- | ---------------------------------------------------------------- |
| Hero entrance         | CSS `fade-up`, short stagger, plays once                         |
| Scroll progress bar   | Motion `useScroll` + `useSpring`, `scaleX` only                  |
| About scroll-lit text | Motion `useScroll`, color from `muted` to `fg` (both accessible) |
| Section reveals       | `Reveal` (Motion `whileInView`, once)                            |
| Card hover            | Lift, accent border and glow (`motion-safe`)                     |
| Card spotlight        | CSS radial gradient at the pointer (`SpotlightCard`)             |
| Back to top           | Floating button appears after scrolling                          |

**Rules:**

- No looping or infinite motion. Animate transform and opacity (plus color for scroll-lit text).
- Never hijack scrolling, and never hide content from keyboard or screen-reader users.
- Every animation is disabled under `prefers-reduced-motion`.
