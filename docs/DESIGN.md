# Design brief: Editorial Dark

**Direction:** a dark-first, magazine-style portfolio. Large Geist Sans type with italic **Instrument Serif** accent words, generous but compact spacing, and calm, purposeful motion. Light mode is available from the toggle.

## Signature moments

- **Hero:** a "Software Engineer" badge and the freelance-availability pill, "Hi, I'm Hardik Sorathiya.", one statement ("…with _React.js, Next.js and TypeScript._"), one line of evidence from the resume, buttons and social icons, and a cut-out portrait (no frame) on a soft accent light, fading into the page at the bottom. The backdrop is a soft light behind the portrait plus a glow top-left, no pattern. The portrait rises in once on load and lifts slightly on hover. Sizes scale with viewport height so it fits one laptop screen.
- **About:** the lead paragraph lights up word by word as you scroll; Experience and Education are separate cards.
- **Work:** a 2-column grid of client project cards (icon, domain, title, summary, tags, "Read case study"), then a "Personal project" block whose single card spans both columns and adds a "Live site" link.
- **Experience:** the company name stays pinned while the five highlights scroll.
- **Skills:** seven cards in an asymmetric grid (7+5, 4+4+4, 5+7), mirroring the resume groups.
- **Approach:** a 2×2 grid of principle cards, then the AI-workflow panel.
- **Get in touch:** a short intro, the availability pill, and Email / LinkedIn / GitHub link cards in one row.
- **Case study:** breadcrumb, icon and domain, title and summary; then the sections as one document divided by rules (problem, role, key decisions as a checked list, outcome set off by an accent rule) beside a single, non-sticky details card (type, impact, stack, live site); previous/next links at the end.
- **Header:** the name as a wordmark on the left (first name in Geist semibold, surname in the italic serif accent), linking Home; page links and the "Get in touch" button on the right. Resume downloads live in the hero and mobile menu, not the bar.
- **Floating buttons (bottom-right):** the theme toggle, always visible, with the back-to-top button stacked above it once you scroll.
- **Header and footer** sit on `surface` so they separate from the page `bg`, especially in light mode.
- **Footer:** name, "Software Engineer · Gujarat, India" and one line on the left; page links centered; social icons on the right; copyright below.

## Tokens (`src/styles/globals.css`)

| Token                  | Dark (default)        | Light                 | Use                                  |
| ---------------------- | --------------------- | --------------------- | ------------------------------------ |
| `bg`                   | `#0a0a0b`             | `#f6f5f2`             | Page background                      |
| `surface`              | `#131316`             | `#ffffff`             | Cards, bands                         |
| `fg`                   | `#f5f5f4`             | `#141414`             | Text                                 |
| `muted`                | `#a1a1aa`             | `#55555c`             | Secondary text (≥ 4.5:1)             |
| `line` / `line-strong` | `#232327` / `#3a3a40` | `#e3e2de` / `#cfcdc8` | Borders, rules                       |
| `accent`               | `#8ea8ff`             | `#2f4fd6`             | Serif accents, CTAs, links, progress |
| `panel` / `panel-fg`   | `#141c38` / `#f5f5f4` | `#141414` / `#f6f5f2` | AI-workflow panel                    |

The theme is set on `<html data-theme>` before first paint: the stored choice, otherwise dark. Availability uses Tailwind's emerald scale; icon tiles use one tint per meaning (`iconTone` in `src/components/ui/icon.tsx`); brand icons use official colors (`brandColor` in `src/components/ui/icons.tsx`).

## Typography

- Geist Sans for UI and body, Instrument Serif italic for accent words (`serif-accent`), Geist Mono for small metadata.
- Fluid scale: `text-display`, `text-h2`, `text-h3`, `text-lead`.
- Shadows stay tight (`shadow-sm`/`shadow-md`); no large glows around buttons or cards.

## Layout

- `Section`: a stacked header (small label with an accent rule, then a large h2 and optional intro) above full-width content. `tone="band"` alternates the surface.
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
