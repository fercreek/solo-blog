import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { PageContainer } from '../components/PageComponents';
import { fadeInUp, xpBarFill, xpBarProgressive, levelNumber, starTwinkle, particleFloat, levelUp, shimmer } from '../styles/keyframes';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

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

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: ${soloLevelingTheme.colors.gradients.gold};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    
    &::after {
      width: 60px;
      height: 2px;
      bottom: -8px;
    }
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

const ProjectCard2025 = styled.article`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(22, 33, 62, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  backdrop-filter: blur(10px);
  
  ${ProjectPreviewImage} {
    opacity: 0.85;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${soloLevelingTheme.colors.gradients.purple};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.6);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(108, 92, 231, 0.1) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: ${soloLevelingTheme.shadows.glow}, 0 20px 50px rgba(108, 92, 231, 0.3), 0 0 60px rgba(108, 92, 231, 0.2);
    border-color: ${soloLevelingTheme.colors.accent.purple};
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
      animation: ${glowPulse} 3s ease-in-out infinite;
    }
    
    ${ProjectPreviewImage} {
      opacity: 1;
      border-color: ${soloLevelingTheme.colors.accent.purple};
      
      img {
        transform: scale(1.05);
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    
    &:hover {
      transform: translateY(-6px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
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

const ReadMoreButton = styled.a`
  background: ${soloLevelingTheme.colors.gradients.primary};
  color: ${soloLevelingTheme.colors.text.primary};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: ${soloLevelingTheme.borderRadius.md};
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${soloLevelingTheme.animations.transition.fast};
  width: 100%;
  margin-top: 1rem;
  display: block;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background: ${soloLevelingTheme.colors.gradients.gold};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(253, 203, 110, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.9rem;
    margin-top: 0.75rem;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  border-radius: ${soloLevelingTheme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  
  ${props => props.status === 'production' && `
    background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.gold}, ${soloLevelingTheme.colors.accent.orange});
    color: ${soloLevelingTheme.colors.text.primary};
    box-shadow: 0 0 15px rgba(253, 203, 110, 0.4);
  `}
  
  ${props => props.status === 'mvp' && `
    background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.purple}, ${soloLevelingTheme.colors.accent.blue});
    color: ${soloLevelingTheme.colors.text.primary};
    box-shadow: 0 0 15px rgba(108, 92, 231, 0.4);
  `}
`;

const LevelingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  z-index: 2;
  min-height: 200px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 160px;
  }
  
  @media (max-width: 480px) {
    min-height: 140px;
    padding: 0.75rem;
  }
`;

const XPBarContainer = styled.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${soloLevelingTheme.borderRadius.full};
  overflow: hidden;
  margin-bottom: 0.75rem;
  position: relative;
  border: 1px solid rgba(108, 92, 231, 0.2);
`;

const XPBar = styled.div`
  height: 100%;
  width: ${props => props.progressive ? '100%' : `${props.xp || 0}%`};
  background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.purple}, ${soloLevelingTheme.colors.accent.blue});
  border-radius: ${soloLevelingTheme.borderRadius.full};
  animation: ${props => props.progressive ? xpBarProgressive : xpBarFill} ${props => props.progressive ? '7s' : '1.5s'} ${props => props.progressive ? 'ease-in-out infinite' : 'ease-out'};
  box-shadow: 0 0 10px rgba(108, 92, 231, 0.6);
  position: relative;
  transform-origin: left center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: ${shimmer} 4s infinite;
  }
`;

const MultipleXPBars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
`;

const LevelDisplay = styled.div`
  font-size: 3rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  background: ${props => props.gold ? soloLevelingTheme.colors.gradients.gold : soloLevelingTheme.colors.gradients.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 8px ${props => props.gold ? 'rgba(253, 203, 110, 0.8)' : 'rgba(108, 92, 231, 0.8)'});
  animation: ${levelNumber} 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  line-height: 1;
  
  &::before {
    content: 'LVL';
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.5rem;
    font-weight: ${soloLevelingTheme.typography.fontWeight.normal};
    opacity: 0.7;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    
    &::before {
      font-size: 0.4rem;
      top: -0.6rem;
    }
  }
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  justify-content: center;
`;

const Star = styled.span`
  font-size: 1.2rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  filter: drop-shadow(0 0 8px rgba(253, 203, 110, 0.8));
  animation: ${starTwinkle} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${props => props.color || soloLevelingTheme.colors.accent.gold};
  border-radius: 50%;
  box-shadow: 0 0 8px ${props => props.color || soloLevelingTheme.colors.accent.gold}, 0 0 12px ${props => props.color || soloLevelingTheme.colors.accent.gold};
  left: ${props => props.left || '50%'};
  bottom: 0;
  animation: ${particleFloat} ${props => props.duration || 6}s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  opacity: 0;
`;

const LevelUpGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color || 'rgba(253, 203, 110, 0.3)'} 0%, transparent 70%);
  animation: ${levelUp} 4s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
