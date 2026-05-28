# ALUROL Website Demo

Next.js + TypeScript + CSS Modules + Framer Motion.

## Start

```bash
npm install
npm run dev
```

Dann öffnen:

```txt
http://localhost:3000
```

## Struktur

```txt
app/
components/
  hero/hero.tsx
  hero/hero.module.css
  contact/contact.tsx
  contact/contact.module.css
public/images/
```

## Fix in dieser Version

Der Alias `@/*` ist in `tsconfig.json` korrekt gesetzt:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["./*"]
}
```
