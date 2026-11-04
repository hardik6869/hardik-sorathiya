import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Simform",
    start: "Jan 2022",
    end: "Oct 2026",
    duration: "4 yrs 9 mos",
    highlights: [
      {
        title: "End-to-end delivery",
        icon: "rocket",
        body: "Delivered 5 client production applications and 1 internal product with React.js and Next.js, owning frontend modules from requirements through API integration, testing and release.",
      },
      {
        title: "Fast promotion",
        icon: "badge-check",
        body: "Promoted from trainee to Software Engineer in 4 months, ahead of the standard 6-month program.",
      },
      {
        title: "Architecture & mentoring",
        icon: "layers",
        body: "Architected app structure and state-management patterns with Redux Toolkit and TanStack Query, and mentored 2–3 junior developers on component patterns and coding standards.",
      },
      {
        title: "Business logic & RBAC",
        icon: "shield-check",
        body: "Developed reusable components, dynamic forms, authentication flows and role-based access control (RBAC), reused across client applications. Achieved the team's 70% test coverage standard with Jest and React Testing Library unit tests.",
      },
      {
        title: "AI-led migration",
        icon: "sparkles",
        body: "Led a Supabase-to-REST API migration (Axios, TanStack Query) using Claude, moving 35+ endpoints across 8+ modules in under 3 weeks without breaking existing functionality.",
      },
      {
        title: "AI-assisted workflow",
        icon: "terminal",
        body: "Automated repetitive tasks with Claude Code Skills, Commands, Agents and MCP integrations, and used GitHub Copilot daily for coding, debugging and refactoring. Launched a team-adopted Claude Code plugin that cut React.js and Next.js project setup from about half a day to 18–20 minutes.",
      },
      {
        title: "Collaboration",
        icon: "users",
        body: "Collaborated with clients, designers and backend teams to clarify requirements, resolve blockers and align features with business needs.",
      },
    ],
  },
];
