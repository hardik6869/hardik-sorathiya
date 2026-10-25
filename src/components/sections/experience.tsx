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

            {/* Timeline: a hairline links each highlight's icon to the next. */}
            <ul className="lg:col-span-8">
              {job.highlights.map((h, i) => (
                <Reveal
                  as="li"
                  key={h.title}
                  delay={i * 0.04}
                  className="group relative grid grid-cols-[auto_1fr] gap-5 pb-10 before:absolute before:top-12 before:bottom-2 before:left-5 before:w-px before:bg-line-strong last:pb-0 last:before:hidden sm:gap-6"
                >
                  <IconTile
                    name={h.icon}
                    className="ring-4 ring-bg transition-transform duration-300 motion-safe:group-hover:scale-110"
                  />
                  <div className="pt-1.5">
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
