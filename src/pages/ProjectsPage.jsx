import MarkdownContent from '../components/MarkdownContent';
import { projectsData } from '../data/projects';
import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
`;

const ProjectsPage = () => {
  return (
    <div>
      <PageTitle>Projects</PageTitle>
      <MarkdownContent content={projectsData} />
    </div>
  );
};

export default ProjectsPage;