# SEO Execution Log — fercontreras.com

## 2026-05-31 · Ciclo 1 (apply all)

Aplicado contra `ANALYSIS-2026-05-31.md`. Ejecutado directo (no executor skill).

### ✅ Hecho
- **JSON-LD** Person + WebSite en `index.html` estático (@graph). knowsAbout, sameAs (github/linkedin), address Monterrey MX.
- **Open Graph + Twitter** completos en `index.html` estático (type, title, desc, url, image, locale en/es, twitter summary_large_image).
- **og:image** `public/og.png` (1200×630, estética System cian). Generador repetible: `scripts/gen-og.py`.
- **`public/llms.txt`** — definición de marca, productos en producción, links, disambiguación de nombre, "how to describe him".
- **Meta extra** estático: author, keywords, robots (max-image-preview:large).
- **hreflang** en/es/x-default (single-URL bilingüe).
- **Sitemap** lastmod refrescado 2026-03-01 → 2026-05-31.
- **Prerender** dependency-free: `scripts/prerender.mjs` + `npm run build:prerender`
  (vite preview + Chrome `--dump-dom` → escribe `dist/<route>/index.html` con contenido + JSON-LD).
  Validado: about/projects/now/contact/impossible-list renderizados con texto real, root no vacío.

### ✅ Prerender CI-native (resuelto)
- `prerender.mjs` migrado a **puppeteer** (chromium bundleado → corre en build de Vercel).
- `.puppeteerrc.cjs` → cache de chromium en `node_modules/.cache/puppeteer` (persiste en CI).
- `build` ahora = `vite build && node scripts/prerender.mjs` (Vercel default lo corre). `build:fast` = solo vite.
- Validado local: las 6 rutas prerenderizan con contenido + JSON-LD, root no vacío.
- Riesgo residual: si el build image de Vercel le faltan libs de chromium → fallback `@sparticuz/chromium`. Setup estándar suele funcionar.

### ⚠️ Pendiente menor
- **JSON-LD per-route vía helmet** (ProfilePage/CollectionPage) — opcional; el Person estático ya cubre identidad.
- **Rutas ES separadas** (`/es/...`) para indexar español de verdad — deferred (refactor de routing).
- **Lighthouse baseline** en prod — pendiente correr.