`;

const getProjectAnimationType = (project) => {
  const title = project.title.toLowerCase();
  if (title.includes('studio') || title.includes('link')) return 'studio';
  if (title.includes('dance') || title.includes('vayla')) return 'dance';
  if (title.includes('parcel') || title.includes('logistics') || title.includes('litebox')) return 'logistics';
  if (title.includes('finance') || title.includes('progreso') || title.includes('money')) return 'finance';
  return 'default';
};

const getProjectLevel = (project) => {
  const title = project.title.toLowerCase();
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash) + title.charCodeAt(i);
    hash = hash & hash;
  }
  const year = parseInt(project.date) || 2024;
  const baseLevel = year === 2025 ? 15 : 10;
  const statusBonus = project.status === 'production' ? 5 : 0;
  const uniqueOffset = Math.abs(hash) % 8;
  return baseLevel + statusBonus + uniqueOffset;
};

const getProjectXP = (project) => {
  const year = parseInt(project.date) || 2024;
  const yearProgress = year === 2025 ? 75 : 90;
  const statusBonus = project.status === 'production' ? 15 : 5;
  return Math.min(100, yearProgress + statusBonus);
};

const ParticleEffect = ({ count = 8, color }) => {
  return (
    <ParticlesContainer>
      {Array.from({ length: count }).map((_, i) => (
        <Particle
          key={i}
          left={`${15 + (i * 10)}%`}
          delay={`${i * 0.2}s`}
          duration={6 + (i % 2)}
          color={color}
        />
      ))}
    </ParticlesContainer>
  );
};

const XPBarComponent = ({ xp, multiple = false, progressive = false }) => {
  if (multiple) {
    return (
      <MultipleXPBars>
        <XPBarContainer>
          <XPBar progressive={progressive} />
        </XPBarContainer>
        <XPBarContainer>
          <XPBar progressive={progressive} />
        </XPBarContainer>
        <XPBarContainer>
          <XPBar progressive={progressive} />
        </XPBarContainer>
      </MultipleXPBars>
    );
  }
  
  return (
    <XPBarContainer>
      <XPBar progressive={progressive} xp={!progressive ? xp : undefined} />
    </XPBarContainer>
  );
};

const StarRating = ({ count = 5, gold = false }) => {
  return (
    <StarsContainer>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} delay={`${i * 0.2}s`}>★</Star>
      ))}
    </StarsContainer>
  );
};

const LevelDisplayComponent = ({ level, gold = false }) => {
  return <LevelDisplay gold={gold}>{level}</LevelDisplay>;
};

const LevelingAnimation = ({ type, level, xp, progressive = true }) => {
  const renderAnimation = () => {
    switch (type) {
      case 'studio':
        return (
          <>
            <LevelUpGlow color="rgba(108, 92, 231, 0.3)" />
            <LevelDisplayComponent level={level} />
            <StarRating count={5} gold={false} />
            <ParticleEffect count={10} color={soloLevelingTheme.colors.accent.purple} />
          </>
        );
      
      case 'dance':
        return (
          <>
            <LevelUpGlow color="rgba(253, 203, 110, 0.3)" />
            <LevelDisplayComponent level={level} gold={true} />
            <StarRating count={5} gold={true} />
            <XPBarComponent xp={xp} progressive={progressive} />
            <ParticleEffect count={12} color={soloLevelingTheme.colors.accent.gold} />
          </>
        );
      
      case 'logistics':
        return (
          <>
            <LevelUpGlow color="rgba(225, 112, 85, 0.3)" />
            <LevelDisplayComponent level={level} />
            <XPBarComponent xp={xp} progressive={progressive} />
            <XPBarComponent xp={xp * 0.8} progressive={progressive} />
            <ParticleEffect count={6} color={soloLevelingTheme.colors.accent.orange} />
          </>
        );
      
      case 'finance':
        return (
          <>
            <LevelUpGlow color="rgba(108, 92, 231, 0.3)" />
            <LevelDisplayComponent level={level} />
            <XPBarComponent xp={xp} progressive={progressive} />
            <StarRating count={3} />
            <ParticleEffect count={8} color={soloLevelingTheme.colors.accent.blue} />
          </>
        );
      
      default:
        return (
          <>
            <LevelUpGlow />
            <LevelDisplayComponent level={level} />
            <XPBarComponent xp={xp} progressive={progressive} />
            <StarRating count={4} />
            <ParticleEffect count={8} />
          </>
        );
    }
  };

  return (
    <LevelingContainer>
      {renderAnimation()}
    </LevelingContainer>
  );
};

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
          {featuredPosts.map((post, index) => {
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
                <ReadMoreButton 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {t('common.buttons.exploreProject')}
                </ReadMoreButton>
              </PostCard>
            );
          })}
        </PostsGrid>
      </PostsSection>

      <RecentProjectsSection>
        <SectionTitle>{t('home.sections.recentProjects2025')}</SectionTitle>
        <RecentProjectsGrid>
          {recentProjects2025.map((project, index) => {
            const animationType = getProjectAnimationType(project);
            const level = getProjectLevel(project);
            const xp = getProjectXP(project);
            
            return (
              <ProjectCard2025 key={project.id} delay={`${index * 0.1}s`}>
                <ProjectPreviewImage gradient={project.gradient}>
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      loading="lazy"
                    />
                  ) : (
                    <LevelingAnimation 
                      type={animationType}
                      level={level}
                      xp={xp}
                      progressive={true}
                    />
                  )}
                </ProjectPreviewImage>
              <StatusBadge status={project.status}>
                {project.status === 'production' ? t('common.status.inProduction') : t('common.status.mvp')}
              </StatusBadge>
              <PostCategory>{project.category}</PostCategory>
              <PostTitle>{project.title}</PostTitle>
              <PostExcerpt>{project.excerpt}</PostExcerpt>
              <PostMeta>
                <span>{project.date}</span>
              </PostMeta>
              <ReadMoreButton 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t('common.buttons.viewProject')}
              </ReadMoreButton>
              </ProjectCard2025>
            );
          })}
        </RecentProjectsGrid>
      </RecentProjectsSection>
    </PageContainer>
  );
};

export default HomePage;