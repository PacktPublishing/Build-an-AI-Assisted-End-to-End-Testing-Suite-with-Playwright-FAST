import { test, expect } from '@playwright/test';

test('user can sign in and reach the dashboard', async ({ page }) => {
  await page.goto('https://example.com');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('not-a-real-secret');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(
    page.getByRole('heading', { name: 'Dashboard' })
  ).toBeVisible();
});
