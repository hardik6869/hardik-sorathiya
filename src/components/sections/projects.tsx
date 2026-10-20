import { Section } from "@/components/ui/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { clientProjects, personalProjects } from "@/content/projects";

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

      {personalProjects.length > 0 ? (
        <>
          <h3 className="mt-12 text-sm font-semibold tracking-wider text-muted uppercase">
            Personal project
          </h3>
          <p className="mt-2 mb-5 max-w-2xl text-pretty text-muted">
            Built on my own, end to end, and live to try.
          </p>
          <ProjectGrid projects={personalProjects} />
        </>
      ) : null}
    </Section>
  );
}
