import { BrowserContext, test as base } from "@playwright/test";
import { QasePage } from "./qasePage";

export type TestOptions = {
  homePage: string;
  qase: QasePage;
  context: BrowserContext;
};

export const test = base.extend<TestOptions>({
  homePage: async ({ page }, use) => {
    await page.goto("/");
    await use("");
  },

  qase: async ({ page, context, homePage }, use) => {
    const qase = new QasePage(page, context);
    await qase.loginPage.mailField.fill("qasetest74@gmail.com");
    await qase.loginPage.passwordField.fill("Qasetestqa123!");
    await qase.loginPage.rememberMeCheckBox.check();
    await qase.loginPage.signInBtn.click();
    await page.waitForSelector("#createButton", { state: "visible" });
    await use(qase);
    await page.context().clearCookies();
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  },
});
