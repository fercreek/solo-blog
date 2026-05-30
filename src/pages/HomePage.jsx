import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { PageContainer } from '../components/PageComponents';
import { SectionTitle } from '../styles/designSystem';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import SystemButton from '../components/SystemButton';
import PageHead from '../components/PageHead';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.6), 0 0 40px rgba(56, 189, 248, 0.2);
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

const ParallaxLayerStyles = styled(motion.div)`
  position: absolute;
  top: -20%;
  left: -10%;
  width: 120%;
  height: 140%;
  pointer-events: none;
  will-change: transform;
  z-index: 0;
  background: radial-gradient(ellipse 60% 40% at 50% 20%, rgba(56, 189, 248, 0.22) 0%, transparent 50%),
              radial-gradient(ellipse 80% 50% at 80% 60%, rgba(109, 93, 211, 0.12) 0%, transparent 50%);
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.07), transparent 45%),
    rgba(10, 18, 34, 0.78);
  clip-path: polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px);
  border: 1px solid rgba(56, 189, 248, 0.32);
  box-shadow: 0 0 26px rgba(56, 189, 248, 0.12), 0 20px 60px -15px rgba(0, 0, 0, 0.55);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(18px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #38BDF8, #7DD3FC, transparent);
    box-shadow: 0 0 18px rgba(56, 189, 248, 0.6);
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Kicker = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #7DD3FC;
  margin-bottom: 1.1rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 0 14px rgba(56, 189, 248, 0.5);

  &::before { content: '▸ '; opacity: 0.8; }
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
  background: linear-gradient(135deg, #7DD3FC 0%, #38BDF8 50%, #E8F1FF 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 20px rgba(56, 189, 248, 0.3));
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
    height: 2px;
    margin: 1.25rem auto 0;
    background: linear-gradient(90deg, #38BDF8, #7DD3FC);
    box-shadow: 0 0 12px rgba(56, 189, 248, 0.6);
    opacity: 0.85;
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

const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2.25rem;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    padding: 0 1.5rem;
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
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.06), transparent 42%),
    rgba(10, 18, 34, 0.72);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.32);
  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px);
  padding: ${props => props.$isLarge ? '2.5rem' : '2rem'};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: auto;
  transform: ${props => props.$isLarge ? 'scale(1.04)' : 'scale(1)'};

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
    left: 14px;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #38BDF8, #7DD3FC, transparent);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.5);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-8px) ${props => props.$isLarge ? 'scale(1.04)' : ''};
    box-shadow: 0 0 22px rgba(56, 189, 248, 0.25), 0 22px 50px rgba(2, 6, 16, 0.55);
    border-color: #38BDF8;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    transform: scale(1);

    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const PostTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #E8F1FF;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const PostExcerpt = styled.p`
  color: #94A8C4;
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
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: #94A8C4;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const PostCategory = styled.span`
  align-self: flex-start;
  font-family: 'JetBrains Mono', monospace;
  color: #7DD3FC;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.4);
  padding: 0.25rem 0.7rem;
  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);
  font-size: 0.66rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 1rem;
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
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(116, 185, 255, 0.2))'
    },
    {
      id: 2,
      title: 'Vayla',
      excerpt: t('home.featured.vaylaDance.excerpt'),
      date: '2024',
      readTime: `${language === 'es' ? '4' : '4'} ${language === 'es' ? 'min lectura' : t('common.time.minRead')}`,
      url: 'https://www.vayla.dance/',
      category: t('common.status.project'),
      status: 'production',
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2))'
    },
    {
      id: 3,
      title: 'Cargo Control · Litebox',
      excerpt: t('home.recent.cargoControl.excerpt'),
      date: '2025',
      readTime: `${language === 'es' ? '3 min lectura' : `3 ${t('common.time.minRead')}`}`,
      url: 'https://www.liteboxparcel.com/',
      category: t('common.status.project'),
      status: 'production',
      gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(14, 165, 233, 0.2))'
    }
  ];

  const recentProjects2025 = [
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
    }
  ];

  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, (v) => (prefersReducedMotion ? 0 : v * 0.25));

  return (
    <PageContainer>
      <PageHead title={t('home.hero.title')} description={t('home.hero.description')} />
      <HeroWrapper>
        <HeroSection>
        <ParallaxLayerStyles style={{ y: parallaxY }} />
        <Kicker>{t('home.hero.kicker')}</Kicker>
        <Name>{t('home.hero.name')}</Name>
        <Title>{t('home.hero.title')}</Title>
        <Description>
          {t('home.hero.description')}
        </Description>
        <HeroActions>
          <SystemButton to="/projects" variant="primary">{t('home.hero.ctaPrimary')}</SystemButton>
          <SystemButton to="/about" variant="secondary">{t('home.hero.ctaSecondary')}</SystemButton>
        </HeroActions>
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
                  <SystemButton href={post.url} target="_blank" rel="noopener noreferrer" variant="secondary">
                    {t('common.buttons.exploreProject')}
                  </SystemButton>
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