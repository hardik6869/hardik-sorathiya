import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";
import { navItems, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    // One page per section (from the nav).
    ...navItems.map((item) => ({
      url: `${siteUrl}${item.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...caseStudies.map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
