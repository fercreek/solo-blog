import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { xpBarFill, xpBarProgressive, levelNumber, starTwinkle, particleFloat, levelUp, shimmer } from '../styles/keyframes';

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
  font-size: ${props => props.compact ? '2rem' : '3rem'};
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
    font-size: ${props => props.compact ? '0.4rem' : '0.5rem'};
    font-weight: ${soloLevelingTheme.typography.fontWeight.normal};
    opacity: 0.7;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  @media (max-width: 768px) {
    font-size: ${props => props.compact ? '1.5rem' : '2.5rem'};
    
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
  font-size: ${props => props.compact ? '1rem' : '1.2rem'};
  color: ${soloLevelingTheme.colors.accent.gold};
  filter: drop-shadow(0 0 8px rgba(253, 203, 110, 0.8));
  animation: ${starTwinkle} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: ${props => props.compact ? '0.85rem' : '1rem'};
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

const ParticleEffect = ({ count = 8, color }) => (
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

const StarRating = ({ count = 5, compact = false }) => (
  <StarsContainer>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} compact={compact} delay={`${i * 0.2}s`}>★</Star>
    ))}
  </StarsContainer>
);

const LevelingAnimation = ({ type, level, xp, progressive = true, variant = 'full' }) => {
  const compact = variant === 'compact';
  
  const renderAnimation = () => {
    switch (type) {
      case 'studio':
        return (
          <>
            <LevelUpGlow color="rgba(108, 92, 231, 0.3)" />
            <LevelDisplay compact={compact}>{level}</LevelDisplay>
            <StarRating count={5} compact={compact} />
            <ParticleEffect count={10} color={soloLevelingTheme.colors.accent.purple} />
          </>
        );
      
      case 'dance':
        return (
          <>
            <LevelUpGlow color="rgba(253, 203, 110, 0.3)" />
            <LevelDisplay gold compact={compact}>{level}</LevelDisplay>
            <StarRating count={5} compact={compact} />
            <XPBarComponent xp={xp} progressive={progressive} />
            <ParticleEffect count={12} color={soloLevelingTheme.colors.accent.gold} />
          </>
        );
      
      case 'logistics':
        return (
          <>
            <LevelUpGlow color="rgba(225, 112, 85, 0.3)" />
            <LevelDisplay compact={compact}>{level}</LevelDisplay>
            <XPBarComponent xp={xp} progressive={progressive} />
            <XPBarComponent xp={xp * 0.8} progressive={progressive} />
            <ParticleEffect count={6} color={soloLevelingTheme.colors.accent.orange} />
          </>
        );
      
      case 'finance':
        return (
          <>
            <LevelUpGlow color="rgba(108, 92, 231, 0.3)" />
            <LevelDisplay compact={compact}>{level}</LevelDisplay>
            <XPBarComponent xp={xp} progressive={progressive} />
            <StarRating count={3} compact={compact} />
            <ParticleEffect count={8} color={soloLevelingTheme.colors.accent.blue} />
          </>
        );
      
      default:
        return (
          <>
            <LevelUpGlow />
            <LevelDisplay compact={compact}>{level}</LevelDisplay>
            <XPBarComponent xp={xp} progressive={progressive} />
            <StarRating count={4} compact={compact} />
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

export default LevelingAnimation;
