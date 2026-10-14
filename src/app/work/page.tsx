import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected client platforms built by Hardik Sorathiya: legal e-signature, fintech, workforce admin and business data management.",
  alternates: { canonical: "/work" },
};

/** Standalone page: only the Work section (header and footer come from the root layout). */
export default function ProjectsPage() {
  return <Projects />;
}
