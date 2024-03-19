import { BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { NavigationBar } from "./navigationBar";
import { Dialog } from "./dialogElements/dialog";
import { ProfileMenuList } from "./profileMenuList";

export class QasePage {
  readonly page: Page;
  readonly context: BrowserContext;
  readonly loginPage: LoginPage;
  readonly navigator: NavigationBar;
  readonly dialog: Dialog;
  readonly profileMenuList: ProfileMenuList;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = page.context();
    this.loginPage = new LoginPage(page);
    this.navigator = new NavigationBar(page);
    this.dialog = new Dialog(page);
    this.profileMenuList = new ProfileMenuList(page);
  }

  async waitForSeconds(time: number) {
    await this.page.waitForTimeout(time * 1000);
  }
  async getNewTabUrl(): Promise<string> {
    const pagePromise = this.context.waitForEvent("page");
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    const url = newPage.url();
    await newPage.close();
    return url;
  }
}
