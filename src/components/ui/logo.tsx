import Link from "next/link";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

// The surname is set in the italic serif accent used across headings.
const [firstName, ...rest] = profile.name.split(" ");
const lastName = rest.join(" ");

/**
 * Name lockup linking Home: the name on top, the role in small mono capitals below.
 * The footer hides the role, since its own line already says it.
 */
export function Logo({
  className,
  onClick,
  showRole = true,
}: {
  className?: string;
  onClick?: () => void;
  showRole?: boolean;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${profile.name}, home`}
      className={cn(
        "inline-flex flex-col gap-1.5 rounded whitespace-nowrap transition-opacity duration-200 hover:opacity-80",
        className,
      )}
    >
      <span className="inline-flex items-baseline gap-1 leading-none">
        <span className="text-lg font-semibold tracking-tight">{firstName}</span>
        {/* The serif runs small next to Geist, so it is set slightly larger to match its cap height. */}
        <span className="serif-accent text-[1.3rem] tracking-normal text-accent">{lastName}</span>
      </span>
      {showRole ? (
        <span className="font-mono text-[11px] leading-none tracking-[0.16em] text-muted uppercase">
          {profile.role}
        </span>
      ) : null}
    </Link>
  );
}
