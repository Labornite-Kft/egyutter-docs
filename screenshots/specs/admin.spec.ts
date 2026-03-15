import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS_ADMIN = path.join(__dirname, '../../docs/admin-beallitasok/screenshots');
const SCREENSHOTS_FIZETES = path.join(__dirname, '../../docs/fizetes/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Admin beállítások screenshots', () => {
  test('stripe-beallitas: Stripe settings', async ({page}) => {
    await snap(page, '/admin/stripe', `${SCREENSHOTS_FIZETES}/stripe-beallitas.png`);
  });

  test('egyedi-domain: domain settings', async ({page}) => {
    await snap(page, '/admin/settings', `${SCREENSHOTS_ADMIN}/egyedi-domain.png`);
  });

  test('analitika: analytics dashboard', async ({page}) => {
    await snap(page, '/admin/analytics', `${SCREENSHOTS_ADMIN}/analitika.png`);
  });

  test('gamifikacio: badges admin', async ({page}) => {
    await snap(page, '/admin/badges', `${SCREENSHOTS_ADMIN}/gamifikacio.png`);
  });
});
