import { Sparkles } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { IconTile } from "@/components/ui/icon";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { aiWorkflow, approach } from "@/content/approach";

export function Approach() {
  return (
    <Section
      id="approach"
      label="Approach"
      title={
        <>
          How I <em className="serif-accent text-accent">build.</em>
        </>
      }
      intro="The principles I bring to every module, from first requirement to production."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {approach.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 0.08}>
            <SpotlightCard className="group h-full rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong sm:p-9">
              <IconTile
                name={item.icon}
                className="size-12 rounded-2xl transition-transform duration-500 motion-safe:group-hover:-translate-y-1"
              />
              <h3 className="mt-6 text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-muted">{item.body}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>

      {/* High-contrast AI-workflow panel. */}
      <Reveal delay={0.1} className="relative mt-5 overflow-hidden rounded-3xl bg-panel text-panel-fg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -right-40 size-96 rounded-full bg-accent/20 blur-3xl"
        />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full bg-panel-fg/10 px-3 py-1 text-sm font-medium">
              <Sparkles className="size-4 text-violet-300" aria-hidden="true" />
              AI workflow
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI-assisted, <em className="serif-accent">not AI-dependent.</em>
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-pretty text-panel-fg/85">{aiWorkflow.body}</p>
            <ul aria-label="AI tooling" className="mt-6 flex flex-wrap gap-2">
              {aiWorkflow.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-panel-fg/20 px-3 py-1 text-[13px] font-medium"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-panel-fg/15 bg-panel-fg/6 p-6 sm:p-8 lg:col-span-5">
            <p className="text-sm font-medium text-panel-fg/80">Case in point</p>
            <h4 className="mt-2 text-lg font-semibold">{aiWorkflow.caseTitle}</h4>
            <p className="mt-3 leading-relaxed text-pretty text-panel-fg/85">{aiWorkflow.caseBody}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
