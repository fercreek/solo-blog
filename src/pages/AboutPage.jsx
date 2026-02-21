import { useState } from 'react';
import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription,
} from '../components/PageComponents';
import {
  HighlightCard,
  GradientBadge,
  SectionTitle,
  FeatureCard,
  CardIcon,
  AnimatedListItem
} from '../styles/designSystem';
import { FaCode, FaTrophy, FaMapMarkerAlt, FaDumbbell, FaPenFancy, FaCoins, FaMusic, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { processMarkdownText } from '../utils/contentParser';
import { useTranslation } from '../hooks/useTranslation';
import PageHead from '../components/PageHead';
import { danceEvents, getDanceStats } from '../data/danceEvents';

const BioSection = styled(HighlightCard)`
  margin-bottom: 3rem;
`;

const BioText = styled.p`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const HobbiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const HobbyCard = styled(FeatureCard)`
  padding: 1.5rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const HobbyIcon = styled(CardIcon)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HobbyName = styled.h3`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.1rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  margin: 0;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
`;

const ExhibitionsSection = styled.div`
  margin: 4rem 0;
`;

const CategoryCard = styled(HighlightCard)`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.5rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 1.5rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  background: ${soloLevelingTheme.colors.gradients.purple};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    filter: drop-shadow(0 0 8px rgba(108, 92, 231, 0.5));
  }
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EventListFullWidth = styled.li`
  grid-column: 1 / -1;
  list-style: none;
`;

const EventItem = styled(AnimatedListItem)`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 1.6;
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    transition: all 0.3s ease;
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
    }
  }
`;

const SubEventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SubEventItem = styled.li`
  padding: 0.875rem 1.125rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.6), rgba(10, 10, 15, 0.6));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-left: 3px solid ${soloLevelingTheme.colors.accent.purple};
  border-radius: ${soloLevelingTheme.borderRadius.md};
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.5;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.15), rgba(26, 26, 46, 0.8));
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
    transform: translateX(4px);
  }
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
    }
  }
`;

const DanceStatsSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, rgba(108, 92, 231, 0.15), rgba(26, 26, 46, 0.9));
  border: 1px solid ${soloLevelingTheme.colors.border.accent};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
`;

const AccordionTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.85), rgba(10, 10, 15, 0.85));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-left: 5px solid ${soloLevelingTheme.colors.accent.orange};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 1.05rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(108, 92, 231, 0.2), rgba(26, 26, 46, 0.95));
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
    box-shadow: 0 4px 20px rgba(108, 92, 231, 0.3);
  }
  
  &:focus-visible {
    outline: 2px solid ${soloLevelingTheme.colors.accent.purple};
    outline-offset: 2px;
  }
  
  span {
    flex: 1;
  }
  
  svg {
    flex-shrink: 0;
    color: ${soloLevelingTheme.colors.accent.gold};
    transition: transform 0.3s ease;
  }
`;

const AccordionPreview = styled.span`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.9rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.normal};
`;

const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.35s ease-out, opacity 0.25s ease;
`;

const AccordionInner = styled.div`
  padding: 0.5rem 0 0 1.5rem;
  border-left: 2px solid ${soloLevelingTheme.colors.border.accent};
  margin-left: 0.75rem;
`;

const ProgrammingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.75rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ProgrammingItem = styled(AnimatedListItem)`
  padding: 1rem 1.25rem;
  margin: 0;
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    transition: all 0.3s ease;
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
    }
  }
`;

const DanceSingleLineTrigger = styled(AccordionTrigger)`
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
`;

