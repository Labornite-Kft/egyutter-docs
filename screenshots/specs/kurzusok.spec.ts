import {test, expect} from '@playwright/test';
import path from 'path';

const SCREENSHOTS = path.join(__dirname, '../../docs/kurzusok/screenshots');

test.describe('Kurzusok screenshots', () => {
  test('kurzusok-lista: course admin list', async ({page}) => {
    await page.goto('/admin/courses');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/kurzusok-lista.png`});
  });

  test('kurzus-fejezetek: course detail with chapters', async ({page}) => {
    await page.goto('/admin/courses');
    await expect(page).not.toHaveURL(/404/);
    const firstCourse = page.getByRole('link', {name: /webfejlesztés/i}).first();
    if (await firstCourse.isVisible()) {
      await firstCourse.click();
      await page.screenshot({path: `${SCREENSHOTS}/kurzus-fejezetek.png`});
    } else {
      await page.screenshot({path: `${SCREENSHOTS}/kurzus-fejezetek.png`});
    }
  });

  test('kvizek-lista: quiz admin', async ({page}) => {
    await page.goto('/admin/quizzes');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/kvizek-lista.png`});
  });

  test('hallgatoi-lista: student enrollment', async ({page}) => {
    await page.goto('/admin/courses');
    await expect(page).not.toHaveURL(/404/);
    await page.screenshot({path: `${SCREENSHOTS}/hallgatoi-lista.png`});
  });
});
