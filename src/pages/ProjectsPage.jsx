import MarkdownContent from '../components/MarkdownContent';
import { projectsData } from '../data/projects';
import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper
} from '../components/PageComponents';

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${soloLevelingTheme.colors.text.secondary};
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

const ProjectsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Projects</PageTitle>
        <PageSubtitle>
          Explore my technical creations and development journey
        </PageSubtitle>
      </PageHeader>
      <ContentWrapper>
        <MarkdownContent content={projectsData} />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ProjectsPage;