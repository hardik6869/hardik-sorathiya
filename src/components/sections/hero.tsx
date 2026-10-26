import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink, buttonClasses } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/social-links";
import { IconTile } from "@/components/ui/icon";
import { profile } from "@/content/profile";
import portrait from "../../../public/Hardik_profile.webp";

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

/** Keeps hyphenated words ("production-grade") on one line; lines still break at spaces. */
const keepHyphens = (text: string) =>
  text.split(/(\S*-\S*)/).map((part, i) =>
    part.includes("-") ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    ),
  );

/** Renders **double-asterisk** words from the content as emphasized text. */
const emphasize = (text: string) =>
  text.split(/\*\*(.+?)\*\*/).map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-medium text-fg">
        {part}
      </strong>
    ) : (
      part
    ),
  );

export function Hero() {
  const { headline, summary, highlights } = profile.hero;
  // Punctuation that directly follows the highlighted word, e.g. the comma in "scalable,".
  const markTail = headline.rest.match(/^[^\s\w]*/)?.[0] ?? "";

  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Decorative backdrop: soft accent light behind the portrait, a glow top-left and a fading base line. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="fade-in absolute inset-0 [--focus:50%_14%] hero-light sm:[--focus:50%_16%] lg:[--focus:80%_45%]" />
        <div className="glow-in absolute -top-40 -left-40 size-128 opacity-60 accent-glow" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-line-strong to-transparent" />
      </div>

      {/* On lg+ every size below is capped by the viewport height (svh), so the whole hero fits in one screen.
          The outer flex centres the content vertically; the inner grid stretches both columns to the text's height,
          so the portrait runs from the name line down to the buttons. */}
      <Container className="pt-6 pb-12 sm:pt-12 sm:pb-16 lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center lg:pt-[4svh] lg:pb-[6svh]">
        <div className="grid w-full gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:relative lg:order-2 lg:col-span-5 lg:col-start-8">
            {/* Cut-out portrait with no background: a soft accent shadow follows the silhouette and the photo fades out
                at the bottom and sides. It rises in once on load; on hover it lifts and the shadow deepens. On lg it
                fills its column without cropping. Below lg the portrait and the name line are centred; the rest stays
                left-aligned like the other sections. */}
            <div className="group relative mx-auto aspect-square w-60 sm:w-72 lg:absolute lg:inset-y-0 lg:right-0 lg:-left-16 lg:mx-0 lg:aspect-auto lg:w-auto">
              {/* The shadow sits on this wrapper, not the image: the image's fade mask would otherwise clip it to a box. */}
              <div className="portrait-in absolute inset-0 drop-shadow-[0_20px_40px_color-mix(in_oklab,var(--accent)_35%,transparent)] transition-[filter,translate] duration-500 ease-out group-hover:drop-shadow-[0_28px_56px_color-mix(in_oklab,var(--accent)_50%,transparent)] motion-safe:group-hover:-translate-y-2">
                <Image
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  priority
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 288px, 240px"
                  className="[mask-image:linear-gradient(to_bottom,black_80%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          <div className="lg:order-1 lg:col-span-7">
            {/* Name (the h1) and role as a small accent line above the headline. Centred under the portrait below lg;
                on phones the name and role sit on two lines so neither wraps mid-line. */}
            <h1
              id="hero-heading"
              className="fade-up flex flex-col items-center gap-1 text-center font-mono text-xs font-medium tracking-[0.18em] uppercase sm:flex-row sm:justify-center sm:gap-2.5 sm:text-sm lg:justify-start lg:text-left"
              style={delay(0)}
            >
              <span aria-hidden="true" className="hidden h-px w-8 bg-accent sm:block" />
              <span className="text-accent">{profile.name}</span>
              <span aria-hidden="true" className="hidden text-muted sm:inline">
                ·
              </span>
              <span className="text-muted">
                <span className="sr-only">, </span>
                {profile.role}
              </span>
            </h1>

            <p
              className="fade-up mt-5 max-w-3xl text-[2.375rem] leading-[1.05] font-semibold tracking-[-0.035em] text-pretty sm:text-[3.25rem] lg:mt-[3svh] lg:text-[clamp(2.25rem,6.4svh,3.75rem)]"
              style={delay(1)}
            >
              {headline.lead}{" "}
              {/* Highlighter band behind the key word; sweeps in once. Punctuation right after it ("scalable,")
                  stays on the same line. */}
              <span className="whitespace-nowrap">
                <span className="mark-in relative isolate inline-block before:absolute before:inset-x-[-0.06em] before:bottom-[0.06em] before:-z-10 before:h-[0.36em] before:origin-left before:rounded-sm before:bg-accent/30 dark:before:bg-accent/40">
                  {headline.mark}
                </span>
                {markTail}
              </span>
              {keepHyphens(headline.rest.slice(markTail.length))}{" "}
              <em className="serif-accent tracking-normal text-accent">{headline.accent}</em>
            </p>

            <p
              className="fade-up mt-5 max-w-2xl text-lead text-pretty text-muted lg:mt-[2.5svh] lg:text-[clamp(1rem,2.5svh,1.1875rem)]"
              style={delay(2)}
            >
              {emphasize(summary)}
            </p>

            {/* Three compact highlights recruiters look for, from the resume, divided by hairlines. */}
            <ul
              className="fade-up mt-6 grid gap-3 border-y border-line py-3.5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line lg:mt-[3svh]"
              style={delay(3)}
              aria-label="Highlights"
            >
              {highlights.map(({ icon, title, detail }) => (
                <li
                  key={title}
                  className="group flex items-center gap-2.5 sm:px-4 sm:first:pl-0 sm:last:pr-0"
                >
                  <IconTile
                    name={icon}
                    className="size-8 rounded-lg transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:rotate-[-6deg] [&_svg]:size-4"
                  />
                  <span className="min-w-0">
                    <span className="block text-[13px] leading-tight font-semibold">{title}</span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted">{detail}</span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Phones: the two buttons share one row, the profile icons sit below. Larger screens: one line, with a divider before the icons. */}
            <div
              className="fade-up mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-[5svh]"
              style={delay(4)}
            >
              <div className="grid grid-cols-2 gap-3 sm:flex">
                <ButtonLink href="/work" size="lg" className="group">
                  See my work
                  <ArrowRight
                    className="transition-transform duration-200 motion-safe:group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </ButtonLink>
                <a
                  href={profile.resumePath}
                  download
                  className={buttonClasses({ variant: "secondary", size: "lg" })}
                >
                  <Download aria-hidden="true" />
                  Resume
                  <span className="sr-only">(PDF)</span>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span aria-hidden="true" className="hidden h-8 w-px bg-line-strong sm:block" />
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
