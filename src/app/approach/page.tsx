import type { Metadata } from "next";
import { Approach } from "@/components/sections/approach";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Hardik Sorathiya builds software: authorization, performance, security, testing and an AI-assisted workflow.",
  alternates: { canonical: "/approach" },
};

/** Standalone page: only the Approach section (header and footer come from the root layout). */
export default function ApproachPage() {
  return <Approach />;
}
