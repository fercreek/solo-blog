import MarkdownContent from '../components/MarkdownContent';
import { contactData } from '../data/contact';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <PageTitle>Contact</PageTitle>
      <MarkdownContent content={contactData} />
    </ContactContainer>
  );
};

export default ContactPage;