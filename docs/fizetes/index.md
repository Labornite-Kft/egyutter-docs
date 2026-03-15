---
title: Fizetés & számlázás
description: Stripe-alapú fizetési rendszer, előfizetési csomagok és paywall az egyutteren.
---

## Mi ez?

Az egyutter beépített fizetési rendszere Stripe-on alapul. Kezelhetsz havi és éves előfizetési csomagokat, egyszeri vásárlásokat, valamint paywallokat – amelyek meghatározzák, hogy az egyes tartalmakhoz (kurzusok, terek, bejegyzések) ki férhet hozzá.

A fizetési rendszer főbb elemei:

- **Stripe összekötés** – a pénzmozgás alapja, az egyutter a te Stripe fiókodhoz kapcsolódik.
- **Előfizetési csomagok** – havi vagy éves díjas tagság, különböző jogosultságokkal.
- **Paywall** – tartalmakhoz rendelt fizetési kapu, amely meghatározza, melyik csomag ad hozzáférést.
- **Billingo integráció** – automatikus számlakiállítás magyar vevőknek.
- **Riportok** – bevételek, lemondások, aktív előfizetők áttekintése.

## Cikkek ebben a szekcióban

- [Stripe beállítása](./stripe-beallitas)
- [Előfizetési csomagok](./elofizetesi-csomagok)
- [Paywall beállítása](./paywall)
- [Billingo számlázás](./billingo-szamlazas)
- [Fizetési riportok](./fizetesi-riportok)

## Tippek

- Mindig Stripe tesztkártyával ellenőrizd a vásárlási folyamatot élesítés előtt.
- A paywallokat és csomagokat bármikor módosíthatod – a meglévő előfizetők a következő megújításig a régi csomagon maradnak, hacsak explicit nem migrálod őket.
- Magyar vevőknél a Billingo integráció automatikusan kiállítja a számlát – ehhez csak az API kulcsot kell megadni.

## Kapcsolódó cikkek

- [Fizetős kurzus beállítása](../kurzusok/fizetos-kurzus)
- [Integrációk áttekintő](../integraciok/index)
