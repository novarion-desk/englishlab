# Changelog

## 2.19
- Vokabeln · Units wählen: Zwei Knöpfe **«Alle»** und **«Keine»**. Die Auswahl darf jetzt leer sein (dann gibt es nichts zu üben, bis man eine Unit antippt).
- Sätze übersetzen: Richtung wählbar, **EN → DE, DE → EN oder beides** (wie bei den Wörtern). Bei EN → DE wird der deutsche Satz geprüft (Gross-/Kleinschreibung, Satzzeichen und ß/ss egal, kleine Tippfehler als «fast richtig»). Weicht die Antwort ab, kann man Marty fragen. Fortschritt wird pro Richtung gespeichert.

## 2.18
- Vokabeln · Sätze übersetzen: Jetzt für **alle Units** von Year 2 (New Inspiration 2, Units 1–8) und Year 3 (New Inspiration 3, Units 1–8). Insgesamt 655 Sätze (Year 3: 349, Year 2: 306), pro Lesson passend zum Wortschatz, dazu die in der jeweiligen Unit bereits bekannten Zeiten. Mehrere akzeptierte Alternativen pro Satz (britisch/amerikanisch, Kurzformen werden automatisch erkannt). Die Welcome-Unit (Year 3) hat keine Sätze.

## 2.17
- Vokabeln: Neue Übungsart **«💬 Sätze übersetzen»** (DE → EN). Die Sätze nutzen den Wortschatz der gewählten Lessons, dazu bekannte Zeiten, Verben und Präpositionen. Bei mehreren Lessons werden die Sätze gemischt. Die Prüfung ignoriert Gross-/Kleinschreibung und Satzzeichen, versteht Kurzformen (I'm / I am, isn't / is not), akzeptiert gespeicherte Alternativen und markiert kleine Tippfehler. Bei Fehlern: Musterlösung, falsche Wörter markiert und «Ist mein Satz auch richtig? (Marty)». Falsche Sätze kommen später wieder. Fortschritt wie bei den Wörtern (Fächer).
- Pilot: Year 3 Unit 1 mit 56 Sätzen (`js/sentences.js`). Weitere Units folgen.
- Verbenliste: Die Spalten standen nicht untereinander (bei «Unregelmässige» zog eine fremde Stil-Klasse die Zeilen zusammen). Jetzt stehen Grundform, Past simple, Past participle und Deutsch sauber in Spalten, auch auf dem Handy.

## 2.16.1
- Präsentation: Die Antwort von «Frag Marty» lässt sich jetzt nach unten scrollen und wird automatisch ins Bild geholt.

## 2.16
- Restliche 12 Themen (Vermutungen, should have, Wahrnehmungsverben, would like / rather, Bindewörter, Besitz, Objektpronomen, some- / any-Wörter, Mengenwörter, Reflexivpronomen, -ed / -ing, Präpositionen): Farbbausteine und Bildkarten

## 2.15
- Gerund und Infinitiv, Fragen und Verneinung, Question Tags, so / neither: Farbbausteine und Bildkarten

## 2.14
- used to, Adverbien, Ratschläge (should / ought to / had better): Farbbausteine und Bildkarten

## 2.13.1
- Indirekte Rede: Zeitenfolge als Farbpfeile statt Tabelle

## 2.13
- Passiv, Vergleichen, if-Sätze (beide), Relativsätze und indirekte Rede (say / tell): einzelne Folien mit Bildkarten, Farbbausteinen und Satzteil-Chips

## 2.12.1
- Antippen-Übung mit «Frag Marty» jetzt in allen Themen (17 weitere: Past perfect, Gerund, Frageanhänge, so / neither, Vermutungen, Ratschläge, should have, sehen und hören, used to, would like, Bindewörter, Besitz, Pronomen, someone / anyone, reflexive Pronomen, Adverbien, -ing / -ed)

## 2.12
- Modalverben: Karten mit Figuren, Ampelfarben bei must / mustn't / don't have to
- Antippen-Übung mit «Frag Marty» auch in Fragen, Vergleichen, Mengen, Präpositionen, Passiv, if-Sätzen (beide), Relativsätzen und den drei Themen zur indirekten Rede

## 2.11
- Alle Themen: Beispielsätze als farbige Karten, Tabellen mit Kopfzeile und Zeilen zum Einblenden, «Typische Fehler» als Fehlerkarten mit Figur («Oops!»)

## 2.10.3
- Present perfect und Zukunft (going to, will, present continuous, shall): Theorie-Folien im neuen Stil. Damit sind alle sieben Zeiten umgestellt

