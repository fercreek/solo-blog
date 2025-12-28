import styled, { keyframes } from 'styled-components';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription
} from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp, xpBarProgressive, levelNumber, starTwinkle, particleFloat, levelUp, shimmer as shimmerKeyframe } from '../styles/keyframes.js';
import { FaClock, FaMapMarkerAlt, FaCode, FaDumbbell, FaChartLine, FaUsers, FaBullseye, FaLaptopCode, FaProjectDiagram, FaCoins, FaMusic, FaRocket, FaCalendarAlt } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import NowCard from '../components/NowCard';

const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(253, 203, 110, 0.3), 0 0 40px rgba(108, 92, 231, 0.2);
  }
  50% {
    box-shadow: 0 0 30px rgba(253, 203, 110, 0.5), 0 0 60px rgba(108, 92, 231, 0.3);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HighlightSection = styled.div`
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
`;

const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold});
  color: ${soloLevelingTheme.colors.text.primary};
  padding: 0.875rem 1.75rem;
  border-radius: ${soloLevelingTheme.borderRadius.full};
  font-size: 1.05rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  margin-bottom: 2rem;
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

const HighlightText = styled.p`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.2rem;
  line-height: 1.9;
  position: relative;
  z-index: 1;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.3px;
  text-align: justify;
  text-justify: inter-word;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
    text-align: left;
  }
`;

const SectionTitle = styled.h2`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 2.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin: 4rem 0 3rem;
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

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ActivityCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  position: relative;
  overflow: hidden;
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
    padding: 1.25rem;
  }
`;

const ActivityIcon = styled.div`
  font-size: 2.5rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  margin-bottom: 0.75rem;
  margin-top: 0;
  filter: drop-shadow(0 0 15px rgba(253, 203, 110, 0.7));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-block;
  position: relative;
  z-index: 2;
  
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
  
  ${ActivityCard}:hover & {
    transform: scale(1.15) rotate(8deg);
    filter: drop-shadow(0 0 25px rgba(253, 203, 110, 0.9));
    
    &::before {
      opacity: 1;
      animation: ${pulse} 2s ease-in-out infinite;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ActivityContentTop = styled.div`
  position: relative;
  z-index: 2;
  padding-top: 160px;
  
  @media (max-width: 768px) {
    padding-top: 140px;
  }
  
  @media (max-width: 480px) {
    padding-top: 120px;
  }
`;

const ActivityContentBottom = styled.div`
  position: relative;
  z-index: 2;
`;

const ActivityTitle = styled.h3`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.35rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 0.75rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  text-align: center;
  z-index: 2;
  
  ${ActivityCard}:hover & {
    color: ${soloLevelingTheme.colors.accent.gold};
    text-shadow: 0 0 15px rgba(253, 203, 110, 0.8), 0 2px 10px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    bottom: 0.5rem;
    width: calc(100% - 1.5rem);
  }
`;

const ActivityDescription = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
  transition: color 0.3s ease;
  text-align: justify;
  text-justify: inter-word;
  position: relative;
  z-index: 2;
  
  ${ActivityCard}:hover & {
    color: ${soloLevelingTheme.colors.text.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: left;
  }
`;

const FocusSection = styled.div`
  background: linear-gradient(135deg, rgba(22, 33, 62, 0.95), rgba(26, 26, 46, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.accent};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  padding: 3rem 2rem;
  margin: 3rem 0;
  animation: ${fadeInUp} 0.8s ease-out;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: ${soloLevelingTheme.shadows.purple};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${soloLevelingTheme.colors.gradients.gold};
    box-shadow: 0 0 20px rgba(253, 203, 110, 0.5);
  }
`;

const FocusTitle = styled.h2`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 2rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 2rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: ${soloLevelingTheme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  svg {
    filter: drop-shadow(0 0 10px rgba(253, 203, 110, 0.6));
  }
`;

