import Image from "next/image";
import { ArrowRight, CodeXml, Download, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink, buttonClasses } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, brandColor } from "@/components/ui/icons";
import { Availability } from "@/components/ui/availability";
import { profile } from "@/content/profile";
import portrait from "../../../public/Hardik.png";

const socials = [
  { href: profile.socials.github.href, label: "GitHub", Icon: GitHubIcon, color: brandColor.github },
  { href: profile.socials.linkedin.href, label: "LinkedIn", Icon: LinkedInIcon, color: brandColor.linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, color: brandColor.email },
];

const delay = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading">
      {/* On lg+ every size below is capped by the viewport height (svh), so the whole hero fits in one screen. */}
      <Container className="grid items-center gap-7 pt-6 pb-12 sm:gap-10 sm:pt-14 sm:pb-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-12 lg:gap-10 lg:pt-[4svh] lg:pb-[6svh]">
        <div className="lg:order-2 lg:col-span-4 lg:col-start-9">
          {/* Still portrait (no looping motion); a gentle zoom and accent ring on hover. */}
          <div
            className="group fade-up relative mx-auto aspect-square w-32 sm:w-52 lg:mr-0 lg:w-full lg:max-w-[min(340px,50svh)]"
            style={delay(0)}
          >
            <div className="size-full overflow-hidden rounded-full border border-line-strong bg-surface shadow-[0_16px_40px_-24px] shadow-black/40 transition-[border-color,box-shadow] duration-500 group-hover:border-accent/60 group-hover:shadow-accent/25">
              <Image
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 208px, 160px"
                className="size-full scale-[1.04] object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.09]"
              />
            </div>
          </div>
        </div>

        <div className="lg:order-1 lg:col-span-8">
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
