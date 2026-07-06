import { test, expect } from "@playwright/test";

/**
 * Visual snapshot tests for the TextField component.
 * Screenshots are stored in ./screenshots (see `snapshotPathTemplate`).
 * Regenerate baselines with:  npm run test:ct:update
 */

/** Build the isolated-story URL for a TextField story. */
const story = (id: string) =>
  `/iframe.html?id=components-textfield--${id}&viewMode=story`;

/** The element Storybook renders the story into. */
const STORY_ROOT = "#storybook-root";

test.describe("TextField snapshots", () => {
  test("with hint", async ({ page }) => {
    await page.goto(story("with-hint"));
    await page.waitForLoadState("networkidle");

    await expect(page.locator(STORY_ROOT)).toHaveScreenshot(
      "textfield-with-hint.png",
    );
  });

  test("sign-up form", async ({ page }) => {
    await page.goto(story("sign-up-form"));
    await page.waitForLoadState("networkidle");

    await expect(page.locator(STORY_ROOT)).toHaveScreenshot(
      "textfield-sign-up-form.png",
    );
  });
});
