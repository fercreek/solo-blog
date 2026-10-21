// Single source of truth for per-route SEO metadata.
// Used by PageHead (runtime, react-helmet) and by scripts/seo-static.mjs (build time),
// so crawlers that do not run JS see the same values the SPA sets after hydration.
// Keep this file free of Vite-only APIs: Node imports it directly.
import { translations } from '../translations/index.js';

export const SITE_NAME = 'Fernando Contreras';
export const SITE_URL = 'https://www.fercontreras.com';
export const DEFAULT_DESCRIPTION =
  'Agentic AI Architect. I build autonomous systems that work while you scale. I deliver relief, not hours—eliminating bottlenecks that bleed your cash flow.';

// path -> translation keys (descriptions may take params, e.g. impossibleList).
export const ROUTE_SEO = {
  '/': { title: 'home.hero.title', description: 'home.hero.description' },
  '/about': { title: 'about.title', description: 'about.description' },
  '/projects': { title: 'projects.title', description: 'projects.description' },
  '/system': { title: 'system.title', description: 'system.descriptionSeo' },
  '/now': { title: 'now.title', description: 'now.descriptionSeo' },
  '/contact': { title: 'contact.title', description: 'contact.description' },
  '/impossible-list': {
    title: 'impossibleList.title',
    description: 'impossibleList.description',
    params: { link: 'impossibleList.linkText' },
  },
};

export const PUBLIC_ROUTES = Object.keys(ROUTE_SEO);

const lookup = (lang, key) => {
  for (const dict of [translations[lang], translations.en]) {
    let value = dict;
    for (const part of key.split('.')) value = value && typeof value === 'object' ? value[part] : undefined;
    if (typeof value === 'string') return value;
  }
  return undefined;
};

const translate = (lang, key, params = {}) => {
  const value = lookup(lang, key);
  if (value === undefined) return undefined;
  return value.replace(/{(\w+)}/g, (m, p) =>
    params[p] !== undefined ? lookup(lang, params[p]) ?? m : m);
};

export const canonicalFor = (pathname, siteUrl = SITE_URL) =>
  `${siteUrl.replace(/\/$/, '')}${pathname === '/' ? '' : pathname}`;

export const getRouteMeta = (pathname, lang = 'en', siteUrl = SITE_URL) => {
  const entry = ROUTE_SEO[pathname];
  const title = entry ? translate(lang, entry.title) : undefined;
  const description = (entry && translate(lang, entry.description, entry.params)) || DEFAULT_DESCRIPTION;
  return {
    title: title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Agentic AI Architect`,
    description,
    canonical: canonicalFor(pathname, siteUrl),
  };
};
