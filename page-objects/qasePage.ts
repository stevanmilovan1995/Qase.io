import { Page, Locator } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { NavigationBar } from "./navigationBar";
import { Dialog } from "./dialogElements/dialog";

export class QasePage {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly navigator: NavigationBar;
  readonly dialog: Dialog;
  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.navigator = new NavigationBar(page);
    this.dialog = new Dialog(page);
  }

  async waitForSeconds(time: number) {
    await this.page.waitForTimeout(time * 1000);
  }
}
