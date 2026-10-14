"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { isActiveNav, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  // A modal <dialog> traps focus, makes the page behind it inert and closes on Esc.
  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-mono text-sm font-medium"
          aria-label={`${profile.name}, home`}
        >
          <span className="flex size-8 items-center justify-center rounded-md bg-fg text-xs text-bg transition-colors group-hover:bg-accent group-hover:text-accent-fg">
            HS
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href} className={"cta" in item ? "ml-2" : undefined}>
                <Link
                  href={item.href}
                  aria-current={isActiveNav(item, pathname) ? "page" : undefined}
                  className={
                    "cta" in item
                      ? // Highlighted call to action; a ring marks it as the current page.
                        buttonClasses({
                          size: "sm",
                          className:
                            "aria-[current=page]:ring-2 aria-[current=page]:ring-accent/40 aria-[current=page]:ring-offset-2 aria-[current=page]:ring-offset-bg",
                        })
                      : cn(
                          "relative rounded-md px-3 py-2 text-sm text-muted transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-fg hover:after:scale-x-100",
                          "aria-[current=page]:text-fg aria-[current=page]:after:scale-x-100",
                        )
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={profile.resumePath}
            download
            className={buttonClasses({
              variant: "secondary",
              size: "sm",
              className: "hidden sm:inline-flex",
            })}
          >
            <Download aria-hidden="true" />
            Resume
          </a>
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-haspopup="dialog"
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-fg/5 lg:hidden"
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
        <div className="flex h-16 items-center justify-between border-b border-line px-4 sm:px-6">
          <span className="font-mono text-sm text-muted">Menu</span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-fg/5"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActiveNav(item, pathname) ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-4 py-4 text-2xl font-medium tracking-tight text-muted aria-[current=page]:text-accent",
                    "cta" in item && "text-accent",
                  )}
                >
                  {item.label}
                  {"cta" in item ? <ArrowRight className="size-6" aria-hidden="true" /> : null}
                </Link>
              </li>
            ))}
          </ul>
          <a href={profile.resumePath} download className={buttonClasses({ className: "mt-8 w-full" })}>
            <Download aria-hidden="true" />
            Download resume
          </a>
        </nav>
      </dialog>
    </header>
  );
}
