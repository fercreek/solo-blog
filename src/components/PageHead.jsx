import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Fernando Castañeda';
const DEFAULT_DESCRIPTION = 'Operations Architect and Fractional CTO. I eliminate the bottlenecks that starve your business of cash. Schedule an Operations Audit.';

const PageHead = ({ title, description }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Operations Architect & Fractional CTO`;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default PageHead;
