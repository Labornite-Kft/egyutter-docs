import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/esemenyek/screenshots');

test.describe('Események screenshots', () => {
  test('esemenyek-lista: events admin list', async ({page}) => {
    await page.goto('/admin/events');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/esemenyek-lista.png`});
  });

  test('naptar-nezet: events public list or calendar', async ({page}) => {
    await page.goto('/events');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/naptar-nezet.png`});
  });

  test('rsvp-resztvevok: event detail', async ({page}) => {
    await page.goto('/events');
    await expect(page).not.toHaveURL(/404/);
    const firstEvent = page.getByRole('link', {name: /meetup/i}).first();
    if (await firstEvent.isVisible()) {
      await firstEvent.click();
    }
    await page.screenshot({path: `${SCREENSHOTS}/esemeny-resztvevok.png`});
  });
});
