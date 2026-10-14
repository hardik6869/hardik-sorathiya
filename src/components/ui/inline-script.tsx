/**
 * Runs a script during HTML parsing on full page loads. On the client it renders
 * as text/plain so React neither warns about nor re-runs it (see Next.js
 * "Preventing flash before hydration" guide).
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
