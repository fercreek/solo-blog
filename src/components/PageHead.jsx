import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Fernando Castañeda';
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://fercontreras.com';
const DEFAULT_DESCRIPTION = 'Agentic AI Architect. I build autonomous systems that work while you scale. I deliver relief, not hours—eliminating bottlenecks that bleed your cash flow.';

const PageHead = ({ title, description }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL.replace(/\/$/, '')}${pathname === '/' ? '' : pathname}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Agentic AI Architect`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
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
