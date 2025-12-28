import MarkdownContent from '../components/MarkdownContent';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper
} from '../components/PageComponents';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { getContactData } from '../data/contactTranslations';

const ContactPage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const contactData = getContactData(language);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('contact.title')}</PageTitle>
      </PageHeader>
      <ContentWrapper>
        <MarkdownContent content={contactData} />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ContactPage;