import { test } from "../page-objects/testHelper";
import { expect } from "@playwright/test";

test.describe("Navigator test", () => {
  test("Home Page navigation test", async ({ page, qase }) => {
    await qase.navigator.appsNavItem.click();
    await expect(page).toHaveURL("https://app.qase.io/apps");
    await qase.navigator.homePageNavItem.click();
    await expect(page).toHaveURL("https://app.qase.io/projects");
  });
  test("Projects Page navigation test", async ({ page, qase }) => {
    await expect(page).toHaveURL("https://app.qase.io/projects");
    await qase.navigator.appsNavItem.click();
    await expect(page).toHaveURL("https://app.qase.io/apps");
    await qase.navigator.projectsNavItem.click();
    await expect(page).toHaveURL("https://app.qase.io/projects");
  });
  test("Workspace Page navigation test", async ({ page, qase }) => {
    await expect(page).toHaveURL("https://app.qase.io/projects");
    await qase.navigator.workspaceNavItem.click();
    await expect(page).toHaveURL("https://app.qase.io/workspace");
  });
  test("Dashboards Page navigation test", async ({ page, qase }) => {
    await expect(page).toHaveURL("https://app.qase.io/projects");
    await qase.navigator.dashboardNavItem.click();
    await expect(qase.dialog.subscriptionsDialog).toBeVisible({});
    await qase.dialog.subscriptionDialog.notNowBtn.click();
    await expect(qase.dialog.subscriptionsDialog).toBeHidden();
  });
  test("Queries Page navigation test", async ({ page, qase }) => {
    await expect(page).toHaveURL("https://app.qase.io/projects");
    await qase.navigator.queriesNavItem.click();
    await expect(qase.dialog.subscriptionsDialog).toBeVisible();
    await qase.dialog.subscriptionDialog.notNowBtn.click();
    await expect(qase.dialog.subscriptionsDialog).toBeHidden();
  });
  test("Apps Page navigation test", async ({ page, qase }) => {
    await expect(page).toHaveURL("https://app.qase.io/projects");
    await qase.navigator.appsNavItem.click();
    await expect(page).toHaveURL("https://app.qase.io/apps");
  });
});
