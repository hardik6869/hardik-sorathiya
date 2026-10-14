import type { ApproachItem } from "@/types/content";

export const approach: ApproachItem[] = [
  {
    title: "Authorization stays out of the UI",
    icon: "key",
    body: "In RBAC-heavy apps I resolve permissions in one place and let components read the result. Modules stay simple, and access rules can change without hunting through the UI.",
  },
  {
    title: "Performance by removing work",
    icon: "gauge",
    body: "Most of my wins come from doing less: eliminating unnecessary re-renders and side effects, paginating on the server and debouncing input. That approach brought a 35–40% gain on a data-heavy platform.",
  },
  {
    title: "Security is a frontend concern",
    icon: "shield-check",
    body: "Dynamically rendered content is an injection surface. I have remediated XSS in a print feature and treat any user-supplied markup as untrusted by default.",
  },
  {
    title: "Tested, linted, reviewed",
    icon: "badge-check",
    body: "React Testing Library and Jest for behavior, ESLint, Prettier and Husky for consistency. Quality checks run before code is shared, not after it breaks.",
  },
];

export const aiWorkflow = {
  title: "AI-assisted, not AI-dependent",
  body: "I use Claude Code and GitHub Copilot every day, with custom Skills, Commands, Agents and MCP integrations for repetitive work. The tools speed me up; the architecture decisions and the review stay mine.",
  caseTitle: "Supabase → REST migration",
  caseBody:
    "I led an application modernization with Claude Code, moving data access from Supabase to REST APIs with Axios and TanStack Query in 1–2 weeks while existing functionality stayed stable.",
  tools: ["Claude Code", "Skills", "Commands", "Agents", "MCP", "GitHub Copilot"],
};
