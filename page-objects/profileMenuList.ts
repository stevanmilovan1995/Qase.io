import { Page, Locator } from "@playwright/test";

export class ProfileMenuList {
  private readonly _page: Page;
  private readonly _billing: Locator;
  private readonly _appearance: Locator;
  private readonly _changeTheme: Locator;
  private readonly _apiTokens: Locator;
  private readonly _profile: Locator;
  private readonly _notifications: Locator;
  private readonly _security: Locator;
  private readonly _help: Locator;
  private readonly _apiDocks: Locator;
  private readonly _roadMap: Locator;
  private readonly _status: Locator;
  private readonly _changeLog: Locator;
  private readonly _switchWorkspace: Locator;
  private readonly _testCompany: Locator;
  private readonly _signOut: Locator;

  constructor(page: Page) {
    this._page = page;
    this._billing = page.getByText("Billing");
    this._appearance = page.getByText("Appearance");
    this._changeTheme = page.locator(".switcher-element-slider");
    this._apiTokens = page.getByText("API Tokens");
    this._profile = page.getByText("Profile");
    this._notifications = page.getByText("Notifications");
    this._security = page.getByText("Security");
    this._help = page.getByText("Help");
    this._apiDocks = page.getByText("API docs");
    this._roadMap = page.getByText("Roadmap");
    this._status = page.getByText("Status");
    this._changeLog = page.getByText("Changelog");
    this._switchWorkspace = page.getByText("Switch workspace");
    this._testCompany = page.getByText("Test Company");
    this._signOut = page.getByText("Sign out");
  }

  get billing(): Locator {
    return this._billing;
  }

  get appearance(): Locator {
    return this._appearance;
  }

  get changeTheme(): Locator {
    return this._changeTheme;
  }

  get apiTokens(): Locator {
    return this._apiTokens;
  }

  get profile(): Locator {
    return this._profile;
  }

  get notifications(): Locator {
    return this._notifications;
  }

  get security(): Locator {
    return this._security;
  }

  get help(): Locator {
    return this._help;
  }

  get apiDocks(): Locator {
    return this._apiDocks;
  }

  get roadMap(): Locator {
    return this._roadMap;
  }

  get status(): Locator {
    return this._status;
  }

  get changeLog(): Locator {
    return this._changeLog;
  }

  get switchWorkspace(): Locator {
    return this._switchWorkspace;
  }

  get testCompany(): Locator {
    return this._testCompany;
  }

  get signOut(): Locator {
    return this._signOut;
  }
}
