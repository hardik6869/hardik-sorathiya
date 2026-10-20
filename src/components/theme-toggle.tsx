"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const THEME_STORAGE_KEY = "theme";

/** Runs before first paint: the stored choice, else dark (the site is dark-first). */
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this page view.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-fg/5 hover:text-fg",
        className,
      )}
    >
      <Sun className="hidden size-4.5 dark:block" aria-hidden="true" />
      <Moon className="size-4.5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
