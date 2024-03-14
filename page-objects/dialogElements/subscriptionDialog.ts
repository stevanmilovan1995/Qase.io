import { Page, Locator } from "@playwright/test";

export class SubscriptionDialog {
  private readonly _page: Page;
  private readonly _notNowBtn: Locator;
  private readonly _upgradeYourSubscriptionBtn: Locator;

  constructor(page: Page) {
    this._page = page;
    this._notNowBtn = page.getByText("Not Now");
    this._upgradeYourSubscriptionBtn = page.getByText(
      "Upgrade your subscription"
    );
  }

  get notNowBtn(): Locator {
    return this._notNowBtn;
  }

  get upgradeSubscriptionBtn(): Locator {
    return this._upgradeYourSubscriptionBtn;
  }
}
