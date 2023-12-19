# Wartezimmer Slideshow-Projekt

## Projektbeschreibung
Dieses Projekt bietet eine Lösung, um eine dynamische Slideshow in einem Wartezimmer zu präsentieren. Die Inhalte der Slideshow werden über eine JSON-Konfigurationsdatei gesteuert, die verschiedene Typen von Medien unterstützt, darunter Bilder, Videos, Webseiten (über iFrames) und HTML-Inhalte.

## JSON-Konfigurationsformat
- Die JSON-Datei besteht aus einem `default`-Objekt und einem `slides`-Array.
- `default` enthält Standardwerte für Übergangszeiten (`transitionTime`), Übergangstypen (`transitionType`) und Hintergrundfarben (`backgroundColor`).
- `slides` ist ein Array von Objekten, wobei jedes Objekt einen Slide darstellt.
- Slide-Objekte können folgende Eigenschaften haben:
  - `type`: Der Medientyp des Slides (`image`, `video`, `iframe`, `html`).
  - `source`: Die URL des Mediums (für `image`, `video`, `iframe`).
  - `content`: HTML-Inhalt (für `html`-Slides).
  - `displayTime`: Wie lange der Slide angezeigt wird (in Millisekunden).
  - `background`: Hintergrundfarbe des Slides.
  - `imageMode`: Anzeigemodus für Bilder (`cover` oder `contain`).

## HTML-Struktur
- Die HTML-Datei enthält einen Container (`div` mit der ID `slide-container`), in dem die Slides angezeigt werden.

## JavaScript-Logik (slideshow.js)
- Das Skript liest die JSON-Konfigurationsdatei und stellt die Slides entsprechend dar.
- Es unterstützt das Laden und Anzeigen verschiedener Medientypen.
- Eine einfache Fade-Animation wird für die Übergänge zwischen den Slides verwendet.

## Verwendung
- Platzieren Sie die HTML- und JavaScript-Dateien auf Ihrem Server.
- Erstellen Sie eine JSON-Konfigurationsdatei gemäß dem oben beschriebenen Format.
- Stellen Sie sicher, dass der Pfad zur JSON-Datei im JavaScript-Code korrekt angegeben ist.

## Anpassungsmöglichkeiten
- Die JSON-Datei kann beliebig angepasst werden, um verschiedene Arten von Inhalten und Anzeigezeiten zu definieren.
- CSS-Stile können modifiziert werden, um das Erscheinungsbild der Slideshow anzupassen.

## Hinweise
- Dieses Projekt ist für die Verwendung in einem geschlossenen System, wie einem Wartezimmer, konzipiert.
- Stellen Sie sicher, dass alle Urheberrechte und Lizenzbestimmungen für die verwendeten Medien eingehalten werden.

# DynamicDisplay
