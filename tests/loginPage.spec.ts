import { expect } from "@playwright/test";
import { test } from "../page-objects/testHelper";

test("Login test", async ({ page, qase }) => {
  await qase.loginPage.mailField.fill("qasetest74@gmail.com");
  await qase.loginPage.passwordField.fill("Qasetestqa123!");
  await qase.loginPage.rememberMeCheckBox.check();
  await expect(qase.loginPage.mailField).toHaveValue("qasetest74@gmail.com");
  await expect(qase.loginPage.passwordField).toHaveValue("Qasetestqa123!");
  await expect(qase.loginPage.rememberMeCheckBox).toBeChecked();
  await qase.loginPage.signInBtn.click();
  await expect(page).toHaveURL("https://app.qase.io/projects");
});
