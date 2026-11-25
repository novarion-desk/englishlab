# EnglishLab 1.0

Englisch-Grammatik üben und nachlesen (Teaching Cockpit). Eigenständige App, unabhängig vom Tense Trainer.

- 36 Themen in 6 Gruppen (Zeiten, Verben & Satzbau, Indirekte Rede, Nomen, Adjektive, Präpositionen); Ansicht «Themen» oder «Units» (`topics/zzzzz_units.js`)
- Übungen mit Niveau A/B/C, Regeln (📘), Arbeitsblatt mit Lösungen, Feedback, DE/EN
- Lehrerbereich: Lehrer-Login (Firebase, gleiches Projekt wie Grammatik Trainer), Folien mit Präsentationsmodus (DE/EN, Übungsfolien, Hinweise). Ohne Anmeldung nur mit `?demo`.
- Pro Thema die Buttons Theorie / Üben (/ Folien für Lehrpersonen)
- Suche (Themen, Regeln, Beispielsätze, Folien) und Wörterbuch (über 3'000 Einträge in `js/dict.js`, gebaut aus `tools/dict/*.txt` mit `python3 tools/build_dict.py`; Glossar `js/glossary.js`; Links zu dict.cc / Linguee)
- KI-Suche nur für die Lehrperson: API-Schlüssel wird in der Suche gespeichert (nur lokal im Browser). Für Schüler später `AI_PROXY` in `js/search.js` auf einen Server-Zwischenschritt setzen.
- Zeiten-Themen haben Regeln und Folien; geübt wird im Tense Trainer.

- **KI-Erklärung (23.11.):** Knopf «💡 Frag Marty» nach einer beantworteten Üben-Aufgabe, für alle sichtbar (`…/englishlab/#ki-aus` schaltet ihn auf dem Gerät ab, `#ki-test` wieder ein). Bei freien Sätzen nach falscher Antwort «Ist mein Satz auch richtig?». Anfrage an den Cloudflare-Worker `tc-ki-proxy` (Mistral, Key nur dort), Tageslimit pro Gerät. Nicht im Testmodus (Prüfung). Hat nichts mit der KI-Suche der Lehrperson zu tun.
- **Vokabeln · Sätze übersetzen (2.17):** Übungsart DE → EN mit Sätzen pro Lesson aus `js/sentences.js` (`[Jahr, Unit, Lesson, Deutsch, Englisch, «Alt|Alt»]`). Seit 2.18 für alle Units von Year 2 und Year 3 (655 Sätze). Neue Sätze: Zeilen in `js/sentences.js` ergänzen.

## Struktur
- `index.html`, `js/core.js`, `js/ui.js`, `topics/*.js` (ein Thema pro Datei), `vendor/` (Firebase)
- Script-Tags für Themen: `python3 tools/topics_tags.py`

## Neues Thema
Neue Datei in `topics/` mit `bankTopic({...})` oder `tenseTopic({...})`, danach `tools/topics_tags.py` ausführen.