const FocusList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const FocusCard = styled.div`
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.95));
  border: 2px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 1.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.$delay || '0s'};
  animation-fill-mode: both;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.$gradient || soloLevelingTheme.colors.gradients.gold};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
    box-shadow: 0 0 15px ${props => props.$glowColor || 'rgba(253, 203, 110, 0.6)'};
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
      ${props => props.$hoverGlow || 'rgba(108, 92, 231, 0.1)'} 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${soloLevelingTheme.shadows.glow}, 0 8px 30px rgba(108, 92, 231, 0.3);
    border-color: ${props => props.$borderHover || soloLevelingTheme.colors.accent.purple};
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;

const FocusIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.$color || soloLevelingTheme.colors.accent.gold};
  filter: drop-shadow(0 0 12px ${props => props.$glowColor || 'rgba(253, 203, 110, 0.6)'});
  transition: all 0.4s ease;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${FocusCard}:hover & {
    transform: scale(1.15) rotate(8deg);
    filter: drop-shadow(0 0 20px ${props => props.$glowColor || 'rgba(253, 203, 110, 0.9)'});
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FocusText = styled.div`
  flex: 1;
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.05rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  line-height: 1.6;
  transition: all 0.3s ease;
  
  ${FocusCard}:hover & {
    color: ${soloLevelingTheme.colors.accent.gold};
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FocusItem = styled.li`
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
  z-index: 1;
  
  &::before {
    content: '▶';
    color: ${soloLevelingTheme.colors.accent.orange};
    margin-right: 1rem;
    font-size: 1rem;
    filter: drop-shadow(0 0 6px rgba(225, 112, 85, 0.7));
    transition: all 0.4s ease;
    display: inline-block;
    position: relative;
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(90deg, rgba(108, 92, 231, 0.25), rgba(253, 203, 110, 0.15), transparent);
    transition: width 0.5s ease;
    z-index: 0;
    box-shadow: inset 0 0 30px rgba(108, 92, 231, 0.3);
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.25), rgba(26, 26, 46, 0.95));
    transform: translateX(12px) translateY(-3px);
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
    box-shadow: 0 6px 25px rgba(108, 92, 231, 0.5), 0 0 20px rgba(253, 203, 110, 0.3), 0 0 40px rgba(108, 92, 231, 0.2);
    
    &::before {
      transform: translateX(6px) scale(1.3) rotate(15deg);
      color: ${soloLevelingTheme.colors.accent.gold};
      filter: drop-shadow(0 0 12px rgba(253, 203, 110, 0.9));
      animation: ${pulse} 1.5s ease-in-out infinite;
    }
    
    &::after {
      width: 100%;
      animation: ${shimmer} 2s ease-in-out infinite;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
    
    &:hover {
      transform: translateX(8px) translateY(-2px);
    }
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.9rem;
  margin-top: 3rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.6), rgba(10, 10, 15, 0.6));
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  backdrop-filter: blur(10px);
  
  svg {
    color: ${soloLevelingTheme.colors.accent.gold};
    filter: drop-shadow(0 0 8px rgba(253, 203, 110, 0.4));
  }
`;

const LevelingActivityContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 160px;
  border-radius: ${soloLevelingTheme.borderRadius.lg} ${soloLevelingTheme.borderRadius.lg} 0 0;
  overflow: hidden;
  background: ${props => props.gradient || 'linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(253, 203, 110, 0.1))'};
  border: none;
  border-bottom: 2px solid ${soloLevelingTheme.colors.border.primary};
  transition: all 0.4s ease;
  pointer-events: none;
  z-index: 0;
  
  @media (max-width: 768px) {
    height: 140px;
  }
  
  @media (max-width: 480px) {
    height: 120px;
  }
`;

const ActivityLevelBadge = styled.div`
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
`;

const ActivityXPContainer = styled.div`
  width: 100%;
  max-width: 180px;
  height: 6px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${soloLevelingTheme.borderRadius.full};
  overflow: hidden;
  margin-bottom: 0.5rem;
  position: relative;
  border: 1px solid rgba(108, 92, 231, 0.2);
`;

const ActivityXPBar = styled.div`
  height: 100%;
  width: ${props => props.progressive ? '100%' : `${props.xp || 0}%`};
  background: ${props => props.gradient || 'linear-gradient(90deg, rgba(108, 92, 231, 0.8), rgba(116, 185, 255, 0.8))'};
  border-radius: ${soloLevelingTheme.borderRadius.full};
  animation: ${props => props.progressive ? xpBarProgressive : 'none'} ${props => props.progressive ? '7s' : '0s'} ease-in-out infinite;
  box-shadow: 0 0 8px ${props => props.shadowColor || 'rgba(108, 92, 231, 0.6)'};
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
    animation: ${shimmerKeyframe} 4s infinite;
  }
