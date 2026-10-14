import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { revealAll, setTheme } from "./helpers";

// Automated checks catch only part of WCAG issues; see docs/ACCESSIBILITY.md for the manual checklist.
const pages = [
  { name: "home", path: "/" },
  { name: "case study", path: "/projects/legal-e-signature-platform" },
  { name: "404", path: "/this-page-does-not-exist" },
];

for (const theme of ["light", "dark"] as const) {
  for (const { name, path } of pages) {
    test(`${name} has no axe violations (${theme})`, async ({ page }) => {
      await page.goto(path);
      await setTheme(page, theme);
      await revealAll(page);

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      expect(
        results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target.join(" ")) })),
      ).toEqual([]);
    });
  }
}
