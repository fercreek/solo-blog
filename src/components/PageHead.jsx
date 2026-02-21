import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Fernando Castañeda';

const PageHead = ({ title, description }) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default PageHead;
