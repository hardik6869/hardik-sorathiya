"use client";

import { cn } from "@/lib/utils";

/** Card with a soft accent glow that follows the cursor (CSS vars only, no re-renders). */
export function SpotlightCard({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
      }}
      onPointerLeave={(e) => e.currentTarget.style.setProperty("--y", "-100%")}
      className={cn("spotlight", className)}
      {...props}
    >
      {children}
    </div>
  );
}
