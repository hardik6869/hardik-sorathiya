import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Get in touch",
  description:
    "Get in touch with Hardik Sorathiya about a full-time role, a freelance project or a question, by email, LinkedIn or GitHub.",
  alternates: { canonical: "/contact" },
};

/** Standalone page: only the Contact section (header and footer come from the root layout). */
export default function ContactPage() {
  return <Contact />;
}
