import type { SkillGroup } from "@/types/content";

/** The resume's skill groups and items, in resume order. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    tier: "core",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3"],
  },
  {
    title: "State & Data",
    tier: "core",
    icon: "database",
    items: [
      "Redux Toolkit",
      "TanStack Query",
      "TanStack Table",
      "Context API",
      "REST APIs",
      "GraphQL",
      "Axios",
    ],
  },
  {
    title: "UI & Forms",
    tier: "core",
    icon: "palette",
    items: ["Tailwind CSS", "shadcn/ui", "Ant Design", "Bootstrap", "React Hook Form", "Zod", "Recharts"],
  },
  {
    title: "Backend & Auth",
    note: "Backend: working knowledge",
    tier: "core",
    icon: "key",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "RBAC", "MSAL"],
  },
  {
    title: "Testing & Quality",
    tier: "core",
    icon: "flask",
    items: ["Jest", "React Testing Library", "ESLint", "Prettier", "Husky", "lint-staged", "commitlint"],
  },
  {
    title: "Tools & Deployment",
    tier: "core",
    icon: "rocket",
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Vite",
      "Postman",
      "Azure",
      "Vercel",
      "Render",
      "Cloudinary",
      "Figma",
    ],
  },
  {
    title: "AI-Assisted Development",
    tier: "core",
    icon: "sparkles",
    items: ["Claude Code", "Skills", "Commands", "Agents", "MCP", "GitHub Copilot"],
  },
];
