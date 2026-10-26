import Link from "next/link";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { socialLinks } from "@/components/ui/social-links";
import { profile } from "@/content/profile";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

// "Get in touch" is left out: the Connect column covers it.
const pages = [{ href: "/", label: "Home" }, ...navItems.filter((item) => !("cta" in item))];

const columnLabel = "font-mono text-xs tracking-wider text-muted uppercase";
const linkClass =
  "group inline-flex items-center gap-2.5 py-1 text-sm text-muted transition-colors hover:text-fg";

/**
 * Footer.
 * Top: identity (left), "Pages" and "Connect" columns (right). Smaller screens stack them.
 * Bottom bar: copyright, kept clear of the floating buttons in the bottom-right corner.
 */
export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface chrome-tint">
      {/* Accent hairline along the top edge, fading out at both ends. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/60 to-transparent"
      />

      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-6">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Turning complex business rules into clear, reliable interfaces.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
            {profile.role} · {profile.region}
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <p className={columnLabel}>Pages</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1.5 sm:grid-cols-1">
            {pages.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className={columnLabel}>Connect</p>
          <ul className="mt-4 flex flex-col gap-1.5" aria-label="Social links">
            {socialLinks.map(({ href, label, Icon, color, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={linkClass}
                >
                  <Icon className={cn("size-4 shrink-0", color)} aria-hidden="true" />
                  {label}
                  {external ? (
                    <>
                      <ArrowUpRight
                        className="size-3.5 opacity-60 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  ) : null}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumePath} download className={linkClass}>
                <Download className="size-4 shrink-0 text-accent" aria-hidden="true" />
                Resume <span className="sr-only">(PDF)</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container>
        {/* Right padding below xl keeps the text clear of the floating theme / back-to-top buttons. */}
        <div className="flex flex-col gap-1 border-t border-line py-6 pr-16 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-4 xl:pr-0">
          <p>© {profile.name}. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
