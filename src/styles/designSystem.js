import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from './soloLevelingTheme';
import { fadeInUp } from './keyframes';

export const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(253, 203, 110, 0.3), 0 0 40px rgba(108, 92, 231, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(253, 203, 110, 0.5), 0 0 60px rgba(108, 92, 231, 0.3);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HighlightCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.98), rgba(22, 33, 62, 0.98));
  border: 2px solid ${soloLevelingTheme.colors.border.accent};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  padding: 3rem;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out;
  backdrop-filter: blur(15px);
  box-shadow: ${soloLevelingTheme.shadows.glow}, 0 8px 32px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${soloLevelingTheme.shadows.glow}, 0 12px 40px rgba(0, 0, 0, 0.5);
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold},
      ${soloLevelingTheme.colors.accent.purple},
      ${soloLevelingTheme.colors.accent.gold},
      ${soloLevelingTheme.colors.accent.orange}
    );
    background-size: 200% 100%;
    box-shadow: 0 0 25px rgba(253, 203, 110, 0.6), 0 0 50px rgba(108, 92, 231, 0.4);
    animation: ${shimmer} 3s linear infinite;
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
      rgba(225, 112, 85, 0.15) 0%,
      rgba(108, 92, 231, 0.1) 30%,
      transparent 70%
    );
    pointer-events: none;
    animation: ${float} 6s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 3rem;
  }
`;

export const GradientBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold});
  color: ${soloLevelingTheme.colors.text.primary};
  padding: 0.875rem 1.75rem;
  border-radius: ${soloLevelingTheme.borderRadius.full};
  font-size: 1.05rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  margin-bottom: ${props => props.marginBottom || '2rem'};
  box-shadow: ${soloLevelingTheme.shadows.glow}, 0 4px 15px rgba(225, 112, 85, 0.4);
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
  border: 1px solid rgba(253, 203, 110, 0.3);
  
  &:hover {
    transform: scale(1.08) translateY(-2px);
    box-shadow: 0 0 40px rgba(253, 203, 110, 0.7), 0 6px 20px rgba(225, 112, 85, 0.5);
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
  
  svg {
    filter: drop-shadow(0 0 6px rgba(255, 255, 255, 0.6));
    animation: ${float} 3s ease-in-out infinite;
  }
`;

export const SectionTitle = styled.h2`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 2.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin: ${props => props.margin || '4rem 0 3rem'};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  text-align: center;
  position: relative;
  background: ${soloLevelingTheme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(253, 203, 110, 0.3);
  animation: ${fadeInUp} 0.8s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: radial-gradient(
      circle,
      rgba(253, 203, 110, 0.1) 0%,
      transparent 70%
    );
    z-index: -1;
    animation: ${pulse} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: ${soloLevelingTheme.colors.gradients.gold};
    border-radius: ${soloLevelingTheme.borderRadius.full};
    box-shadow: 0 0 20px rgba(253, 203, 110, 0.6), 0 0 40px rgba(253, 203, 110, 0.3);
    animation: ${glowPulse} 2s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 3rem 0 2rem;
  }
`;

