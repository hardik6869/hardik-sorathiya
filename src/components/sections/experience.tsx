import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/icon";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title={
        <>
          Where I&apos;ve <em className="serif-accent text-accent">shipped.</em>
        </>
      }
    >
      <ol className="space-y-20">
        {experience.map((job) => (
          <li key={`${job.company}-${job.start}`} className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Pinned on desktop while the highlights scroll past. */}
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <p className="serif-accent text-6xl leading-none text-fg sm:text-7xl">{job.company}</p>
              <h3 className="mt-6 text-xl font-semibold">{job.role}</h3>
              <p className="mt-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-line px-4 py-2 text-sm">
                <span className="font-medium text-accent">
                  <time>{job.start}</time> – <time>{job.end}</time>
                </span>
                <span className="text-muted">· {job.duration}</span>
              </p>
            </div>

            <ul className="border-t border-line lg:col-span-8">
              {job.highlights.map((h, i) => (
                <Reveal
                  as="li"
                  key={h.title}
                  delay={i * 0.04}
                  className="group grid gap-4 border-b border-line py-7 sm:grid-cols-[auto_1fr] sm:gap-6"
                >
                  <IconTile
                    name={h.icon}
                    className="transition-transform duration-300 motion-safe:group-hover:scale-110"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{h.title}</h4>
                    <p className="mt-2 leading-relaxed text-pretty text-muted">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
