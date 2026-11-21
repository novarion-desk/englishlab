# EnglishLab 0.3

Englisch-Grammatik üben und nachlesen (Teaching Cockpit). Eigenständige App, unabhängig vom Tense Trainer.

- 21 Themen in 5 Gruppen (Zeiten, Verben, Nomen, Adjektive, Präpositionen)
- Übungen mit Niveau A/B/C, Regeln (📘), Arbeitsblatt mit Lösungen, Feedback, DE/EN
- Lehrerbereich: Lehrer-Login (Firebase, gleiches Projekt wie Grammatik Trainer), Folien mit Präsentationsmodus (DE/EN, Übungsfolien, Hinweise). Ohne Anmeldung nur mit `?demo`.
- Zeiten-Themen haben Regeln und Folien; geübt wird im Tense Trainer.

## Struktur
- `index.html`, `js/core.js`, `js/ui.js`, `topics/*.js` (ein Thema pro Datei), `vendor/` (Firebase)
- Script-Tags für Themen: `python3 tools/topics_tags.py`

## Neues Thema
Neue Datei in `topics/` mit `bankTopic({...})` oder `tenseTopic({...})`, danach `tools/topics_tags.py` ausführen.
