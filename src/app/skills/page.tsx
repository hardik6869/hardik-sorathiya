import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Hardik Sorathiya: React.js, Next.js, TypeScript, state management, APIs, testing and AI-assisted development.",
  alternates: { canonical: "/skills" },
};

/** Standalone page: only the Skills section (header and footer come from the root layout). */
export default function SkillsPage() {
  return <Skills />;
}
