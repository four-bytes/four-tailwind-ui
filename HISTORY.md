## 0.2.2 — 2026-02-25
- Sidebar: Mobile Sidebar schließt automatisch bei Navigation (closeOnNavigate prop, default: true)

## 0.2.3 — 2026-02-25
- AdminLayout: Hintergrundfarbe im Dark Mode gefixt (bg-gray-50 dark:bg-gray-950)

## 0.2.4 — 2026-02-25
- Tailwind v4: @custom-variant dark korrigiert (&:where(.dark, .dark *))
- tailwind.config.js (v3-Relikt) entfernt

## 0.2.5 — 2026-02-25
- style.css: body dark:bg-gray-950 ergänzt (fehlte seit dark-variant Fix)

## 0.2.6 — 2026-02-25
- Toast: blue-* Farben auf blue-light-* korrigiert (nicht in @theme definiert)
- InputField, TextareaField, SelectField, MultiSelect: bg-transparent → bg-white (Light Mode Fix)

## 0.2.7 — 2026-02-25
- @source Direktiven in src/style.css: Alle Komponenten- und Composable-Klassen landen vollständig im dist/style.css
- postcss.config.js beibehalten (für Library-Build nötig)

## 0.2.8 — 2026-02-25
- BarChart: dark:text-gray-700 → dark:text-gray-500 (Labels im Dark Mode lesbar)
- Sidebar: dark:text-gray-100 ergänzt (Text im Dark Mode war schwarz auf dunkel)
- StatsList: Dark-Mode Label-Farbe geprüft (dark:text-gray-400 bereits korrekt, kein Fix nötig)

## 0.2.9 — 2026-02-25
- useTheme: defaultTheme='dark' hat Vorrang über gespeicherten 'light'-Wert in localStorage

## 0.2.10 — 2026-02-25
- useTheme: Priorität korrigiert — localStorage (User-Entscheidung) hat immer Vorrang vor defaultTheme
