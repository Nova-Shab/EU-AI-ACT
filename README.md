# EU AI Act Audit-Assistent (Prototyp)

Ein interaktives Web-Tool zur Unterstützung von Auditor:innen bei der Prüfung von KI-Systemen nach dem EU AI Act.

## ⚠️ Wichtiger Hinweis

**Dieses Tool ersetzt keine Rechtsberatung.** Es dient nur als Orientierungshilfe zur Vorbereitung auf den EU AI Act. Für eine verbindliche rechtliche Einschätzung konsultieren Sie bitte qualifizierte Rechtsberater:innen.

## 🎯 Funktionen

Das Tool führt Sie durch drei Hauptschritte:

1. **Risikostufe bestimmen**: Ermittlung der Risikoklasse (Prohibited, High Risk, Limited Risk, Minimal Risk) basierend auf einem Fragebogen
2. **Anforderungen prüfen**: Strukturiertes Audit relevanter EU AI Act Anforderungen mit Statusbewertung
3. **Maßnahmenkatalog generieren**: Automatische Generierung konkreter Handlungsempfehlungen für nicht erfüllte Anforderungen

### Features

- ✅ Schrittweise Führung durch den Audit-Prozess
- ✅ Automatische Speicherung im Browser (localStorage)
- ✅ Individuelle Handlungsempfehlungen pro Anforderung
- ✅ Export als Markdown
- ✅ Druckfunktion für Berichte
- ✅ Responsive Design mit Tailwind CSS

## 🚀 Installation & Start

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm (wird mit Node.js installiert)

### Schritte

1. **Abhängigkeiten installieren:**

   ```bash
   npm install
   ```

2. **Entwicklungsserver starten:**

   ```bash
   npm run dev
   ```

   Die Anwendung ist dann unter `http://localhost:5173` verfügbar.

3. **Produktions-Build erstellen:**

   ```bash
   npm run build
   ```

   Der Build wird im `dist/` Ordner erstellt.

4. **Produktions-Build testen:**

   ```bash
   npm run preview
   ```

## 📁 Projektstruktur

```
EU-AI-ACT/
├── src/
│   ├── components/          # Wiederverwendbare UI-Komponenten
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Disclaimer.tsx
│   │   └── StepIndicator.tsx
│   ├── context/             # React Context für State Management
│   │   └── AuditContext.tsx
│   ├── models/              # TypeScript Interfaces & Types
│   │   └── types.ts
│   ├── pages/               # Seiten-Komponenten
│   │   ├── LandingPage.tsx
│   │   ├── RiskAssessmentPage.tsx
│   │   ├── AuditPage.tsx
│   │   └── ActionPlanPage.tsx
│   ├── utils/               # Utility-Funktionen & Logik
│   │   ├── riskClassification.ts
│   │   ├── requirements.ts
│   │   └── actionPlanGenerator.ts
│   ├── App.tsx              # Haupt-App-Komponente
│   ├── main.tsx             # Entry Point
│   └── index.css            # Tailwind CSS
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🔧 Anpassungen & Erweiterungen

### Anforderungen erweitern

Die Anforderungen sind in `src/utils/requirements.ts` definiert. Um neue Anforderungen hinzuzufügen:

1. Öffnen Sie `src/utils/requirements.ts`
2. Fügen Sie ein neues Objekt zum `ALL_REQUIREMENTS` Array hinzu:

```typescript
{
  id: "XX-##",              // Eindeutige ID
  category: "Kategorie",    // Gruppierung
  title: "Titel",           // Kurztitel
  description: "...",       // Beschreibung
  riskLevel: ["HIGH_RISK"]  // Für welche Risikoklassen gilt dies
}
```

### Risikoklassifizierungs-Logik anpassen

Die Logik zur Risikoklassifizierung befindet sich in `src/utils/riskClassification.ts`. Die Funktion `classifyRisk()` kann angepasst werden, um spezifischere oder alternative Klassifizierungsregeln zu implementieren.

**Wichtig**: Die aktuelle Implementierung ist vereinfacht und dient nur Demonstrationszwecken!

### Maßnahmenempfehlungen anpassen

Die konkreten Handlungsempfehlungen werden in `src/utils/actionPlanGenerator.ts` in der Funktion `getRecommendedActionText()` definiert. Hier können Sie die Texte pro Anforderung anpassen oder erweitern.

### Styling anpassen

Das Projekt nutzt Tailwind CSS. Farben, Schriftarten und andere Design-Tokens können in `tailwind.config.js` angepasst werden.

## 💾 Datenspeicherung

Die Anwendung speichert den Audit-Fortschritt automatisch im Browser-localStorage. Es werden keine Daten an einen Server gesendet. Die gespeicherten Daten umfassen:

- Systeminformationen
- Ermittelte Risikoklasse
- Audit-Antworten
- Generierte Maßnahmen
- Aktueller Schritt

Daten können durch "Neues Audit beginnen" oder durch Löschen der Browser-Daten entfernt werden.

## 🛠️ Technologie-Stack

- **Frontend Framework**: React 18
- **Programmiersprache**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Persistenz**: Browser localStorage

## 📝 Hinweise zur Entwicklung

### Vereinfachungen im Prototyp

Dieser Prototyp enthält bewusste Vereinfachungen:

1. **Risikoklassifizierung**: Die Logik ist stark vereinfacht. Eine echte Klassifizierung erfordert detaillierte juristische Analyse.

2. **Anforderungen**: Die Liste der Anforderungen ist beispielhaft und nicht vollständig. Der echte EU AI Act enthält deutlich mehr Details und Nuancen.

3. **Rechtsverbindlichkeit**: Das Tool bietet keine rechtsverbindliche Beratung oder Zertifizierung.

### Erweiterungsmöglichkeiten

Mögliche zukünftige Erweiterungen:

- Backend-Integration für Multi-User-Support
- PDF-Export mit professionellem Layout
- Mehrsprachigkeit (i18n)
- Versionierung von Audits
- Kollaborationsfunktionen
- Integration mit Dokumentenmanagementsystemen
- Detailliertere Anforderungskataloge
- Import/Export von Audit-Daten

## 📄 Lizenz

Prototyp für Demonstrationszwecke.

## 👥 Kontakt & Support

Dies ist ein Prototyp-Projekt. Für Fragen oder Feedback kontaktieren Sie bitte das Entwicklungsteam.

---

**Version**: 0.0.1
**Status**: Prototyp
**Letzte Aktualisierung**: 2025
