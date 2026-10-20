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
        body: "Delivered 5 client production applications and 1 internal product with React.js and Next.js, owning frontend modules from requirement analysis through API integration, testing and release.",
      },
      {
        title: "Fast start",
        icon: "badge-check",
        body: "Joined as a trainee and was onboarded as Software Engineer in 4 months, ahead of the standard 6-month program.",
      },
      {
        title: "Architecture & mentoring",
        icon: "layers",
        body: "Defined frontend architecture and state-management patterns with Redux Toolkit and TanStack Query, and guided 2–3 junior developers on component design and coding standards.",
      },
      {
        title: "Business logic & RBAC",
        icon: "shield-check",
        body: "Developed reusable components, dynamic forms, authentication flows and role-based access control (RBAC) used across multiple client applications, with unit tests in Jest and React Testing Library meeting the team's 70% coverage standard.",
      },
      {
        title: "AI-led migration",
        icon: "sparkles",
        body: "Led an AI-assisted Supabase-to-REST API migration (Axios, TanStack Query) with Claude Code, moving 35+ endpoints across 8+ modules in under 2 weeks without breaking existing functionality.",
      },
      {
        title: "Collaboration",
        icon: "users",
        body: "Worked directly with clients, designers and backend teams to clarify requirements and resolve blockers. Automated repetitive tasks with Claude Code Skills, Commands, Agents and MCP, and used GitHub Copilot daily for coding, debugging and refactoring.",
      },
    ],
  },
];
