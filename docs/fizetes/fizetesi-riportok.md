---
title: Fizetési riportok és tranzakciók
description: Bevételek áttekintése, aktív előfizetők és lemondások nyomon követése.
---

## Mi ez?

A fizetési riportok áttekintést adnak a közösséged bevételeiről – láthatod az aktív előfizetők számát, a havi bevételt, a sikeres és sikertelen tranzakciókat, valamint a lemondásokat. A riportok valós időben frissülnek a Stripe adatai alapján.

## Lépésről lépésre

### Bevételek áttekintése

1. Nyisd meg az **Admin panelt**.
2. Kattints a **Fizetés** menüpontra, majd válaszd a **Riportok** fület.
3. Az összefoglaló kártyákon látod:
   - **MRR** (havi ismétlődő bevétel)
   - **Aktív előfizetők száma**
   - **Lemondások az elmúlt 30 napban**
   - **Összes bevétel**
4. Az időszakot a dátumszűrővel módosíthatod (pl. elmúlt 7 nap, elmúlt 30 nap, egyéni időszak).

### Tranzakciók listája

1. A **Riportok** oldalon lépj a **Tranzakciók** fülre.
2. A táblázatban látod az összes befizetést: tag neve, összeg, dátum, státusz (sikeres / sikertelen / visszatérítve).
3. Kattints bármely tranzakcióra a részletek megtekintéséhez, illetve a Stripe-ban való megnyitásához.

### Előfizetők listája

1. Lépj a **Fizetés → Előfizetők** menüpontra.
2. A táblázatban látod az összes aktív előfizetőt: csomag neve, havi/éves díj, következő megújítás dátuma.
3. Szűrhetsz csomag szerint, vagy rákereshetsz névre / e-mail-címre.
4. Egy előfizetőre kattintva megtekintheted az előfizetési történetét, és szükség esetén manuálisan lemondhatod vagy módosíthatod az előfizetését.

### Lemondások

1. Lépj a **Fizetés → Riportok → Lemondások** fülre.
2. Látod a lemondott előfizetéseket: ki mondta le, mikor, melyik csomagot.
3. Ha a tag maga mondott le, az ok (ha megadta) szintén megjelenik itt.

## Tippek

- A riportok adatai a Stripe-ból szinkronizálódnak – ha eltérést látsz, frissítsd az oldalt vagy várj néhány percet.
- Az MRR számítás az aktív, megújuló előfizetéseket veszi figyelembe – a lemondott, de még lejáratig aktív előfizetések nem szerepelnek benne.
- A CSV-exporthoz kattints az **Exportálás** gombra a tranzakciók listájánál – ezt könyvelési célokra is felhasználhatod.
- Részletes pénzügyi adatokért (visszatartás, kifizetések) közvetlenül a Stripe dashboardot érdemes használni.

## Kapcsolódó cikkek

- [Stripe beállítása](./stripe-beallitas)
- [Előfizetési csomagok](./elofizetesi-csomagok)
- [Billingo számlázás](./billingo-szamlazas)
