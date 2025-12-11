import styled, { keyframes } from 'styled-components';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription
} from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes.js';
import { FaClock, FaMapMarkerAlt, FaCode, FaDumbbell, FaChartLine, FaUsers, FaBullseye, FaLaptopCode, FaProjectDiagram, FaCoins, FaMusic } from 'react-icons/fa';

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
  padding: 2.5rem;
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
    padding: 2rem;
  }
`;

const ActivityIcon = styled.div`
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
  
  ${ActivityCard}:hover & {
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

const ActivityTitle = styled.h3`
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
  
  ${ActivityCard}:hover & {
    background: ${soloLevelingTheme.colors.gradients.gold};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ActivityDescription = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.05rem;
  line-height: 1.8;
  margin: 0;
  transition: color 0.3s ease;
  text-align: justify;
  text-justify: inter-word;
  
  ${ActivityCard}:hover & {
    color: ${soloLevelingTheme.colors.text.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
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

const FocusList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
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

const NowPage = () => {
  const currentActivities = [
    {
      icon: <FaLaptopCode />,
      title: "Backend Development",
      description: "Working as a senior backend developer at Fountain, building scalable solutions."
    },
    {
      icon: <FaProjectDiagram />,
      title: "Side Projects",
      description: "Developing Studio Link and Vayla Dance as personal ventures."
    },
    {
      icon: <FaCoins />,
      title: "Crypto Trading",
      description: "Engaging in cryptocurrency trading and investment strategies."
    },
    {
      icon: <FaMusic />,
      title: "Dancing",
      description: "Regularly practicing bachata and salsa to improve my skills."
    }
  ];

  const currentFocus = [
    "Enhancing my dance skills",
    "Refining my daily habits",
    "Becoming a profitable trader",
    "Learning to delegate effectively",
    "Increasing productivity"
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>What I'm Doing Now</PageTitle>
        <PageDescription>
          A snapshot of my current activities and priorities. This page serves as a public declaration 
          and personal reminder, inspired by <a href="https://sivers.org/now" target="_blank" rel="noopener noreferrer">Derek Sivers</a> 
          and <a href="https://collegeinfogeek.com/now/" target="_blank" rel="noopener noreferrer"> Thomas Frank</a>.
        </PageDescription>
      </PageHeader>
      
      <ContentWrapper>
        <HighlightSection>
          <LocationBadge>
            <FaMapMarkerAlt />
            Monterrey, Nuevo León
          </LocationBadge>
          <HighlightText>
            Currently immersing myself in the world of cryptocurrencies, investment, and data analytics 
            while continuing to grow as a developer and dancer.
          </HighlightText>
        </HighlightSection>

        <SectionTitle>Current Activities</SectionTitle>
        <ActivitiesGrid>
          {currentActivities.map((activity, index) => (
            <ActivityCard key={index} delay={`${index * 0.1}s`}>
              <ActivityIcon>{activity.icon}</ActivityIcon>
              <ActivityTitle>{activity.title}</ActivityTitle>
              <ActivityDescription>{activity.description}</ActivityDescription>
            </ActivityCard>
          ))}
        </ActivitiesGrid>

        <FocusSection>
          <FocusTitle>
            <FaBullseye />
            Primary Focus Areas
          </FocusTitle>
          <FocusList>
            {currentFocus.map((focus, index) => (
              <FocusItem key={index} delay={`${index * 0.1}s`}>{focus}</FocusItem>
            ))}
          </FocusList>
        </FocusSection>

        <LastUpdated>
          <FaClock />
          Last updated: February 26, 2025
        </LastUpdated>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NowPage;