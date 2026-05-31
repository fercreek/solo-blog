import { useMemo } from 'react';
import styled from 'styled-components';
import { useReducedMotion } from 'framer-motion';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription
} from '../components/PageComponents';
import {
  SectionTitle
} from '../styles/designSystem';
import { FaGlobe, FaCode, FaRocket, FaBox, FaDollarSign, FaTools, FaClock } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { getProjectsData } from '../data/projectsTranslations';
import ProjectCard from '../components/ProjectCard';
import PageHead from '../components/PageHead';
import { SystemPanel } from '../components/system';
import { sys } from '../styles/systemTokens';

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
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const HackathonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 2rem 0;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }
`;

const HackathonCardIcon = styled.div`
  font-size: 1.65rem;
  color: ${sys.color.cyan};
  margin-bottom: 0.7rem;
  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5));
`;

const HackathonCardTitle = styled.h4`
  font-family: ${sys.font.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${sys.color.text};
  margin: 0 0 0.45rem;
`;

const HackathonCardDescription = styled.p`
  font-size: 0.82rem;
  line-height: 1.55;
  color: ${sys.color.muted};
  margin: 0;
  flex: 1;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: ${sys.font.mono};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${sys.color.cyanBright};
  text-decoration: none;
  transition: color 0.25s ease, text-shadow 0.25s ease;

  &:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(56, 189, 248, 0.7);
  }

  svg { filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.6)); }
`;

const ProjectsPage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

  const mainProjects = useMemo(() => [
    {
      id: 'studio-link',
      title: 'Studio Link',
      excerpt: t('home.featured.studioLink.excerpt'),
      date: '2024',
      url: 'https://studiolink.online/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(116, 185, 255, 0.2))'
    },
    {
      id: 'contreras-code',
      title: 'Contreras Code',
      excerpt: t('home.recent.contrerasCode.excerpt'),
      date: '2025',
      url: 'https://www.contrerascode.com/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(31, 75, 255, 0.3), rgba(56, 189, 248, 0.2))'
    },
    {
      id: 'vayla-dance',
      title: 'Vayla Dance',
      excerpt: t('home.featured.vaylaDance.excerpt'),
      date: '2024',
      url: 'https://www.vayla.dance/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2))'
    },
    {
      id: 'cargo-control',
      title: 'Cargo Control',
      excerpt: t('home.recent.cargoControl.excerpt'),
      date: '2025',
      url: '',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2))'
    },
    {
      id: 'litebox-parcel',
      title: 'Litebox Parcel',
      excerpt: t('home.recent.liteboxParcel.excerpt'),
      date: '2025',
      url: 'https://www.liteboxparcel.com/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2))'
    },
    {
      id: 'chronodev',
      title: 'ChronoDev',
      excerpt: t('home.recent.chronoDev.excerpt'),
      date: '2025',
      url: 'https://v0-chrono-dev-dashboard.vercel.app/',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(100, 116, 139, 0.3), rgba(71, 85, 105, 0.2))'
    },
    {
      id: 'encontreras',
      title: 'Encontreras',
      excerpt: t('home.recent.encontreras.excerpt'),
      date: '2025',
      url: 'https://github.com/fercreek/encontreras',
      status: 'production',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2))'
    },
    {
      id: 'progreso',
      title: 'Progreso Personal Finance',
      excerpt: t('home.recent.progreso.excerpt'),
      date: '2025',
      url: 'https://v0-progreso-personal-finance-ui.vercel.app/',
      status: 'mvp',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(116, 185, 255, 0.2))'
    },
    {
      id: 'sin-bronca',
      title: 'Sin Bronca',
      excerpt: t('home.recent.sinBronca.excerpt'),
      date: '2025',
      url: 'https://sin-bronca.vercel.app/',
      status: 'mvp',
      category: t('common.status.project'),
      gradient: 'linear-gradient(135deg, rgba(116, 185, 255, 0.3), rgba(56, 189, 248, 0.2))'
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
    if (lowerTitle.includes('cargo') || lowerTitle.includes('parcel') || lowerTitle.includes('litebox')) return <FaBox />;
    if (lowerTitle.includes('contreras')) return <FaCode />;
    if (lowerTitle.includes('finance') || lowerTitle.includes('progreso')) return <FaDollarSign />;
    if (lowerTitle.includes('chronodev')) return <FaClock />;
    if (lowerTitle.includes('bronca')) return <FaTools />;
    return <FaGlobe />;
  };

  return (
    <PageContainer>
      <PageHead title={t('projects.title')} description={t('projects.description')} />
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
              delay={`${index * 0.1}s`}
              buttonText={t('common.buttons.viewProject')}
              statusLabel={project.status === 'production' ? t('common.status.inProduction') : t('common.status.mvp')}
            />
          ))}
        </RecentProjectsGrid>

        {hackathonProjects.length > 0 && (
          <HackathonProjectsSection>
            <SectionTitle>{t('projects.hackathonProjects') || 'Hackathon Projects'}</SectionTitle>
            <HackathonGrid>
              {hackathonProjects.map((project, index) => (
                <SystemPanel
                  key={project.title}
                  $compact
                  $reduced={prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: [0, 0.2, 0.2, 1], delay: prefersReducedMotion ? 0 : index * 0.08 }}
                >
                  <HackathonCardIcon>{getProjectIcon(project.title)}</HackathonCardIcon>
                  <HackathonCardTitle>{project.title}</HackathonCardTitle>
                  <HackathonCardDescription>{project.description}</HackathonCardDescription>
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
                </SystemPanel>
              ))}
            </HackathonGrid>
          </HackathonProjectsSection>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

export default ProjectsPage;