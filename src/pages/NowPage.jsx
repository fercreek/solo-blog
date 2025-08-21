import styled from 'styled-components';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription
} from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes.js';
import { FaClock, FaMapMarkerAlt, FaCode, FaDumbbell, FaChartLine, FaUsers } from 'react-icons/fa';

const HighlightSection = styled.div`
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
  }
`;

const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${soloLevelingTheme.colors.accent.orange};
  color: ${soloLevelingTheme.colors.text.primary};
  padding: 0.5rem 1rem;
  border-radius: ${soloLevelingTheme.borderRadius.full};
  font-size: 0.9rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  margin-bottom: 1.5rem;
  box-shadow: ${soloLevelingTheme.shadows.glow};
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ActivityCard = styled.div`
  background: ${soloLevelingTheme.colors.gradients.primary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 1.5rem;
  transition: all ${soloLevelingTheme.animations.transition.medium};
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${soloLevelingTheme.shadows.glow};
    border-color: ${soloLevelingTheme.colors.accent.orange};
  }
`;

const ActivityIcon = styled.div`
  font-size: 1.5rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px rgba(253, 203, 110, 0.4));
`;

const ActivityTitle = styled.h3`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.2rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 0.5rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
`;

const ActivityDescription = styled.p`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FocusSection = styled.div`
  background: ${soloLevelingTheme.colors.gradients.tertiary};
  border: 1px solid ${soloLevelingTheme.colors.border.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 2rem;
  margin: 2rem 0;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const FocusTitle = styled.h2`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 1.5rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  text-align: center;
`;

const FocusList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const FocusItem = styled.li`
  background: ${soloLevelingTheme.colors.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.md};
  padding: 1rem;
  color: ${soloLevelingTheme.colors.text.primary};
  transition: all ${soloLevelingTheme.animations.transition.fast};
  
  &:hover {
    background: ${soloLevelingTheme.colors.gradients.primary};
    transform: translateX(4px);
  }
  
  &::before {
    content: '▶';
    color: ${soloLevelingTheme.colors.accent.orange};
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.8rem;
  margin-top: 2rem;
  padding: 1rem;
  background: ${soloLevelingTheme.colors.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.md};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
`;

const NowPage = () => {
  const currentActivities = [
    {
      icon: <FaCode />,
      title: "Backend Development",
      description: "Working as a senior backend developer at Fountain, building scalable solutions."
    },
    {
      icon: <FaCode />,
      title: "Side Projects",
      description: "Developing Studio Link and Vayla Dance as personal ventures."
    },
    {
      icon: <FaChartLine />,
      title: "Crypto Trading",
      description: "Engaging in cryptocurrency trading and investment strategies."
    },
    {
      icon: <FaDumbbell />,
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
          <p style={{ color: soloLevelingTheme.colors.text.primary, fontSize: '1.1rem', lineHeight: '1.6' }}>
            Currently immersing myself in the world of cryptocurrencies, investment, and data analytics 
            while continuing to grow as a developer and dancer.
          </p>
        </HighlightSection>

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
          <FocusTitle>Primary Focus Areas</FocusTitle>
          <FocusList>
            {currentFocus.map((focus, index) => (
              <FocusItem key={index}>{focus}</FocusItem>
            ))}
          </FocusList>
        </FocusSection>

        <LastUpdated>
          <FaClock style={{ marginRight: '0.5rem' }} />
          Last updated: February 26, 2025
        </LastUpdated>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NowPage;