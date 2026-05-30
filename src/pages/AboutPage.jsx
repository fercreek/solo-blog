import { useState } from 'react';
import styled from 'styled-components';
import { useReducedMotion } from 'framer-motion';
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
import { FaCode, FaTrophy, FaMapMarkerAlt, FaDumbbell, FaPenFancy, FaCoins, FaMusic, FaChevronDown, FaChevronRight, FaServer, FaBox } from 'react-icons/fa';
import { processMarkdownText } from '../utils/contentParser';
import { useTranslation } from '../hooks/useTranslation';
import PageHead from '../components/PageHead';
import { danceEvents, getDanceStats } from '../data/danceEvents';
import { SystemPanel, SystemBadge } from '../components/system';
import { sys } from '../styles/systemTokens';

const BioSection = styled(SystemPanel)`
  margin-bottom: 3rem;
`;

const SystemsSection = styled.section`
  margin-bottom: 3rem;
`;

const SystemsHead = styled.div`
  margin-bottom: 1.5rem;
`;

const SystemsSubtitle = styled.p`
  font-family: ${sys.font.mono};
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: ${sys.color.cyanBright};
  margin: 0.4rem 0 0;
`;

const SystemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SysCardIcon = styled.div`
  font-size: 1.5rem;
  color: ${sys.color.cyan};
  margin-bottom: 0.7rem;
  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5));
`;

const SysCardName = styled.h3`
  font-family: ${sys.font.heading};
  font-size: 1.15rem;
  font-weight: 600;
  color: ${sys.color.text};
  margin: 0 0 0.5rem;
`;

const SysCardDetail = styled.p`
  font-size: 0.85rem;
  line-height: 1.55;
  color: ${sys.color.muted};
  margin: 0;
`;

const BioText = styled.p`
  color: ${sys.color.text};
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

const HobbyCard = styled(SystemPanel)`
  text-align: center;
  align-items: center;
`;

const HobbyIcon = styled.div`
  font-size: 2.2rem;
  color: ${sys.color.cyan};
  margin-bottom: 0.85rem;
  filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.5));

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const HobbyName = styled.h3`
  color: ${sys.color.text};
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0;
  font-family: ${sys.font.heading};
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
    filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.5));
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
      text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
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
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(26, 26, 46, 0.8));
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
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(26, 26, 46, 0.9));
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
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(26, 26, 46, 0.95));
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
    box-shadow: 0 4px 20px rgba(56, 189, 248, 0.3);
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
      text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
    }
  }
`;

const DanceSingleLineTrigger = styled(AccordionTrigger)`
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
`;

const AboutPage = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const [expandedId, setExpandedId] = useState(null);
  const [programmingExpanded, setProgrammingExpanded] = useState(false);
  const danceStats = getDanceStats();

  const hobbies = [
    { icon: <FaMusic />, name: t('about.hobbies.dancing') },
    { icon: <FaDumbbell />, name: t('about.hobbies.workingOut') },
    { icon: <FaPenFancy />, name: t('about.hobbies.writing') },
    { icon: <FaCoins />, name: t('about.hobbies.trading') }
  ];

  const systems = [
    { icon: <FaCode />, name: t('about.systems.studioLink.name'), detail: t('about.systems.studioLink.detail') },
    { icon: <FaTrophy />, name: t('about.systems.vayla.name'), detail: t('about.systems.vayla.detail') },
    { icon: <FaBox />, name: t('about.systems.cargoControl.name'), detail: t('about.systems.cargoControl.detail') }
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
        <BioSection $interactive={false} $reduced={prefersReducedMotion}>
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

        <SystemsSection>
          <SystemsHead>
            <SectionTitle margin="0">{t('about.systems.title')}</SectionTitle>
            <SystemsSubtitle>{t('about.systems.subtitle')}</SystemsSubtitle>
          </SystemsHead>
          <SystemsGrid>
            {systems.map((s, i) => (
              <SystemPanel
                key={s.name}
                $compact
                $reduced={prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0, 0.2, 0.2, 1], delay: prefersReducedMotion ? 0 : i * 0.08 }}
              >
                <SystemBadge $variant="cyan">In Production</SystemBadge>
                <SysCardIcon style={{ marginTop: '0.9rem' }}>{s.icon}</SysCardIcon>
                <SysCardName>{s.name}</SysCardName>
                <SysCardDetail>{s.detail}</SysCardDetail>
              </SystemPanel>
            ))}
          </SystemsGrid>
        </SystemsSection>

        <BioSection $interactive={false} $reduced={prefersReducedMotion}>
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
          {hobbies.map((hobby, i) => (
            <HobbyCard
              key={hobby.name}
              $compact
              $reduced={prefersReducedMotion}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, ease: [0, 0.2, 0.2, 1], delay: prefersReducedMotion ? 0 : i * 0.08 }}
            >
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
