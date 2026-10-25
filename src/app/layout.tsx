import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { SkipLink } from "@/components/ui/skip-link";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { InlineScript } from "@/components/ui/inline-script";
import { ThemeToggle, themeScript } from "@/components/theme-toggle";
import { profile } from "@/content/profile";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} · ${profile.role}`,
    template: `%s · ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "React.js",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Hardik Sorathiya",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: `${siteName} · ${profile.role}`,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} · ${profile.role}`,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <InlineScript html={themeScript} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <SkipLink />
          <ScrollProgress />
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-60 grain" />
          <Header />
          {/* On section pages (/about, /work, …) the section is the first child: give it the same
              top spacing as the hero instead of the larger gap used between sections on Home. */}
          <main
            id="main"
            tabIndex={-1}
            className="flex-1 focus:outline-none [&>section:first-child]:pt-10 sm:[&>section:first-child]:pt-14 lg:[&>section:first-child]:pt-16"
          >
            {children}
          </main>
          <Footer />
          {/* Floating theme toggle in the bottom-right corner; the back-to-top button stacks above it. */}
          <ThemeToggle className="fixed right-4 bottom-4 z-40 size-12 rounded-full border border-line-strong bg-surface/90 text-fg shadow-md shadow-black/15 backdrop-blur transition-[background-color,color] duration-300 hover:bg-accent hover:text-accent-fg sm:right-6 sm:bottom-6" />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