## 2.10.2
- Past simple und Past continuous: Theorie-Folien im neuen Stil (Figuren, Symbole, Regel-Karten, Zeitstrahl-Grafiken für «lange + kurze Handlung», Antippen-Übung)

## 2.10.1
- Present continuous: Theorie-Folien im neuen Stil (Figuren, Farbcode am / is / are, -ing-Regelkarten, Vergleich simple / continuous, Antippen-Übung)

## 2.10
- Present simple: Theorie-Folien im Stil von «Present simple: be» (eigene Figuren und Symbole, Farbcode Grundform blau / -s grün, Regel-Karten für die Schreibung, Verneinung und Fragen mit Bildern, Fehlerkarten, Antippen-Übung mit «Frag Marty»)
- Gemeinsamer Zeichen-Baukasten (topics/aa_art.js, aa_ui.js) für alle weiteren Themen
## 2.9.4
- Handout: «Notizen am Schluss» ist jetzt ein Block von etwa einer halben A4-Seite (12 Linien) direkt nach den Folien statt zwei ganzer Seiten

## 2.9.3
- Präsentation: rechts = nächster Punkt, dann nächste Folie; links = letzter Punkt verschwindet, dann vorherige Folie komplett
- Neue Sprung-Knöpfe ⏮ ⏭ (ganze Folie) neben ‹ › (Schritt)
- Leiste unten gut sichtbar mit grösseren Knöpfen, blendet sich nach 3 Sekunden ab
- Hinweis «Tippen für den nächsten Punkt», bis der erste Punkt aufgedeckt ist

## 2.9.2
- Button «Theorie drucken» steht jetzt ganz oben in der Theorie-Ansicht
- Button heisst nur noch «PDF speichern»
- PDF: Inhalt wird nicht mehr mitten in Aufgaben oder Karten abgeschnitten, mit Rand oben und unten
- Handout: Notizen wählbar (keine, rechts neben jeder Folie, am Schluss auf 2 Seiten); Folien pro Seite 1, 2, 4, 6 (mit Notizen rechts 2, 3, 4)
- Handout-PDF: Bildkarten werden vollständig dargestellt

## 2.9.1
- Theorie- und Testblätter: sauberer Druck ohne Webadresse, Datum und Seitenzahl (Seitenrand im Inhalt, auf jeder Seite wiederholt)
- Neuer Button «PDF speichern (ohne Webadresse)» bei Theorie, Unit-Test und Übungsblatt

## 2.9
- Present simple: be: Figuren mit Händen, Szene «I am Tom» in der Spalte «am», Figuren bei Verneinung und Fehlern, Kinder-Köpfe auf der Ich-Karte
- Theorie-Ansicht und Handy-Breite: nichts ragt mehr rechts über
- Handout: Folien pro A4 wählbar (1, 2, 4, 6 oder 3 mit Notizzeilen)
- Handout: sauberer Druck ohne Webadresse (Seitenrand im Inhalt) und Button «PDF speichern»

## 2.8
- Present simple: be komplett neu gestaltet: Farbcode (am blau, is grün, are orange), gezeichnete Figuren und Szenen, Bildkarten, Antippen-Übung mit «Frag Marty», Ich-Karte
- Präsentationsmodus: Zeilen erscheinen nacheinander
- Inhalt: Vergleich «Ich habe Hunger» korrigiert (Alter ist im Deutschen auch «sein»), Beschreibung (He is tall) und Wh-Frage ergänzt
- Verben-Liste: Spalten stehen wieder unter ihren Überschriften (CSS-Namenskonflikt behoben)

## 2.7
- Neu: Zeichnungen bei Präpositionen (Ort und Richtung) und Vergleichsformen
- Linking words: Folie «who and which» entfernt, «although» nur noch auf der Folie «Gegensatz»
- Gerund & infinitive: Zeile mit Modalverben aus der Tabelle «Verb + to» entfernt
- Comparatives: neue Folie «Zwei Silben»
- Thema «If-Sätze» heisst jetzt «first conditional»; Folie «Open conditional» für Gegenwart + Gegenwart
- Prepositions of direction: up, down, past, round ergänzt
- Indefinite pronouns und Quantifiers: zwei missverständliche Fehlerbeispiele ersetzt
- Niveau: «B (mittel)» überall angezeigt, auch in der Mini-Übung
- Neu: Themen-Emoji auf jeder Einstiegsfolie und ein passendes Emoji bei vielen Beispielsätzen
- Neu: Zeichnungen bei Reported speech, Conditionals, Countable / uncountable, Quantifiers, Passive und Modal verbs
- Einige Übungs- und Beispielsätze durch eigene ersetzt

