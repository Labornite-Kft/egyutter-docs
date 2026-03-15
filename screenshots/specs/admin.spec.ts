import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS_ADMIN = path.join(__dirname, '../../docs/admin-beallitasok/screenshots');
const SCREENSHOTS_FIZETES = path.join(__dirname, '../../docs/fizetes/screenshots');

test.describe('Admin beállítások screenshots', () => {
  test('stripe-beallitas: Stripe settings', async ({page}) => {
    await page.goto('/admin/stripe');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_FIZETES}/stripe-beallitas.png`});
  });

  test('egyedi-domain: domain settings', async ({page}) => {
    await page.goto('/admin/settings');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_ADMIN}/egyedi-domain.png`});
  });

  test('analitika: analytics dashboard', async ({page}) => {
    await page.goto('/admin/analytics');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_ADMIN}/analitika.png`});
  });

  test('gamifikacio: badges admin', async ({page}) => {
    await page.goto('/admin/badges');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_ADMIN}/gamifikacio.png`});
  });
});
