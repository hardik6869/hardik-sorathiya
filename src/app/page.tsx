import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { profile } from "@/content/profile";
import { siteUrl } from "@/lib/site";

// Person structured data, limited to facts stated on the resume.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  alumniOf: profile.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: ["React.js", "Next.js", "TypeScript", "JavaScript", "Frontend Architecture", "Accessibility"],
  sameAs: [profile.socials.linkedin.href, profile.socials.github.href],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Approach />
      <Contact />
    </>
  );
}
