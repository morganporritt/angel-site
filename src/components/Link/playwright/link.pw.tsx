import { test, expect } from "@playwright/test";

/**
 * Functional tests for the Link component.
 * Each Link story is rendered in isolation via Storybook's preview iframe.
 */

/** Build the isolated-story URL for a Link story. */
const story = (id: string) =>
  `/iframe.html?id=components-link--${id}&viewMode=story`;

test.describe("Link", () => {
  test("renders a default link with its text", async ({ page }) => {
    await page.goto(story("default"));

    const link = page.getByRole("link", { name: "Learn more" });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", "#");
  });

  test("external links open in a new tab with safe rel", async ({ page }) => {
    await page.goto(story("external"));

    const link = page.getByRole("link");
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("href", "https://www.angel.com");
  });

  test("renders every variant", async ({ page }) => {
    await page.goto(story("all-variants"));

    await expect(page.getByRole("link", { name: "Default link" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Nav link" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Muted link" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Footer link" })).toBeVisible();
  });
});
