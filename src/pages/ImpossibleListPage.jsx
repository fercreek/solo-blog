import { useState, useMemo } from 'react';
import styled from 'styled-components';
import ImpossibleList from '../components/ImpossibleList';
import { impossibleListData } from '../data/impossible-list';
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
  
  const sections = useMemo(() => parseImpossibleListContent(impossibleListData), []);
  
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
        <PageTitle>Impossible List</PageTitle>
        <PageDescription>
          Inspired by <a href="https://impossiblehq.com/impossible-list/" target="_blank" rel="noopener noreferrer">Joel Runyon's Impossible List</a>, 
          this is my collection of goals that push me beyond my comfort zone.
        </PageDescription>
      </PageHeader>
      
      <ContentWrapper>
        <StatsContainer>
          <StatCard delay="0s">
            <StatIcon variant="default"><FaBullseye /></StatIcon>
            <StatNumber variant="default">{stats.total}</StatNumber>
            <StatLabel>Total Goals</StatLabel>
          </StatCard>
          
          <StatCard delay="0.1s" variant="completed">
            <StatIcon variant="completed"><FaTrophy /></StatIcon>
            <StatNumber variant="completed">{stats.completed}</StatNumber>
            <StatLabel>Completed</StatLabel>
          </StatCard>
          
          <StatCard delay="0.2s" variant="progress">
            <StatIcon variant="progress"><FaClock /></StatIcon>
            <StatNumber variant="progress">{stats.inProgress}</StatNumber>
            <StatLabel>In Progress</StatLabel>
          </StatCard>
          
          <StatCard delay="0.3s" variant="completed">
            <StatIcon variant="completed"><FaChartLine /></StatIcon>
            <StatNumber variant="completed">{stats.completionRate}%</StatNumber>
            <StatLabel>Completion Rate</StatLabel>
          </StatCard>
        </StatsContainer>
        
        <ControlsContainer>
          <SearchContainer>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Search goals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <FilterContainer>
            <FilterButton 
              active={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              <FaFilter /> All
            </FilterButton>
            <FilterButton 
              active={filter === 'completed'}
              onClick={() => setFilter('completed')}
            >
              <FaTrophy /> Completed
            </FilterButton>
            <FilterButton 
              active={filter === 'progress'}
              onClick={() => setFilter('progress')}
            >
              <FaClock /> In Progress
            </FilterButton>
          </FilterContainer>
        </ControlsContainer>
        
        <ImpossibleList 
          content={impossibleListData} 
          searchTerm={searchTerm}
          filter={filter}
        />
      </ContentWrapper>
    </PageContainer>
  );
};

export default ImpossibleListPage;