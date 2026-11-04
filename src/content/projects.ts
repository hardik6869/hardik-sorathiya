import type { Project } from "@/types/content";

/**
 * Client and internal work is anonymized: generic platform names, no client names and no
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
      "Document creation, signer assignment and a sequential multi-signer signing workflow, built around a rich-text editor with regex-mapped Smart Fields.",
    stack: ["React.js", "TypeScript", "TinyMCE", "HTML5 Canvas", "Ant Design"],
    highlights: [
      "Managed 4 core flows: signer, Smart Field, print and document",
      "Delivered document creation, signer assignment and multistep signing",
      "Engineered a sequential multi-signer workflow where each signer completes only their own fields",
      "Created TinyMCE Smart Fields with regex-based signer mapping and a unique color per field",
      "Built HTML5 Canvas signature capture",
      "Hardened Smart Field creation against edge cases",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "A legal document platform needed to cover the full life of a document: creating it, assigning it to signers, and running a multistep signing process where every signer completes only the fields that belong to them, in the right order.",
        },
        {
          heading: "My role",
          body: "I managed 4 core flows (signer, Smart Field, print and document), delivering frontend features for document creation, signer assignment and multistep signing.",
        },
        {
          heading: "Key decisions",
          points: [
            "Engineered a sequential multi-signer workflow where each signer sees and completes only their own fields.",
            "Created TinyMCE Smart Fields with regex-based signer mapping, giving each field a unique color to identify it.",
            "Built digital signature capture with HTML5 Canvas.",
            "Hardened Smart Field creation against edge cases.",
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
    stack: ["React.js", "TypeScript", "TanStack Query", "Redux Toolkit", "Ant Design"],
    highlights: [
      "Owned 4–5 modules in a multi-developer team",
      "Worked onsite with the client",
      "Resolved cross-module issues to keep releases on time",
      "Integrated web-to-native bridges for 4 native features: biometric login, payments, printing and external links",
      "Implemented financial calculations and role-specific workflows",
      "Secured the print feature against XSS",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "A mutual fund and investment product that runs on web and mobile needed financial calculations, workflows that differ by user role, and access to native device features from the web app.",
        },
        {
          heading: "My role",
          body: "I owned 4–5 modules in a multi-developer team, working onsite with the client and resolving cross-module issues to keep releases on time.",
        },
        {
          heading: "Key decisions",
          points: [
            "Integrated web-to-native bridges for 4 native features: biometric login, payments, printing and external links.",
            "Implemented financial calculations and role-specific workflows.",
            "Secured the print feature against XSS.",
          ],
        },
        {
          heading: "Outcome",
          body: "Releases stayed on time across a multi-developer team, and the web app could use 4 native device features, including a print feature secured against XSS.",
        },
      ],
    },
  },
  {
    slug: "workforce-admin-platform",
    kind: "client",
    title: "Time Tracking & Workforce Management Admin Platform",
    domain: "Admin panel · Workforce management",
    icon: "clock",
    summary:
      "A Next.js (App Router) administration platform for time tracking and user management, with role-based access and Microsoft (MSAL) sign-in.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "MSAL"],
    highlights: [
      "Directed the frontend for a Next.js (App Router) platform with MSAL sign-in",
      "Designed the role-based access module",
      "Designed dynamic filtering for user and time-log management",
      "Established a consistent design system with Tailwind CSS and shadcn/ui",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "An organization needed one admin platform to manage users and time logs, where access to each module depends on the user's role, with sign-in through their Microsoft identity.",
        },
        {
          heading: "My role",
          body: "I directed the frontend of the platform, built with Next.js (App Router) and TypeScript.",
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
      "A Zoho-style platform for large datasets: dynamic GraphQL-driven tables, permission management across 5+ access levels, and data fetching without duplicate API calls.",
    stack: ["React.js", "TypeScript", "GraphQL", "REST APIs", "TanStack Table", "Ant Design"],
    highlights: [
      "Led the frontend on an unstable inherited codebase",
      "Owned dynamic tables, infinite scrolling, server-side pagination and debounced search",
      "Introduced permission management across 5+ access levels",
      "Restored broken scrolling, pagination, search and table data mapping",
      "Eliminated duplicate API calls and unnecessary re-renders",
      "Resolved intermittent API failures",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "The platform handles large business datasets. In an unstable inherited codebase, infinite scrolling, pagination, search and table data mapping had broken, and data fetching suffered from duplicate API calls, unnecessary re-renders and intermittent API failures.",
        },
        {
          heading: "My role",
          body: "I took over the codebase as frontend lead, owning the modules for dynamic tables, infinite scrolling, server-side pagination and debounced search, plus permission management across 5+ access levels.",
        },
        {
          heading: "Key decisions",
          points: [
            "Built GraphQL-driven data tables with TanStack Table, using server-side pagination and infinite scrolling for large datasets.",
            "Debounced search so queries don't fire on every keystroke.",
            "Debugged and restored the broken scrolling, pagination, search and table data mapping.",
            "Refactored React.js effect-hook dependencies in GraphQL and REST data fetching, eliminating duplicate API calls and unnecessary re-renders.",
          ],
        },
        {
          heading: "Outcome",
          body: "The table features that had broken work again, and data fetching no longer sends duplicate calls, re-renders unnecessarily or fails intermittently.",
        },
      ],
    },
  },
  {
    slug: "react-nextjs-scaffolding-plugin",
    kind: "internal",
    title: "React.js & Next.js Scaffolding Plugin for Claude Code",
    domain: "Internal tooling · Developer experience",
    icon: "terminal",
    summary:
      "A team-adopted Claude Code plugin that sets up a React.js or Next.js project in one guided flow, with the same tooling and conventions in every new codebase.",
    stack: ["Claude Code Plugins", "Skills", "Commands", "React.js", "Next.js", "TypeScript"],
    highlights: [
      "Launched a team-adopted plugin that sets up a project in one guided flow",
      "Cut full project setup from about half a day to 18–20 minutes",
      "Standardized every project with 4 tools: TypeScript, ESLint, Prettier and Husky",
      "Defined 15 setup options across 5 categories",
      "Configured it to install only the selected packages",
      "Generated matching Claude skills and commands for each project",
    ],
    metric: { value: "18–20 min", label: "full project setup, down from about half a day" },
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "Setting up a new React.js or Next.js project took about half a day, and new codebases did not all follow the same linting, formatting and commit rules.",
        },
        {
          heading: "My role",
          body: "I built and launched a Claude Code plugin that sets up a React.js or Next.js project in one guided flow. The team adopted it.",
        },
        {
          heading: "Key decisions",
          points: [
            "Standardized every generated project with 4 preconfigured tools (TypeScript, ESLint, Prettier and Husky), so all new codebases follow the same linting, formatting and commit rules.",
            "Defined 15 setup options across 5 categories: package manager (npm, pnpm, Yarn), state (TanStack Query, Redux Toolkit, Zustand), UI (shadcn/ui + Tailwind CSS, MUI, Ant Design), test runner (Jest, Vitest, none) and structure (monorepo, monolithic, feature-based).",
            "Configured the plugin to install only the selected packages.",
            "Generated matching Claude skills and commands, so AI-assisted work follows each project's libraries and conventions.",
          ],
        },
        {
          heading: "Outcome",
          body: "Full project setup went from about half a day to 18–20 minutes, and every new codebase starts with the same tooling and conventions.",
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
      "A full-stack academy directory with 3 user roles: learners browse coding academies and courses and leave reviews, publishers manage their own listings, and admins moderate users and content.",
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
      "Built a full-stack platform with 3 user roles: learner, publisher and admin",
      "Secured authentication with JWT in HTTP-only cookies and email-based password reset",
      "Added role-based access control with ownership checks on every update and delete",
      "Protected the REST API against 4 attack types: mass assignment, NoSQL injection, XSS and regex injection",
      "Wrote a reusable query middleware for search, filtering, sorting and pagination",
      "Calculated ratings automatically with MongoDB aggregation pipelines",
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
            "Secured authentication with JWT in HTTP-only cookies, email-based password reset and role-based access control, with ownership checks on every update and delete.",
            "Protected the REST API against 4 attack types (mass assignment, NoSQL injection, XSS and regex injection) with Helmet, rate limiting and HPP.",
            "Wrote a reusable query middleware for 4 query operations (search, filtering, sorting and pagination).",
            "Calculated ratings automatically with MongoDB aggregation pipelines.",
          ],
        },
        {
          heading: "Outcome",
          body: "A working full-stack application with 3 user roles, available as a live site.",
        },
      ],
    },
  },
];

export const clientProjects = projects.filter((p) => (p.kind ?? "client") === "client");
export const internalProjects = projects.filter((p) => p.kind === "internal");
export const personalProjects = projects.filter((p) => p.kind === "personal");

export const caseStudies = projects.filter((p) => p.caseStudy);
