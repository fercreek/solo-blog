import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { SITE_NAME, getRouteMeta } from '../seo/routes';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.fercontreras.com';

// Metadata comes from src/seo/routes.js (shared with the build-time static pass).
const PageHead = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const { title: fullTitle, description: metaDescription, canonical: canonicalUrl } =
    getRouteMeta(pathname, language, SITE_URL);
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  );
};

export default PageHead;
