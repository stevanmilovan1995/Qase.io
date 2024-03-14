import { Page, Locator } from "@playwright/test";

export class NavigationBar {
  private readonly _page: Page;
  private readonly _homePageNavItem: Locator;
  private readonly _projectsNavItem: Locator;
  private readonly _workspaceNavItem: Locator;
  private readonly _dashboardNavItem: Locator;
  private readonly _queriesNavItem: Locator;
  private readonly _appsNavItem: Locator;
  private readonly _notificationNavItem: Locator;
  private readonly _chatNavItem: Locator;
  private readonly _profileMenuNavItem: Locator;

  constructor(page: Page) {
    this._page = page;
    this._homePageNavItem = page.locator("a[href='/projects']").first();
    this._projectsNavItem = page.locator("a[href='/projects']").last();
    this._workspaceNavItem = page.locator("a[href='/workspace']");
    this._dashboardNavItem = page.locator("a[href='/report/dashboards']");
    this._queriesNavItem = page.locator("a[href='/report/queries-list']");
    this._appsNavItem = page.locator("a[href='/apps']");
    this._notificationNavItem = page.locator(".fa-bell");
    this._chatNavItem = page.locator(".fa-comment");
    this._profileMenuNavItem = page.locator("img[alt='Qase Test']");
  }

  get homePageNavItem(): Locator {
    return this._homePageNavItem;
  }

  get projectsNavItem(): Locator {
    return this._projectsNavItem;
  }

  get workspaceNavItem(): Locator {
    return this._workspaceNavItem;
  }

  get dashboardNavItem(): Locator {
    return this._dashboardNavItem;
  }

  get queriesNavItem(): Locator {
    return this._queriesNavItem;
  }

  get appsNavItem(): Locator {
    return this._appsNavItem;
  }

  get notificationNavItem(): Locator {
    return this._notificationNavItem;
  }

  get chatNavItem(): Locator {
    return this._chatNavItem;
  }

  get profileMenuNavItem(): Locator {
    return this._profileMenuNavItem;
  }
}
