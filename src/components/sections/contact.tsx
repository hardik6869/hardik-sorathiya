import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GitHubIcon, LinkedInIcon, brandColor } from "@/components/ui/icons";
import { Availability } from "@/components/ui/availability";
import { profile } from "@/content/profile";

export function Contact() {
  const { linkedin, github } = profile.socials;
  const links = [
    {
      href: `mailto:${profile.email}`,
      label: "Email",
      display: profile.email,
      Icon: Mail,
      color: brandColor.email,
      external: false,
    },
    {
      href: linkedin.href,
      label: "LinkedIn",
      Icon: LinkedInIcon,
      color: brandColor.linkedin,
      external: true,
    },
    {
      href: github.href,
      label: "GitHub",
      Icon: GitHubIcon,
      color: brandColor.github,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-backdrop opacity-50" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 h-80 w-160 -translate-x-1/2 accent-glow"
      />
      <Container className="relative">
        <p className="flex items-center gap-3 text-sm font-medium text-muted">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          Get in touch
        </p>
        <Reveal>
          <h2 id="contact-heading" className="mt-4 text-h2 font-semibold text-balance">
            Have a role or a project? <em className="serif-accent text-accent">Let&apos;s talk.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-lead text-pretty text-muted">
            Whether it&apos;s a full-time role, a freelance project or a quick question about my work,
            I&apos;d be happy to hear from you. Email is the fastest way to reach me.
          </p>
          <Availability className="mt-6" />
        </Reveal>

        {/* Contact links in one line (stacked on phones). Only the email shows its address; socials show their name. */}
        <ul className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap">
          {links.map(({ href, label, Icon, color, external, ...rest }, i) => (
            <Reveal as="li" key={label} delay={i * 0.06}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-surface/80 p-4 backdrop-blur transition-colors duration-300 hover:border-accent/50 sm:p-5"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg">
                  <Icon className={`size-5 ${color}`} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  {"display" in rest ? (
                    <>
                      <span className="block text-sm text-muted">{label}</span>
                      <span className="mt-0.5 block text-[15px] font-medium wrap-anywhere text-fg transition-colors group-hover:text-accent sm:text-base">
                        {rest.display}
                      </span>
                    </>
                  ) : (
                    <span className="block font-medium text-fg transition-colors group-hover:text-accent">
                      {label}
                    </span>
                  )}
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 text-muted transition-transform duration-300 group-hover:text-accent motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
                {external ? <span className="sr-only">(opens in a new tab)</span> : null}
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
