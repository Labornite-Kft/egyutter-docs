import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/esemenyek/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Események screenshots', () => {
  test('esemenyek-lista: events admin list', async ({page}) => {
    await snap(page, '/admin/events', `${SCREENSHOTS}/esemenyek-lista.png`);
  });

  test('naptar-nezet: events public list or calendar', async ({page}) => {
    await snap(page, '/events', `${SCREENSHOTS}/naptar-nezet.png`);
  });

  test('rsvp-resztvevok: event detail', async ({page}) => {
    await page.goto('/events');
    await expect(page).not.toHaveURL(/404/);
    await page.waitForLoadState('load');
    await page.waitForTimeout(800);
    const firstEvent = page.getByRole('link', {name: /meetup/i}).first();
    if (await firstEvent.isVisible()) {
      await firstEvent.click();
      await page.waitForLoadState('load');
      await page.waitForTimeout(800);
    }
    await page.screenshot({path: `${SCREENSHOTS}/esemeny-resztvevok.png`, fullPage: false});
  });
});
