import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS_TEREK = path.join(__dirname, '../../docs/terek/screenshots');
const SCREENSHOTS_ERTESITESEK = path.join(__dirname, '../../docs/ertesitesek/screenshots');
const SCREENSHOTS_INTEGRACIOK = path.join(__dirname, '../../docs/integraciok/screenshots');

test.describe('Terek screenshots', () => {
  test('ter-lista: spaces admin list', async ({page}) => {
    await page.goto('/admin/spaces');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_TEREK}/ter-lista.png`});
  });

  test('ter-bejegyzesek: space feed', async ({page}) => {
    await page.goto('/spaces');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_TEREK}/ter-bejegyzesek.png`});
  });
});

test.describe('Értesítések screenshots', () => {
  test('ertesitesek: notifications page', async ({page}) => {
    await page.goto('/notifications');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_ERTESITESEK}/ertesitesek.png`});
  });

  test('uzenet: messages page', async ({page}) => {
    await page.goto('/messages');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_ERTESITESEK}/uzenet.png`});
  });
});

test.describe('Integrációk screenshots', () => {
  test('webhookok: webhook settings', async ({page}) => {
    await page.goto('/admin/settings');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_INTEGRACIOK}/webhookok.png`});
  });

  test('api-kulcsok: settings page', async ({page}) => {
    await page.goto('/settings');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS_INTEGRACIOK}/api-kulcsok.png`});
  });
});
