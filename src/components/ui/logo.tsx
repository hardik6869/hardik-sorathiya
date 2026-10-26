import Link from "next/link";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

// The surname is set in the italic serif accent used across headings.
const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");
const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

/** Monogram tile and name wordmark, linking Home. Used in the header, mobile menu and footer. */
export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${profile.name}, home`}
      className={cn("group inline-flex items-center gap-2.5 rounded-lg whitespace-nowrap", className)}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-[13px] font-semibold tracking-tight text-accent-fg shadow-sm transition-transform duration-300 motion-safe:group-hover:-rotate-6"
      >
        {initials}
      </span>
      <span className="inline-flex items-baseline gap-1 leading-none">
        <span className="text-lg font-semibold tracking-tight">{firstName}</span>
        {/* The serif runs small next to Geist, so it is set slightly larger to match its cap height. */}
        <span className="serif-accent text-[1.3rem] tracking-normal text-accent">{lastName}</span>
      </span>
    </Link>
  );
}
