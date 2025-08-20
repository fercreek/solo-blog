import React from 'react';
import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { 
  AchievementSection, 
  AchievementSectionTitle, 
  YearGroup, 
  YearTitle, 
  AchievementList, 
  AchievementItem, 
  MedalIcon, 
  AchievementText,
  PersonalSection,
  HobbyList
} from './PageComponents';
import { FaTrophy, FaMedal, FaAward, FaMusic, FaCode, FaCalendarAlt } from 'react-icons/fa';

const IntroSection = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${soloLevelingTheme.colors.primary}aa 0%, 
    ${soloLevelingTheme.colors.secondary}aa 100%);
  border-radius: 15px;
  border: 1px solid ${soloLevelingTheme.colors.accent.orange}22;
  
  h2 {
    color: ${soloLevelingTheme.colors.text.primary};
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px rgba(253, 203, 110, 0.3);
  }
  
  p {
    color: ${soloLevelingTheme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const AboutContent = () => {
  const getMedalIcon = (place) => {
    if (place === '1st') return <FaTrophy />;
    if (place === '2nd') return <FaMedal />;
    if (place === '3rd') return <FaAward />;
    return <FaMedal />;
  };

  const extractPlace = (text) => {
    const match = text.match(/🥇1st place|🥈2nd place|🥉3rd place/);
    if (match) {
      if (match[0].includes('🥇')) return '1st';
      if (match[0].includes('🥈')) return '2nd';
      if (match[0].includes('🥉')) return '3rd';
    }
    return null;
  };

  const danceAchievements = {
    2019: [
      "🥈2nd place - Fuego Latino Men Shines - Timbal Latin Dance Congress"
    ],
    2020: [
      "🥇1st place - Fuego Latino Men Shines - Mambolee One Dance Congress"
    ],
    2022: [
      "🥈2nd place - Fuego Latino Bachata Men shines - Mambolee One Dance Congress",
      "Pa que me perdones - Bachata Solista Alumno - Mambolee One Dance Congress",
      "Via Perico - Salsa Solista Alumno - Mambolee One Dance Congress",
      "Catalogo de amor - Bachata Pareja Alumno - Mambolee One Dance Congress",
      "Bachata Solista Alumno - BKS Festival",
      "Bachata Grupos - BKS Festival",
      "Bachata Men Shines - BKS Festival",
      "🥇1st place - Bachata Solista Alumno - Olimpo",
      "Bachata Duo - Olimpo",
      "Salsa Solista Alumno - Olimpo",
      "Bachata Solista Alumno - Hobby SalsaFest",
      "Bachata Grupos Alumnos - Hobby SalsaFest",
      "Salsa Duos Shines - Hobby SalsaFest"
    ],
    2023: [
      "🥇1st place - Bachata Solista Alumno - Mambolee One Dance Congress",
      "🥈2nd place - Bachata Solista Alumno - Imperio Latino",
      "🥈2nd place - Bachata Solista Alumno - Euroson Latino Dance Congress",
      "🥉3rd place - Salsa Solista Alumno - Euroson Latino Dance Congress"
    ],
    2024: [
      "🥇1st place - Bachata Solista Alumno - Mambolee One Dance Congress",
      "🥈2nd place - Bachata Pareja Pro-al - Mambolee One Dance Congress",
      "🥈2nd place - Bachata Pareja Alumno - Mambolee One Dance Congress",
      "🥈2nd place - Bachata Mixto Open - Mambolee One Dance Congress",
      "🥉3rd place - Bachata Duo Open - Mambolee One Dance Congress",
      "🥉3rd place - Salsa Duo Open - Mambolee One Dance Congress",
      "Salsa Solista Alumno - Mambolee One Dance Congress",
      "🥇1st place - Bachata Solista Am-Al - Beach Latin Fest",
      "🥇1st place - Salsa Solista Alumno - Beach Latin Fest",
      "🥇1st place - Bachata Solista Am - Brisa Latin Cup",
      "🥇1st place - Bachata Team Shine Mixto - Brisa Latin Cup",
      "🥇1st place - Bachata Duo Open - Brisa Latin Cup",
      "🥈2nd place - Bachata Parejas Open - Brisa Latin Cup",
      "🥈2nd place - Bachata Solista Open - Brisa Latin Cup",
      "🥈2nd place - Salsa Solista Alumno - Brisa Latin Cup",
      "🥉3rd place - Salsa Duo Open - Brisa Latin Cup",
      "5th place - Salsa Solista Open - Brisa Latin Cup"
    ],
    2025: [
      "🥇1st place - Bachata Parejas Am-al - Mambolee One Dance Congress",
      "🥈2nd place - Bachata Men Shines Open - Mambolee One Dance Congress",
      "🥈2nd place - Salsa Team Shines Mixto Open (Regios Team) - Mambolee One Dance Congress",
      "4th place - Bachata Grupos Open - Mambolee One Dance Congress",
      "5th place - Bachata Solista Amateur - Mambolee One Dance Congress",
      "7th place - Salsa Solista Amateur - Mambolee One Dance Congress"
    ]
  };

  return (
    <div>
      <IntroSection>
        <h2>Snapshot of Me</h2>
        <p>I'm a software engineer, dancer, trader, and hobbyist writer.</p>
        <p>Formerly a break dancer, I now compete in bachata and salsa. I'm a Mexican, residing in Monterrey, Nuevo León, México.</p>
      </IntroSection>

      <PersonalSection>
        <h2>A Closer Look</h2>
        <p>I have experience as a consultant and web programmer, adept at planning and managing projects from inception to completion.</p>
        <p>My professional focus is backend development with Ruby on Rails. In my leisure time, I compete in bachata and salsa dancing. I also engage in crypto trading and am continually learning about investments.</p>
        <p>I'm an active participant in the local tech scene. In the past, I've organized a hackathon event at UANL - FIME for students.</p>
        
        <h3>My hobbies include:</h3>
        <HobbyList>
          <li>Dancing bachata and salsa</li>
          <li>Working out</li>
          <li>Writing about life and technology</li>
          <li>Crypto trading</li>
        </HobbyList>
      </PersonalSection>

      <AchievementSection>
        <AchievementSectionTitle>
          <FaMusic /> Dance Achievements
        </AchievementSectionTitle>
        
        {Object.entries(danceAchievements).reverse().map(([year, achievements]) => (
          <YearGroup key={year}>
            <YearTitle>
              <FaCalendarAlt /> {year}
            </YearTitle>
            <AchievementList>
              {achievements.map((achievement, index) => {
                const place = extractPlace(achievement);
                return (
                  <AchievementItem key={index} place={place}>
                    <MedalIcon place={place}>
                      {getMedalIcon(place)}
                    </MedalIcon>
                    <AchievementText>
                      {achievement}
                    </AchievementText>
                  </AchievementItem>
                );
              })}
            </AchievementList>
          </YearGroup>
        ))}
      </AchievementSection>

      <PersonalSection>
        <AchievementSectionTitle>
          <FaCode /> Programming Presentations
        </AchievementSectionTitle>
        <AchievementList>
          <AchievementItem>
            <MedalIcon>
              <FaCode />
            </MedalIcon>
            <AchievementText>
              FIME UANL September 4, 2015 - <a href="https://docs.google.com/presentation/d/1nM6y1TTKOk28Pk_Cv4lmCmLRpWqLJLozD6x__rvxN5Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Qué es git?</a>
            </AchievementText>
          </AchievementItem>
          <AchievementItem>
            <MedalIcon>
              <FaCode />
            </MedalIcon>
            <AchievementText>
              Code Crafters MTY April 12, 2019 - <a href="https://docs.google.com/presentation/d/16Np6grMtFSlnfoJ-KsN91QPb_NESclMR3AWw9Jc6MFE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Lightning Talks - How to make a blog with Hugo and Github pages</a>
            </AchievementText>
          </AchievementItem>
        </AchievementList>
      </PersonalSection>
    </div>
  );
};

export default AboutContent;