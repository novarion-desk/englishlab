# EnglishLab 0.4

Englisch-Grammatik üben und nachlesen (Teaching Cockpit). Eigenständige App, unabhängig vom Tense Trainer.

- 21 Themen in 5 Gruppen (Zeiten, Verben, Nomen, Adjektive, Präpositionen)
- Übungen mit Niveau A/B/C, Regeln (📘), Arbeitsblatt mit Lösungen, Feedback, DE/EN
- Lehrerbereich: Lehrer-Login (Firebase, gleiches Projekt wie Grammatik Trainer), Folien mit Präsentationsmodus (DE/EN, Übungsfolien, Hinweise). Ohne Anmeldung nur mit `?demo`.
- Pro Thema die Buttons Theorie / Üben (/ Folien für Lehrpersonen)
- Suche (Themen, Regeln, Beispielsätze, Folien) und Wörterbuch (Glossar `js/glossary.js` + Links zu dict.cc / Linguee)
- KI-Suche nur für die Lehrperson: API-Schlüssel wird in der Suche gespeichert (nur lokal im Browser). Für Schüler später `AI_PROXY` in `js/search.js` auf einen Server-Zwischenschritt setzen.
- Zeiten-Themen haben Regeln und Folien; geübt wird im Tense Trainer.

## Struktur
- `index.html`, `js/core.js`, `js/ui.js`, `topics/*.js` (ein Thema pro Datei), `vendor/` (Firebase)
- Script-Tags für Themen: `python3 tools/topics_tags.py`

## Neues Thema
Neue Datei in `topics/` mit `bankTopic({...})` oder `tenseTopic({...})`, danach `tools/topics_tags.py` ausführen.
