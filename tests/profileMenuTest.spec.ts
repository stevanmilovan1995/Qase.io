import { test } from "../page-objects/testHelper";
import { expect } from "@playwright/test";

test.describe("Profile Drop-down menu test", () => {
  test("Billing page test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.billing.click();
    expect(page.url()).toEqual("https://app.qase.io/billing");
  });
  test("Appearance page test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.appearance.click();
    expect(page.url()).toEqual("https://app.qase.io/user/appearance");
  });
  test("API Tokens page test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.apiTokens.click();
    expect(page.url()).toEqual("https://app.qase.io/user/api/token");
  });
  test("Profile page test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.profile.click();
    expect(page.url()).toEqual("https://app.qase.io/user/profile");
  });
  test("Notifications page test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.notifications.click();
    expect(page.url()).toEqual("https://app.qase.io/user/notifications");
  });
  test("Security page test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.security.click();
    expect(page.url()).toEqual("https://app.qase.io/user/security");
  });
  test("Help page navigation test", async ({ qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.help.click();
    const newTabUrl = await qase.getNewTabUrl();
    expect(newTabUrl).toEqual("https://help.qase.io/en/");
  });
  test("API docs page navigation test", async ({ qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.apiDocks.click();
    const newTabUrl = await qase.getNewTabUrl();
    expect(newTabUrl).toEqual(
      "https://developers.qase.io/reference/introduction-to-the-qase-api"
    );
  });
  test("Roadmap page navigation test", async ({ qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.roadMap.click();
    const newTabUrl = await qase.getNewTabUrl();
    expect(newTabUrl).toEqual("https://roadmap.qase.io/");
  });
  test("Status page navigation test", async ({ qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.status.click();
    const newTabUrl = await qase.getNewTabUrl();
    expect(newTabUrl).toEqual("https://status.qase.io/");
  });
  test("Change Log page navigation test", async ({ qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.changeLog.click();
    const newTabUrl = await qase.getNewTabUrl();
    expect(newTabUrl).toEqual("https://changelog.qase.io/");
  });
  test("Switch workspace navigation item test", async ({ qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.switchWorkspace.click();
    await expect(qase.profileMenuList.testCompany).toBeVisible();
  });
  test("Sign Out navigation item test", async ({ page, qase }) => {
    await qase.navigator.profileMenuNavItem.hover();
    await qase.navigator.profileMenuNavItem.click({ force: true });
    await qase.profileMenuList.signOut.click();
    await qase.waitForSeconds(2);
    expect(page.url()).toEqual("https://app.qase.io/login");
    expect(qase.loginPage.mailField).toBeVisible();
    expect(qase.loginPage.passwordField).toBeVisible();
    expect(qase.loginPage.signInBtn).toBeVisible();
  });
});
