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

### ⚠️ Flag / decisión pendiente
- **Prerender en CI de Vercel:** el script usa el Chrome local (no existe en el build de Vercel).
  Funciona local y para deploy `--prebuilt`. Para prerender CI-native → instalar `react-snap`
  (bundlea chromium) o puppeteer+@sparticuz/chromium. Requiere wiring hydrateRoot (React 19). Pendiente OK Fernando.
- **JSON-LD per-route vía helmet** (ProfilePage/CollectionPage) — opcional; el Person estático ya cubre identidad.
- **Rutas ES separadas** (`/es/...`) para indexar español de verdad — deferred (refactor de routing).
- **Lighthouse baseline** en prod — pendiente correr.
