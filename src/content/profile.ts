import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "Hardik Sorathiya",
  role: "Software Engineer",
  // Hero copy, from the resume's headline, summary and skills. Career-level only: project details live in Work.
  hero: {
    headline: {
      lead: "Building",
      mark: "scalable",
      rest: ", production-grade web apps with",
      accent: "React.js & Next.js.",
    },
    summary:
      "With **nearly 5 years** of experience building for legal-tech, fintech and enterprise clients, I own modules end to end, from architecture to release. I work directly with clients, take over unfamiliar codebases and mentor developers to keep delivery on track.",
    highlights: [
      { icon: "users", title: "Mentoring & clients", detail: "Mentoring developers, aligning with clients" },
      { icon: "database", title: "Backend knowledge", detail: "Node.js, Express, MongoDB" },
      { icon: "sparkles", title: "AI-assisted development", detail: "Claude Code, GitHub Copilot" },
    ],
  },
  availability: {
    status: "Open to freelance work",
    detail: "15–25 hrs/week",
  },
  /** Location shown in the footer. */
  region: "Gujarat, India",
  email: "sorathiyahardik6869@gmail.com",
  resumePath: "/resume/Hardik_Sorathiya_Resume.pdf",
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sorathiya-hardik",
      handle: "in/sorathiya-hardik",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/hardik6869",
      handle: "hardik6869",
    },
  },
  // About intro: restates the resume's professional summary. No project or client names.
  about: [
    "I'm a Software Engineer and frontend specialist with nearly 5 years of experience building production web apps in React.js, Next.js and TypeScript for legal-tech, fintech and enterprise clients, with working knowledge of Node.js, Express and MongoDB.",
    "I own modules end to end, from architecture to release. I work directly with clients, take over unfamiliar codebases and mentor developers to keep delivery on track.",
    "Day to day I use AI-assisted tools, Claude Code (Plugins, Skills, Commands, Agents, MCP) and GitHub Copilot, to work faster.",
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Government MCA College, Maninagar (GTU), Ahmedabad",
      years: "2020 – 2022",
      score: "CGPA 8.52",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "C.U. Shah College, Surendranagar (Saurashtra University)",
      years: "2017 – 2020",
      score: "CGPA 7.2",
    },
  ],
};
