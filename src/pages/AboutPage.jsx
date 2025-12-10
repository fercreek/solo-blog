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
import { FaCode, FaTrophy, FaMapMarkerAlt, FaDumbbell, FaPenFancy, FaCoins, FaMusic } from 'react-icons/fa';
import { processMarkdownText } from '../utils/contentParser';

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
  gap: 1rem;
`;

const EventItem = styled(AnimatedListItem)`
  padding: 1.25rem 1.5rem;
  
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
  margin: 0.75rem 0 0 2rem;
  display: grid;
  gap: 0.5rem;
`;

const SubEventItem = styled.li`
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.6), rgba(10, 10, 15, 0.6));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-left: 3px solid ${soloLevelingTheme.colors.accent.purple};
  border-radius: ${soloLevelingTheme.borderRadius.md};
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.95rem;
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

const AboutPage = () => {
  const hobbies = [
    { icon: <FaMusic />, name: 'Dancing bachata and salsa' },
    { icon: <FaDumbbell />, name: 'Working out' },
    { icon: <FaPenFancy />, name: 'Writing about life and technology' },
    { icon: <FaCoins />, name: 'Crypto trading' }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>About Me</PageTitle>
        <PageDescription>
          Discover my journey through code, dance, and digital innovation
        </PageDescription>
      </PageHeader>
      
      <ContentWrapper>
        <BioSection>
          <GradientBadge marginBottom="1.5rem">
            <FaMapMarkerAlt />
            Monterrey, Nuevo León, México
          </GradientBadge>
          <BioText>
            I'm a software engineer, dancer, trader, and hobbyist writer.
          </BioText>
          <BioText>
            Formerly a break dancer, I now compete in bachata and salsa. I'm a Mexican, residing in Monterrey, Nuevo León, México.
          </BioText>
        </BioSection>

        <BioSection>
          <SectionTitle margin="0 0 2rem 0">A Closer Look</SectionTitle>
          <BioText>
            I have experience as a consultant and web programmer, adept at planning and managing projects from inception to completion.
          </BioText>
          <BioText>
            My professional focus is backend development with Ruby on Rails. In my leisure time, I compete in bachata and salsa dancing. I also engage in crypto trading and am continually learning about investments.
          </BioText>
          <BioText>
            I'm an active participant in the local tech scene. In the past, I've organized a hackathon event at UANL - FIME for students.
          </BioText>
        </BioSection>

        <SectionTitle>My Hobbies</SectionTitle>
        <HobbiesGrid>
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.name} delay={`${hobbies.indexOf(hobby) * 0.1}s`}>
              <HobbyIcon>{hobby.icon}</HobbyIcon>
              <HobbyName>{hobby.name}</HobbyName>
            </HobbyCard>
          ))}
        </HobbiesGrid>

        <ExhibitionsSection>
          <SectionTitle>Exhibitions and Presentations</SectionTitle>
          
          <CategoryCard>
            <CategoryTitle>
              <FaCode />
              Programming
            </CategoryTitle>
            <EventList>
              <EventItem delay="0s" dangerouslySetInnerHTML={{ __html: processMarkdownText('FIME UANL September 4, 2015 - [Qué es git?](https://docs.google.com/presentation/d/1nM6y1TTKOk28Pk_Cv4lmCmLRpWqLJLozD6x__rvxN5Y/edit?usp=sharing)') }} />
              <EventItem delay="0.1s" dangerouslySetInnerHTML={{ __html: processMarkdownText('Code Crafters MTY April 12, 2019 - [Lightning Talks - How to make a blog with Hugo and Github pages](https://docs.google.com/presentation/d/16Np6grMtFSlnfoJ-KsN91QPb_NESclMR3AWw9Jc6MFE/edit?usp=sharing)') }} />
            </EventList>
          </CategoryCard>

          <CategoryCard>
            <CategoryTitle>
              <FaTrophy />
              Dance
            </CategoryTitle>
            <EventList>
              <EventItem delay="0s" dangerouslySetInnerHTML={{ __html: processMarkdownText('Timbal Latin Dance Congress 2019 - [🥈2nd place - Fuego Latino Men Shines](https://www.facebook.com/TIMBALDANCECONGRESS/videos/576061669623842/UzpfSTczNjExMDI1NzoxMDE2Mjg1OTA3NDY3MDI1OA/?q=timbal%20congress%20men%20shine&epa=SEARCH_BOX)') }} />
              <EventItem delay="0.1s" dangerouslySetInnerHTML={{ __html: processMarkdownText('Mambolee One Dance Congress 2020 - [🥇1st place - Fuego Latino Men Shines](https://www.facebook.com/MamboleeONE/videos/179732403335733)') }} />
              <EventItem delay="0.2s">
                Mambolee One Dance Congress 2022
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥈2nd place - Fuego Latino Bachata Men shines](https://fb.watch/eKrEuaRkHy/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Pa que me perdones - Bachata Solista Alumno](https://fb.watch/bBoIn6JN3X/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Via Perico - Salsa Solista Alumno](https://fb.watch/bBoI_zIexG/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Catalogo de amor - Bachata Pareja Alumno](https://fb.watch/bBoL8l1idM/)') }} />
                </SubEventList>
              </EventItem>
              <EventItem delay="0.3s">
                BKS Festival 2022
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Bachata Solista Alumno](https://www.facebook.com/793921981/videos/417107049784576/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Bachata Grupos](https://fb.watch/eKN1MF6Igg/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Bachata Men Shines](https://www.facebook.com/793921981/videos/441330537751269/)') }} />
                </SubEventList>
              </EventItem>
              <EventItem delay="0.4s">
                Olimpo 2022
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥇1st place - Bachata Solista Alumno](https://fb.watch/eKM4U2y98N/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Bachata Duo](https://fb.watch/eKM63pUadb/)') }} />
                  <SubEventItem>Salsa Solista Alumno</SubEventItem>
                </SubEventList>
              </EventItem>
              <EventItem delay="0.5s">
                Hobby SalsaFest 2022
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Bachata Solista Alumno](https://fb.watch/eKs4qvOs0P/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Bachata Grupos Alumnos](https://fb.watch/eKLFtTUPiy/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[Salsa Duos Shines](https://fb.watch/eKLI77CUrQ/)') }} />
                </SubEventList>
              </EventItem>
              <EventItem delay="0.6s" dangerouslySetInnerHTML={{ __html: processMarkdownText('Mambolee One Dance Congress 2023 - [🥇1st place - Bachata Solista Alumno](https://fb.watch/p0GhSp1EXg/)') }} />
              <EventItem delay="0.7s" dangerouslySetInnerHTML={{ __html: processMarkdownText('Imperio Latino 2023 - [🥈2nd place - Bachata Solista Alumno](https://fb.watch/p0Gnlmw2pp/)') }} />
              <EventItem delay="0.8s">
                Euroson Latino Dance Congress 2023
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥈2nd place - Bachata Solista Alumno](https://fb.watch/p0GzPkXBZU/)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥉3rd place - Salsa Solista Alumno](https://fb.watch/p0GtQBRcIm/)') }} />
                </SubEventList>
              </EventItem>
              <EventItem delay="0.9s">
                Mambolee One Dance Congress 2024
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥇1st place - Bachata Solista Alumno](https://www.facebook.com/100041993030366/videos/909271574226046/)') }} />
                  <SubEventItem>🥈2nd place - Bachata Pareja Pro-al</SubEventItem>
                  <SubEventItem>🥈2nd place - Bachata Pareja Alumno</SubEventItem>
                  <SubEventItem>🥈2nd place - Bachata Mixto Open</SubEventItem>
                  <SubEventItem>🥉3rd place - Bachata Duo Open</SubEventItem>
                  <SubEventItem>🥉3rd place - Salsa Duo Open</SubEventItem>
                  <SubEventItem>Salsa Solista Alumno</SubEventItem>
                </SubEventList>
              </EventItem>
              <EventItem delay="1s">
                Beach Latin Fest 2024
                <SubEventList>
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥇1st place - Bachata Solista Am-Al](https://www.facebook.com/BeachLatinFriends/videos/1021641623088761)') }} />
                  <SubEventItem dangerouslySetInnerHTML={{ __html: processMarkdownText('[🥇1st place - Salsa Solista Alumno](https://www.facebook.com/BeachLatinFriends/videos/1029371465647551)') }} />
                </SubEventList>
              </EventItem>
              <EventItem delay="1.1s">
                Brisa Latin Cup 2024
                <SubEventList>
                  <SubEventItem>🥇1st place - Bachata Solista Am</SubEventItem>
                  <SubEventItem>🥇1st place - Bachata Team Shine Mixto</SubEventItem>
                  <SubEventItem>🥇1st place - Bachata Duo Open</SubEventItem>
                  <SubEventItem>🥈2nd place - Bachata Parejas Open</SubEventItem>
                  <SubEventItem>🥈2nd place - Bachata Solista Open</SubEventItem>
                  <SubEventItem>🥈2nd place - Salsa Solista Alumno</SubEventItem>
                  <SubEventItem>🥉3rd place - Salsa Duo Open</SubEventItem>
                  <SubEventItem>5th place - Salsa Solista Open</SubEventItem>
                </SubEventList>
              </EventItem>
              <EventItem delay="1.2s">
                Mambolee One Dance Congress 2025
                <SubEventList>
                  <SubEventItem>🥇1st place - Bachata Parejas Am-al</SubEventItem>
                  <SubEventItem>🥈2nd place - Bachata Men Shines Open</SubEventItem>
                  <SubEventItem>🥈2nd place - Salsa Team Shines Mixto Open (Regios Team)</SubEventItem>
                  <SubEventItem>4th place - Bachata Grupos Open</SubEventItem>
                  <SubEventItem>5th place - Bachata Solista Amateur</SubEventItem>
                  <SubEventItem>7th place - Salsa Solista Amateur</SubEventItem>
                </SubEventList>
              </EventItem>
            </EventList>
          </CategoryCard>
        </ExhibitionsSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default AboutPage;
