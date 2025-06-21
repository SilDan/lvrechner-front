# 🧮 LV-Rechner Frontend

Dies ist das **Frontend** eines einfachen Lebensversicherungs-Rechners, der mit **Angular** entwickelt wurde.
Er kommuniziert mit einem Java **Spring Boot Backend**, das die Beitragsberechnung durchführt.

---

## 💼 Technologien

* [Angular CLI](https://angular.io/cli)
* TypeScript
* HTML & CSS
* Node.js + npm

---

## ⚙️ Setup & Entwicklung

### 🔧 Voraussetzungen

* Node.js (empfohlen: LTS-Version)
  → Installierbar mit [winget](https://learn.microsoft.com/de-de/windows/package-manager/winget/) oder von [nodejs.org](https://nodejs.org)
* Angular CLI

### ✅ Installation

```bash
npm install       # Abhängigkeiten installieren
ng serve          # Dev-Server starten
```

Öffne dann im Browser:

```
http://localhost:4200
```

---

## 🔗 Verbindung zum Backend

Das Frontend ruft per **HTTP POST** einen Endpunkt deines Spring Boot Backends auf, z. B.:

```http
POST http://localhost:8080/api/berechne
Content-Type: application/json

{
  "alter": 30,
  "versicherungssumme": 100000,
  "laufzeit": 20
}
```

Die Antwort enthält den berechneten Monatsbeitrag als `double`.

---

## 📁 Projektstruktur (Kurzüberblick)

```plaintext
lv-rechner-frontend/
├── src/
│   ├── app/
│   │   ├── components/       # Deine UI-Komponenten
│   │   ├── services/         # HTTP-Aufrufe zum Backend
│   │   ├── app-routing.module.ts
│   │   └── app.component.ts / .html / .css
├── angular.json              # Angular-Konfiguration
├── package.json              # Abhängigkeiten
└── README.md
```

---

## 📝 Geplante Features

* [ ] Eingabeformular für Alter, Versicherungssumme, Laufzeit
* [ ] Verbindung zum Backend via `HttpClient`
* [ ] Anzeige des berechneten Beitrags
* [ ] Fehlerbehandlung & Validierung
* [ ] Mobile-optimiertes Layout

---

## ⚖️ Entwicklungshinweise

* Verwende `ng generate component name` um neue Komponenten zu erstellen
* Für Services: `ng generate service name`
* Routing kann später aktiviert werden (siehe `app-routing.module.ts`)

---

## 🧑‍💻 Autor

* 👤 Daniel Silvan
* 📧 \[[deine.email@example.com](mailto:deine.email@example.com)]
* 🌐 [Backend-Repo ansehen](https://github.com/deinname/lv-rechner-backend)

