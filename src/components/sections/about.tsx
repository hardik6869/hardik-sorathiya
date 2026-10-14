import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/icon";
import { ScrollText } from "@/components/ui/scroll-text";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import type { IconName } from "@/types/content";

/** Card with an icon tile and a heading; used for the separate Experience and Education blocks. */
function InfoCard({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-line bg-surface p-6 sm:p-7">
      <h3 className="flex items-center gap-3 font-semibold">
        <IconTile name={icon} className="size-9" />
        {title}
      </h3>
      <ul className="mt-5 divide-y divide-line">{children}</ul>
    </div>
  );
}

export function About() {
  const [lead, ...rest] = profile.about;

  return (
    <Section
      id="about"
      label="About"
      title={
        <>
          Building reliable frontends <em className="serif-accent text-accent">for nearly 5 years.</em>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left: intro */}
        <div className="lg:col-span-7">
          <ScrollText
            text={lead}
            className="text-lg leading-relaxed font-medium text-pretty sm:text-xl sm:leading-relaxed"
          />
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-muted">
            {rest.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        {/* Right: experience and education, kept as separate cards */}
        <div className="space-y-5 lg:col-span-5">
          <Reveal>
            <InfoCard icon="briefcase" title="Experience">
              {experience.map((job) => (
                <li key={`${job.company}-${job.start}`} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-lg font-medium">{job.role}</p>
                  <p className="mt-0.5 text-sm text-muted">{job.company}</p>
                  <p className="mt-3 text-sm">
                    <span className="font-medium text-accent">
                      {job.start} – {job.end}
                    </span>
                    <span className="text-muted"> · {job.duration}</span>
                  </p>
                </li>
              ))}
            </InfoCard>
          </Reveal>

          <Reveal delay={0.08}>
            <InfoCard icon="graduation" title="Education">
              {profile.education.map((edu) => (
                <li key={edu.degree} className="py-4 first:pt-0 last:pb-0">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="mt-0.5 text-sm text-pretty text-muted">{edu.school}</p>
                  <p className="mt-2 text-sm">
                    <span className="font-medium text-accent">{edu.years}</span>
                    <span className="text-muted"> · {edu.score}</span>
                  </p>
                </li>
              ))}
            </InfoCard>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
