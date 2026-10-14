import { cn } from "@/lib/utils";

function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-bg px-3 py-1 text-[13px] font-medium text-fg/80",
        className,
      )}
      {...props}
    />
  );
}

export function TagList({ items, label, className }: { items: string[]; label: string; className?: string }) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
