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
import { FaGlobe, FaCode, FaRocket, FaBox, FaDollarSign, FaTools } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { getProjectsData } from '../data/projectsTranslations';
import ProjectCard, { getProjectAnimationType, getProjectLevel, getProjectXP } from '../components/ProjectCard';

const RecentProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const HackathonProjectsSection = styled.section`
  margin-top: 5rem;
  
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 3rem 0;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
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
  const { language } = useLanguage();
  const { t } = useTranslation();

  const mainProjects = useMemo(() => [
    {
      id: 'studio-link',
      title: 'Studio Link',
      excerpt: t('home.featured.studioLink.excerpt'),
      date: '2024',
      url: 'https://studiolink.online/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(116, 185, 255, 0.2))'
    },
    {
      id: 'vayla-dance',
      title: 'Vayla Dance',
      excerpt: t('home.featured.vaylaDance.excerpt'),
      date: '2024',
      url: 'https://www.vayla.dance/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(253, 203, 110, 0.3), rgba(225, 112, 85, 0.2))'
    },
    {
      id: 'litebox-parcel',
      title: 'Litebox Parcel',
      excerpt: t('home.recent.liteboxParcel.excerpt'),
      date: '2025',
      url: 'https://www.liteboxparcel.com/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(253, 203, 110, 0.3), rgba(225, 112, 85, 0.2))'
    },
    {
      id: 'progreso',
      title: 'Progreso Personal Finance',
      excerpt: t('home.recent.progreso.excerpt'),
      date: '2025',
      url: 'https://v0-progreso-personal-finance-ui.vercel.app/',
      status: 'mvp',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(116, 185, 255, 0.2))'
    },
    {
      id: 'sin-bronca',
      title: 'Sin Bronca',
      excerpt: t('home.recent.sinBronca.excerpt'),
      date: '2025',
      url: 'https://sin-bronca.vercel.app/',
      status: 'mvp',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(116, 185, 255, 0.3), rgba(108, 92, 231, 0.2))'
    }
  ], [t]);

  const hackathonProjects = useMemo(() => {
    const projectsData = getProjectsData(language);
    const lines = projectsData.split('\n').filter(line => line.trim());
    const parsedProjects = [];
    let currentSection = null;
    let currentProject = null;
    
    lines.forEach(line => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('## ')) {
        const sectionTitle = trimmedLine.replace('## ', '').trim();
        if (sectionTitle.toLowerCase().includes('hackathon')) {
          currentSection = 'hackathon';
        } else {
          currentSection = null;
        }
        currentProject = null;
      } else if (trimmedLine.startsWith('### ') && currentSection === 'hackathon') {
        if (currentProject) {
          parsedProjects.push(currentProject);
        }
        currentProject = {
          title: trimmedLine.replace('### ', '').trim(),
          description: '',
          url: '',
          type: 'hackathon'
        };
      } else if (currentProject && currentSection === 'hackathon') {
        if (trimmedLine && !trimmedLine.startsWith('Experimental') && !trimmedLine.startsWith('Aplicación')) {
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
  }, [language]);

  const getProjectIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('studio') || lowerTitle.includes('link')) return <FaCode />;
    if (lowerTitle.includes('dance') || lowerTitle.includes('vayla')) return <FaRocket />;
    if (lowerTitle.includes('parcel') || lowerTitle.includes('litebox')) return <FaBox />;
    if (lowerTitle.includes('finance') || lowerTitle.includes('progreso')) return <FaDollarSign />;
    if (lowerTitle.includes('bronca')) return <FaTools />;
    return <FaGlobe />;
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('projects.title')}</PageTitle>
        <PageDescription>
          {t('projects.description')}
        </PageDescription>
      </PageHeader>
      
      <ContentWrapper>
        <SectionTitle>{t('projects.mainProjects') || 'Main Projects'}</SectionTitle>
        <RecentProjectsGrid>
          {mainProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              excerpt={project.excerpt}
              date={project.date}
              url={project.url}
              status={project.status}
              category={project.category}
              gradient={project.gradient}
              animationType={getProjectAnimationType(project)}
              level={getProjectLevel(project)}
              xp={getProjectXP(project)}
              delay={`${index * 0.1}s`}
              buttonText={t('common.buttons.viewProject')}
              statusLabel={project.status === 'production' ? t('common.status.inProduction') : t('common.status.mvp')}
            />
          ))}
        </RecentProjectsGrid>

        {hackathonProjects.length > 0 && (
          <HackathonProjectsSection>
            <SectionTitle>{t('projects.hackathonProjects') || 'Hackathon Projects'}</SectionTitle>
            <ProjectsGrid>
              {hackathonProjects.map((project, index) => (
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
                      {t('common.buttons.viewProject')}
                    </ProjectLink>
                  )}
                </FeatureCard>
              ))}
            </ProjectsGrid>
          </HackathonProjectsSection>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ProjectsPage;