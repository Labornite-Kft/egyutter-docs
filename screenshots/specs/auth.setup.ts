import {test as setup, expect} from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../fixtures/auth.json');

setup('authenticate as demo admin', async ({page}) => {
  const email = process.env.DEMO_ADMIN_EMAIL || 'demo-admin@egyutter.hu';
  const password = process.env.DEMO_ADMIN_PASSWORD;

  if (!password) throw new Error('DEMO_ADMIN_PASSWORD env var required');

  await page.goto('/login');
  await page.getByLabel('E-mail').fill(email);
  await page.getByLabel('Jelszó').fill(password);
  await page.getByRole('button', {name: 'Bejelentkezés'}).click();
  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({path: authFile});
});
