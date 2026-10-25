import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { GitHubIcon, LinkedInIcon, brandColor } from "@/components/ui/icons";
import { Availability } from "@/components/ui/availability";
import { SectionLabel } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function Contact() {
  const { linkedin, github } = profile.socials;
  // The email is shown in two parts so narrow screens can only break the line after the "@".
  const [emailUser, emailDomain] = profile.email.split("@");
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
      className="border-t border-line bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Message on the left, contact links stacked on the right (below on smaller screens). */}
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionLabel>Get in touch</SectionLabel>
            <h2 id="contact-heading" className="mt-5 text-h2 font-semibold text-balance">
              Have a role or a project? <em className="serif-accent text-accent">Let&apos;s talk.</em>
            </h2>
            <p className="mt-5 max-w-xl text-lead text-pretty text-muted">
              Whether it&apos;s a full-time role, a freelance project or a quick question about my work,
              I&apos;d be happy to hear from you. Email is the fastest way to reach me.
            </p>
            <Availability className="mt-6" />
          </div>

          {/* Only the email shows its address; socials show their name. */}
          <ul className="flex flex-col justify-center gap-3 lg:col-span-6">
            {links.map(({ href, label, Icon, color, external, ...rest }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-bg p-4 transition-[border-color,translate] duration-300 hover:border-accent/50 motion-safe:hover:-translate-y-0.5 sm:p-5"
                >
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg">
                    <Icon className={`size-5 ${color}`} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    {"display" in rest ? (
                      <>
                        <span className="block text-sm text-muted">{label}</span>
                        <span className="mt-0.5 block text-[15px] font-medium wrap-anywhere text-fg transition-colors group-hover:text-accent sm:text-base">
                          {emailUser}@<wbr />
                          {emailDomain}
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
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
