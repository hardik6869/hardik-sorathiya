import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/icon";
import { TagList } from "@/components/ui/tag";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { skillGroups } from "@/content/skills";
import { cn } from "@/lib/utils";

// Asymmetric 12-column layout for the seven core groups, in content order (7+5, 4+4+4, 5+7).
const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function Skills() {
  const core = skillGroups.filter((g) => g.tier === "core");
  const supporting = skillGroups.filter((g) => g.tier === "supporting");

  return (
    <Section
      id="skills"
      tone="band"
      label="Capabilities"
      title={
        <>
          The toolkit <em className="serif-accent text-accent">behind the work.</em>
        </>
      }
      intro="Frontend is the core. Backend is listed honestly as working knowledge."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
        {core.map((group, i) => (
          <Reveal as="li" key={group.title} delay={(i % 3) * 0.06} className={cn("sm:col-span-1", spans[i])}>
            <SpotlightCard className="group h-full rounded-3xl border border-line bg-bg p-7 transition-colors duration-300 hover:border-line-strong sm:p-8">
              <div className="flex items-center gap-3">
                {group.icon ? <IconTile name={group.icon} /> : null}
                <div>
                  <h3 className={cn("font-semibold", i === 0 ? "text-xl" : "text-lg")}>{group.title}</h3>
                  {group.note ? <p className="mt-0.5 text-sm text-muted">{group.note}</p> : null}
                </div>
              </div>
              <TagList items={group.items} label={group.title} className="mt-6" />
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>

      {/* Supporting skills: compact cards in the same style as the core cards above. */}
      {supporting.length > 0 ? (
        <>
          <h3 className="mt-12 text-sm font-semibold tracking-wider text-muted uppercase">
            Also working with
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supporting.map((group, i) => (
              <Reveal as="li" key={group.title} delay={(i % 4) * 0.05}>
                <SpotlightCard className="h-full rounded-2xl border border-line bg-bg p-5 transition-colors duration-300 hover:border-line-strong">
                  <div className="flex items-center gap-3">
                    {group.icon ? <IconTile name={group.icon} className="size-9" /> : null}
                    <div>
                      <h4 className="text-[15px] leading-tight font-semibold">{group.title}</h4>
                      {group.note ? <p className="mt-0.5 text-xs text-muted">{group.note}</p> : null}
                    </div>
                  </div>
                  <ul aria-label={group.title} className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-xs font-medium text-fg/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </ul>
        </>
      ) : null}
    </Section>
  );
}
