"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Download, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SocialIcons } from "@/components/ui/social-links";
import { Availability } from "@/components/ui/availability";
import { profile } from "@/content/profile";
import { isActiveNav, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

const pageLinks = navItems.filter((item) => !("cta" in item));
const cta = navItems.find((item) => "cta" in item)!;

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  // Adds a soft shadow once the page scrolls under the bar.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A modal <dialog> traps focus, makes the page behind it inert and closes on Esc.
  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line bg-surface/70 chrome-tint backdrop-blur-lg transition-shadow duration-300",
        scrolled && "shadow-md shadow-black/5",
      )}
    >
      {/* Logo on the left; page links in a segmented pill and the call to action on the right. */}
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="hidden items-center gap-3 lg:flex">
            <ul className="flex items-center gap-0.5 rounded-full border border-line bg-bg/60 p-1">
              {pageLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActiveNav(item, pathname) ? "page" : undefined}
                    className="block rounded-full px-3.5 py-1.5 text-sm text-muted transition-colors hover:bg-fg/5 hover:text-fg aria-[current=page]:bg-surface aria-[current=page]:font-medium aria-[current=page]:text-fg aria-[current=page]:shadow-sm aria-[current=page]:ring-1 aria-[current=page]:ring-line-strong"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Highlighted call to action; a ring marks it as the current page. */}
            <Link
              href={cta.href}
              aria-current={isActiveNav(cta, pathname) ? "page" : undefined}
              className={buttonClasses({
                size: "sm",
                className:
                  "group aria-[current=page]:ring-2 aria-[current=page]:ring-accent/40 aria-[current=page]:ring-offset-2 aria-[current=page]:ring-offset-surface",
              })}
            >
              {cta.label}
              <ArrowUpRight
                className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </nav>

          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-haspopup="dialog"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-line-strong lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        aria-label="Site menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
        className="m-0 h-dvh max-h-none w-full max-w-none bg-bg text-fg backdrop:bg-black/40 open:flex open:flex-col lg:hidden"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-line bg-surface px-4 sm:px-6">
          <Logo onClick={closeMenu} />
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-bg transition-colors hover:border-line-strong"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="menu-in flex-1 overflow-y-auto px-4 py-4 sm:px-6">
          <ul className="flex flex-col gap-1">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActiveNav(item, pathname) ? "page" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 text-xl font-medium tracking-tight text-muted transition-colors hover:bg-fg/5 hover:text-fg aria-[current=page]:bg-surface aria-[current=page]:text-fg aria-[current=page]:ring-1 aria-[current=page]:ring-line"
                >
                  <span className="flex items-center gap-3">
                    {/* Accent dot marks the current page. */}
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-transparent group-aria-[current=page]:bg-accent"
                    />
                    {item.label}
                  </span>
                  <ArrowRight className="size-5 opacity-50" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="menu-in shrink-0 border-t border-line bg-surface px-4 pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6">
          <Availability />
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Link href={cta.href} onClick={closeMenu} className={buttonClasses()}>
              {cta.label}
              <ArrowUpRight aria-hidden="true" />
            </Link>
            <a href={profile.resumePath} download className={buttonClasses({ variant: "secondary" })}>
              <Download aria-hidden="true" />
              Resume
              <span className="sr-only">(PDF)</span>
            </a>
          </div>
          <SocialIcons className="mt-5 justify-center" />
        </div>
      </dialog>
    </header>
  );
}
