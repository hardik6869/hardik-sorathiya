import { expect, test } from "@playwright/test";

// Each nav link opens a page with only its own section; Home (the logo) keeps every section.
const pages = [
  { path: "/about", id: "about", nav: "About", title: "About" },
  { path: "/work", id: "projects", nav: "Work", title: "Work" },
  { path: "/experience", id: "experience", nav: "Experience", title: "Experience" },
  { path: "/skills", id: "skills", nav: "Skills", title: "Skills" },
  { path: "/approach", id: "approach", nav: "Approach", title: "Approach" },
  { path: "/contact", id: "contact", nav: "Get in touch", title: "Get in touch" },
];
const allIds = pages.map((p) => p.id);

test.describe("section pages", () => {
  for (const { path, id, nav, title } of pages) {
    test(`${path} shows only the ${id} section`, async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page).toHaveTitle(new RegExp(`^${title} ·`));

      await expect(page.locator(`main section#${id}`)).toBeVisible();
      for (const other of allIds.filter((o) => o !== id)) {
        await expect(page.locator(`main section#${other}`)).toHaveCount(0);
      }
      // No hero on section pages.
      await expect(page.locator("#hero-heading")).toHaveCount(0);
      // Header and footer are present.
      await expect(page.locator("header").first()).toBeVisible();
      await expect(page.locator("footer")).toBeVisible();
    });

    test(`${path} marks "${nav}" as the current page`, async ({ page, isMobile }) => {
      test.skip(isMobile, "The desktop nav is hidden on small screens.");
      await page.goto(path);
      const primary = page.getByRole("navigation", { name: "Primary" });
      await expect(primary.getByRole("link", { name: nav, exact: true })).toHaveAttribute(
        "aria-current",
        "page",
      );
      // Only one nav link is current at a time.
      await expect(primary.locator("[aria-current=page]")).toHaveCount(1);
    });
  }

  test("clicking a nav link opens its page; the logo shows everything again", async ({ page, isMobile }) => {
    test.skip(isMobile, "The desktop nav is hidden on small screens.");
    await page.goto("/");
    const primary = page.getByRole("navigation", { name: "Primary" });

    await primary.getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL(/\/about$/);
    await expect(page.getByRole("heading", { level: 2 }).first()).toBeVisible();
    // Next.js keeps the previous page hidden in the DOM (instant back/forward), so count visible sections only.
    await expect(page.locator("main section#projects:visible")).toHaveCount(0);

    // The header logo is the Home link (there is no separate "Home" item in the nav).
    await page.getByRole("banner").getByRole("link", { name: "Hardik Sorathiya, home" }).click();
    await expect(page).toHaveURL(/\/$/);
    for (const id of allIds) {
      await expect(page.locator(`main section#${id}:visible`)).toHaveCount(1);
    }
  });
});
