---
title: Stripe beállítása és összekapcsolása
description: A Stripe az egyutter elsődleges fizetési szolgáltatója – az összekapcsolás után fogadhatsz kártyás fizetéseket és kezelheted az előfizetéseket.
sidebar_position: 1
---

## Mi ez?

A Stripe az egyutter elsődleges fizetési szolgáltatója. A Stripe fiókod összekapcsolásával engedélyezed a kártyás fizetéseket és az előfizetés-kezelést a közösségedben. Az összekapcsolás OAuth folyamaton keresztül történik – nem szükséges manuálisan beállítani webhook URL-eket, az egyutter automatikusan konfigurálja azokat.

## Előfeltételek

> ⚠️ Mielőtt elkezded:
> - Aktív Stripe fiók szükséges ([stripe.com](https://stripe.com)).
> - A Stripe fióknak **live mode**-ban kell aktiválva lennie (nem elegendő a teszt mód az éles fizetésekhez).

## Lépésről lépésre

1. Lépj az **Admin → Fizetési beállítások → Stripe** oldalra.
2. Kattints a **„Stripe összekapcsolása"** gombra.
3. A megnyíló Stripe ablakban **jelentkezz be** a Stripe fiókodba (vagy hozz létre egyet).
4. **Engedélyezd** az egyutter hozzáférését a fiókodhoz.
5. Visszakerülsz az admin felületre – a Stripe státusz „Összekapcsolva" jelzést mutat.

## Tippek

- Teszt fizetések előtt kapcsold be a **Test mode**-ot a Stripe dashboardján (Developers → Test mode). Teszt módban a valódi kártyaszám helyett a Stripe teszt kártyáit használd (pl. `4242 4242 4242 4242`).
- A webhook automatikusan beállítódik az összekapcsolás során – nem kell manuálisan konfigurálni.
- Ha több közösséged van, minden közösséget külön Stripe fiókhoz kell kapcsolni, vagy ugyanazon Stripe fiókon belül különböző termékekként kezelheted őket.

## Kapcsolódó cikkek

- [Előfizetési csomagok létrehozása](./elofizetesi-csomagok)
- [Paywall konfigurálása](./paywall)
