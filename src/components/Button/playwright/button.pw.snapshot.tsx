import { test, expect } from "@playwright/test";

/**
 * Visual snapshot tests for the Button component.
 * Screenshots are stored in ./screenshots (see `snapshotPathTemplate`).
 * Regenerate baselines with:  npm run test:ct:update
 */

/** Build the isolated-story URL for a Button story. */
const story = (id: string) =>
  `/iframe.html?id=components-button--${id}&viewMode=story`;

/** The element Storybook renders the story into. */
const STORY_ROOT = "#storybook-root";

test.describe("Button snapshots", () => {
  test("all variants", async ({ page }) => {
    await page.goto(story("all-variants"));
    await page.waitForLoadState("networkidle");

    await expect(page.locator(STORY_ROOT)).toHaveScreenshot(
      "button-all-variants.png",
    );
  });

  test("sizes", async ({ page }) => {
    await page.goto(story("sizes"));
    await page.waitForLoadState("networkidle");

    await expect(page.locator(STORY_ROOT)).toHaveScreenshot("button-sizes.png");
  });
});
