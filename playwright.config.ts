import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration.
 *
 * Two projects:
 *  - `e2e`        — full-app end-to-end tests in ./e2e, run against `next dev` (:3000).
 *  - `components` — per-component tests & visual snapshots in
 *                   src/components/** /playwright, run against Storybook (:6006)
 *                   so each component is rendered in isolation.
 *
 * Component snapshots are stored next to their test file, inside a
 * `screenshots/` folder (see `snapshotPathTemplate`).
 *
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
  },
  expect: {
    // Small tolerance so anti-aliasing differences don't cause false failures.
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 },
  },
  // Component snapshots live in `<test-folder>/screenshots/<name>.png`.
  // `{testFileDir}` is relative to `{testDir}`, so both tokens are needed.
  snapshotPathTemplate: "{testDir}/{testFileDir}/screenshots/{arg}{ext}",
  projects: [
    {
      name: "e2e",
      testDir: "./e2e",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://localhost:3000",
      },
    },
    {
      name: "components",
      testDir: "./src/components",
      testMatch: ["**/playwright/**/*.pw.tsx", "**/playwright/**/*.pw.snapshot.tsx"],
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "http://localhost:6006",
      },
    },
  ],
  webServer: [
    {
      command: "npm run dev",
      url: "http://localhost:3000",
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
    {
      command: "npm run storybook -- --ci --quiet",
      url: "http://localhost:6006",
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
    },
  ],
});
