import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/kurzusok/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Kurzusok screenshots', () => {
  test('kurzusok-lista: course admin list', async ({page}) => {
    await snap(page, '/admin/courses', `${SCREENSHOTS}/kurzusok-lista.png`);
  });

  test('kurzus-fejezetek: course detail with chapters', async ({page}) => {
    await page.goto('/admin/courses');
    await expect(page).not.toHaveURL(/404/);
    await page.waitForLoadState('load');
    await page.waitForTimeout(800);
    const firstCourse = page.getByRole('link', {name: /webfejlesztés/i}).first();
    if (await firstCourse.isVisible()) {
      await firstCourse.click();
      await page.waitForLoadState('load');
      await page.waitForTimeout(800);
    }
    await page.screenshot({path: `${SCREENSHOTS}/kurzus-fejezetek.png`, fullPage: false});
  });

  test('kvizek-lista: quiz admin', async ({page}) => {
    await snap(page, '/admin/quizzes', `${SCREENSHOTS}/kvizek-lista.png`);
  });

  test('hallgatoi-lista: student enrollment', async ({page}) => {
    await snap(page, '/admin/courses', `${SCREENSHOTS}/hallgatoi-lista.png`);
  });
});
