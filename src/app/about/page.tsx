import type { Metadata } from "next";
import { About } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Hardik Sorathiya, a Software Engineer with nearly 5 years of experience building React.js and Next.js applications, plus education details.",
  alternates: { canonical: "/about" },
};

/** Standalone page: only the About section (header and footer come from the root layout). */
export default function AboutPage() {
  return <About />;
}
