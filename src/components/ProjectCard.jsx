import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes';
import LevelingAnimation from './LevelingAnimation';
import Button from './Button';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(108, 92, 231, 0.6), 0 0 40px rgba(253, 203, 110, 0.2);
  }
`;

export const getProjectAnimationType = (project) => {
  const title = (project.title || '').toLowerCase();
  if (title.includes('studio') || title.includes('link')) return 'studio';
  if (title.includes('dance') || title.includes('vayla')) return 'dance';
  if (title.includes('parcel') || title.includes('logistics') || title.includes('litebox')) return 'logistics';
  if (title.includes('finance') || title.includes('progreso') || title.includes('money')) return 'finance';
  return 'default';
};

export const getProjectLevel = (project) => {
  const title = (project.title || '').toLowerCase();
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

export const getProjectXP = (project) => {
  const year = parseInt(project.date) || 2024;
  const yearProgress = year === 2025 ? 75 : 90;
  const statusBonus = project.status === 'production' ? 15 : 5;
  return Math.min(100, yearProgress + statusBonus);
};

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
  
  @media (max-width: 768px) {
    height: 160px;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    height: 140px;
    margin-bottom: 1rem;
  }
`;

const Card = styled.article`
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

export const StatusBadge = styled.span`
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

const ButtonWrapper = styled.div`
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
  
  @media (max-width: 768px) {
    margin-top: 0.75rem;
  }
`;

const ProjectCard = ({
  title,
  excerpt,
  date,
  url,
  status,
  category,
  gradient,
  image,
  animationType,
  level,
  xp,
  delay = '0s',
  buttonText = 'View Project',
  statusLabel
}) => {
  return (
    <Card delay={delay}>
      <ProjectPreviewImage gradient={gradient}>
        {image ? (
          <img src={image} alt={`${title} preview`} loading="lazy" />
        ) : (
          <LevelingAnimation
            type={animationType}
            level={level}
            xp={xp}
            progressive
          />
        )}
      </ProjectPreviewImage>
      <StatusBadge status={status}>
        {statusLabel || (status === 'production' ? 'In Production' : 'MVP')}
      </StatusBadge>
      <PostCategory>{category}</PostCategory>
      <PostTitle>{title}</PostTitle>
      <PostExcerpt>{excerpt}</PostExcerpt>
      <PostMeta>
        <span>{date}</span>
      </PostMeta>
      <ButtonWrapper>
        <Button as="a" href={url} target="_blank" rel="noopener noreferrer" variant="secondary">
          {buttonText}
        </Button>
      </ButtonWrapper>
    </Card>
  );
};

export default ProjectCard;