## 2.6
- Neu: «Frag Marty» gibt es jetzt auch in der Mini-Übung auf der Theorie-Seite und in der Live-Folie, auch nach einer richtigen Antwort
- Present simple: Folien «Adverbs of frequency» und «How often?» entfernt
- Beispielname in «Present simple: be» neutral («I am Tom.»)
- «Wishes and preferences»: Einstiegsfolie ergänzt; «Object pronouns»: Folientitel «to or for?» zweisprachig

## 2.5
- Neu: Beim Unit-Test und bei der Testvorbereitung kannst du wählen, wann du die Lösung siehst: «Erst am Ende» (wie in einer echten Prüfung) oder «Nach jeder Aufgabe» (richtig oder falsch mit Erklärung und «Frag Marty»). Die Punkte und die Auswertung am Ende bleiben gleich
- Aufgaben mit mehreren richtigen Antworten verbessert («by the end of the week», «excited about», «She didn't tell anyone», «He wouldn't like»)

## 2.4
- Der KI-Knopf heisst jetzt überall «Frag Marty» / «Ask Marty». Bei einer falschen freien Antwort steht «Frag Marty: Ist mein Satz auch richtig?»

## 2.3
- Neu: Auf dem iPad (App vom Home-Bildschirm) erstellt «Drucken / PDF» jetzt eine PDF-Datei und öffnet das Teilen-Menü (Drucken, In Dateien sichern, AirDrop …). Vorher passierte dort nichts. Das gilt für Unit-Test, Arbeitsblatt, Theorie, Folien-Handout und Vokabelblätter. Auf Computer und im normalen Browser druckt es wie bisher. Die PDF-Bausteine (jsPDF, html2canvas) werden erst bei Bedarf geladen.

## 2.2
- Fix: Der «Drucken / PDF»-Knopf im neuen Druckfenster (iPad, Home-Bildschirm-App) war wegen eines Namenskonflikts im Stil unsichtbar. Jetzt gut sichtbar.

## 2.1
- Niveau A ist jetzt die Voreinstellung (vorher B)

## 2.0
- Fix: «Drucken / PDF» tat auf dem iPad nichts, wenn die App vom Home-Bildschirm geöffnet war (dort ist der Druckbefehl des Browsers blockiert). Jetzt öffnet sich in diesem Fall das Blatt in einem eigenen Fenster mit «Drucken»-Knopf und Hinweis (Teilen → Drucken / als PDF sichern). Gilt für Unit-Test, Arbeitsblatt, Theorie, Folien-Handout und Vokabelblätter.

## 1.9
- Englisch ist jetzt überall die Standardsprache (einmalig auch auf Geräten, die bisher Deutsch hatten; danach gilt die eigene Wahl)
- Fix: Beim Wechsel DE ⇄ EN wurden bei vielen Themen die Übungsarten («Einsetzen», «Auswählen» …) nicht mit übersetzt. Auch die Beschreibung beim Tense Trainer ist jetzt zweisprachig.
- Fix: Logo oben heisst «EnglishLab» (zusammen geschrieben, vorher mit Lücke)

## 1.8
- Neu: «💡 Frag Marty» nach einer Übungsaufgabe, für alle sichtbar (`#ki-aus` im Link schaltet ihn auf dem Gerät ab)

## 1.7
- Neu: Am Ende einer Runde gibt es «🔁 Nur die Fehler nochmals üben», damit falsch gelöste Aufgaben gezielt wiederholt werden

## 1.6
- Neu: Thema «Verbindungswörter» erweitert um Gegensatz (but, while, whereas, although, despite / in spite of), Zusatz (also, too, as well, either, besides, moreover), Folge (therefore, as a result, so), Zweck (to / in order to, so that) und Zeit (while, until, after, once, as soon as). 25 neue Übungssätze (Niveau A/B/C), 4 neue Folien, neue Fehler-Aufgaben, neue Unterthemen
- Neu: Handout für Folien (Lehrerbereich, Folien-Ansicht, Knopf «Handout»): 6 Folien pro A4 zum Drucken oder als PDF

## 1.5
- Neu: Eigene Lernliste. Im Wörterbuch (und bei Treffern aus den Units) merkt man ein Wort mit ☆. Im Vokabeltrainer gibt es neben «Jahr 1/2» und «Jahr 3» die Auswahl «Meine Liste»: alle Übungsarten, Richtung und Lernstand (Leitner) funktionieren wie sonst. Wörter lassen sich mit ✕ wieder entfernen. Gespeichert nur auf dem Gerät

