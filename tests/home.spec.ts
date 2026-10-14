import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("renders the hero and every section", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Hardik Sorathiya/);
    await expect(page.getByRole("heading", { level: 1, name: "Hardik Sorathiya" })).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);

    for (const id of ["about", "skills", "experience", "projects", "approach", "contact"]) {
      await expect(page.locator(`section#${id} h2`)).toHaveCount(1);
    }
    await expect(page.locator("#projects article")).toHaveCount(4);
    // The hero intentionally has no stat cards.
    await expect(page.locator("main > section").first().locator("dl")).toHaveCount(0);
  });

  test("contact section has direct links and no form", async ({ page }) => {
    await page.goto("/");
    const contact = page.locator("section#contact");
    await expect(contact.locator("form")).toHaveCount(0);
    await expect(contact.getByRole("link", { name: /Email/ })).toHaveAttribute(
      "href",
      "mailto:sorathiyahardik6869@gmail.com",
    );
    for (const [name, href] of [
      ["LinkedIn", "https://www.linkedin.com/in/sorathiya-hardik"],
      ["GitHub", "https://github.com/hardik6869"],
    ]) {
      const link = contact.getByRole("link", { name: new RegExp(name) });
      await expect(link).toHaveAttribute("href", href);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });

  test("shows freelance availability in the hero", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("main > section").first();
    await expect(hero.getByText("Open to freelance work")).toBeVisible();
    await expect(hero.getByText("15–25 hrs/week")).toBeVisible();
  });

  test("floating back-to-top button appears after scrolling and returns to the top", async ({ page }) => {
    await page.goto("/");
    const button = page.getByRole("button", { name: "Back to top" });
    await expect(button).toHaveCount(0); // aria-hidden at the top of the page
    await page.evaluate(() => window.scrollTo(0, 2000));
    await expect(button).toBeVisible();
    await button.click();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(50);
  });

  test("no number counters are rendered", async ({ page }) => {
    await page.goto("/");
    const text = await page.locator("main").innerText();
    expect(text).not.toMatch(/\b0[0-9]\s*\/\s/);
  });

  test("resume download link points at the PDF", async ({ page, request }) => {
    await page.goto("/");
    // Every resume link (hero, header, mobile menu) points at the same PDF.
    const link = page.locator('a[download][href$=".pdf"]').first();
    const href = await link.getAttribute("href");
    expect(href).toBe("/resume/Hardik_Sorathiya_Resume.pdf");
    const res = await request.get(href!);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toContain("application/pdf");
  });

  test("skip link is the first tab stop and moves focus to main", async ({ page, isMobile }) => {
    test.skip(isMobile, "Keyboard navigation is checked on desktop.");
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main$/);
  });

  test("theme toggle switches and remembers the theme", async ({ page }) => {
    await page.goto("/");
    const html = page.locator("html");
    const before = await html.getAttribute("data-theme");
    expect(before === "light" || before === "dark").toBe(true);

    await page.getByRole("button", { name: "Toggle dark mode" }).click();
    const after = before === "dark" ? "light" : "dark";
    await expect(html).toHaveAttribute("data-theme", after);

    await page.reload();
    await expect(html).toHaveAttribute("data-theme", after);
  });

  test("mobile menu opens, navigates and closes with Escape", async ({ page, isMobile }) => {
    test.skip(!isMobile, "The menu button is only shown on small screens.");
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.getByRole("dialog", { name: "Site menu" });
    await expect(menu).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeHidden();

    await page.getByRole("button", { name: "Open menu" }).click();
    await menu.getByRole("link", { name: /Work/ }).click();
    await expect(menu).toBeHidden();
    await expect(page).toHaveURL(/\/work$/);
    await expect(page.locator("section#projects:visible")).toBeVisible();
  });
});
