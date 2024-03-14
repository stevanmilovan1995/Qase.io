import { test as base } from "@playwright/test";
import { QasePage } from "./qasePage";

export type TestOptions = {
  homePage: string;
  qase: QasePage;
};

export const test = base.extend<TestOptions>({
  homePage: async ({ page }, use) => {
    await page.goto("/");
    await use("");
  },

  qase: async ({ page, homePage }, use) => {
    const qase = new QasePage(page);
    await use(qase);
  },
});
