import { useState, useMemo } from 'react';
import styled from 'styled-components';
import ImpossibleList from '../components/ImpossibleList';
import { PageContainer, PageHeader, PageTitle, ContentWrapper, PageDescription } from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes';
import { FaTrophy, FaClock, FaBullseye, FaSearch, FaFilter, FaChartLine, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
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
import PageHead from '../components/PageHead';
import { getImpossibleListData } from '../data/impossibleListTranslations';

const StatsWrapper = styled.div`
  padding: 1.5rem;
  margin-bottom: 2rem;
  background: rgba(22, 33, 62, 0.6);
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  border-top: 3px solid ${soloLevelingTheme.colors.accent.gold};
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  animation: ${fadeInUp} 0.6s ease-out;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

const ControlsWrapper = styled.div`
  padding: 1.5rem 1.75rem;
  margin-bottom: 2.5rem;
  background: linear-gradient(165deg, rgba(22, 33, 62, 0.95), rgba(26, 26, 46, 0.95), rgba(10, 10, 15, 0.9));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, ${soloLevelingTheme.colors.accent.purple}, ${soloLevelingTheme.colors.accent.gold}, transparent);
    opacity: 0.7;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
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
  min-width: 200px;
  max-width: 400px;
  
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
  font-size: 1rem;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 0 4px rgba(108, 92, 231, 0.3));
  transition: all 0.3s ease;
  
  ${SearchContainer}:has(input:focus) & {
    color: ${soloLevelingTheme.colors.accent.gold};
    filter: drop-shadow(0 0 10px rgba(253, 203, 110, 0.5));
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const RecentPreviewWrapper = styled.div`
  padding: 1.75rem;
  margin-bottom: 2.5rem;
  background: linear-gradient(165deg, rgba(22, 33, 62, 0.95), rgba(26, 26, 46, 0.95));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 0.6s ease-out 0.2s both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.gold}, ${soloLevelingTheme.colors.accent.orange});
    opacity: 0.9;
  }
`;

const RecentPreviewHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: ${props => props.$collapsed ? '0' : '1.25rem'};
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: margin 0.3s ease;

  &:focus-visible {
    outline: 2px solid ${soloLevelingTheme.colors.accent.purple};
    outline-offset: 2px;
  }
`;

const RecentPreviewHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RecentPreviewChevron = styled(FaChevronDown)`
  color: ${soloLevelingTheme.colors.accent.gold};
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.$collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};
`;

const RecentPreviewContent = styled.div`
  max-height: ${props => props.$collapsed ? '0' : '500px'};
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const RecentPreviewIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.gold}, ${soloLevelingTheme.colors.accent.orange});
  border-radius: ${soloLevelingTheme.borderRadius.md};
  color: ${soloLevelingTheme.colors.primary};
  font-size: 1rem;
`;

const RecentPreviewTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
`;

const RecentPreviewSubtitle = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  color: ${soloLevelingTheme.colors.text.secondary};
`;

const RecentPreviewList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const RecentPreviewItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1rem;
  background: rgba(108, 92, 231, 0.08);
  border-radius: ${soloLevelingTheme.borderRadius.md};
  border-left: 3px solid ${soloLevelingTheme.colors.accent.gold};
  font-size: 0.9rem;
  color: ${soloLevelingTheme.colors.text.primary};
  transition: all 0.25s ease;

  &:hover {
    background: rgba(108, 92, 231, 0.15);
    transform: translateX(4px);
  }

  svg {
    flex-shrink: 0;
    color: ${soloLevelingTheme.colors.accent.gold};
    font-size: 0.8rem;
  }
`;

const ImpossibleListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [recentCollapsed, setRecentCollapsed] = useState(false);
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

  const recentGoals = useMemo(() => {
    const recent = [];
    for (const section of sections) {
      const tl = section.title.toLowerCase();
      if (!(tl.includes('last completed') || tl.includes('current focus') || tl.includes('últimas metas') || tl.includes('enfoques actual'))) continue;
      for (const goal of section.goals) {
        if (goal.completed) {
          recent.push(goal.text);
          if (recent.length >= 5) return recent;
        }
        if (goal.subGoals) {
          for (const sg of goal.subGoals) {
            if (sg.completed) {
              recent.push(sg.text);
              if (recent.length >= 5) return recent;
            }
          }
        }
      }
    }
    return recent;
  }, [sections]);
  
  return (
    <PageContainer>
      <PageHead title={t('impossibleList.title')} description={t('impossibleList.description', { link: t('impossibleList.linkText') })} />
      <PageHeader>
        <PageTitle>{t('impossibleList.title')}</PageTitle>
        <PageDescription dangerouslySetInnerHTML={{
          __html: t('impossibleList.description', { link: `<a href="https://impossiblehq.com/impossible-list/" target="_blank" rel="noopener noreferrer">${t('impossibleList.linkText')}</a>` })
        }} />
      </PageHeader>
      
      <ContentWrapper>
        <StatsWrapper>
          <StatsContainer>
            <StatCard $delay="0s">
            <StatIcon $variant="default"><FaBullseye /></StatIcon>
            <StatNumber $variant="default">{stats.total}</StatNumber>
            <StatLabel>{t('impossibleList.stats.totalGoals')}</StatLabel>
          </StatCard>
          
          <StatCard $delay="0.1s" $variant="completed">
            <StatIcon $variant="completed"><FaTrophy /></StatIcon>
            <StatNumber $variant="completed">{stats.completed}</StatNumber>
            <StatLabel>{t('impossibleList.stats.completed')}</StatLabel>
          </StatCard>
          
          <StatCard $delay="0.2s" $variant="progress">
            <StatIcon $variant="progress"><FaClock /></StatIcon>
            <StatNumber $variant="progress">{stats.inProgress}</StatNumber>
            <StatLabel>{t('impossibleList.stats.inProgress')}</StatLabel>
          </StatCard>
          
          <StatCard $delay="0.3s" $variant="completed">
            <StatIcon $variant="completed"><FaChartLine /></StatIcon>
            <StatNumber $variant="completed">{stats.completionRate}%</StatNumber>
            <StatLabel>{t('impossibleList.stats.completionRate')}</StatLabel>
            </StatCard>
          </StatsContainer>
        </StatsWrapper>

        {recentGoals.length > 0 && (
          <RecentPreviewWrapper>
            <RecentPreviewHeader
              type="button"
              $collapsed={recentCollapsed}
              onClick={() => setRecentCollapsed(!recentCollapsed)}
              aria-expanded={!recentCollapsed}
              aria-controls="recent-preview-list"
            >
              <RecentPreviewHeaderLeft>
                <RecentPreviewIcon><FaCheckCircle /></RecentPreviewIcon>
                <div>
                  <RecentPreviewTitle>{t('impossibleList.recentPreview.title')}</RecentPreviewTitle>
                  <RecentPreviewSubtitle>{t('impossibleList.recentPreview.subtitle')}</RecentPreviewSubtitle>
                </div>
              </RecentPreviewHeaderLeft>
              <RecentPreviewChevron $collapsed={recentCollapsed} />
            </RecentPreviewHeader>
            <RecentPreviewContent $collapsed={recentCollapsed} id="recent-preview-list">
              <RecentPreviewList>
                {recentGoals.map((text, i) => (
                  <RecentPreviewItem key={i}>
                    <FaCheckCircle />
                    <span>{text}</span>
                  </RecentPreviewItem>
                ))}
              </RecentPreviewList>
            </RecentPreviewContent>
          </RecentPreviewWrapper>
        )}

        <ControlsWrapper>
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
              $active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              <FaFilter /> {t('impossibleList.filters.all')}
            </FilterButton>
            <FilterButton 
              $active={filter === 'completed'}
              onClick={() => setFilter('completed')}
            >
              <FaTrophy /> {t('impossibleList.filters.completed')}
            </FilterButton>
            <FilterButton 
              $active={filter === 'progress'}
              onClick={() => setFilter('progress')}
            >
              <FaClock /> {t('impossibleList.filters.progress')}
            </FilterButton>
          </FilterContainer>
          </ControlsContainer>
        </ControlsWrapper>
        
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