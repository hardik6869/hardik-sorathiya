import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "lg" | "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color,transform,box-shadow] duration-200 active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-sm shadow-accent/20 hover:bg-accent/90 hover:shadow-md hover:shadow-accent/25",
  secondary: "border border-line-strong bg-surface text-fg hover:border-fg/30 hover:bg-fg/3",
};

const sizes: Record<Size, string> = {
  lg: "h-12 px-6 text-[15px]",
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = React.ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
