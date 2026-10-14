# Hardik Sorathiya: Portfolio

Personal portfolio of **Hardik Sorathiya**, Software Engineer (React.js, Next.js, TypeScript).

Static-first Next.js site: a full home page plus one page per section (About, Work, Experience, Skills, Approach, Get in touch), three case studies, light and dark themes, and WCAG 2.2 AA as a baseline.

## Stack

| Purpose   | Choice                                                       |
| --------- | ------------------------------------------------------------ |
| Framework | Next.js 16 (App Router, Cache Components, static generation) |
| Language  | TypeScript (strict)                                          |
| Styling   | Tailwind CSS v4 with CSS-variable design tokens              |
| Animation | Motion for React and CSS, with reduced motion respected      |
| Icons     | Lucide React                                                 |
| Testing   | Playwright and axe-core                                      |
| Quality   | ESLint, Prettier                                             |

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values, see below
npm run dev                  # http://localhost:3000
```

### Environment variables

| Variable               | Required | Purpose                                                                               |
| ---------------------- | -------- | ------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | no       | Canonical URL, sitemap, Open Graph. Defaults to `https://hardik-sorathiya.vercel.app` |

## Scripts

| Script                            | What it does                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| `npm run dev`                     | Development server                                                                   |
| `npm run build` / `npm start`     | Production build and server                                                          |
| `npm run typecheck`               | `tsc --noEmit`                                                                       |
| `npm run lint`                    | ESLint                                                                               |
| `npm run format` / `format:check` | Prettier                                                                             |
| `npm run test:e2e`                | Builds, starts on port 3100 and runs Playwright (desktop and mobile) with axe checks |

First-time Playwright setup: `npx playwright install chromium`.

## Project structure

```text
src/
├── app/                  routes (home, one page per section), metadata, sitemap, robots, OG image, 404
│   └── projects/[slug]/  static case-study pages
├── components/
│   ├── ui/               primitives (Button, Section, Tag, Reveal, IconTile, Availability …)
│   ├── sections/         Header, Hero, About, Projects, Experience, Skills, Approach, Contact, Footer
│   └── projects/         ProjectGrid, CaseStudyLayout
├── content/              typed portfolio data: edit here to change copy
├── lib/                  site config, utils
├── types/                content types
└── styles/globals.css    design tokens and base styles
tests/                    Playwright and axe specs
docs/                     DESIGN, ACCESSIBILITY, CONTENT
```

## Deployment

Deploy to Vercel (or any Next.js host). Set the environment variables above in the project settings, then confirm the following:

- `/sitemap.xml` and `/robots.txt` use the production domain
- The social preview (`/opengraph-image`) renders
- The email, LinkedIn and GitHub links work
