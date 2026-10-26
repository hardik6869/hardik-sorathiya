import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon, brandColor } from "@/components/ui/icons";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

/** Profile links shared by the hero, mobile menu and footer. */
export const socialLinks = [
  {
    href: profile.socials.github.href,
    label: "GitHub",
    Icon: GitHubIcon,
    color: brandColor.github,
    external: true,
  },
  {
    href: profile.socials.linkedin.href,
    label: "LinkedIn",
    Icon: LinkedInIcon,
    color: brandColor.linkedin,
    external: true,
  },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, color: brandColor.email, external: false },
];

/** Round, icon-only profile links. */
export function SocialIcons({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)} aria-label="Profiles">
      {socialLinks.map(({ href, label, Icon, color, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={external ? `${label} (opens in a new tab)` : label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-surface transition-[border-color,transform,box-shadow] duration-200 hover:border-line-strong hover:shadow-md motion-safe:hover:-translate-y-0.5"
          >
            <Icon className={cn("size-5", color)} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
