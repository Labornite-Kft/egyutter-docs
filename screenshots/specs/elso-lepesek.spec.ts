import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/elso-lepesek/screenshots');

test.describe('Első lépések screenshots', () => {
  test('kozosseg-letrehozasa: community settings page', async ({page}) => {
    await page.goto('/admin/settings');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/kozosseg-alapadatok.png`});
  });

  test('branding: branding settings page', async ({page}) => {
    await page.goto('/admin/branding');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/branding-beallitas.png`});
  });

  test('tagok-meghivasa: invite members admin', async ({page}) => {
    await page.goto('/admin/members');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/tagok-meghivasa.png`});
  });

  test('meghivo-linkek: invite links admin', async ({page}) => {
    await page.goto('/admin/invite-links');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/meghivo-linkek.png`});
  });
});
