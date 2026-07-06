import { test, expect } from "@playwright/test";

/**
 * Visual snapshot tests for the Modal component.
 * Screenshots are stored in ./screenshots (see `snapshotPathTemplate`).
 * Regenerate baselines with:  npm run test:ct:update
 */

/** Build the isolated-story URL for a Modal story. */
const story = (id: string) =>
  `/iframe.html?id=components-modal--${id}&viewMode=story`;

/** The modal panel — the dialog's direct <div> child (excludes the backdrop). */
const PANEL = "[role='dialog'] > div";

test.describe("Modal snapshots", () => {
  test("login modal", async ({ page }) => {
    await page.goto(story("open"));

    const panel = page.locator(PANEL);
    await panel.waitFor({ state: "visible" });
    await page.waitForLoadState("networkidle");

    await expect(panel).toHaveScreenshot("modal-login.png");
  });

  test("basic modal", async ({ page }) => {
    await page.goto(story("basic"));

    const panel = page.locator(PANEL);
    await panel.waitFor({ state: "visible" });
    await page.waitForLoadState("networkidle");

    await expect(panel).toHaveScreenshot("modal-basic.png");
  });
});
