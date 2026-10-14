import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

/**
 * Highlighted freelance availability (hero and contact section). One line on wider screens;
 * on phones the detail drops below the status.
 */
export function Availability({ className }: { className?: string }) {
  const { status, detail } = profile.availability;
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2.5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-sm sm:items-center sm:rounded-full",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 sm:mt-0"
      />
      <span className="flex flex-col sm:flex-row sm:gap-1.5">
        <span className="font-medium text-emerald-800 dark:text-emerald-300">{status}</span>
        <span className="text-muted">
          <span aria-hidden="true" className="hidden sm:inline">
            ·{" "}
          </span>
          {detail}
        </span>
      </span>
    </p>
  );
}
