import { test, expect } from "@playwright/test";

/**
 * Functional tests for the Modal component.
 * Each Modal story is rendered in isolation via Storybook's preview iframe.
 */

/** Build the isolated-story URL for a Modal story. */
const story = (id: string) =>
  `/iframe.html?id=components-modal--${id}&viewMode=story`;

test.describe("Modal", () => {
  test("opens from its trigger and shows the content", async ({ page }) => {
    await page.goto(story("default"));

    // Closed by default — the dialog isn't in the DOM yet.
    await expect(page.getByRole("dialog")).toBeHidden();

    await page.getByRole("button", { name: "Open" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByLabel("Email address")).toBeVisible();
    await expect(dialog.getByLabel("Password")).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Log in" })).toBeVisible();
  });

  test("closes on Escape", async ({ page }) => {
    await page.goto(story("default"));
    await page.getByRole("button", { name: "Open" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
  });

  test("closes via the ✕ button", async ({ page }) => {
    await page.goto(story("open"));

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    // The ✕ lives inside the panel (the dialog's direct <div> child).
    await dialog.locator("> div").getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });

  test("closes when the backdrop is clicked", async ({ page }) => {
    await page.goto(story("default"));
    await page.getByRole("button", { name: "Open" }).click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    // The backdrop is the dialog's direct <button> child; click a corner so
    // we don't hit the centered panel.
    await dialog.locator("> button").click({ position: { x: 8, y: 8 } });
    await expect(dialog).toBeHidden();
  });
});
