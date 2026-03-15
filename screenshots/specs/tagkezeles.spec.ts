import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/tagkezeles/screenshots');

test.describe('Tagkezelés screenshots', () => {
  test('tag-directory: member list', async ({page}) => {
    await page.goto('/members');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/tag-directory.png`});
  });

  test('admin-tagok: admin member management', async ({page}) => {
    await page.goto('/admin/members');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/admin-tagok.png`});
  });

  test('tomeg-meghivo: bulk invite dialog', async ({page}) => {
    await page.goto('/admin/members');
    await expect(page).not.toHaveURL(/404/);
    const bulkBtn = page.getByRole('button', {name: /tömeges/i});
    if (await bulkBtn.isVisible()) {
      await bulkBtn.click();
    }
    await page.screenshot({path: `${SCREENSHOTS}/tomeg-meghivo.png`});
  });
});
