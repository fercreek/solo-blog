import MarkdownContent from '../components/MarkdownContent';
import { aboutData } from '../data/about';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const AboutPage = () => {
  return (
    <div>
      <PageTitle>About Me</PageTitle>
      <MarkdownContent content={aboutData} />
    </div>
  );
};

export default AboutPage;