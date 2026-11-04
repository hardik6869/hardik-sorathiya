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
    body: "Most of my wins come from doing less: paginating on the server, debouncing input and getting effect-hook dependencies right. On a data-heavy platform, that refactor eliminated duplicate API calls and unnecessary re-renders and resolved intermittent API failures.",
  },
  {
    title: "Security is a frontend concern",
    icon: "shield-check",
    body: "Dynamically rendered content is an injection surface. I have secured a print feature against XSS and treat any user-supplied markup as untrusted by default.",
  },
  {
    title: "Tested, linted, reviewed",
    icon: "badge-check",
    body: "Jest and React Testing Library for behavior, to the team's 70% coverage standard. ESLint, Prettier, Husky, lint-staged and commitlint for consistency. Quality checks run before code is shared, not after it breaks.",
  },
];

export const aiWorkflow = {
  title: "AI-assisted, not AI-dependent",
  body: "I use Claude Code and GitHub Copilot every day, with custom Plugins, Skills, Commands, Agents and MCP integrations for repetitive work. The tools speed me up; the architecture decisions and the review stay mine.",
  caseTitle: "Supabase → REST migration",
  caseBody:
    "I led a Supabase-to-REST API migration using Claude, moving data access to Axios and TanStack Query: 35+ endpoints across 8+ modules in under 3 weeks, without breaking existing functionality.",
  tools: ["Claude Code", "Plugins", "Skills", "Commands", "Agents", "MCP", "GitHub Copilot"],
};
