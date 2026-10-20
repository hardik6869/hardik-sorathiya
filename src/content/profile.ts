import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "Hardik Sorathiya",
  role: "Software Engineer",
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
    "I'm a Software Engineer with nearly 5 years of experience building scalable, production web applications with React.js, Next.js and TypeScript, and working knowledge of Node.js, Express and MongoDB.",
    "I own frontend modules end to end, from requirements and architecture to testing and release. I'm comfortable working directly with clients, taking over unfamiliar codebases and guiding other developers to keep delivery on track.",
    "Day to day I use AI-assisted tools, Claude Code (Skills, Commands, Agents, MCP) and GitHub Copilot, to work faster.",
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
