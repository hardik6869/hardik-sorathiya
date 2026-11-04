import { Section } from "@/components/ui/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { clientProjects, internalProjects, personalProjects } from "@/content/projects";
import type { Project } from "@/types/content";

/** A smaller group under the client work: label, one-line intro and its cards. */
function ProjectGroup({ title, intro, projects }: { title: string; intro: string; projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <>
      <h3 className="mt-12 text-sm font-semibold tracking-wider text-muted uppercase">{title}</h3>
      <p className="mt-2 mb-5 max-w-2xl text-pretty text-muted">{intro}</p>
      <ProjectGrid projects={projects} />
    </>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="Selected work"
      title={
        <>
          Client platforms, <em className="serif-accent text-accent">built to last.</em>
        </>
      }
      intro="Built at Simform. Client names and real screens are withheld, so each case study walks through the problem, my role and the key engineering decisions."
    >
      <ProjectGrid projects={clientProjects} />

      <ProjectGroup
        title="Internal tooling"
        intro="Built for the team at Simform, so new projects start faster and follow the same conventions."
        projects={internalProjects}
      />

      <ProjectGroup
        title="Personal project"
        intro="Built on my own, end to end, and live to try."
        projects={personalProjects}
      />
    </Section>
  );
}
