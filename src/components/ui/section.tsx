import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  label: string;
  /** Pass `<em className="serif-accent">word</em>` inside for the italic serif accent. */
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** `band` paints a full-width surface band to separate it from neighbouring sections. */
  tone?: "plain" | "band";
  className?: string;
  children: React.ReactNode;
};

/** Small uppercase label in a pill, with an accent dot, above each section title. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

/** Section with a stacked header (small label above an oversized title) and full-width content. */
export function Section({ id, label, title, intro, tone = "plain", className, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-16 sm:py-20", tone === "band" && "border-y border-line bg-surface", className)}
    >
      <Container>
        <Reveal as="div" className="max-w-4xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 id={headingId} className="mt-5 text-h2 font-semibold text-balance">
            {title}
          </h2>
          {intro ? <p className="mt-6 max-w-2xl text-lead text-pretty text-muted">{intro}</p> : null}
        </Reveal>
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