## 1.4
- Neu: Testvorbereitung (Karte auf der Startseite). Schüler wählen Themen aus allen Units, Niveau und Anzahl Aufgaben (10, 20, 30 oder eigene Zahl), optional mit Stoppuhr. Punkte pro Aufgabe: Einsetzen und Auswählen 1, Satz ordnen und Umformen 2
- Neu: Auswertung zeigt «x von y Punkten» pro Thema, «Nur die falschen nochmals üben» und «Neuer Test nur mit den schwachen Themen»
- Neu: Übungsprüfung zum Drucken mit Name / Datum / Punkten pro Aufgabe und Lösungsblatt
- Geändert: Der Unit-Test zeigt Punkte statt Anzahl

## 1.3
- Neu: Unit-Test am Bildschirm («Test am Bildschirm lösen»). Schüler stellen sich selbst einen Test zusammen (Unit, Themen, Niveau, Aufgaben pro Thema), lösen ihn ohne Rückmeldung während des Tests und erhalten am Ende die Punktzahl, eine Übersicht pro Thema (sitzt / fast / üben), Links zu Theorie und Üben für die schwachen Themen, die Liste der Fehler mit richtiger Antwort und «Neuer Test nur mit den schwachen Themen»
- Neu: Das letzte Testergebnis pro Thema (in Prozent) steht beim nächsten Mal bei den Themen. Gespeichert nur auf dem Gerät

## 1.2
- Neu: Theorie drucken (A4, sauberes Layout, Notizzeilen) – Knopf «Theorie drucken» in der Theorie jedes Themas
- Neu: Unit-Test (nur Grammatik): in der Units-Ansicht bei jeder Unit «Unit-Test». Themen, Niveau und Aufgaben pro Thema wählbar, Arbeitsblatt mit Name / Datum / Punkte und Lösungsblatt, neu mischbar
- Neu: Vokabeln drucken: Wortliste (nach Unit und Lesson), Vokabeltest EN→DE oder DE→EN mit Lösungsblatt, Karteikarten zum Ausschneiden
- Neu: Thema «Wünsche und Vorlieben» (want to, would like to, would rather, prefer) – NI2 Unit 7
- Neu: Folie «Zeitangaben im Past simple» (yesterday, ago, in, on, at) – NI2 Unit 3
- Geändert: Units-Zuordnung nach NI2-Inhaltsverzeichnis ergänzt (Unit 3: Verbindungswörter; Unit 5: Zukunft; Unit 6 und 8: Verbindungswörter; Unit 7: Relativpronomen, would like / would rather)

