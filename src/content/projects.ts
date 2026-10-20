import type { Project } from "@/types/content";

/**
 * Client work is anonymized: generic platform names, no client names and no
 * real screenshots. Personal projects are Hardik's own and may link to a live site.
 * Every statement here is taken from the resume.
 */
export const projects: Project[] = [
  {
    slug: "legal-e-signature-platform",
    kind: "client",
    title: "Legal Document Management & E-Signature Platform",
    domain: "Legal tech",
    icon: "file-signature",
    summary:
      "Document creation, signer management and a sequential multi-signer signing workflow, built around a rich-text editor with regex-mapped Smart Fields.",
    stack: ["React.js", "TypeScript", "TinyMCE", "HTML5 Canvas"],
    highlights: [
      "Sequential multi-signer workflow: each signer sees and completes only their own fields",
      "TinyMCE Smart Fields with regex-based signer mapping and a unique color per field",
      "HTML5 Canvas signature capture",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "A legal document platform needed to cover the full life of a document: creating it, assigning it to signers, and running a multi-step signing process where every signer completes only the fields that belong to them, in the right order.",
        },
        {
          heading: "My role",
          body: "I delivered frontend features for document creation, signer management, assignment and multi-step signing.",
        },
        {
          heading: "Key decisions",
          points: [
            "Engineered a sequential multi-signer workflow where each signer sees and completes only their own fields.",
            "Created TinyMCE Smart Fields with regex-based signer mapping, giving each field a unique color to identify it.",
            "Resolved multiple edge cases in Smart Field creation.",
            "Added digital signature capture with HTML5 Canvas.",
          ],
        },
        {
          heading: "Outcome",
          body: "A single, consistent workflow from drafting to final signature, with each signer limited to their own fields.",
        },
      ],
    },
  },
  {
    slug: "investment-platform",
    kind: "client",
    title: "Mutual Fund Management & Investment Platform",
    domain: "Fintech",
    icon: "chart",
    summary:
      "Financial calculations and role-specific workflows for an investment product that runs on web and mobile.",
    stack: ["React.js", "TypeScript", "TanStack Query", "Redux Toolkit"],
    highlights: [
      "Managed 4–5 modules in a fast-paced multi-developer team, resolving cross-module issues to keep releases on schedule",
      "Web-to-native bridges for 4 native features: biometric login, payments, printing and external links",
      "Financial calculations and role-specific workflows",
      "Fixed XSS issues in a print feature",
    ],
  },
  {
    slug: "workforce-admin-platform",
    kind: "client",
    title: "Time Tracking & Workforce Management Admin Platform",
    domain: "Admin panel · Workforce management",
    icon: "clock",
    summary:
      "A Next.js administration platform for time tracking and user management, with role-based access and Microsoft (MSAL) sign-in.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "MSAL"],
    highlights: [
      "Led frontend development",
      "Role-based access module and dynamic filtering",
      "MSAL sign-in and a consistent shadcn/ui design system",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "An organization needed one admin platform to manage users and time logs, where access to each module depends on the user's role, with sign-in through their Microsoft identity.",
        },
        {
          heading: "My role",
          body: "I led frontend development of the platform with Next.js and TypeScript.",
        },
        {
          heading: "Key decisions",
          points: [
            "Integrated the Microsoft Authentication Library (MSAL) for login.",
            "Designed the role-based access module that gates what each user can see and do.",
            "Built dynamic filtering for user and time-log management.",
            "Established a consistent design system with Tailwind CSS and shadcn/ui, reused across the admin screens.",
          ],
        },
        {
          heading: "Outcome",
          body: "A consistent admin experience for user and time-log management, with access controlled by role and screens built from one shared design system.",
        },
      ],
    },
  },
  {
    slug: "business-data-platform",
    kind: "client",
    title: "Business Data Management Platform",
    domain: "SaaS · Business data",
    icon: "table",
    summary:
      "A Zoho-style platform for large datasets: dynamic GraphQL-driven tables, permission management across 5+ access levels, and a 35–40% performance improvement.",
    stack: ["React.js", "TypeScript", "GraphQL", "TanStack Table"],
    highlights: [
      "Owned 4–5 modules end to end",
      "Infinite scroll, server-side pagination and debounced search",
      "Permission management across 5+ access levels",
    ],
    metric: { value: "35–40%", label: "faster page performance" },
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "The platform handles large business datasets. In an unstable inherited codebase, infinite scrolling, pagination, search and table data mapping had broken, and pages were slowed by duplicate API calls and unnecessary re-renders.",
        },
        {
          heading: "My role",
          body: "I took over the codebase and owned 4–5 modules: dynamic tables, permission management across 5+ access levels, and search and filtering.",
        },
        {
          heading: "Key decisions",
          points: [
            "Built GraphQL-driven data tables with TanStack Table, using server-side pagination and infinite scrolling for large datasets.",
            "Debounced search so queries don't fire on every keystroke.",
            "Debugged and restored the broken scrolling, pagination, search and table data mapping.",
            "Profiled with Lighthouse and React DevTools Profiler, then removed duplicate API calls and unnecessary re-renders.",
          ],
        },
        {
          heading: "Outcome",
          body: "Page performance improved by 35–40%, and the core table features that had broken were working again.",
        },
      ],
    },
  },
  {
    slug: "learnhub",
    kind: "personal",
    title: "LearnHub",
    domain: "Personal project · Full stack",
    icon: "graduation",
    liveUrl: "https://learnhub-hardik.vercel.app/",
    summary:
      "A full-stack academy directory: learners browse coding academies and courses and leave reviews, publishers manage their own listings, and admins moderate users and content.",
    stack: [
      "React.js 19",
      "TypeScript",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
    highlights: [
      "JWT auth in httpOnly cookies with role-based access and ownership checks",
      "REST API hardened against mass assignment, NoSQL injection, XSS and regex injection",
      "Reusable query middleware for search, filtering, sorting and pagination",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "A directory of coding academies and courses serves three kinds of users on the same data: learners who browse and leave reviews, publishers who manage their own listings, and admins who moderate users and content.",
        },
        {
          heading: "My role",
          body: "A personal project I built end to end: the React.js frontend and the Express and MongoDB REST API.",
        },
        {
          heading: "Key decisions",
          points: [
            "Set up JWT authentication with httpOnly cookies, email-based password reset and access control for users, publishers and admins, with ownership checks on every update and delete.",
            "Secured the REST API against mass assignment, NoSQL injection, XSS and regex injection, with Helmet, rate limiting and HPP.",
            "Wrote a reusable query middleware for search, filtering, sorting and pagination.",
            "Calculated ratings automatically with MongoDB aggregation pipelines.",
          ],
        },
        {
          heading: "Outcome",
          body: "A working full-stack application with three roles, available as a live site.",
        },
      ],
    },
  },
];

export const clientProjects = projects.filter((p) => p.kind !== "personal");
export const personalProjects = projects.filter((p) => p.kind === "personal");

export const caseStudies = projects.filter((p) => p.caseStudy);
