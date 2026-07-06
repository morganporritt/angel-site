import { test, expect } from "@playwright/test";

/**
 * Visual snapshot tests for the Link component.
 * Screenshots are stored in ./screenshots (see `snapshotPathTemplate`).
 * Regenerate baselines with:  npm run test:ct:update
 */

/** Build the isolated-story URL for a Link story. */
const story = (id: string) =>
  `/iframe.html?id=components-link--${id}&viewMode=story`;

/** The element Storybook renders the story into. */
const STORY_ROOT = "#storybook-root";

test.describe("Link snapshots", () => {
  test("all variants", async ({ page }) => {
    await page.goto(story("all-variants"));
    await page.waitForLoadState("networkidle");

    await expect(page.locator(STORY_ROOT)).toHaveScreenshot(
      "link-all-variants.png",
    );
  });

  test("default", async ({ page }) => {
    await page.goto(story("default"));
    await page.waitForLoadState("networkidle");

    await expect(page.locator(STORY_ROOT)).toHaveScreenshot("link-default.png");
  });
});
