import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('1545');
  await page.locator('#passContainer').click();
  await page.getByTestId('royal-pass').fill('6548');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('name');
  await page.getByRole('textbox', { name: 'Surname' }).click();
  await page.getByRole('textbox', { name: 'Surname' }).fill('name2');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
  await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('82485');
  await page.getByRole('textbox', { name: 'New password' }).click();
  await page.getByRole('textbox', { name: 'New password' }).fill('125458');
  await page.getByRole('textbox', { name: 'New password' }).fill('125458');
});