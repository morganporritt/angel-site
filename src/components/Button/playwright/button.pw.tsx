import { test, expect } from "@playwright/test";

/**
 * Functional tests for the Button component.
 * Each Button story is rendered in isolation via Storybook's preview iframe.
 */

/** Build the isolated-story URL for a Button story. */
const story = (id: string) =>
  `/iframe.html?id=components-button--${id}&viewMode=story`;

test.describe("Button", () => {
  test("renders the primary button with its label", async ({ page }) => {
    await page.goto(story("primary"));

    const button = page.getByRole("button", { name: "Get Started" });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
  });

  test("disabled button is not interactive", async ({ page }) => {
    await page.goto(story("disabled"));

    await expect(page.getByRole("button")).toBeDisabled();
  });

  test("renders all three variants", async ({ page }) => {
    await page.goto(story("all-variants"));

    await expect(page.getByRole("button", { name: "Primary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Secondary" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Tertiary" })).toBeVisible();
  });
});
