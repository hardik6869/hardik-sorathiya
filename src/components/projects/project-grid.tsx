import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { IconGlyph, IconTile } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { TagList } from "@/components/ui/tag";
import type { Project } from "@/types/content";

/** Compact card header: icon tile, domain and type badge on one line. */
function CardHeader({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <IconTile
          name={project.icon}
          className="size-11 rounded-xl transition-transform duration-500 motion-safe:group-hover:scale-110"
        />
        <span className="text-sm font-medium text-muted">{project.domain}</span>
      </div>
      <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold whitespace-nowrap text-accent">
        {project.caseStudy ? "Case study" : "Overview"}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const linked = Boolean(project.caseStudy);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,box-shadow,translate] duration-500 hover:border-accent/50 hover:shadow-[0_30px_80px_-40px] hover:shadow-accent/50 motion-safe:hover:-translate-y-1.5">
      {/* Faint icon watermark in the corner adds depth without taking space. */}
      <IconGlyph
        name={project.icon}
        className="pointer-events-none absolute -right-8 -bottom-10 size-44 stroke-[1.25] text-fg/[0.04] transition-transform duration-700 motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:rotate-[-6deg]"
      />

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">
        <CardHeader project={project} />
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
          {linked ? (
            <Link
              href={`/projects/${project.slug}`}
              prefetch
              className="after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>
        <p className="mt-3 leading-relaxed text-pretty text-muted">{project.summary}</p>

        {!linked ? (
          <details className="group/details relative z-10 mt-5">
            <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded text-sm font-semibold text-accent [&::-webkit-details-marker]:hidden">
              <Plus className="size-4 transition-transform group-open/details:rotate-45" aria-hidden="true" />
              Key contributions
            </summary>
            <ul className="mt-4 space-y-2 text-[15px]">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-pretty">
                  <span aria-hidden="true" className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </details>
        ) : null}

        <div className="mt-auto pt-6">
          <TagList items={project.stack.slice(0, 4)} label={`${project.title} stack`} />
          {linked ? (
            <div className="mt-5 flex items-center justify-end gap-4 border-t border-line pt-4 sm:justify-between lg:justify-end xl:justify-between">
              <span className="hidden text-sm text-muted sm:inline lg:hidden xl:inline">
                Problem · Role · Decisions · Outcome
              </span>
              <span
                aria-hidden="true"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent"
              >
                Read case study
                <ArrowRight className="size-4 transition-transform duration-300 motion-safe:group-hover:translate-x-1" />
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/** Selected Work as two columns of equal-height project cards. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal as="li" key={project.slug} delay={(i % 2) * 0.08}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </ul>
  );
}
