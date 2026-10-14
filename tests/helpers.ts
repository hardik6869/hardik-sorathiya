import type { Page } from "@playwright/test";

/** Scrolls the whole page so every scroll-triggered reveal has run. */
export async function revealAll(page: Page) {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  // Let the last reveal transitions (0.5s) finish.
  await page.waitForTimeout(700);
}

export async function setTheme(page: Page, theme: "light" | "dark") {
  await page.evaluate((t) => {
    document.documentElement.dataset.theme = t;
  }, theme);
}
