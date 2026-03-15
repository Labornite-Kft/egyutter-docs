import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/tagkezeles/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Tagkezelés screenshots', () => {
  test('tag-directory: member list', async ({page}) => {
    await snap(page, '/members', `${SCREENSHOTS}/tag-directory.png`);
  });

  test('admin-tagok: admin member management', async ({page}) => {
    await snap(page, '/admin/members', `${SCREENSHOTS}/admin-tagok.png`);
  });

  test('tomeg-meghivo: bulk invite dialog', async ({page}) => {
    await page.goto('/admin/members');
    await expect(page).not.toHaveURL(/404/);
    await page.waitForLoadState('load');
    await page.waitForTimeout(800);
    const bulkBtn = page.getByRole('button', {name: /tömeges/i});
    if (await bulkBtn.isVisible()) {
      await bulkBtn.click();
      await page.waitForTimeout(400);
    }
    await page.screenshot({path: `${SCREENSHOTS}/tomeg-meghivo.png`, fullPage: false});
  });
});
