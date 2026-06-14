---
title: Planning workflow
description: Hoe dit project rolling window cycli gebruikt om documentatie te plannen en te verschepen.
---

Dit project gebruikt een Shape Up-geïnspireerde planning: vaste tijdvensters, variabele scope. Geen oneindige backlog. Je kiest wat je aanpakt, je zet een tijdsbudget, en je rondt de cyclus af — wat er niet in past, gaat terug naar de backlog.

## Waarom rolling windows

Traditionele backlogs groeien altijd. Rolling windows dwingen een keuze: wat is het waard om *nu* aan te werken? De cyclus heeft een vaste einddatum. Als iets niet past, wordt de scope ingekort — niet de deadline verlengd.

## De twee bestanden die je open hebt

**Cycle file** (`planning/cycles/YYYY-MM-cycle-NN.md`) — wat doe ik dit venster?
- Welke topics zijn gekozen
- Appetite per topic (tijdsbudget)
- Discoveries log: wat opkwam tijdens werk maar buiten scope valt

**Topic file** (`planning/topics/<slug>.md`) — wat is dit onderwerp?
- Probleemomschrijving, gewenste uitkomst, scope
- Work log: korte aantekeningen tijdens het werken
- Reist mee als een topic meerdere cycli beslaat

## Een cyclus starten

1. Kies 1–3 topics uit `planning/roadmap.md` (status `idea` of `brief`)
2. Maak topic bestanden aan voor items zonder `planning/topics/` bestand
3. Maak een nieuwe cycle file aan in `planning/cycles/`
4. Stel per topic een **appetite** in: hoeveel tijd is dit waard? Niet een schatting, een budget.
5. Voeg een rij toe in `planning/cycles/README.md`

## Aan een topic werken

Werk vanuit de topic file. Noteer beslissingen, blokkades en richting-wijzigingen kort in het **Work log**. Één of twee zinnen per sessie is genoeg — het is geen journaal.

Als je iets ontdekt dat buiten de huidige scope valt: log het in de discoveries tabel van de cycle file. Ga er niet op in totdat de cyclus is afgesloten.

## Ontdekkingen vastleggen

Tijdens werk komen altijd nieuwe dingen bovendrijven. De regel is simpel:

> Eén rij in de discoveries tabel van de cycle file. Datum, wat je vond, waar het naartoe gaat.

Je handelt er niet op mid-cyclus. Bij het afsluiten van de cyclus besluit je: nieuwe topic file aanmaken, toevoegen aan `roadmap.md`, of weggooien.

## Een cyclus afsluiten

1. Triage de discoveries log: maak topic bestanden aan of voeg items toe aan `roadmap.md`
2. Update de `roadmap-status` in elk topic bestand dat is verscheept
3. Update `roadmap.md` voor verscheepte items naar `draft` of `published`
4. Schrijf een korte "Cycle notes" in de cycle file
5. Zet `status: complete` in de cycle frontmatter
6. Update de rij in `planning/cycles/README.md`

## Statusvocabulaire

| Status | Betekenis |
|---|---|
| `idea` | Geïdentificeerd, nog niet begonnen |
| `brief` | `planning/topics/` bestand bestaat |
| `draft` | `src/content/docs/` bestand met `draft: true` |
| `published` | Live op de site |

## Appetite vs. schatting

Een **appetite** is een constraint, geen voorspelling. "Dit is 3 dagen waard" betekent: als het na 3 dagen niet klaar is, korten we de scope in. We verlengen de cyclus niet.

Een **schatting** is een poging om de toekomst te voorspellen. Estimaties lopen altijd uit. Appetites niet — omdat je op tijd stopt.
