import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Successful login', async ({ page }) => {
  const title = page.locator('.oxd-topbar-header-title');
  const dashboard = page.locator('.orangehrm-dashboard-grid');
  const sidePanel = page.locator('.oxd-sidepanel');
  const widgets = page.locator('.orangehrm-dashboard-widget');
  
  const loginPage = new LoginPage(page);
  await loginPage.goto(process.env.UI_BASE_URL || '');
  await loginPage.login(process.env.UI_USERNAME || '', process.env.UI_PASSWORD || '');

  await expect(page).toHaveURL(/dashboard/);
  await expect(title).toBeVisible();
  await expect(title).toHaveText('Dashboard');
  await expect(sidePanel).toBeVisible();
  await expect(dashboard).toBeVisible();
  await expect(widgets.first()).toBeVisible();
  expect(await widgets.count()).toBeGreaterThan(1);
});


test('Unsuccessful login with invalid credentials', async ({ page }) => {
  const errorMessage = page.locator('.oxd-alert-content-text');
  
  const loginPage = new LoginPage(page);
  await loginPage.goto(process.env.UI_BASE_URL || '');
  await loginPage.login('qwerty', '123456');

  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Invalid credentials');
});


test('Unsuccessful login with empty fields', async ({ page }) => {  
  const usernameContainer = page.locator('.oxd-input-group', { hasText: 'Username' });
  const passwordContainer = page.locator('.oxd-input-group', { hasText: 'Password' });
  const usernameRequired = usernameContainer.locator('.oxd-input-field-error-message'); 
  const passwordRequired = passwordContainer.locator('.oxd-input-field-error-message');
  
  const loginPage = new LoginPage(page);
  await loginPage.goto(process.env.UI_BASE_URL || '');
  await loginPage.login('', '');

  await expect(usernameRequired).toHaveText('Required');
  await expect(passwordRequired).toHaveText('Required');
});