`;

const MultipleActivityXPBars = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
`;

const ActivityLevelDisplay = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 3rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 20px ${props => props.gold ? 'rgba(253, 203, 110, 0.8)' : 'rgba(108, 92, 231, 0.8)'}, 0 0 40px ${props => props.gold ? 'rgba(253, 203, 110, 0.6)' : 'rgba(108, 92, 231, 0.6)'};
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

const ActivityStarsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
  justify-content: center;
`;

const ActivityStar = styled.span`
  font-size: 1rem;
  color: ${props => props.gold ? soloLevelingTheme.colors.accent.gold : soloLevelingTheme.colors.accent.purple};
  filter: drop-shadow(0 0 6px ${props => props.gold ? 'rgba(253, 203, 110, 0.8)' : 'rgba(108, 92, 231, 0.8)'});
  animation: ${starTwinkle} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ActivityParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;

const ActivityParticle = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  background: ${props => props.color || soloLevelingTheme.colors.accent.gold};
  border-radius: 50%;
  box-shadow: 0 0 6px ${props => props.color || soloLevelingTheme.colors.accent.gold}, 0 0 10px ${props => props.color || soloLevelingTheme.colors.accent.gold};
  left: ${props => props.left || '50%'};
  bottom: 0;
  animation: ${particleFloat} ${props => props.duration || 6}s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  opacity: 0;
`;

const ActivityLevelUpGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color || 'rgba(253, 203, 110, 0.3)'} 0%, transparent 70%);
  animation: ${levelUp} 4s ease-in-out infinite;
  z-index: 0;
  pointer-events: none;
`;

const HighlightParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const HighlightParticle = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: ${props => props.color || soloLevelingTheme.colors.accent.gold};
  border-radius: 50%;
  box-shadow: 0 0 10px ${props => props.color || soloLevelingTheme.colors.accent.gold}, 0 0 15px ${props => props.color || soloLevelingTheme.colors.accent.gold};
  left: ${props => props.left || '50%'};
  bottom: ${props => props.bottom || '0'};
  animation: ${particleFloat} ${props => props.duration || 8}s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
  opacity: 0.6;
