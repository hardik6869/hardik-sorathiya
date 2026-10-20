import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GitHubIcon, LinkedInIcon, brandColor } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/site";

/**
 * Footer.
 * Top: identity (left), page links (center), social icons (right).
 * Bottom bar: copyright.
 */
export function Footer() {
  const socials = [
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, color: brandColor.email },
    {
      href: profile.socials.linkedin.href,
      label: "LinkedIn",
      Icon: LinkedInIcon,
      color: brandColor.linkedin,
    },
    { href: profile.socials.github.href, label: "GitHub", Icon: GitHubIcon, color: brandColor.github },
  ];

  return (
    <footer className="border-t border-line bg-surface">
      {/*
        lg: three columns on one line — name/role (left), page links (exact center), icons (right).
        The two outer blocks grow equally (flex-1 basis-0), so the links stay centered on the page.
        Smaller screens: stacked — name/role, links, icons.
      */}
      <Container className="flex flex-col gap-6 py-10 lg:flex-row lg:items-center lg:gap-10">
        <div className="lg:flex-1 lg:basis-0">
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">
            {profile.role} · {profile.region}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Turning complex business rules into clear, reliable interfaces.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 lg:justify-center">
            {/* "Get in touch" is left out: the email icon covers it. */}
            {navItems
              .filter((item) => !("cta" in item))
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-2 lg:flex-1 lg:basis-0 lg:justify-end" aria-label="Social links">
          {socials.map(({ href, label, Icon, color }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http")
                  ? {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `${label} (opens in a new tab)`,
                    }
                  : { "aria-label": label })}
                className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface transition-[border-color,transform] duration-200 hover:border-line-strong motion-safe:hover:-translate-y-0.5"
              >
                <Icon className={`size-4.5 ${color}`} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Container>
        <div className="flex flex-col gap-2 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {profile.name}. Built with Next.js. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
