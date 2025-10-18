// @ts-check
import { test, expect } from '@playwright/test';

test('has Ben Arlanda header', async ({ page }) => {
  await page.goto('/');

  // Expect the page to have a heading with "Ben Arlanda"
  await expect(page.getByRole('heading', { name: 'Ben Arlanda' })).toBeVisible();
});

test('has correct page title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ben Arlanda/);
});
