import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private readonly _page: Page;
  private readonly _mailField: Locator;
  private readonly _passwordField: Locator;
  private readonly _rememberMeCheckBox: Locator;
  private readonly _signInBtn: Locator;

  constructor(page: Page) {
    this._page = page;
    this._mailField = page.getByPlaceholder("Work Email");
    this._passwordField = page.getByPlaceholder("Password");
    this._rememberMeCheckBox = page.locator('input[name="remember"]');
    this._signInBtn = page.getByText("Sign in");
  }

  // Getter for the mailField
  get mailField(): Locator {
    return this._mailField;
  }

  // Getter for the passwordField
  get passwordField(): Locator {
    return this._passwordField;
  }

  // Getter for the rememberMeCheckBox
  get rememberMeCheckBox(): Locator {
    return this._rememberMeCheckBox;
  }

  // Getter for the signInBtn
  get signInBtn(): Locator {
    return this._signInBtn;
  }
}
