# Content

All portfolio copy lives in typed data. Edit these files to change the site; components only render them.

| File                                        | Contains                                                                                                        |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `src/content/profile.ts`                    | Name, role, freelance availability, footer region, email, socials, resume path, about paragraphs, education     |
| `src/content/skills.ts`                     | The 10 skill groups from the resume: 6 core cards and 4 "Also working with" cards (backend = working knowledge) |
| `src/content/experience.ts`                 | The Simform role, condensed to 5 titled outcomes                                                                |
| `src/content/projects.ts`                   | 4 projects in resume order. Those with `caseStudy` get a page at `/projects/[slug]`                             |
| `src/content/approach.ts`                   | Engineering principles and the AI-workflow block                                                                |
| `public/resume/Hardik_Sorathiya_Resume.pdf` | Downloadable resume. Replace the file and keep the name                                                         |
| `public/Hardik.png`                         | Hero portrait                                                                                                   |

A few short lines live in components because they are layout copy, not facts: the hero statement (`sections/hero.tsx`), the Get in touch intro (`sections/contact.tsx`) and the footer line (`sections/footer.tsx`).

## Rules

1. **Source of truth:** the resume, or Hardik directly. Do not invent metrics, clients, testimonials, outcomes or promises.
2. **Anonymized client work:** no client names or real screenshots unless written permission exists.
3. **Wording:** "Software Engineer", years in digits, "React.js".
4. **Phone number** is never published.

## Adding a case study

Add a `caseStudy` object to a project in `projects.ts` with its sections (_The problem_, _My role_, _Key decisions_, _Outcome_). The page, sitemap entry and "next case study" link are generated automatically.

## Open items to confirm

- [ ] The 35–40% performance gain, 5+ access levels and 1–2 week migration are Hardik's to claim, and how each was measured
- [ ] Simform end date wording (currently "Jan 2022 – Oct 2026")
- [x] Production domain: `https://hardik-sorathiya.vercel.app` (default in `src/lib/site.ts`)
- [ ] A personal or public GitHub project worth featuring
