---
title: API kulcsok kezelése
description: Hogyan generálj, ments el és kezelj API kulcsokat az egyutter platformon – külső eszközök és automatizálás számára.
---

## Mi ez?

Az API kulcs egy egyedi, titkos azonosító, amellyel külső alkalmazások hozzáférhetnek az egyutter platformodhoz a te nevedben. Jellemzően fejlesztők használják egyedi integrációk építéséhez, de automatizálási eszközök – például Zapier vagy Make – szintén igényelhetnek API kulcsot, ha az egyutter adataival szeretnél dolgozni.

Fontos megérteni: az API kulcs olyan, mint egy jelszó. Aki ismeri, az a te jogosultságaiddal fér hozzá a fiókodhoz – ezért szigorúan bizalmasan kell kezelni.

## Lépésről lépésre

1. Nyisd meg a `/settings` oldalt – ez a felhasználói beállítások oldala, nem az adminfelület.
2. Görgess le az **API kulcsok** szekcióhoz.
3. Kattints az **Új kulcs generálása** gombra.
4. Add meg a kulcs nevét – például: „Zapier integráció" vagy „Egyedi fejlesztés". A név csak neked segít azonosítani, mire használod.
5. Kattints a **Generálás** gombra.
6. A kulcs **egyszer jelenik meg** – azonnal másold ki és mentsd el biztonságos helyre (pl. jelszókezelőbe). Bezárás után többé nem látható.
7. A mentett kulcsot add át a külső eszköznek vagy fejlesztőnek, aki azt használni fogja.

Ha egy kulcsot többi akarod vonni – például mert kompromittálódott, vagy megszűnt az integráció –, a listában kattints a **Törlés** gombra a kulcs mellett. A törlés azonnal érvényes: az adott kulccsal indított kérések ezután visszautasításra kerülnek.

Új kulcs bármikor generálható, nincs felső korlát.

![API kulcsok kezelése](screenshots/api-kulcsok.png)

## Tippek

- **Soha ne oszd meg nyilvánosan** – ne kerüljön GitHub repóba, publikus dokumentumba vagy képernyőfotóba.
- **Használj névadási konvenciót** – például az eszköz neve + dátum: „Make – 2026-03". Így mindig tudod, melyik kulcsot melyik integráció használja.
- **Rendszeresen rotáld a kulcsokat** – ha régi integrációkat cseréled le, töröld a régi kulcsot is, ne csak adj hozzá újat.
- **Ha kompromittálódott a kulcs**, azonnal töröld és generálj helyette újat – az egyutter nem tud visszamenőleges naplót adni arról, ki és mikor használta.
- Zapiernél és Make-nél a kulcsot általában a kapcsolat létrehozásakor kell megadni – ezt az eszköz „Authentication" vagy „Connection" lépésénél kéri.

## Kapcsolódó cikkek

- [Webhook integráció](./webhook-integracio)
- [Harmadik fél integrációk](./harmadik-fel-integraciok)
