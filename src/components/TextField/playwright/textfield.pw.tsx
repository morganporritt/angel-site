import { test, expect } from "@playwright/test";

/**
 * Functional tests for the TextField component.
 * Each TextField story is rendered in isolation via Storybook's preview iframe.
 */

/** Build the isolated-story URL for a TextField story. */
const story = (id: string) =>
  `/iframe.html?id=components-textfield--${id}&viewMode=story`;

test.describe("TextField", () => {
  test("associates the label with the input and accepts typing", async ({
    page,
  }) => {
    await page.goto(story("default"));

    const input = page.getByLabel("Email address");
    await expect(input).toBeVisible();

    await input.fill("member@example.com");
    await expect(input).toHaveValue("member@example.com");
  });

  test("renders helper hint text", async ({ page }) => {
    await page.goto(story("with-hint"));

    await expect(
      page.getByText("We'll never share your email. Cancel anytime."),
    ).toBeVisible();
  });

  test("disabled field cannot be edited", async ({ page }) => {
    await page.goto(story("disabled"));

    await expect(page.getByRole("textbox")).toBeDisabled();
  });
});
