import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { TagList } from "@/components/ui/tag";
import type { Project } from "@/types/content";

type CaseStudyLayoutProps = {
  project: Project & { caseStudy: NonNullable<Project["caseStudy"]> };
  next: Project;
};

/** Placeholder with the same header footprint as a case study, shown only while content streams in. */
export function CaseStudySkeleton() {
  const bar = "rounded bg-line motion-safe:animate-pulse";
  return (
    <div aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading case study…</span>
      <div aria-hidden="true" className="border-b border-line">
        <Container className="pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className={`h-5 w-28 ${bar}`} />
          <div className={`mt-10 h-4 w-56 ${bar}`} />
          <div className={`mt-5 h-12 w-full max-w-3xl sm:h-20 ${bar}`} />
          <div className={`mt-6 h-6 w-full max-w-2xl ${bar}`} />
          <div className={`mt-2 h-6 w-2/3 max-w-xl ${bar}`} />
        </Container>
      </div>
    </div>
  );
}

export function CaseStudyLayout({ project, next }: CaseStudyLayoutProps) {
  const { caseStudy } = project;

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-backdrop opacity-60" />
        <Container className="relative pt-10 pb-14 sm:pt-14 sm:pb-20">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 rounded text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>
          <p className="mt-10 font-mono text-xs tracking-wider text-muted uppercase">
            <span className="text-accent">Case study</span> / {project.domain}
          </p>
          <h1 className="mt-4 max-w-4xl text-h2 font-semibold text-balance sm:text-display">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lead text-pretty text-muted">{project.summary}</p>
          <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-6">
            {project.metric ? (
              <div>
                <p className="font-mono text-4xl font-medium text-accent">{project.metric.value}</p>
                <p className="mt-1 text-sm text-muted">{project.metric.label}</p>
              </div>
            ) : null}
            <TagList items={project.stack} label="Tech stack" className="max-w-2xl" />
          </div>
        </Container>
      </header>

      <Container className="py-14 sm:py-20">
        <div className="space-y-14">
          {caseStudy.sections.map((section, i) => (
            <section
              key={section.heading}
              aria-labelledby={`cs-${i}`}
              className="grid gap-4 border-t border-line pt-8 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-8"
            >
              <h2 id={`cs-${i}`} className="text-h3 font-semibold lg:col-span-4">
                {section.heading}
              </h2>
              <div className="text-lead text-pretty text-muted lg:col-span-8">
                {section.body ? <p>{section.body}</p> : null}
                {section.points ? (
                  <ul className="space-y-4">
                    {section.points.map((point) => (
                      <li key={point.slice(0, 40)} className="relative pl-6">
                        <span
                          aria-hidden="true"
                          className="absolute top-[0.75em] left-0 h-px w-3 bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <nav
          aria-label="More case studies"
          className="mt-20 flex flex-col gap-6 rounded-lg border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="font-mono text-xs tracking-wider text-muted uppercase">Next case study</p>
            <p className="mt-2 text-h3 font-semibold text-balance">{next.title}</p>
          </div>
          <ButtonLink href={`/projects/${next.slug}`} prefetch variant="secondary" className="shrink-0">
            Read next
            <ArrowRight aria-hidden="true" />
            <span className="sr-only">: {next.title}</span>
          </ButtonLink>
        </nav>
      </Container>
    </article>
  );
}
