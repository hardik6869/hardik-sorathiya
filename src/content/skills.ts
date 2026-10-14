import type { SkillGroup } from "@/types/content";

/** All groups and items from the resume. Core groups get cards; supporting groups are compact rows. */
export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    tier: "core",
    icon: "code",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "JSX", "HTML5", "CSS3"],
  },
  {
    title: "State Management & Data",
    tier: "core",
    icon: "database",
    items: ["Redux Toolkit", "Context API", "TanStack Query", "TanStack Table"],
  },
  {
    title: "UI & Styling",
    tier: "core",
    icon: "palette",
    items: [
      "Tailwind CSS",
      "ShadCN UI",
      "Ant Design",
      "Bootstrap",
      "Responsive Web Design",
      "WCAG Accessibility",
    ],
  },
  {
    title: "APIs & Data Access",
    tier: "core",
    icon: "network",
    items: ["REST APIs", "GraphQL", "Axios", "Authentication / Authorization", "RBAC", "MSAL"],
  },
  {
    title: "Testing & Quality",
    tier: "core",
    icon: "flask",
    items: ["React Testing Library", "Jest", "ESLint", "Prettier", "Husky"],
  },
  {
    title: "AI-Assisted Development",
    tier: "core",
    icon: "sparkles",
    items: ["GitHub Copilot", "Claude Code", "Skills", "Commands", "Agents", "Plugins", "MCP"],
  },
  {
    title: "Architecture",
    icon: "layers",
    tier: "supporting",
    items: [
      "Component-Based Architecture",
      "Reusable Components",
      "Dynamic Forms",
      "Performance Optimization",
    ],
  },
  {
    title: "Tools & Collaboration",
    icon: "users",
    tier: "supporting",
    items: ["Git", "GitHub", "Bitbucket", "VS Code", "Postman", "Azure", "Slack", "Microsoft Teams"],
  },
  {
    title: "Build & Debugging",
    icon: "rocket",
    tier: "supporting",
    items: ["Vite", "npm", "Yarn", "pnpm", "Chrome DevTools", "React DevTools", "Figma (design handoff)"],
  },
  {
    title: "Backend",
    icon: "database",
    note: "Working knowledge",
    tier: "supporting",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
];
