/**
 * Public site URL, used for canonical links, the sitemap and Open Graph tags.
 * Defaults to the main (Vercel) site so every deployment, including mirrors, points there.
 * Set NEXT_PUBLIC_SITE_URL only to override it (e.g. after moving to a custom domain).
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hardik-sorathiya.vercel.app").replace(
  /\/$/,
  "",
);

export const siteName = "Hardik Sorathiya";

export const siteDescription =
  "Software Engineer building scalable, secure React.js and Next.js applications, accelerated by AI-assisted workflows.";

/**
 * Each link opens a page with only that section; the logo links Home, which shows every section.
 * `match` lists extra path prefixes that should mark the link as active.
 */
export const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work", match: ["/projects"] },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/approach", label: "Approach" },
  // Highlighted as the header's call-to-action button.
  { href: "/contact", label: "Get in touch", cta: true },
] as const;

/** True when `pathname` is the nav item's page (or one of its `match` prefixes, e.g. case studies under Work). */
export function isActiveNav(item: (typeof navItems)[number], pathname: string) {
  const prefixes: readonly string[] = [item.href, ...("match" in item ? item.match : [])];
  return prefixes.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}
