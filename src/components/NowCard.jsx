import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp, levelNumber, levelUp } from '../styles/keyframes';

const CardContainer = styled.article`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.$delay || '0s'};
  animation-fill-mode: both;
  position: relative;
  backdrop-filter: blur(15px);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${soloLevelingTheme.colors.gradients.purple};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    box-shadow: 0 0 15px rgba(108, 92, 231, 0.5);
    z-index: 10;
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
    transform: translateY(-12px) scale(1.03);
    box-shadow: ${soloLevelingTheme.shadows.glow}, 0 12px 40px rgba(108, 92, 231, 0.3);
    border-color: ${soloLevelingTheme.colors.accent.purple};
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-6px) scale(1.01);
    }
  }
`;

const HeaderSection = styled.div`
  height: 160px;
  position: relative;
  background: ${props => props.$gradient || 'linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(253, 203, 110, 0.1))'};
  border-bottom: 2px solid ${soloLevelingTheme.colors.border.primary};
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 140px;
  }
  
  @media (max-width: 480px) {
    height: 120px;
  }
`;

const LevelUpGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.$color || 'rgba(253, 203, 110, 0.3)'} 0%, transparent 70%);
  animation: ${levelUp} 4s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
`;

const LevelNumber = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px ${props => props.$gold ? 'rgba(253, 203, 110, 0.8)' : 'rgba(108, 92, 231, 0.8)'}, 0 0 40px ${props => props.$gold ? 'rgba(253, 203, 110, 0.6)' : 'rgba(108, 92, 231, 0.6)'};
  animation: ${levelNumber} 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  line-height: 1;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    top: 0.75rem;
    left: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

const LevelBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.35rem 0.75rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(10, 10, 15, 0.9));
  border: 1px solid ${soloLevelingTheme.colors.border.accent};
  border-radius: ${soloLevelingTheme.borderRadius.full};
  font-size: 0.75rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  color: ${soloLevelingTheme.colors.accent.gold};
  backdrop-filter: blur(10px);
  z-index: 3;
  box-shadow: 0 0 15px rgba(253, 203, 110, 0.4);
  
  @media (max-width: 768px) {
    padding: 0.3rem 0.65rem;
    font-size: 0.7rem;
    top: 0.6rem;
    right: 0.6rem;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  filter: drop-shadow(0 0 15px rgba(253, 203, 110, 0.7));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  
  ${CardContainer}:hover & {
    transform: translate(-50%, -50%) scale(1.15) rotate(8deg);
    filter: drop-shadow(0 0 25px rgba(253, 203, 110, 0.9));
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Title = styled.h3`
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.35rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  text-align: center;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  z-index: 2;
  
  ${CardContainer}:hover & {
    color: ${soloLevelingTheme.colors.accent.gold};
    text-shadow: 0 0 15px rgba(253, 203, 110, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    bottom: 0.5rem;
    width: calc(100% - 1.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ContentSection = styled.div`
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Description = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
  transition: color 0.3s ease;
  
  ${CardContainer}:hover & {
    color: ${soloLevelingTheme.colors.text.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: left;
  }
`;

const getGradient = (type) => {
  const gradients = {
    backend: 'linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(116, 185, 255, 0.2))',
    sideProjects: 'linear-gradient(135deg, rgba(253, 203, 110, 0.3), rgba(225, 112, 85, 0.2))',
    trading: 'linear-gradient(135deg, rgba(253, 203, 110, 0.4), rgba(255, 215, 0, 0.3))',
    dancing: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.2))',
    default: 'linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(253, 203, 110, 0.1))'
  };
  return gradients[type] || gradients.default;
};

const getGlowColor = (type) => {
  const colors = {
    backend: 'rgba(108, 92, 231, 0.3)',
    sideProjects: 'rgba(253, 203, 110, 0.3)',
    trading: 'rgba(253, 203, 110, 0.4)',
    dancing: 'rgba(138, 43, 226, 0.3)',
    default: 'rgba(253, 203, 110, 0.3)'
  };
  return colors[type] || colors.default;
};

const NowCard = ({ type, level, icon, title, description, delay = '0s' }) => {
  const gradient = getGradient(type);
  const glowColor = getGlowColor(type);
  const isGold = type === 'sideProjects' || type === 'trading';

  return (
    <CardContainer $delay={delay}>
      <HeaderSection $gradient={gradient}>
        <LevelUpGlow $color={glowColor} />
        <LevelNumber $gold={isGold}>{level}</LevelNumber>
        <LevelBadge>LVL {level}</LevelBadge>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
      </HeaderSection>
      <ContentSection>
        <Description>{description}</Description>
      </ContentSection>
    </CardContainer>
  );
};

export default NowCard;
