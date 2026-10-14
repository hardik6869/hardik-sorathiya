import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CaseStudyLayout, CaseStudySkeleton } from "@/components/projects/case-study-layout";
import { caseStudies } from "@/content/projects";

// Case studies are public, unchanging content: the whole route must prerender.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

function findCaseStudy(slug: string) {
  const index = caseStudies.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const project = caseStudies[index];
  if (!project.caseStudy) return null;
  return {
    project: { ...project, caseStudy: project.caseStudy },
    next: caseStudies[(index + 1) % caseStudies.length],
  };
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const found = findCaseStudy(slug);
  if (!found) return {};
  const { project } = found;
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title: project.title,
      description: project.summary,
    },
  };
}

// With Partial Prefetching, the route's App Shell is shared by every slug, so the
// `params` read lives behind Suspense. Links to case studies use `prefetch={true}`
// to fetch the prerendered content too, so the fallback rarely shows.
export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<CaseStudySkeleton />}>
      <CaseStudy params={params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findCaseStudy(slug);
  if (!found) notFound();
  return <CaseStudyLayout {...found} />;
}
