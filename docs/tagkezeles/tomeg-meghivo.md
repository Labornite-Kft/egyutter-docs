---
title: Tömeges meghívás – CSV feltöltés
description: Egyszerre több száz tagot hívhatsz meg CSV fájl feltöltésével – minden meghívott egyéni e-mailt kap.
sidebar_position: 4
---

## Mi ez?

A tömeges meghívással egyszerre több száz tagot hívhatsz meg CSV fájl feltöltésével. Minden meghívott személyre szóló e-mailt kap, amelyen keresztül regisztrálhat. Ez akkor hasznos, ha egy meglévő listádat (pl. hírlevél-feliratkozók, korábbi ügyfelek) szeretnéd átvinni az egyutterre.

## Előfeltételek

> ⚠️ Mielőtt elkezded:
> - Admin jogosultság szükséges a tömeges meghíváshoz.

## A CSV fájl formátuma

A fájlnak `email,name` fejléccel kell kezdődnie. A `name` mező opcionális – ha nincs, csak az e-mail cím is elegendő.

```
email,name
kovacs.anna@example.com,Kovács Anna
nagy.peter@example.com,Nagy Péter
info@pelda.hu,
```

## Lépésről lépésre

1. Lépj az **Admin → Tagok** oldalra.
2. Kattints a **„Tömeges meghívás"** gombra.
3. Töltsd fel a CSV fájlt.
4. Ellenőrizd az **előnézetet** – a rendszer megjelöli az érvényes és hibás sorokat (pl. érvénytelen e-mail formátum).
5. Kattints a **„Meghívók küldése"** gombra.

## Tippek

- Egyszerre maximum **500 sor** dolgozható fel – nagyobb listát darabolj fel több feltöltésre.
- Már csatlakozott tagok e-mail-jei automatikusan kiszűrődnek, nem kapnak duplikált meghívót.
- Ha a meghívó nem érkezett meg, az Admin → Tagok → Meghívók listán újra elküldheted.

## Kapcsolódó cikkek

- [Tagok meghívása e-maillel](../elso-lepesek/tagok-meghivasa)
- [Meghívó linkek](../elso-lepesek/meghivo-linkek)
