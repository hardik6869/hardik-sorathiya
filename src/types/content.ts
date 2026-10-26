type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  role: string;
  /**
   * Hero copy. The headline's `mark` word gets a highlighter sweep and `accent` is set in the serif accent.
   * `summary` may wrap words in **double asterisks** to emphasize them. `highlights` are the three things
   * recruiters look for first.
   */
  hero: {
    headline: { lead: string; mark: string; rest: string; accent: string };
    summary: string;
    highlights: { icon: IconName; title: string; detail: string }[];
  };
  /** Freelance availability shown in the contact section and mobile menu. */
  availability: { status: string; detail: string };
  region: string;
  email: string;
  resumePath: string;
  socials: { linkedin: SocialLink; github: SocialLink };
  about: string[];
  education: { degree: string; school: string; years: string; score: string }[];
};

/** Icon names resolved to Lucide components in `src/components/ui/icon.tsx`. */
export type IconName =
  | "code"
  | "database"
  | "palette"
  | "flask"
  | "sparkles"
  | "rocket"
  | "layers"
  | "shield-check"
  | "users"
  | "key"
  | "gauge"
  | "badge-check"
  | "file-signature"
  | "table"
  | "clock"
  | "chart"
  | "briefcase"
  | "graduation";

export type SkillGroup = {
  title: string;
  note?: string;
  items: string[];
  /** Core groups render as cards; supporting groups render as compact rows. */
  tier: "core" | "supporting";
  icon?: IconName;
};

export type Experience = {
  role: string;
  company: string;
  start: string;
  end: string;
  duration: string;
  highlights: { title: string; body: string; icon: IconName }[];
};

type CaseStudySection = {
  heading: string;
  body?: string;
  points?: string[];
};

export type Project = {
  slug: string;
  /** Client work is anonymized; personal projects are not. Defaults to client. */
  kind?: "client" | "personal";
  title: string;
  domain: string;
  /** Public live site, for personal projects only. */
  liveUrl?: string;
  icon: IconName;
  summary: string;
  stack: string[];
  highlights: string[];
  metric?: { value: string; label: string };
  /** Present only for projects with a full case-study page. */
  caseStudy?: {
    sections: CaseStudySection[];
  };
};

export type ApproachItem = {
  title: string;
  body: string;
  icon: IconName;
};
