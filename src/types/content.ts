type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  role: string;
  /** Freelance availability shown in the hero and contact sections. */
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
  | "network"
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
  title: string;
  domain: string;
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
