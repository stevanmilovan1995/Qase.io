import { Page, Locator } from "@playwright/test";
import { SubscriptionDialog } from "./subscriptionDialog";

export class Dialog {
  private readonly _page: Page;
  readonly subscriptionDialog: SubscriptionDialog;

  constructor(page: Page) {
    this._page = page;
    this.subscriptionDialog = new SubscriptionDialog(page);
  }

  get subscriptionsDialog(): Locator {
    return this._page.locator("div[role='dialog']");
  }
}
