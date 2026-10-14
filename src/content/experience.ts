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
        body: "Owned frontend delivery of multiple production React.js and Next.js applications: requirement analysis, API integration, testing and performance optimization against real deadlines.",
      },
      {
        title: "Architecture & state",
        icon: "layers",
        body: "Drove architecture decisions, reusable component development and state management with Redux Toolkit and TanStack Query, promoting consistent, maintainable code.",
      },
      {
        title: "Business logic & RBAC",
        icon: "shield-check",
        body: "Implemented complex business rules, dynamic forms, authentication and authorization flows, and role-based access control across client-facing applications.",
      },
      {
        title: "AI-led modernization",
        icon: "sparkles",
        body: "Spearheaded a migration from Supabase to REST APIs with Axios and TanStack Query using Claude Code, in 1–2 weeks, while keeping existing functionality stable.",
      },
      {
        title: "Collaboration",
        icon: "users",
        body: "Worked with clients, backend developers and designers to clarify requirements and unblock delivery, using GitHub Copilot and Claude Code Skills, Commands, Agents and MCP to speed up debugging and refactoring.",
      },
    ],
  },
];
