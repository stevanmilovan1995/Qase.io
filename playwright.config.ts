import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html", { outputFile: "test-results/testResults.html" }],
    ["allure-playwright"],
  ],

  use: {
    baseURL: "https://app.qase.io",
    actionTimeout: 10000,
    trace: "on-first-retry",
    launchOptions: { args: ["--start-maximized"] },
  },
  projects: [
    {
      name: "chromium",
      use: { viewport: null },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
