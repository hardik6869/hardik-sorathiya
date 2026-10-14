# Accessibility: WCAG 2.2 AA

Automated checks (`tests/a11y.spec.ts`, axe-core with WCAG 2.0, 2.1 and 2.2 A/AA tags, both themes, desktop and mobile) catch only part of the issues. Run the manual checks below before each release.

## Built in

- `lang="en"`, one `h1` per page, sections labelled by their `h2` (`aria-labelledby`)
- A skip link as the first tab stop, targeting `<main id="main">`
- The mobile menu is a modal `<dialog>`: it traps focus, makes the page behind it inert, closes on Esc or a backdrop click, and returns focus to its trigger
- Icon-only controls (theme toggle, menu, footer socials) have accessible names
- Contact is plain links (email, LinkedIn, GitHub) with descriptive names; external links announce they open in a new tab
- Contrast of at least 4.5:1 for text in both themes (tokens in `docs/DESIGN.md`)
- Touch targets of at least 24px (buttons are 36–44px)
- Reduced motion: Motion uses `reducedMotion="user"`, CSS animations are gated by `prefers-reduced-motion: no-preference`, and smooth scrolling is turned off

## Manual checklist

- [ ] Keyboard only: Tab through every page, check that focus is always visible and the order is logical, and that no traps exist (except the open menu dialog)
- [ ] Mobile menu: open it, Tab cycles inside, Esc closes it and focus returns to the menu button
- [ ] Screen reader (NVDA and Chrome, or VoiceOver and Safari): headings list, landmarks and link names
- [ ] Zoom to 200% and 400% (reflow at 320px CSS width) with no horizontal scrolling
- [ ] OS reduced-motion setting on: no movement, and all content visible
- [ ] Both themes: spot-check contrast on hover and focus states
