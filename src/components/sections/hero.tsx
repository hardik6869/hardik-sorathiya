import Image from "next/image";
import { ArrowRight, CodeXml, Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink, buttonClasses } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, brandColor } from "@/components/ui/icons";
import { Availability } from "@/components/ui/availability";
import { profile } from "@/content/profile";
import portrait from "../../../public/Hardik_profile.webp";

const socials = [
  { href: profile.socials.github.href, label: "GitHub", Icon: GitHubIcon, color: brandColor.github },
  { href: profile.socials.linkedin.href, label: "LinkedIn", Icon: LinkedInIcon, color: brandColor.linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, color: brandColor.email },
];

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden">
      {/* Decorative backdrop: soft accent light behind the portrait, a glow top-left and a fading base line. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="fade-in absolute inset-0 hero-light lg:[--focus:80%_45%]" />
        <div className="glow-in absolute -top-40 -left-40 size-128 opacity-60 accent-glow" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-line-strong to-transparent" />
      </div>

      {/* On lg+ every size below is capped by the viewport height (svh), so the whole hero fits in one screen. */}
      <Container className="grid items-center gap-7 pt-6 pb-12 sm:gap-10 sm:pt-14 sm:pb-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-10 lg:pt-[4svh] lg:pb-[6svh]">
        <div className="lg:order-2 lg:col-span-5 lg:col-start-8">
          {/* Cut-out portrait on an accent light; fades into the page at the bottom. Plays once, lifts slightly on hover. */}
          <div className="group relative mx-auto aspect-square w-48 sm:w-64 lg:mr-0 lg:w-full lg:max-w-[min(440px,62svh)]">
            <div aria-hidden="true" className="glow-in absolute inset-[8%] accent-glow" />
            <div className="portrait-in relative size-full">
              <Image
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                priority
                sizes="(min-width: 1024px) 440px, (min-width: 640px) 256px, 192px"
                className="size-full mask-[linear-gradient(to_bottom,black_72%,transparent)] object-contain transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1.5"
              />
            </div>
          </div>
        </div>

        <div className="lg:order-1 lg:col-span-7">
          <div className="fade-up flex flex-wrap items-center gap-x-3 gap-y-2" style={delay(0)}>
            {/* Designation as a clear, high-contrast label. */}
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm font-semibold text-fg shadow-sm">
              <CodeXml className="size-4 text-accent" aria-hidden="true" />
              {profile.role}
            </span>
            <Availability />
          </div>

          <h1
            id="hero-heading"
            className="fade-up mt-5 text-display font-semibold lg:mt-[2.5svh] lg:text-[clamp(2.75rem,9.5svh,5.5rem)]"
            style={delay(1)}
          >
            <span className="text-fg/60">Hi, I&apos;m</span> {profile.name}.
          </h1>

          <p
            className="fade-up mt-6 max-w-3xl text-2xl leading-snug font-medium tracking-tight text-pretty sm:text-3xl sm:leading-snug lg:mt-[3.5svh] lg:text-[clamp(1.25rem,3.8svh,1.875rem)]"
            style={delay(2)}
          >
            I build fast, secure and easy-to-use web applications with{" "}
            <em className="serif-accent text-accent">React.js, Next.js and TypeScript.</em>
          </p>

          <p
            className="fade-up mt-4 max-w-2xl text-lead text-pretty text-muted lg:mt-[2.5svh] lg:text-[clamp(1rem,2.6svh,1.25rem)]"
            style={delay(3)}
          >
            Nearly 5 years of building production web apps with complex business rules, role-based access,
            dynamic forms and data-heavy interfaces.
          </p>

          <div
            className="fade-up mt-6 flex flex-wrap items-center gap-3 sm:mt-8 lg:mt-[4.5svh]"
            style={delay(4)}
          >
            <ButtonLink href="/work" size="lg">
              See my work
              <ArrowRight aria-hidden="true" />
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
            <ul className="flex items-center gap-2 sm:ml-2" aria-label="Profiles">
              {socials.map(({ href, label, Icon, color }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={href.startsWith("http") ? `${label} (opens in a new tab)` : label}
                    title={label}
                    {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface transition-[border-color,transform,box-shadow] duration-200 hover:border-line-strong hover:shadow-md motion-safe:hover:-translate-y-0.5"
                  >
                    <Icon className={`size-5 ${color}`} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