export const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(15px);
  cursor: ${props => props.cursor || 'pointer'};
  
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
      animation: ${float} 3s ease-in-out infinite;
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  margin-bottom: 1.75rem;
  filter: drop-shadow(0 0 15px rgba(253, 203, 110, 0.7));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: radial-gradient(
      circle,
      rgba(253, 203, 110, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: scale(1.15) rotate(8deg);
    filter: drop-shadow(0 0 25px rgba(253, 203, 110, 0.9));
    
    &::before {
      opacity: 1;
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CardTitle = styled.h3`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 1.25rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  background: ${soloLevelingTheme.colors.gradients.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  position: relative;
  
  ${FeatureCard}:hover & {
    background: ${soloLevelingTheme.colors.gradients.gold};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const CardDescription = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
  transition: color 0.3s ease;
  
  ${FeatureCard}:hover & {
    color: ${soloLevelingTheme.colors.text.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  backdrop-filter: blur(15px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => {
      if (props.variant === 'completed') return soloLevelingTheme.colors.gradients.gold;
      if (props.variant === 'progress') return soloLevelingTheme.colors.gradients.purple;
      return soloLevelingTheme.colors.gradients.mana;
    }};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    box-shadow: ${props => {
      if (props.variant === 'completed') return '0 0 15px rgba(253, 203, 110, 0.5)';
      if (props.variant === 'progress') return '0 0 15px rgba(108, 92, 231, 0.5)';
      return '0 0 15px rgba(116, 185, 255, 0.5)';
    }};
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${soloLevelingTheme.shadows.glow}, 0 12px 40px rgba(108, 92, 231, 0.3);
    border-color: ${soloLevelingTheme.colors.accent.purple};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

export const StatIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => {
    if (props.variant === 'completed') return soloLevelingTheme.colors.accent.gold;
    if (props.variant === 'progress') return soloLevelingTheme.colors.accent.purple;
    return soloLevelingTheme.colors.accent.blue;
  }};
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 12px ${props => {
    if (props.variant === 'completed') return 'rgba(253, 203, 110, 0.6)';
    if (props.variant === 'progress') return 'rgba(108, 92, 231, 0.6)';
    return 'rgba(116, 185, 255, 0.6)';
  }});
  transition: all 0.3s ease;
  
  ${StatCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    filter: drop-shadow(0 0 20px ${props => {
      if (props.variant === 'completed') return 'rgba(253, 203, 110, 0.8)';
      if (props.variant === 'progress') return 'rgba(108, 92, 231, 0.8)';
      return 'rgba(116, 185, 255, 0.8)';
    }});
  }
`;

export const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: ${soloLevelingTheme.colors.text.primary};
  margin-bottom: 0.5rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  background: ${props => {
    if (props.variant === 'completed') return soloLevelingTheme.colors.gradients.gold;
    if (props.variant === 'progress') return soloLevelingTheme.colors.gradients.purple;
    return soloLevelingTheme.colors.gradients.mana;
  }};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: ${soloLevelingTheme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
`;

export const AnimatedListItem = styled.li`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.85), rgba(10, 10, 15, 0.85));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-left: 5px solid ${soloLevelingTheme.colors.accent.orange};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 1.5rem 1.75rem;
  color: ${soloLevelingTheme.colors.text.primary};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  font-size: 1.05rem;
  cursor: pointer;
  animation: ${slideIn} 0.5s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  &::before {
    content: '▶';
    color: ${soloLevelingTheme.colors.accent.orange};
    margin-right: 1rem;
    font-size: 1rem;
    filter: drop-shadow(0 0 6px rgba(225, 112, 85, 0.7));
    transition: all 0.4s ease;
    display: inline-block;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(108, 92, 231, 0.2), transparent);
    transition: width 0.4s ease;
    z-index: 0;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(26, 26, 46, 0.95));
    transform: translateX(12px) translateY(-3px);
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
    box-shadow: 0 6px 25px rgba(108, 92, 231, 0.4), 0 0 15px rgba(253, 203, 110, 0.2);
    
    &::before {
      transform: translateX(6px) scale(1.2);
      color: ${soloLevelingTheme.colors.accent.gold};
      filter: drop-shadow(0 0 10px rgba(253, 203, 110, 0.8));
    }
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 3rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(10, 10, 15, 0.9));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &::placeholder {
    color: ${soloLevelingTheme.colors.text.secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${soloLevelingTheme.colors.accent.purple};
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2), 0 0 20px rgba(108, 92, 231, 0.3);
    background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  }
`;

export const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active 
    ? `linear-gradient(135deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold})`
    : `linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(10, 10, 15, 0.9))`
  };
  border: 2px solid ${props => props.active 
    ? soloLevelingTheme.colors.accent.gold
    : soloLevelingTheme.colors.border.primary
  };
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  color: ${props => props.active 
    ? soloLevelingTheme.colors.text.primary
    : soloLevelingTheme.colors.text.secondary
  };
  font-size: 0.95rem;
  font-weight: ${props => props.active 
    ? soloLevelingTheme.typography.fontWeight.semibold
    : soloLevelingTheme.typography.fontWeight.medium
  };
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.active 
    ? soloLevelingTheme.shadows.glow
    : 'none'
  };
  
  &:hover {
    background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold});
    color: ${soloLevelingTheme.colors.text.primary};
    border-color: ${soloLevelingTheme.colors.accent.gold};
    box-shadow: ${soloLevelingTheme.shadows.glow};
    transform: translateY(-2px) scale(1.05);
  }
  
  &:active {
    transform: translateY(0) scale(1);
  }
  
  svg {
    filter: drop-shadow(0 0 4px ${props => props.active 
      ? 'rgba(253, 203, 110, 0.6)'
      : 'rgba(255, 255, 255, 0.3)'
    });
  }
`;