## 1.1
- Geändert: «Stufe» heisst jetzt «Unit». In der Units-Ansicht zwei Knöpfe «Jahr 1/2» und «Jahr 3» (Auswahl wird gemerkt), Überschriften «Unit 1» usw.
- Neu: Unterthemen bei allen Zeitformen (z. B. Zukunft: will, going to, present continuous, shall, if / when; Present perfect: ever / never, for / since, just / already / yet, been / gone, vs. Past simple; Past simple: regelmässig, unregelmässig, Verneinung, Fragen). Wählbar in Üben und in der Live-Übung der Folien. Antippen = nur dieses Unterthema, «Alle» = alles.
- Neu: Anzahl Aufgaben 5 · 10 · 20 · ∞ oder eine eigene Zahl eintippen
- Neu: rund 100 zusätzliche Übungssätze für diese Unterthemen
- Neu: shall für Angebote (Folie und Übungen), Häufigkeitsausdrücke (once a week …)
- Erweitert nach NI3 Language File: Gerund und Infinitiv (can't help, risk, feel like, keen on, fed up with, succeed in; Verbliste mit to; 16 Adjektive + to), Wahrnehmungsverben wie im Lehrmittel (Hauptregel mit -ing, Grundform nur als Zusatz auf Niveau A; can / could + Wahrnehmung), Indirekte Rede (was going to, had to, wanted to know if), Past perfect mit since

- Neu: Vokabeltrainer (Knopf «Vokabeln» oben und auf der Startseite). 2059 Wörter, aufgeteilt nach Jahr 1/2 und Jahr 3 und nach Units (Lesson-Auswahl, wenn eine Unit gewählt ist). Richtung EN→DE, DE→EN oder beides. Übungsarten: Karteikarten, Auswählen, Eintippen, Lückensatz, Hören, Paare, Mix. Anzahl 5 · 10 · 20 · ∞ oder eigene Zahl. Spaced Repetition (5 Fächer: sofort, 1, 3, 7, 21 Tage), Fortschritt nur auf dem Gerät gespeichert.

## 1.0
- Neu: Umschalter «Themen | Units» auf der Hauptseite. Units-Ansicht: Stufe 2 (Welcome bis Unit 8), danach Stufe 3, mit festen Kopfzeilen und Sprungleiste. Themen erscheinen in der Reihenfolge der Units, auch mehrfach
- Neu: Sprungleiste mit den Gruppen in der Themen-Ansicht; Stufen-Tag auf den Karten
- Neu: 14 neue Themen: Passiv, so / nor + Hilfsverb, Vermutungen (must, can't, might), Reflexivpronomen, had better / ought to, Verben der Wahrnehmung, Past perfect, used to, Indirekte Rede (Aussagen, Aufforderungen, Fragen), should have, Second conditional, Verbindungswörter
- Erweitert: Gerund & Infinitiv um Adjektiv + to und Verb + Person + to
- Neu: Gruppe «Indirekte Rede»
- Neu: Wörterbuch mit über 3'000 Einträgen (Englisch und Deutsch), wird erst beim ersten Öffnen geladen
- Neu: Einstiegsfolie «Worum geht's?» für alle neuen Themen

## 0.9
- Neu: Feste Kopfzeile (auch auf dem Handy, kompakt mit Symbolen)
- Neu: Verben-Knopf mit Verbenliste (unregelmässig und häufige regelmässige Verben, alle Formen beim Antippen)
- Neu: Wörterbuch-Knopf in der Kopfzeile (öffnet Suche mit Wörterbuch)
- Neu: Einstiegsfolie «Worum geht's?» in der Theorie aller Themen

## 0.8
- Neu: Reiter Theorie / Üben / Folien oben in jedem Thema (Wechsel ohne Umweg über die Startseite)
- Behoben: Rückkehr zur Themenliste scrollt zuverlässiger an die vorherige Stelle
- Behoben: Auf Handy und iPad öffnet sich die Tastatur nicht mehr automatisch
- Neu: Theorie aller Themen als farbige, nummerierte Karten (auch bei Themen mit Regelliste)

## 0.7
- Neu: Kein Zwischenschritt mehr: Karten-Knöpfe führen direkt zu Theorie, Üben und Folien; Zurück führt zur Themenliste an dieselbe Scroll-Stelle
- Neu: Theorie-Knopf blau, Text zentriert; Knöpfe gleich breit
- Entfernt: Link zur separaten Tense-Trainer-App am Seitenende
- Behoben: «undefined» in der Live-Übung (Einsetzen); Absturz beim Start des Tense Trainers auf Englisch; Zeitform bei gemischten Sätzen angezeigt; Live-Folie abgeschnitten; doppelter Hinweis; Kopfzeile auf dem Handy kompakter

## 0.6
- Behoben: Zurückwischen geht jetzt immer eine Ebene zurück (schliesst die App nicht mehr)
- Neu: Hub-Karten (Theorie blau, Üben grün, Folien gelb) mit Verlauf
- Neu: Tense Trainer in EnglishLab (alle Zeiten gemischt, Zeiten wählbar), oben bei den Zeiten
- Neu: Folien mit Grafiken (Zeitstrahl, farbige Satzbausteine, Beispiel-Bubbles) für alle Zeitformen
- Neu: Live-Übung mit Einstellungen (Aufgabenart, Unterthemen, Niveau), in Theorie und auf der letzten Folie

## 0.5
- Neu: Themenkarten mit Knöpfen Theorie / Üben / Folien (direkt anklickbar)
- Neu: Theorie farbig gestaltet (nummerierte Karten pro Abschnitt)
- Neu: Zeitformen mit eigenen Übungen (A/B/C), Üben startet direkt im gewählten Thema
- Neu: Live-Übung (eine Frage, «Nächste Frage», endlos) in der Theorie und als letzte Folie
- Neu: Folien im PowerPoint-Stil (16:9, Vorschauleiste, Wischen), Präsentieren im Vollbild
- Neu: Logo im Seitenkopf

## 0.4
- Neu: Pro Thema Theorie und Üben als eigene Buttons (Folien für Lehrpersonen)
- Neu: Suche und Wörterbuch (Glossar, dict.cc / Linguee)
- Neu: KI-Suche für die Lehrperson (eigener API-Schlüssel, nur lokal)
- Neu: Logo (Buch mit E)

## 0.3
- Neu: Lehrerbereich mit Login und Folien (Präsentation, DE/EN)
- Neu: 21 Themen, Folien für alle
- Neu: Design für Schüler, PWA (Manifest, Service Worker)
- Aufgeteilt in mehrere Dateien

## 0.2
- Erste Themen mit Übungen, Regeln, Arbeitsblatt
