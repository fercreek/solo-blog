// Browser-free static SEO pass. Runs after `vite build`: for every public route,
// copies dist/index.html to dist/<route>/index.html with that route's own
// <title>, description, og:*, twitter:* and canonical (values from src/seo/routes.js).
// Needed because Vercel's build image has no Chromium, so the puppeteer prerender is skipped.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PUBLIC_ROUTES, getRouteMeta, canonicalFor } from '../src/seo/routes.js';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const DIST = join(ROOT, 'dist');
const base = readFileSync(join(DIST, 'index.html'), 'utf8');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Replacement via function so `$` in copy is never treated as a back-reference.
const swap = (html, re, replacement, label) => {
  if (!re.test(html)) throw new Error(`seo-static: ${label} not found in dist/index.html`);
  return html.replace(re, () => replacement);
};
const meta = (attr, name) => new RegExp(`<meta ${attr}="${name}" content="[^"]*"\\s*/?>`);

for (const route of PUBLIC_ROUTES) {
  if (route === '/') continue; // index.html already carries the curated home metadata
  const { title, description, canonical } = getRouteMeta(route, 'en');
  let html = base;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`, 'title');
  html = swap(html, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`, 'canonical');
  html = swap(html, meta('name', 'description'), `<meta name="description" content="${esc(description)}" />`, 'description');
  html = swap(html, meta('property', 'og:title'), `<meta property="og:title" content="${esc(title)}" />`, 'og:title');
  html = swap(html, meta('property', 'og:description'), `<meta property="og:description" content="${esc(description)}" />`, 'og:description');
  html = swap(html, meta('property', 'og:url'), `<meta property="og:url" content="${canonical}" />`, 'og:url');
  html = swap(html, meta('name', 'twitter:title'), `<meta name="twitter:title" content="${esc(title)}" />`, 'twitter:title');
  html = swap(html, meta('name', 'twitter:description'), `<meta name="twitter:description" content="${esc(description)}" />`, 'twitter:description');
  // hreflang alternates point at the home URL in the template; point them at this route.
  html = html.replace(/(<link rel="alternate" hreflang="[^"]+" href=")[^"]*(")/g, (_, a, b) => `${a}${canonicalFor(route)}${b}`);
  const outDir = join(DIST, route);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  console.log('seo-static', route, '->', canonical);
}
