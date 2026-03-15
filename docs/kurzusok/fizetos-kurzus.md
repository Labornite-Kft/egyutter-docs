---
title: Fizetős kurzus beállítása
description: Hogyan rendeld hozzá a paywallet egy kurzushoz, és tedd fizetőssé a hozzáférést.
---

## Mi ez?

A fizetős kurzus funkció lehetővé teszi, hogy egy kurzushoz paywallt rendelj – így csak azok a tagok férhetnek hozzá, akik megvásárolták az adott csomagot, vagy egyszeri díjat fizettek. A fizetést a Stripe kezeli, ezért a Stripe összekötése előfeltétel.

**Előfeltétel:** A Stripe fiókod össze kell legyen kötve az egyutterrel. Ha ez még nem történt meg, először olvasd el a [Stripe beállítása](../fizetes/stripe-beallitas) cikket.

## Lépésről lépésre

1. Nyisd meg az **Admin panelt**, majd kattints a **Kurzusok** menüpontra.
2. Válaszd ki a kívánt kurzust, majd kattints a **Szerkesztés** gombra.
3. A kurzusszerkesztőben lépj a **Hozzáférés** fülre.
4. A **Hozzáférés típusa** legördülőből válaszd a **Fizetős** opciót.
5. Válaszd ki, melyik **paywall** vagy **előfizetési csomag** nyit hozzáférést ehhez a kurzushoz.
   - Ha még nincs paywallod, hozz létre egyet az **Admin → Fizetés → Paywallok** menüben.
6. Opcionálisan beállíthatsz **egyszeri vásárlási árat** is, ha nem előfizetéses modellt szeretnél.
7. Mentsd el a változtatásokat a **Mentés** gombbal.
8. Ellenőrizd a kurzus nyilvános oldalát – a nem jogosult tagoknak a paywall-üzenetnek kell megjelennie.

## Tippek

- Egy kurzushoz több paywallet is hozzárendelhetsz – pl. ha több különböző csomag is tartalmazza.
- Ha ingyen szeretnél hozzáférést adni egyes tagoknak, az **Admin → Tagok → [Tag neve] → Kurzus-hozzáférés** alatt manuálisan is megadhatod.
- A kurzus árat Stripe-ban kezeld – az egyutter a Stripe termékazonosítón keresztül kapcsolja össze a fizetést a hozzáféréssel.
- Teszteld a vásárlási folyamatot Stripe tesztkártyával mielőtt élesbe viszed.

## Kapcsolódó cikkek

- [Stripe beállítása](../fizetes/stripe-beallitas)
- [Paywall beállítása](../fizetes/paywall)
- [Előfizetési csomagok](../fizetes/elofizetesi-csomagok)
- [Kurzus létrehozása](./kurzus-letrehozasa)
