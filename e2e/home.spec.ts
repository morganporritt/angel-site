import { test, expect } from "@playwright/test";

test("home page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Angel Site/);
});

test("hero headline is visible", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /amplifies light/i })
  ).toBeVisible();
});

test("sign-up form fields render", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByLabel("Full name")).toBeVisible();
  await expect(page.getByLabel("Email address")).toBeVisible();
});
