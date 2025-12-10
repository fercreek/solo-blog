import { useMemo } from 'react';
import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription
} from '../components/PageComponents';
import {
  FeatureCard,
  CardIcon,
  CardTitle,
  CardDescription,
  SectionTitle
} from '../styles/designSystem';
import { FaGlobe, FaCode, FaRocket } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 3rem 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold});
  color: ${soloLevelingTheme.colors.text.primary};
  text-decoration: none;
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  font-size: 0.95rem;
  transition: all 0.3s ease;
  box-shadow: ${soloLevelingTheme.shadows.glow};
  border: 1px solid rgba(253, 203, 110, 0.3);
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 0 30px rgba(253, 203, 110, 0.6), 0 6px 20px rgba(225, 112, 85, 0.4);
  }
  
  &:active {
    transform: translateY(0) scale(1);
  }
  
  svg {
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
  }
`;

const ProjectsPage = () => {
  const projects = useMemo(() => {
    const lines = projectsData.split('\n').filter(line => line.trim());
    const parsedProjects = [];
    let currentProject = null;
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        if (currentProject) {
          parsedProjects.push(currentProject);
        }
        currentProject = {
          title: trimmedLine.replace('## ', '').trim(),
          description: '',
          url: ''
        };
      } else if (currentProject) {
        if (trimmedLine.includes('[') && trimmedLine.includes('](')) {
          const urlMatch = trimmedLine.match(/\(([^)]+)\)/);
          if (urlMatch) {
            currentProject.url = urlMatch[1];
          }
        } else if (trimmedLine && !trimmedLine.startsWith('Explore') && !trimmedLine.startsWith('Discover')) {
          if (currentProject.description) {
            currentProject.description += ' ' + trimmedLine;
          } else {
            currentProject.description = trimmedLine;
          }
        }
      }
    });
    
    if (currentProject) {
      parsedProjects.push(currentProject);
    }
    
    return parsedProjects;
  }, []);

  const getProjectIcon = (title) => {
    if (title.toLowerCase().includes('studio')) return <FaCode />;
    if (title.toLowerCase().includes('vayla')) return <FaRocket />;
    return <FaGlobe />;
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Projects</PageTitle>
        <PageDescription>
          Explore my technical creations and development journey. Each project represents a unique challenge and learning experience.
        </PageDescription>
      </PageHeader>
      
      <ContentWrapper>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <FeatureCard key={project.title} delay={`${index * 0.1}s`}>
              <CardIcon>{getProjectIcon(project.title)}</CardIcon>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              {project.url && (
                <ProjectLink 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <FaGlobe />
                  Visit Project
                </ProjectLink>
              )}
            </FeatureCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ProjectsPage;