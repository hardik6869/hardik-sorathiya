import { expect, test } from "@playwright/test";
import { caseStudies } from "../src/content/projects";

test.describe("case study pages", () => {
  for (const project of caseStudies) {
    test(`${project.slug} renders`, async ({ page }) => {
      const res = await page.goto(`/projects/${project.slug}`);
      expect(res?.status()).toBe(200);
      await expect(page.getByRole("heading", { level: 1, name: project.title })).toBeVisible();
      await expect(page).toHaveTitle(new RegExp(project.title.replace(/[&]/g, "\\$&")));
      await expect(page.getByRole("heading", { level: 2, name: "Key decisions" })).toBeVisible();
    });
  }

  test("home page cards link to each case study", async ({ page }) => {
    await page.goto("/");
    for (const project of caseStudies) {
      await expect(page.getByRole("link", { name: project.title })).toHaveAttribute(
        "href",
        `/projects/${project.slug}`,
      );
    }
  });

  test("unknown project returns the 404 page", async ({ page }) => {
    const res = await page.goto("/projects/does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: /doesn.t exist/ })).toBeVisible();
  });
});
