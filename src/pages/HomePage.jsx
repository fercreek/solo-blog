import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { PageContainer } from '../components/PageComponents';
import { SectionTitle } from '../styles/designSystem';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { useParallax } from '../hooks/useParallax';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import PageHead from '../components/PageHead';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(108, 92, 231, 0.6), 0 0 40px rgba(253, 203, 110, 0.2);
  }
`;

const HeroWrapper = styled.section`
  position: relative;
  margin-bottom: 4rem;
  overflow: hidden;
  border-radius: ${soloLevelingTheme.borderRadius.xl};

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 140%;
  pointer-events: none;
  will-change: transform;
  z-index: 0;
  background: radial-gradient(ellipse 60% 40% at 50% 20%, rgba(108, 92, 231, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 80% 60%, rgba(253, 203, 110, 0.06) 0%, transparent 50%);
  transform: translateY(${props => props.$offset}px);
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(165deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.98) 50%, rgba(10, 10, 15, 0.99) 100%);
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  box-shadow: ${soloLevelingTheme.shadows.purple}, 0 20px 60px -15px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold}, ${soloLevelingTheme.colors.accent.purple}, ${soloLevelingTheme.colors.accent.gold});
    border-radius: ${soloLevelingTheme.borderRadius.xl} ${soloLevelingTheme.borderRadius.xl} 0 0;
    box-shadow: 0 0 20px rgba(253, 203, 110, 0.5), 0 0 40px rgba(108, 92, 231, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
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
  font-size: clamp(2.25rem, 6vw, 4rem);
  margin-bottom: 0.75rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.gold} 0%, ${soloLevelingTheme.colors.accent.orange} 50%, ${soloLevelingTheme.colors.accent.gold} 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 20px rgba(253, 203, 110, 0.2));
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 2.75rem);
    margin-bottom: 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: ${soloLevelingTheme.colors.text.secondary};
  margin-bottom: 1.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.95;
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    margin: 1.25rem auto 0;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.purple}, ${soloLevelingTheme.colors.accent.gold});
    border-radius: ${soloLevelingTheme.borderRadius.full};
    opacity: 0.8;
  }
`;

const Description = styled.p`
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.8;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.05rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.normal};
  position: relative;
  z-index: 1;
  padding: 0 1.5rem;
  opacity: 0.92;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    padding: 0 0.5rem;
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

  const parallaxOffset = useParallax(0.25);

  return (
    <PageContainer>
      <PageHead title={t('home.hero.title')} description={t('home.hero.description')} />
      <HeroWrapper>
        <HeroSection>
        <ParallaxLayer $offset={parallaxOffset} />
        <Name>{t('home.hero.name')}</Name>
        <Title>{t('home.hero.title')}</Title>
        <Description>
          {t('home.hero.description')}
        </Description>
      </HeroSection>
      </HeroWrapper>
      
      <PostsSection>
        <SectionTitle>{t('home.sections.featuredPosts')}</SectionTitle>
        <PostsGrid>
          {featuredPosts.map((post) => {
            const isStudioLink = post.id === 1;
            
            return (
              <PostCard key={post.id} $isLarge={isStudioLink}>
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