import type { Project } from "@/types/content";

/**
 * Client work is anonymized: generic platform names, no client names and no
 * real screenshots. Every statement here is taken from the resume.
 */
export const projects: Project[] = [
  {
    slug: "legal-e-signature-platform",
    title: "Legal Document Management & E-Signature Platform",
    domain: "Legal tech",
    icon: "file-signature",
    summary:
      "Document creation, signer management and a sequential multi-signer signing workflow, built around a rich-text editor with regex-mapped Smart Fields.",
    stack: [
      "React.js",
      "TypeScript",
      "Context API",
      "Axios",
      "TinyMCE",
      "HTML5 Canvas",
      "Regex",
      "Ant Design",
    ],
    highlights: [
      "Sequential multi-signer workflow: each signer sees only their assigned fields",
      "TinyMCE editor with regex-based Smart Fields tied to individual signers",
      "HTML5 Canvas signature capture",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "A legal document platform needed to cover the full life of a document: creating it, assigning it to signers, and running a structured, multi-step signing process where every signer completes only the fields that belong to them, in the right order.",
        },
        {
          heading: "My role",
          body: "I built frontend features across document creation, signer management, assignment workflows and the signing experience, along with reusable components shared across the editing, signer management, Smart Field and signing modules.",
        },
        {
          heading: "Key decisions",
          points: [
            "Embedded TinyMCE as the document editor so content could be imported, pasted or typed manually, without building a custom editor.",
            "Used regex-based mapping to create dynamic Smart Fields inside the document and tie each one to an individual signer.",
            "Modeled signing as a sequential workflow: field visibility and completion state are derived from the signing order, so each signer sees only their assigned fields.",
            "Built digital signature capture on HTML5 Canvas and kept it as a reusable component.",
          ],
        },
        {
          heading: "Outcome",
          body: "A single, consistent workflow from drafting to final signature, with signer isolation enforced in the UI and reusable building blocks shared across every module of the platform.",
        },
      ],
    },
  },
  {
    slug: "investment-platform",
    title: "Mutual Fund Management & Investment Platform",
    domain: "Fintech",
    icon: "chart",
    summary:
      "Financial calculations, business-rule enforcement and role-based workflows for an investment product that runs on web and mobile.",
    stack: ["React.js", "TypeScript", "TanStack Query", "Redux Toolkit", "Axios", "Ant Design"],
    highlights: [
      "Remediated XSS vulnerabilities in a dynamically rendered print feature",
      "Web-to-native bridges for biometrics, payments, printing and external links",
      "Guided architecture and coding standards across selected projects",
      "Financial calculations and RBAC verified across user roles and edge cases",
    ],
  },
  {
    slug: "workforce-admin-platform",
    title: "Time Tracking & Workforce Management Admin Platform",
    domain: "Internal tools · HR",
    icon: "clock",
    summary:
      "A Next.js administration platform for time tracking and user management, with role-based access and Microsoft (MSAL) sign-in.",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Tailwind CSS",
      "ShadCN UI",
      "React Testing Library (Jest)",
      "MSAL",
    ],
    highlights: [
      "Led frontend development",
      "RBAC with authorization logic kept separate from UI state",
      "MSAL sign-in and a consistent ShadCN-based design system",
    ],
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "An organization needed one admin platform to manage users and time logs, where access to each module and feature depends on the user's role, with secure sign-in through their Microsoft identity.",
        },
        {
          heading: "My role",
          body: "I led frontend development and established the UI foundation with Next.js, TypeScript, Tailwind CSS and ShadCN UI.",
        },
        {
          heading: "Key decisions",
          points: [
            "Gated module and feature access by user role, with a clean separation between UI state and authorization logic.",
            "Integrated the Microsoft Authentication Library (MSAL) for secure login.",
            "Built user and time-log management with advanced filtering, sorting and data handling for administration and reporting.",
            "Kept a consistent design system on ShadCN UI and covered behavior with React Testing Library and Jest.",
          ],
        },
        {
          heading: "Outcome",
          body: "A consistent admin experience where permissions are enforced in one place, making it straightforward to add modules without scattering access checks across the UI.",
        },
      ],
    },
  },
  {
    slug: "business-data-platform",
    title: "Business Data Management Platform",
    domain: "SaaS · Business data",
    icon: "table",
    summary:
      "A Zoho-style platform for large, high-volume datasets: dynamic tables, RBAC with 5+ access levels, and a 35–40% performance improvement.",
    stack: ["React.js", "TypeScript", "GraphQL", "TanStack Table", "Redux Toolkit", "Ant Design"],
    highlights: [
      "Owned 4–5 modules end to end",
      "Infinite scroll, server-side pagination and debounced search over GraphQL",
      "RBAC permission management with 5+ access levels",
    ],
    metric: { value: "35–40%", label: "faster application performance" },
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: "The platform handles large, high-volume business datasets. In an inherited, fast-moving codebase, infinite scrolling, server-side pagination, search and table data mapping had broken, and the application suffered from unnecessary re-renders.",
        },
        {
          heading: "My role",
          body: "I owned 4–5 modules: dynamic data tables, RBAC-based permission management supporting 5+ access levels, and advanced filtering across the application.",
        },
        {
          heading: "Key decisions",
          points: [
            "Built tables on TanStack Table with GraphQL, using server-side pagination and infinite scrolling so the client never loads a full dataset.",
            "Debounced search and dynamic filtering to cut redundant queries while users type.",
            "Diagnosed and fixed the broken scrolling, pagination, search and data mapping, improving code quality as I went.",
            "Removed unnecessary re-renders and side effects, and optimized data-fetching patterns.",
          ],
        },
        {
          heading: "Outcome",
          body: "Application performance improved by 35–40%, and the core table features that had regressed were restored and became more maintainable.",
        },
      ],
    },
  },
];

export const caseStudies = projects.filter((p) => p.caseStudy);
