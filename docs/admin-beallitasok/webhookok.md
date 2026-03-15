---
title: Webhookok konfigurálása
description: Eseményalapú HTTP POST küldése külső rendszereknek az egyutter admin felületéről.
---

## Mi ez?

A webhook egy automatikus HTTP POST kérés, amelyet az egyutter küld egy általad megadott URL-re, amikor egy adott esemény bekövetkezik a közösségben – például új tag csatlakozik, új poszt jelenik meg, vagy valaki beiratkozik egy kurzusra. Webhookokkal az egyuttert összekapcsolhatod külső rendszerekkel: CRM-mel, e-mail marketing eszközzel, Zapierrel, n8n-nel vagy saját backenddel.

## Lépésről lépésre

1. Lépj be az admin felületre.
2. A bal oldali menüben kattints a **Webhookok** menüpontra.
3. Kattints az **+ Új webhook** gombra.
4. Töltsd ki a mezőket:
   - **Név** – belső azonosító, csak az admin látja (pl. „CRM szinkron – új tag")
   - **Célpont URL** – a külső rendszer végpontja, amely fogadja a POST kérést (pl. `https://hook.eu1.make.com/abc123`)
   - **Események** – jelöld ki, mely eseményekre fusson a webhook:
     - `member.joined` – új tag csatlakozott
     - `member.left` – tag kilépett vagy törölték
     - `post.created` – új poszt jelent meg
     - `post.deleted` – poszt törölve
     - `course.enrolled` – valaki beiratkozott egy kurzusra
     - `event.registered` – valaki regisztrált egy eseményre
5. Opcionálisan adj meg egy **titkos kulcsot (secret)** – az egyutter ezt a kulcsot belefoglalja a kérés fejlécébe (`X-Egyutter-Signature`), amellyel a fogadó oldal hitelességet ellenőrizhet.
6. Kattints a **Mentés** gombra.
7. A webhook listában megjelenik az új sor. A **Teszt** gombbal azonnal küldhetsz egy próbakérést.

## Tippek

- Mindig ellenőrizd a webhook fogadó oldalon a beérkező payload struktúráját – ha változik az esemény sémája, frissíteni kell az integrációt.
- Ha a célpont URL nem válaszol 5 másodpercen belül, az egyutter az adott kísérletkört kudarcként jelöli meg; tervezz be újrapróbálkozási logikát a fogadó oldalon.
- Zapier vagy n8n esetén a „Webhook trigger" blokkban generált URL-t illeszd be célpont URL-ként.
- Több webhookot is létrehozhatsz – például egy külön webhookot a CRM-hez és egy másikat a Slackba küldött értesítéshez.

## Kapcsolódó cikkek

- [Aktivitási naplók](./aktivitasi-naplok)
- [Integrációk](../integraciok/)
- [Admin beállítások áttekintés](./)
