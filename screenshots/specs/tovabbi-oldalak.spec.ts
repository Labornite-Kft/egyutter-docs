import {test, expect} from '@playwright/test';
import path from 'path';

const ADMIN = path.join(__dirname, '../../docs/admin-beallitasok/screenshots');
const KURZUSOK = path.join(__dirname, '../../docs/kurzusok/screenshots');
const TAGKEZELES = path.join(__dirname, '../../docs/tagkezeles/screenshots');
const ERTESITESEK = path.join(__dirname, '../../docs/ertesitesek/screenshots');
const FIZETES = path.join(__dirname, '../../docs/fizetes/screenshots');
const INTEGRACIOK = path.join(__dirname, '../../docs/integraciok/screenshots');

async function snap(page: any, url: string, file: string) {
  await page.goto(url);
  await expect(page).not.toHaveURL(/404/);
  await page.waitForLoadState('load');
  await page.waitForTimeout(800);
  await page.screenshot({path: file, fullPage: false});
}

test.describe('Admin beállítások – további oldalak', () => {
  test('branding-megjelenes', async ({page}) => {
    await snap(page, '/admin/branding', `${ADMIN}/branding-megjelenes.png`);
  });
  test('kozosseg-alapadatai', async ({page}) => {
    await snap(page, '/admin/settings', `${ADMIN}/kozosseg-alapadatai.png`);
  });
  test('email-sablonok', async ({page}) => {
    await snap(page, '/admin/emails', `${ADMIN}/email-sablonok.png`);
  });
  test('seo-beallitasok', async ({page}) => {
    await snap(page, '/admin/settings/seo', `${ADMIN}/seo-beallitasok.png`);
  });
  test('egyedi-nav-linkek', async ({page}) => {
    await snap(page, '/admin/custom-links', `${ADMIN}/egyedi-nav-linkek.png`);
  });
  test('aktivitasi-naplok', async ({page}) => {
    await snap(page, '/admin/activity-logs', `${ADMIN}/aktivitasi-naplok.png`);
  });
});

test.describe('Kurzusok – további oldalak', () => {
  test('video-feltoltes', async ({page}) => {
    await snap(page, '/admin/courses', `${KURZUSOK}/video-feltoltes.png`);
  });
  test('drip-tartalom', async ({page}) => {
    await snap(page, '/admin/courses', `${KURZUSOK}/drip-tartalom.png`);
  });
  test('kurzus-kategoriak', async ({page}) => {
    await snap(page, '/admin/course-categories', `${KURZUSOK}/kurzus-kategoriak.png`);
  });
  test('fizetos-kurzus', async ({page}) => {
    await snap(page, '/admin/billing', `${KURZUSOK}/fizetos-kurzus.png`);
  });
});

test.describe('Tagkezelés – további oldalak', () => {
  test('tag-szegmensek', async ({page}) => {
    await snap(page, '/admin/tags', `${TAGKEZELES}/tag-szegmensek.png`);
  });
  test('tag-export', async ({page}) => {
    await snap(page, '/admin/members', `${TAGKEZELES}/tag-export.png`);
  });
  test('moderacio', async ({page}) => {
    await snap(page, '/admin/moderation', `${TAGKEZELES}/moderacio.png`);
  });
});

test.describe('Értesítések – további oldalak', () => {
  test('in-app-ertesitesek', async ({page}) => {
    await snap(page, '/notifications', `${ERTESITESEK}/in-app-ertesitesek.png`);
  });
  test('megemiitesek', async ({page}) => {
    await snap(page, '/feed', `${ERTESITESEK}/megemiitesek.png`);
  });
  test('heti-osszefoglalo', async ({page}) => {
    await snap(page, '/admin/settings/weekly-digest', `${ERTESITESEK}/heti-osszefoglalo.png`);
  });
  test('kozlemenyek', async ({page}) => {
    await snap(page, '/announcements', `${ERTESITESEK}/kozlemenyek.png`);
  });
});

test.describe('Fizetés – további oldalak', () => {
  test('elofizetesi-csomagok', async ({page}) => {
    await snap(page, '/admin/billing', `${FIZETES}/elofizetesi-csomagok.png`);
  });
  test('paywall', async ({page}) => {
    await snap(page, '/admin/paywalls', `${FIZETES}/paywall.png`);
  });
  test('billingo-szamlazas', async ({page}) => {
    await snap(page, '/admin/settings/billingo', `${FIZETES}/billingo-szamlazas.png`);
  });
  test('fizetesi-riportok', async ({page}) => {
    await snap(page, '/admin/stripe', `${FIZETES}/fizetesi-riportok.png`);
  });
});

test.describe('Integrációk – további oldalak', () => {
  test('harmadik-fel-integraciok', async ({page}) => {
    await snap(page, '/admin/integrations', `${INTEGRACIOK}/harmadik-fel-integraciok.png`);
  });
});
