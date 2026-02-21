import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { PageContainer } from '../components/PageComponents';
import { SectionTitle } from '../styles/designSystem';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import LevelingAnimation from '../components/LevelingAnimation';
import ProjectCard, { getProjectAnimationType, getProjectLevel, getProjectXP } from '../components/ProjectCard';
import Button from '../components/Button';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(108, 92, 231, 0.6), 0 0 40px rgba(253, 203, 110, 0.2);
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 3rem 0;
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  box-shadow: ${soloLevelingTheme.shadows.purple};
  margin-bottom: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(108, 92, 231, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }
`;

const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  background: ${soloLevelingTheme.colors.gradients.gold};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: ${soloLevelingTheme.colors.gradients.gold};
  animation: ${glowPulse} 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${soloLevelingTheme.colors.gradients.primary};
    border-radius: 50%;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  background: ${soloLevelingTheme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${soloLevelingTheme.colors.text.secondary};
  margin-bottom: 2rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  position: relative;
  z-index: 1;
`;

const Description = styled.p`
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.8;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.1rem;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    padding: 0;
  }
`;

const PostsSection = styled.section`
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const RecentProjectsSection = styled.section`
  margin-top: 5rem;
  
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

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

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const PostCard = styled.article.withConfig({
  shouldForwardProp: (prop) => prop !== '$isLarge',
})`
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: ${props => props.$isLarge ? '2.5rem' : '2rem'};
  transition: all ${soloLevelingTheme.animations.transition.normal};
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  min-height: auto;
  transform: ${props => props.$isLarge ? 'scale(1.05)' : 'scale(1)'};
  
  ${props => props.$isLarge && `
    z-index: 2;
    
    ${ProjectPreviewImage} {
      height: 220px;
    }
    
    ${PostTitle} {
      font-size: 1.75rem;
    }
    
    ${PostExcerpt} {
      font-size: 1.05rem;
      line-height: 1.7;
    }
  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${soloLevelingTheme.colors.gradients.gold};
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${soloLevelingTheme.shadows.purple}, 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: ${soloLevelingTheme.colors.accent.purple};
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectPreviewImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
  background: ${props => props.gradient || 'linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(253, 203, 110, 0.1))'};
  border: 1px solid rgba(108, 92, 231, 0.3);
  transition: all 0.4s ease;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(10, 10, 15, 0.4) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 70%
    );
    z-index: 0;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    height: 160px;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    margin-bottom: 1rem;
  }
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  margin-bottom: 1rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const PostExcerpt = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: ${soloLevelingTheme.colors.text.muted};
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const PostCategory = styled.span`
  background: ${soloLevelingTheme.colors.gradients.primary};
  color: ${soloLevelingTheme.colors.text.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${soloLevelingTheme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ReadMoreButtonWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  
  a {
    display: block;
    text-align: center;
    
    @media (max-width: 768px) {
      padding: 0.625rem 1.25rem;
      font-size: 0.9rem;
    }
  }
`;

const HomePage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const featuredPosts = [
    {
      id: 1,
      title: 'Studio Link',
      excerpt: t('home.featured.studioLink.excerpt'),
      date: '2024',
      readTime: `${language === 'es' ? '3' : '3'} ${language === 'es' ? 'min lectura' : t('common.time.minRead')}`,
      url: 'https://studiolink.online/',
      category: t('common.status.project'),
      status: 'production',
      gradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(116, 185, 255, 0.2))'
    },
    {
      id: 2,
      title: 'Vayla Dance',
      excerpt: t('home.featured.vaylaDance.excerpt'),
      date: '2024',
      readTime: `${language === 'es' ? '4' : '4'} ${language === 'es' ? 'min lectura' : t('common.time.minRead')}`,
      url: 'https://www.vayla.dance/',
      category: t('common.status.project'),
      status: 'production',
      gradient: 'linear-gradient(135deg, rgba(253, 203, 110, 0.3), rgba(225, 112, 85, 0.2))'
    }
  ];

  const recentProjects2025 = [
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
  ];

  return (
    <PageContainer>
      <HeroSection>
        <Name>{t('home.hero.name')}</Name>
        <Title>{t('home.hero.title')}</Title>
        <Description>
          {t('home.hero.description')}
        </Description>
      </HeroSection>
      
      <PostsSection>
        <SectionTitle>{t('home.sections.featuredPosts')}</SectionTitle>
        <PostsGrid>
          {featuredPosts.map((post) => {
            const animationType = getProjectAnimationType(post);
            const level = getProjectLevel(post);
            const xp = getProjectXP(post);
            const isStudioLink = post.id === 1;
            
            return (
              <PostCard key={post.id} $isLarge={isStudioLink}>
                <ProjectPreviewImage gradient={post.gradient}>
                  <LevelingAnimation 
                    type={animationType}
                    level={level}
                    xp={xp}
                    progressive={true}
                  />
                </ProjectPreviewImage>
                <PostCategory>{post.category}</PostCategory>
                <PostTitle>{post.title}</PostTitle>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                <PostMeta>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </PostMeta>
                <ReadMoreButtonWrapper>
                  <Button as="a" href={post.url} target="_blank" rel="noopener noreferrer" variant="secondary">
                    {t('common.buttons.exploreProject')}
                  </Button>
                </ReadMoreButtonWrapper>
              </PostCard>
            );
          })}
        </PostsGrid>
      </PostsSection>

      <RecentProjectsSection>
        <SectionTitle>{t('home.sections.recentProjects2025')}</SectionTitle>
        <RecentProjectsGrid>
          {recentProjects2025.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              excerpt={project.excerpt}
              date={project.date}
              url={project.url}
              status={project.status}
              category={project.category}
              gradient={project.gradient}
              image={project.image}
              animationType={getProjectAnimationType(project)}
              level={getProjectLevel(project)}
              xp={getProjectXP(project)}
              delay={`${index * 0.1}s`}
              buttonText={t('common.buttons.viewProject')}
              statusLabel={project.status === 'production' ? t('common.status.inProduction') : t('common.status.mvp')}
            />
          ))}
        </RecentProjectsGrid>
      </RecentProjectsSection>
    </PageContainer>
  );
};

export default HomePage;