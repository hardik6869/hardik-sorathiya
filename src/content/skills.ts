import type { SkillGroup } from "@/types/content";

/** The resume's skill groups and items, in resume order. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    tier: "core",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js (App & Pages Router)", "HTML5", "CSS3"],
  },
  {
    title: "State Management",
    tier: "core",
    icon: "layers",
    items: ["Redux Toolkit", "TanStack Query", "Zustand", "Context API"],
  },
  {
    title: "APIs & Data",
    tier: "core",
    icon: "database",
    items: ["REST APIs", "GraphQL", "Axios", "TanStack Table", "Supabase"],
  },
  {
    title: "UI & Forms",
    tier: "core",
    icon: "palette",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "MUI",
      "Ant Design",
      "Bootstrap",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
  },
  {
    title: "Backend & Auth",
    note: "Backend: working knowledge",
    tier: "core",
    icon: "key",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt", "RBAC", "MSAL"],
  },
  {
    title: "AI-Assisted Development",
    tier: "core",
    icon: "sparkles",
    items: ["Claude Code", "Plugins", "Skills", "Commands", "Agents", "MCP", "GitHub Copilot"],
  },
  {
    title: "Test Frameworks",
    tier: "supporting",
    icon: "flask",
    items: ["Jest", "Vitest", "React Testing Library"],
  },
  {
    title: "Quality Tools",
    tier: "supporting",
    icon: "badge-check",
    items: ["ESLint", "Prettier", "Husky", "lint-staged", "commitlint"],
  },
  {
    title: "Tools & Deployment",
    tier: "supporting",
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
    title: "Soft Skills",
    tier: "soft",
    icon: "users",
    items: ["Client Communication", "Mentoring", "Requirement Analysis", "Collaboration", "Problem Solving"],
  },
];