`;

const getActivityType = (title) => {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('backend') || titleLower.includes('development')) return 'backend';
  if (titleLower.includes('side') || titleLower.includes('project')) return 'sideProjects';
  if (titleLower.includes('trading') || titleLower.includes('crypto')) return 'trading';
  if (titleLower.includes('danc')) return 'dancing';
  return 'default';
};

const getActivityLevel = (type) => {
  const levels = {
    backend: 25,
    sideProjects: 20,
    trading: 18,
    dancing: 15,
    default: 10
  };
  return levels[type] || 10;
};

const getActivityGradient = (type) => {
  const gradients = {
    backend: 'linear-gradient(135deg, rgba(108, 92, 231, 0.3), rgba(116, 185, 255, 0.2))',
    sideProjects: 'linear-gradient(135deg, rgba(253, 203, 110, 0.3), rgba(225, 112, 85, 0.2))',
    trading: 'linear-gradient(135deg, rgba(253, 203, 110, 0.4), rgba(255, 215, 0, 0.3))',
    dancing: 'linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(255, 20, 147, 0.2))',
    default: 'linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(253, 203, 110, 0.1))'
  };
  return gradients[type] || gradients.default;
};

const ActivityParticleEffect = ({ count = 8, color }) => {
  return (
    <ActivityParticlesContainer>
      {Array.from({ length: count }).map((_, i) => (
        <ActivityParticle
          key={i}
          left={`${15 + (i * 10)}%`}
          delay={`${i * 0.2}s`}
          duration={6 + (i % 2)}
          color={color}
        />
      ))}
    </ActivityParticlesContainer>
  );
};

const ActivityXPBarComponent = ({ xp, multiple = false, progressive = false, gradient, shadowColor }) => {
  if (multiple) {
    return (
      <MultipleActivityXPBars>
        <ActivityXPContainer>
          <ActivityXPBar progressive={progressive} gradient={gradient} shadowColor={shadowColor} />
        </ActivityXPContainer>
        <ActivityXPContainer>
          <ActivityXPBar progressive={progressive} gradient={gradient} shadowColor={shadowColor} />
        </ActivityXPContainer>
        <ActivityXPContainer>
          <ActivityXPBar progressive={progressive} gradient={gradient} shadowColor={shadowColor} />
        </ActivityXPContainer>
      </MultipleActivityXPBars>
    );
  }
  
  return (
    <ActivityXPContainer>
      <ActivityXPBar progressive={progressive} xp={!progressive ? xp : undefined} gradient={gradient} shadowColor={shadowColor} />
    </ActivityXPContainer>
  );
};

const ActivityStarRating = ({ count = 5, gold = false }) => {
  return (
    <ActivityStarsContainer>
      {Array.from({ length: count }).map((_, i) => (
        <ActivityStar key={i} delay={`${i * 0.2}s`} gold={gold}>★</ActivityStar>
      ))}
    </ActivityStarsContainer>
  );
};

const ActivityLevelDisplayComponent = ({ level, gold = false }) => {
  return <ActivityLevelDisplay gold={gold}>{level}</ActivityLevelDisplay>;
};

const ActivityLevelingAnimation = ({ type, level }) => {
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

  const isGold = type === 'sideProjects' || type === 'trading';

  return (
    <LevelingActivityContainer gradient={getActivityGradient(type)}>
      <ActivityLevelUpGlow color={getGlowColor(type)} />
      <ActivityLevelDisplayComponent level={level} gold={isGold} />
    </LevelingActivityContainer>
  );
};

const HighlightParticleEffect = () => {
  return (
    <HighlightParticlesContainer>
      {Array.from({ length: 15 }).map((_, i) => (
        <HighlightParticle
          key={i}
          left={`${5 + (i * 6)}%`}
          bottom={`${Math.random() * 50}%`}
          delay={`${i * 0.3}s`}
          duration={8 + (i % 3)}
          color={i % 3 === 0 ? soloLevelingTheme.colors.accent.gold : i % 3 === 1 ? soloLevelingTheme.colors.accent.orange : soloLevelingTheme.colors.accent.purple}
        />
      ))}
    </HighlightParticlesContainer>
  );
};

const NowPage = () => {
  const { t } = useTranslation();

  const currentActivities = [
    {
      icon: <FaLaptopCode />,
      title: t('now.currentActivities.backend.title'),
      description: t('now.currentActivities.backend.description')
    },
    {
      icon: <FaProjectDiagram />,
      title: t('now.currentActivities.sideProjects.title'),
      description: t('now.currentActivities.sideProjects.description')
    },
    {
      icon: <FaCoins />,
      title: t('now.currentActivities.trading.title'),
      description: t('now.currentActivities.trading.description')
    },
    {
      icon: <FaMusic />,
      title: t('now.currentActivities.dancing.title'),
      description: t('now.currentActivities.dancing.description')
    }
  ];

  const getFocusIcon = (focusText) => {
    const text = focusText.toLowerCase();
    if (text.includes('baile') || text.includes('danc')) return <FaMusic />;
    if (text.includes('hábito') || text.includes('habit')) return <FaCalendarAlt />;
    if (text.includes('trader') || text.includes('trading')) return <FaCoins />;
    if (text.includes('delegar') || text.includes('delegat')) return <FaUsers />;
    if (text.includes('productividad') || text.includes('productivity')) return <FaRocket />;
    return <FaBullseye />;
  };

  const getFocusConfig = (focusText) => {
    const text = focusText.toLowerCase();
    if (text.includes('baile') || text.includes('danc')) {
      return {
        gradient: soloLevelingTheme.colors.gradients.purple,
        glowColor: 'rgba(138, 43, 226, 0.6)',
        borderHover: soloLevelingTheme.colors.accent.purple,
        hoverGlow: 'rgba(138, 43, 226, 0.15)',
        iconColor: soloLevelingTheme.colors.accent.purple
      };
    }
    if (text.includes('hábito') || text.includes('habit')) {
      return {
        gradient: soloLevelingTheme.colors.gradients.mana,
        glowColor: 'rgba(116, 185, 255, 0.6)',
        borderHover: soloLevelingTheme.colors.accent.blue,
        hoverGlow: 'rgba(116, 185, 255, 0.15)',
        iconColor: soloLevelingTheme.colors.accent.blue
      };
    }
    if (text.includes('trader') || text.includes('trading')) {
      return {
        gradient: soloLevelingTheme.colors.gradients.gold,
        glowColor: 'rgba(253, 203, 110, 0.6)',
        borderHover: soloLevelingTheme.colors.accent.gold,
        hoverGlow: 'rgba(253, 203, 110, 0.15)',
        iconColor: soloLevelingTheme.colors.accent.gold
      };
    }
    if (text.includes('delegar') || text.includes('delegat')) {
      return {
        gradient: soloLevelingTheme.colors.gradients.purple,
        glowColor: 'rgba(108, 92, 231, 0.6)',
        borderHover: soloLevelingTheme.colors.accent.purple,
        hoverGlow: 'rgba(108, 92, 231, 0.15)',
        iconColor: soloLevelingTheme.colors.accent.purple
      };
    }
    if (text.includes('productividad') || text.includes('productivity')) {
      return {
        gradient: soloLevelingTheme.colors.gradients.gold,
        glowColor: 'rgba(225, 112, 85, 0.6)',
        borderHover: soloLevelingTheme.colors.accent.orange,
        hoverGlow: 'rgba(225, 112, 85, 0.15)',
        iconColor: soloLevelingTheme.colors.accent.orange
      };
    }
    return {
      gradient: soloLevelingTheme.colors.gradients.gold,
      glowColor: 'rgba(253, 203, 110, 0.6)',
      borderHover: soloLevelingTheme.colors.accent.gold,
      hoverGlow: 'rgba(253, 203, 110, 0.15)',
      iconColor: soloLevelingTheme.colors.accent.gold
    };
  };

  const currentFocus = [
    t('now.focus.item1'),
    t('now.focus.item2'),
    t('now.focus.item3'),
    t('now.focus.item4'),
    t('now.focus.item5')
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('now.title')}</PageTitle>
        <PageDescription dangerouslySetInnerHTML={{
          __html: t('now.description', { 
            sivers: '<a href="https://sivers.org/now" target="_blank" rel="noopener noreferrer">Derek Sivers</a>',
            frank: '<a href="https://collegeinfogeek.com/now/" target="_blank" rel="noopener noreferrer">Thomas Frank</a>'
          })
        }} />
      </PageHeader>
      
      <ContentWrapper>
        <HighlightSection>
          <HighlightParticleEffect />
          <LocationBadge>
            <FaMapMarkerAlt />
            {t('now.location')}
          </LocationBadge>
          <HighlightText>
            {t('now.highlight')}
          </HighlightText>
        </HighlightSection>

        <SectionTitle>{t('now.currentActivities.title')}</SectionTitle>
        <ActivitiesGrid>
          {currentActivities.map((activity, index) => {
            const activityType = getActivityType(activity.title);
            const level = getActivityLevel(activityType);
            
            return (
              <NowCard
                key={index}
                type={activityType}
                level={level}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
                delay={`${index * 0.1}s`}
              />
            );
          })}
        </ActivitiesGrid>

        <FocusSection>
          <FocusTitle>
            <FaBullseye />
            {t('now.focus.title')}
          </FocusTitle>
          <FocusList>
            {currentFocus.map((focus, index) => {
              const config = getFocusConfig(focus);
              return (
                <FocusCard
                  key={index}
                  $delay={`${index * 0.1}s`}
                  $gradient={config.gradient}
                  $glowColor={config.glowColor}
                  $borderHover={config.borderHover}
                  $hoverGlow={config.hoverGlow}
                >
                  <FocusIcon
                    $color={config.iconColor}
                    $glowColor={config.glowColor}
                  >
                    {getFocusIcon(focus)}
                  </FocusIcon>
                  <FocusText>{focus}</FocusText>
                </FocusCard>
              );
            })}
          </FocusList>
        </FocusSection>

        <LastUpdated>
          <FaClock />
          {t('now.lastUpdated', { date: 'February 26, 2025' })}
        </LastUpdated>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NowPage;