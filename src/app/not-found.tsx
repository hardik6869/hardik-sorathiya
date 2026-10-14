import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-accent">404 / Not found</p>
      <h1 className="mt-4 text-h2 font-semibold">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-md text-muted">
        The link may be broken, or the page may have moved. The case studies and contact details are all on
        the home page.
      </p>
      <ButtonLink href="/" className="mt-8">
        <ArrowLeft aria-hidden="true" />
        Back to home
      </ButtonLink>
    </Container>
  );
}
