import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS_TEREK = path.join(__dirname, '../../docs/terek/screenshots');
const SCREENSHOTS_ERTESITESEK = path.join(__dirname, '../../docs/ertesitesek/screenshots');
const SCREENSHOTS_INTEGRACIOK = path.join(__dirname, '../../docs/integraciok/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Terek screenshots', () => {
  test('ter-lista: spaces admin list', async ({page}) => {
    await snap(page, '/admin/spaces', `${SCREENSHOTS_TEREK}/ter-lista.png`);
  });

  test('ter-bejegyzesek: space feed', async ({page}) => {
    await snap(page, '/spaces', `${SCREENSHOTS_TEREK}/ter-bejegyzesek.png`);
  });
});

test.describe('Értesítések screenshots', () => {
  test('ertesitesek: notifications page', async ({page}) => {
    await snap(page, '/notifications', `${SCREENSHOTS_ERTESITESEK}/ertesitesek.png`);
  });

  test('uzenet: messages page', async ({page}) => {
    await snap(page, '/messages', `${SCREENSHOTS_ERTESITESEK}/uzenet.png`);
  });
});

test.describe('Integrációk screenshots', () => {
  test('webhookok: webhook settings', async ({page}) => {
    await snap(page, '/admin/settings', `${SCREENSHOTS_INTEGRACIOK}/webhookok.png`);
  });

  test('api-kulcsok: settings page', async ({page}) => {
    await snap(page, '/settings', `${SCREENSHOTS_INTEGRACIOK}/api-kulcsok.png`);
  });
});
