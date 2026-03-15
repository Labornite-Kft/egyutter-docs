---
title: E-mail sablonok testreszabása
description: A meghívó, üdvözlő és emlékeztető e-mailek szövegének szerkesztése az admin felületen.
---

## Mi ez?

Az egyutter több automatikus e-mailt küld a tagoknak: meghívót, regisztrációs megerősítést, üdvözlő üzenetet csatlakozás után, valamint esemény- és értesítési emlékeztetőket. Ezek szövegét az admin felületen testre szabhatod, hogy a kommunikáció illeszkedjen a közösséged hangjához és brandjéhez.

## Lépésről lépésre

1. Lépj be az admin felületre.
2. A bal oldali menüben kattints az **E-mail sablonok** menüpontra.
3. A sablonlista megmutatja az összes elérhető sablon típusát (pl. *Meghívó*, *Üdvözlő*, *Esemény emlékeztető*, *Jelszó visszaállítás*).
4. Kattints a szerkeszteni kívánt sablon nevére.
5. A szerkesztőben módosítsd:
   - **Tárgy** – az e-mail tárgysora; használhatsz változókat, pl. `{{community_name}}`
   - **Fejléc szöveg** – rövid, figyelemfelkeltő sor a logó alatt
   - **Törzs szöveg** – a fő üzenet; formázhatod a beépített szövegszerkesztővel
   - **Gomb felirata** – az elsődleges cselekvési gomb szövege (pl. „Csatlakozás", „Megerősítés")
   - **Lábléc** – pl. leiratkozási megjegyzés, cégadatok
6. A **Változók** panelből húzd be a kívánt dinamikus mezőket (pl. `{{member_name}}`, `{{community_url}}`).
7. Kattints az **Előnézet** gombra, hogy megnézd, hogyan fog kinézni a tényleges e-mail.
8. Ha elégedett vagy, kattints a **Mentés** gombra.

## Tippek

- A tárgysor legyen tömör – 40-60 karakter az ideális, hogy mobilon is teljes egészében látható legyen.
- Mindig teszteld a sablont éles küldés előtt: a **Teszt e-mail küldése** gombbal a saját e-mail-címedre küldhetsz próbát.
- Ne töröld a kötelező változókat (pl. `{{confirmation_url}}` a megerősítő e-mailből) – ezek nélkül a folyamat megtörik.
- Ha a közösséged magyarul kommunikál, győződj meg arról, hogy a lábléc is tartalmaz leiratkozási lehetőséget (GDPR-kötelezettség).

## Kapcsolódó cikkek

- [Onboarding flow](../elso-lepesek/onboarding-flow)
- [Tagok meghívása](../elso-lepesek/tagok-meghivasa)
- [Értesítések](../ertesitesek/)
