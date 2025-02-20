import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();
  await page.getByText('Username : Admin').click();
  await page.getByText('Password : admin123').click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(2).click();
  await page.getByText('Username : Admin').click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('5121');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('5487');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});