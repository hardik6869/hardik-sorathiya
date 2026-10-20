import { expect, test } from "@playwright/test";
import { caseStudies, personalProjects } from "../src/content/projects";

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

  test("only personal projects link to a live site", async ({ page }) => {
    for (const project of caseStudies) {
      await page.goto(`/projects/${project.slug}`);
      const live = page.getByRole("link", { name: /View live site/ });
      if (project.liveUrl) {
        await expect(live).toHaveAttribute("href", project.liveUrl);
        await expect(live).toHaveAttribute("target", "_blank");
      } else {
        await expect(live).toHaveCount(0);
      }
    }

    await page.goto("/work");
    for (const project of personalProjects) {
      const card = page.locator("article", { has: page.getByRole("heading", { name: project.title }) });
      await expect(card.getByRole("link", { name: /Live site/ })).toHaveAttribute(
        "href",
        project.liveUrl ?? "",
      );
    }
  });

  test("unknown project returns the 404 page", async ({ page }) => {
    const res = await page.goto("/projects/does-not-exist");
    expect(res?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: /doesn.t exist/ })).toBeVisible();
  });
});
