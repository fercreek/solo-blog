import styled from 'styled-components';
import MarkdownContent from '../components/MarkdownContent';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper
} from '../components/PageComponents';
import { HighlightCard } from '../styles/designSystem';
import { fadeInUp } from '../styles/keyframes';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { getContactData } from '../data/contactTranslations';

const ContactContent = styled(HighlightCard)`
  animation: ${fadeInUp} 0.6s ease-out;
`;

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
        <ContactContent>
          <MarkdownContent content={contactData} />
        </ContactContent>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ContactPage;