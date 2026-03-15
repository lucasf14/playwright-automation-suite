import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly title: Locator;
  readonly dashboard: Locator;
  readonly sidePanel: Locator;
  readonly widgets: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.oxd-topbar-header-title');
    this.dashboard = page.locator('.orangehrm-dashboard-grid');
    this.sidePanel = page.locator('.oxd-sidepanel');
    this.widgets = page.locator('.orangehrm-dashboard-widget');
  }
}
