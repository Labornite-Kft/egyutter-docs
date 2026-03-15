---
title: Egyedi domain beállítása
description: Kapcsold össze a saját domained a közösségeddel – így a tagok pl. akademia.sajatdomain.hu-n érik el a közösséget.
sidebar_position: 3
---

## Mi ez?

Az egyedi domain beállításával a közösséged elérhető lesz saját domaineden (pl. `akademia.sajatdomain.hu`) az alapértelmezett `*.egyutter.hu` cím mellett. Ez professzionálisabb megjelenést ad, és erősíti a brand azonosságot – a tagok a te domaineden érik el a közösséget.

## Előfeltételek

> ⚠️ Mielőtt elkezded:
> - DNS-hozzáférés szükséges a domainedhez (pl. Cloudflare, GoDaddy, Tárhely.hu admin felület).

## Lépésről lépésre

1. Lépj az **Admin → Beállítások → Domain** oldalra.
2. Add meg az egyedi domaint (pl. `akademia.sajatdomain.hu`).
3. Kattints a **Mentés** gombra – megjelenik a szükséges DNS rekord.
4. Nyisd meg a **DNS-szolgáltatód** kezelőfelületét (pl. Cloudflare, GoDaddy).
5. Hozz létre egy új **CNAME rekordot:**
   - **Név / Host:** a beállítandó subdomain (pl. `akademia`)
   - **Érték / Points to:** `domains.egyutter.hu`
   - **TTL:** 3600 (vagy auto)
6. Mentsd el a DNS rekordot.
7. Várj **5–30 percet** a DNS propagációhoz.
8. Térj vissza az egyutter admin felületre, és kattints az **„Ellenőrzés"** gombra.

## Tippek

- A HTTPS tanúsítvány automatikusan generálódik az ellenőrzés után – nem szükséges manuálisan SSL-t beállítani.
- Az eredeti `*.egyutter.hu` cím párhuzamosan aktív marad – a meglévő linkek nem törnnek el.
- Ha a DNS propagáció 30 perc után sem sikeres, ellenőrizd, hogy a CNAME rekord pontosan `domains.egyutter.hu`-ra mutat-e.

## Kapcsolódó cikkek

- [Branding megjelenés](./branding-megjelenes)
- [SEO beállítások](./seo-beallitasok)