const AboutPage = () => {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);
  const [programmingExpanded, setProgrammingExpanded] = useState(false);
  const danceStats = getDanceStats();

  const hobbies = [
    { icon: <FaMusic />, name: t('about.hobbies.dancing') },
    { icon: <FaDumbbell />, name: t('about.hobbies.workingOut') },
    { icon: <FaPenFancy />, name: t('about.hobbies.writing') },
    { icon: <FaCoins />, name: t('about.hobbies.trading') }
  ];

  return (
    <PageContainer>
      <PageHead title={t('about.title')} description={t('about.description')} />
      <PageHeader>
        <PageTitle>{t('about.title')}</PageTitle>
        <PageDescription>
          {t('about.description')}
        </PageDescription>
      </PageHeader>
      
      <ContentWrapper>
        <BioSection>
          <GradientBadge marginBottom="1.5rem">
            <FaMapMarkerAlt />
            {t('about.location')}
          </GradientBadge>
          <BioText>
            {t('about.bio.intro')}
          </BioText>
          <BioText>
            {t('about.bio.background')}
          </BioText>
        </BioSection>

        <BioSection>
          <SectionTitle margin="0 0 2rem 0">{t('about.closerLook.title')}</SectionTitle>
          <BioText>
            {t('about.closerLook.text1')}
          </BioText>
          <BioText>
            {t('about.closerLook.text2')}
          </BioText>
          <BioText>
            {t('about.closerLook.text3')}
          </BioText>
        </BioSection>

        <SectionTitle>{t('about.hobbies.title')}</SectionTitle>
        <HobbiesGrid>
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.name} delay={`${hobbies.indexOf(hobby) * 0.1}s`}>
              <HobbyIcon>{hobby.icon}</HobbyIcon>
              <HobbyName>{hobby.name}</HobbyName>
            </HobbyCard>
          ))}
        </HobbiesGrid>

        <ExhibitionsSection>
          <SectionTitle>{t('about.exhibitions.title')}</SectionTitle>
          
          <CategoryCard>
            <AccordionTrigger
              type="button"
              onClick={() => setProgrammingExpanded(!programmingExpanded)}
              aria-expanded={programmingExpanded}
              aria-controls="programming-list"
            >
              <span>
                <FaCode style={{ marginRight: '0.75rem', verticalAlign: 'middle' }} />
                <strong>{t('about.exhibitions.programming')}</strong>
                <AccordionPreview>
                  {' · '}{t('about.exhibitions.programmingCount', { count: 2 })}
                </AccordionPreview>
              </span>
              {programmingExpanded ? <FaChevronDown /> : <FaChevronRight />}
            </AccordionTrigger>
            <AccordionContent
              id="programming-list"
              style={{ maxHeight: programmingExpanded ? '500px' : 0, opacity: programmingExpanded ? 1 : 0 }}
            >
              <AccordionInner>
                <ProgrammingGrid>
                  <ProgrammingItem delay="0s" dangerouslySetInnerHTML={{ __html: processMarkdownText('FIME UANL September 4, 2015 - [Qué es git?](https://docs.google.com/presentation/d/1nM6y1TTKOk28Pk_Cv4lmCmLRpWqLJLozD6x__rvxN5Y/edit?usp=sharing)') }} />
                  <ProgrammingItem delay="0.05s" dangerouslySetInnerHTML={{ __html: processMarkdownText('Code Crafters MTY April 12, 2019 - [Lightning Talks - How to make a blog with Hugo and Github pages](https://docs.google.com/presentation/d/16Np6grMtFSlnfoJ-KsN91QPb_NESclMR3AWw9Jc6MFE/edit?usp=sharing)') }} />
                </ProgrammingGrid>
              </AccordionInner>
            </AccordionContent>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>
              <FaTrophy />
              {t('about.exhibitions.dance')}
            </CategoryTitle>
            <DanceStatsSummary>
              {t('about.exhibitions.danceStats', {
                congresses: danceStats.congresses,
                gold: danceStats.gold,
                silver: danceStats.silver,
                bronze: danceStats.bronze
              })}
            </DanceStatsSummary>
            <EventList>
              {danceEvents.map((event) => {
                const isExpanded = expandedId === event.id;
                if (event.singleLine) {
                  return (
                    <li key={event.id} style={{ listStyle: 'none' }}>
                      <DanceSingleLineTrigger
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : event.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`dance-${event.id}`}
                      >
                        <span>
                          <strong>{event.title}</strong>
                          <AccordionPreview>{' · '}{event.summary}</AccordionPreview>
                        </span>
                        {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                      </DanceSingleLineTrigger>
                      <AccordionContent
                        id={`dance-${event.id}`}
                        style={{ maxHeight: isExpanded ? '200px' : 0, opacity: isExpanded ? 1 : 0 }}
                      >
                        <AccordionInner>
                          <SubEventList style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                            <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText(event.html) }} />
                          </SubEventList>
                        </AccordionInner>
                      </AccordionContent>
                    </li>
                  );
                }
                return (
                  <EventListFullWidth key={event.id}>
                    <AccordionTrigger
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : event.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`dance-${event.id}`}
                    >
                      <span>
                        <strong>{event.title}</strong>
                        <AccordionPreview>
                          {' · '}{t('about.exhibitions.danceResults', { count: event.count })}
                        </AccordionPreview>
                      </span>
                      {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
                    </AccordionTrigger>
                    <AccordionContent
                      id={`dance-${event.id}`}
                      style={{ maxHeight: isExpanded ? '2000px' : 0, opacity: isExpanded ? 1 : 0 }}
                    >
                      <AccordionInner>
                        <SubEventList style={{ marginTop: '0.75rem', marginBottom: 0 }}>
                          {event.items.map((item, i) =>
                            item.startsWith('[') ? (
                              <SubEventItem key={i} dangerouslySetInnerHTML={{ __html: processMarkdownText(item) }} />
                            ) : (
                              <SubEventItem key={i}>{item}</SubEventItem>
                            )
                          )}
                        </SubEventList>
                      </AccordionInner>
                    </AccordionContent>
                  </EventListFullWidth>
                );
              })}
            </EventList>
          </CategoryCard>
        </ExhibitionsSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AboutPage;
