import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/elso-lepesek/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Első lépések screenshots', () => {
  test('kozosseg-letrehozasa: community settings page', async ({page}) => {
    await snap(page, '/admin/settings', `${SCREENSHOTS}/kozosseg-alapadatok.png`);
  });

  test('branding: branding settings page', async ({page}) => {
    await snap(page, '/admin/branding', `${SCREENSHOTS}/branding-beallitas.png`);
  });

  test('tagok-meghivasa: invite members admin', async ({page}) => {
    await snap(page, '/admin/members', `${SCREENSHOTS}/tagok-meghivasa.png`);
  });

  test('meghivo-linkek: invite links admin', async ({page}) => {
    await snap(page, '/admin/invite-links', `${SCREENSHOTS}/meghivo-linkek.png`);
  });
});
