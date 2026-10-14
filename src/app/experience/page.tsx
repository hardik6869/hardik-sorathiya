import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Hardik Sorathiya's professional experience as a Software Engineer: delivery, architecture, RBAC and AI-assisted modernization.",
  alternates: { canonical: "/experience" },
};

/** Standalone page: only the Experience section (header and footer come from the root layout). */
export default function ExperiencePage() {
  return <Experience />;
}
