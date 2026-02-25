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
