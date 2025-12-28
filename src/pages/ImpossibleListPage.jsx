import { useState, useMemo } from 'react';
import styled from 'styled-components';
import ImpossibleList from '../components/ImpossibleList';
import { PageContainer, PageHeader, PageTitle, ContentWrapper, PageDescription } from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes';
import { FaTrophy, FaClock, FaBullseye, FaSearch, FaFilter, FaChartLine } from 'react-icons/fa';
import { parseImpossibleListContent } from '../utils/contentParser';
import {
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel,
  SearchInput,
  FilterButton,
  SectionTitle
} from '../styles/designSystem';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import { getImpossibleListData } from '../data/impossibleListTranslations';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation: ${fadeInUp} 0.6s ease-out;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  
  @media (min-width: 1280px) {
    gap: 2rem;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 450px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.1rem;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 0 4px rgba(108, 92, 231, 0.3));
  transition: all 0.3s ease;
  
  ${SearchContainer}:has(input:focus) & {
    color: ${soloLevelingTheme.colors.accent.purple};
    filter: drop-shadow(0 0 8px rgba(108, 92, 231, 0.6));
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ImpossibleListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  const impossibleListDataTranslated = useMemo(() => getImpossibleListData(language), [language]);
  const sections = useMemo(() => parseImpossibleListContent(impossibleListDataTranslated), [impossibleListDataTranslated]);
  
  const stats = useMemo(() => {
    let totalGoals = 0;
    let completedGoals = 0;
    let inProgressGoals = 0;
    
    sections.forEach(section => {
      section.goals.forEach(goal => {
        totalGoals++;
        if (goal.completed) {
          completedGoals++;
        } else {
          inProgressGoals++;
        }
        
        if (goal.subGoals) {
          goal.subGoals.forEach(subGoal => {
            totalGoals++;
            if (subGoal.completed) {
              completedGoals++;
            } else {
              inProgressGoals++;
            }
          });
        }
      });
    });
    
    return {
      total: totalGoals,
      completed: completedGoals,
      inProgress: inProgressGoals,
      completionRate: totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0
    };
  }, [sections]);
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('impossibleList.title')}</PageTitle>
        <PageDescription dangerouslySetInnerHTML={{
          __html: t('impossibleList.description', { link: `<a href="https://impossiblehq.com/impossible-list/" target="_blank" rel="noopener noreferrer">${t('impossibleList.linkText')}</a>` })
        }} />
      </PageHeader>
      
      <ContentWrapper>
        <StatsContainer>
          <StatCard delay="0s">
            <StatIcon variant="default"><FaBullseye /></StatIcon>
            <StatNumber variant="default">{stats.total}</StatNumber>
            <StatLabel>{t('impossibleList.stats.totalGoals')}</StatLabel>
          </StatCard>
          
          <StatCard delay="0.1s" variant="completed">
            <StatIcon variant="completed"><FaTrophy /></StatIcon>
            <StatNumber variant="completed">{stats.completed}</StatNumber>
            <StatLabel>{t('impossibleList.stats.completed')}</StatLabel>
          </StatCard>
          
          <StatCard delay="0.2s" variant="progress">
            <StatIcon variant="progress"><FaClock /></StatIcon>
            <StatNumber variant="progress">{stats.inProgress}</StatNumber>
            <StatLabel>{t('impossibleList.stats.inProgress')}</StatLabel>
          </StatCard>
          
          <StatCard delay="0.3s" variant="completed">
            <StatIcon variant="completed"><FaChartLine /></StatIcon>
            <StatNumber variant="completed">{stats.completionRate}%</StatNumber>
            <StatLabel>{t('impossibleList.stats.completionRate')}</StatLabel>
          </StatCard>
        </StatsContainer>
        
        <ControlsContainer>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder={t('impossibleList.search.placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              <FaFilter /> {t('impossibleList.filters.all')}
            </FilterButton>
            <FilterButton 
              active={filter === 'completed'}
              onClick={() => setFilter('completed')}
            >
              <FaTrophy /> {t('impossibleList.filters.completed')}
            </FilterButton>
            <FilterButton 
              active={filter === 'progress'}
              onClick={() => setFilter('progress')}
            >
              <FaClock /> {t('impossibleList.filters.progress')}
            </FilterButton>
          </FilterContainer>
        </ControlsContainer>
        
        <ImpossibleList 
          content={impossibleListDataTranslated} 
          searchTerm={searchTerm}
          filter={filter}
        />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ImpossibleListPage;