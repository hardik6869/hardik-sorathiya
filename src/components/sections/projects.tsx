import { Section } from "@/components/ui/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projects } from "@/content/projects";

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
      <ProjectGrid projects={projects} />
    </Section>
  );
}
