import {
  BadgeCheck,
  Briefcase,
  ChartLine,
  Clock,
  CodeXml,
  Database,
  FileSignature,
  FlaskConical,
  Gauge,
  GraduationCap,
  KeyRound,
  Layers,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Table2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types/content";

const icons: Record<IconName, LucideIcon> = {
  code: CodeXml,
  database: Database,
  palette: Palette,
  flask: FlaskConical,
  sparkles: Sparkles,
  rocket: Rocket,
  layers: Layers,
  "shield-check": ShieldCheck,
  users: Users,
  key: KeyRound,
  gauge: Gauge,
  "badge-check": BadgeCheck,
  "file-signature": FileSignature,
  table: Table2,
  clock: Clock,
  chart: ChartLine,
  briefcase: Briefcase,
  graduation: GraduationCap,
};

// Tile colors per icon, chosen to match what the icon means. Full class strings so Tailwind
// can see them. Icons meet 3:1 non-text contrast on their tile in both themes.
const tones = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  teal: "bg-teal-100 text-teal-700 dark:bg-teal-500/15 dark:text-teal-300",
  pink: "bg-pink-100 text-pink-700 dark:bg-pink-500/15 dark:text-pink-300",
  cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/15 dark:text-cyan-300",
  green: "bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300",
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
} as const;

const iconTone: Record<IconName, keyof typeof tones> = {
  code: "blue", // code / frameworks
  database: "teal", // data
  palette: "pink", // design
  flask: "green", // testing
  sparkles: "violet", // AI
  rocket: "orange", // delivery
  layers: "indigo", // architecture
  "shield-check": "emerald", // security / RBAC
  users: "sky", // people
  key: "amber", // authorization
  gauge: "rose", // performance
  "badge-check": "green", // quality
  "file-signature": "blue", // documents
  table: "teal", // data tables
  clock: "amber", // time tracking
  chart: "emerald", // finance
  briefcase: "orange", // work
  graduation: "indigo", // education
};

/** The bare icon (no tile), e.g. for large decorative watermarks. */
export function IconGlyph({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return <Icon aria-hidden="true" className={className} />;
}

/** Decorative icon in a rounded tile tinted to match the icon. */
export function IconTile({ name, className }: { name: IconName; className?: string }) {
  const Icon = icons[name];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl",
        tones[iconTone[name]],
        className,
      )}
    >
      <Icon className="size-5" />
    </span>
  );
}
