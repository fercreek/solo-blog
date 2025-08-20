import MarkdownContent from '../components/MarkdownContent';
import { contactData } from '../data/contact';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper
} from '../components/PageComponents';

const ContactPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Contact</PageTitle>
      </PageHeader>
      <ContentWrapper>
        <MarkdownContent content={contactData} />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ContactPage;