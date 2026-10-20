import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ListChecks,
  Target,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonClasses } from "@/components/ui/button";
import { IconTile } from "@/components/ui/icon";
import { TagList } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type CaseStudy = NonNullable<Project["caseStudy"]>;
type CaseStudySection = CaseStudy["sections"][number];

type CaseStudyLayoutProps = {
  project: Project & { caseStudy: CaseStudy };
  prev: Project;
  next: Project;
};

// Presentational icons for the standard case-study headings; other headings render without one.
const sectionIcons: Record<string, LucideIcon> = {
  "The problem": Target,
  "My role": UserRound,
  "Key decisions": ListChecks,
  Outcome: Trophy,
};

const bodyText = "text-[15px] leading-relaxed text-pretty text-muted sm:text-base";
const label = "font-mono text-xs tracking-wider text-muted uppercase";

/** Placeholder with the same intro footprint as a case study, shown only while content streams in. */
export function CaseStudySkeleton() {
  const bar = "rounded bg-line motion-safe:animate-pulse";
  return (
    <div aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading case study…</span>
      <div aria-hidden="true" className="border-b border-line">
        <Container className="pt-6 pb-8 sm:pt-8 sm:pb-10">
          <div className={`h-4 w-40 ${bar}`} />
          <div className="mt-6 flex items-center gap-3">
            <div className={`size-10 rounded-xl ${bar}`} />
            <div className={`h-4 w-48 ${bar}`} />
          </div>
          <div className={`mt-4 h-8 w-full max-w-3xl sm:h-10 ${bar}`} />
          <div className={`mt-4 h-5 w-full max-w-3xl ${bar}`} />
          <div className={`mt-2 h-5 w-2/3 max-w-2xl ${bar}`} />
        </Container>
      </div>
    </div>
  );
}

/**
 * One case-study section in plain document flow: heading, then body and/or a checked list.
 * The last section (the outcome) is set off with an accent rule instead of a card.
 */
function CaseStudyBlock({
  section,
  index,
  isLast,
  metric,
}: {
  section: CaseStudySection;
  index: number;
  isLast: boolean;
  metric: Project["metric"];
}) {
  const Icon = sectionIcons[section.heading];
  const headingId = `cs-${index}`;
  return (
    <section aria-labelledby={headingId} className="py-8 first:pt-0 last:pb-0">
      <div className={cn(isLast && "border-l-2 border-accent pl-5")}>
        <h2 id={headingId} className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          {Icon ? <Icon aria-hidden="true" className="size-4.5 text-accent" /> : null}
          {section.heading}
        </h2>
        {section.body ? <p className={cn("mt-3", bodyText)}>{section.body}</p> : null}
        {section.points ? (
          <ul className="mt-4 space-y-3">
            {section.points.map((point) => (
              <li key={point.slice(0, 40)} className={cn("flex gap-3", bodyText)}>
                <Check aria-hidden="true" className="mt-[0.3em] size-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
        {isLast && metric ? (
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
            <span className="font-mono text-2xl font-medium text-accent">{metric.value}</span>
            <span className="text-sm text-muted">{metric.label}</span>
          </p>
        ) : null}
      </div>
    </section>
  );
}

/** The one card beside the content: type, impact, stack and (for personal work) the live site. */
function DetailsCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <dl className="space-y-5 text-sm">
        <div>
          <dt className={label}>Project type</dt>
          <dd className="mt-1.5 font-medium">
            {project.kind === "personal" ? "Personal project" : "Client project"}
          </dd>
        </div>
        {project.metric ? (
          <div>
            <dt className={label}>Impact</dt>
            <dd className="mt-1.5">
              <span className="font-mono text-base font-medium text-accent">{project.metric.value}</span>{" "}
              <span className="text-muted">{project.metric.label}</span>
            </dd>
          </div>
        ) : null}
        <div>
          <dt className={label}>Tech stack</dt>
          <dd className="mt-2.5">
            <TagList items={project.stack} label="Tech stack" />
          </dd>
        </div>
      </dl>

      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses({ variant: "secondary", className: "mt-6 w-full" })}
        >
          View live site
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ) : null}
    </div>
  );
}

function PagerLink({ project, direction }: { project: Project; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  const Arrow = isNext ? ArrowRight : ArrowLeft;
  return (
    <Link
      href={`/projects/${project.slug}`}
      prefetch
      className={cn("group flex items-start gap-3 rounded py-1", isNext && "flex-row-reverse text-right")}
    >
      <Arrow
        aria-hidden="true"
        className={cn(
          "mt-5 size-4 shrink-0 text-muted transition-[color,transform] group-hover:text-accent",
          isNext ? "motion-safe:group-hover:translate-x-0.5" : "motion-safe:group-hover:-translate-x-0.5",
        )}
      />
      <span className="min-w-0">
        <span className={cn("block", label)}>{isNext ? "Next" : "Previous"}</span>
        <span className="mt-1 block font-semibold text-balance transition-colors group-hover:text-accent">
          {project.title}
        </span>
      </span>
    </Link>
  );
}

export function CaseStudyLayout({ project, prev, next }: CaseStudyLayoutProps) {
  const { sections } = project.caseStudy;

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
        <Container className="relative pt-6 pb-8 sm:pt-8 sm:pb-10">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/work" className="rounded transition-colors hover:text-fg">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="min-w-0 truncate text-fg">
                {project.title}
              </li>
            </ol>
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <IconTile name={project.icon} />
            <span className="text-sm font-medium text-muted">{project.domain}</span>
          </div>
          <h1 className="mt-4 max-w-4xl text-[1.75rem] leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem]">
            {project.title}
          </h1>
          <p className="mt-4 max-w-3xl leading-relaxed text-pretty text-muted sm:text-[17px]">
            {project.summary}
          </p>
        </Container>
      </header>

      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside aria-label="Project details" className="lg:order-last lg:col-span-4">
            <DetailsCard project={project} />
          </aside>

          <div className="divide-y divide-line lg:col-span-8">
            {sections.map((section, i) => (
              <CaseStudyBlock
                key={section.heading}
                section={section}
                index={i}
                isLast={i === sections.length - 1}
                metric={project.metric}
              />
            ))}
          </div>
        </div>

        <nav
          aria-label="More case studies"
          className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2"
        >
          <PagerLink project={prev} direction="prev" />
          <PagerLink project={next} direction="next" />
        </nav>
      </Container>
    </article>
  );
}
