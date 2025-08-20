import { useState, useMemo } from 'react';
import styled from 'styled-components';
import ImpossibleList from '../components/ImpossibleList';
import { impossibleListData } from '../data/impossible-list';
import { PageContainer, PageHeader, PageTitle, ContentWrapper, PageDescription } from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes';
import { FaTrophy, FaClock, FaBullseye, FaSearch, FaFilter } from 'react-icons/fa';
import { parseImpossibleListContent } from '../utils/contentParser';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.6s ease-out;
`;

const StatCard = styled.div`
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 1.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all ${soloLevelingTheme.animations.transition.medium};
  
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
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${soloLevelingTheme.shadows.glow};
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 0 8px rgba(253, 203, 110, 0.4));
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  color: ${soloLevelingTheme.colors.text.primary};
  margin-bottom: 0.25rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${soloLevelingTheme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
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
  max-width: 400px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background: ${soloLevelingTheme.colors.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.md};
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: 0.9rem;
  transition: all ${soloLevelingTheme.animations.transition.fast};
  
  &::placeholder {
    color: ${soloLevelingTheme.colors.text.secondary};
  }
  
  &:focus {
    outline: none;
    border-color: ${soloLevelingTheme.colors.accent.orange};
    box-shadow: 0 0 0 2px rgba(255, 138, 76, 0.2);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 0.9rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${props => props.active ? soloLevelingTheme.colors.accent.orange : soloLevelingTheme.colors.secondary};
  border: 1px solid ${props => props.active ? soloLevelingTheme.colors.accent.orange : soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.sm};
  color: ${props => props.active ? soloLevelingTheme.colors.text.primary : soloLevelingTheme.colors.text.secondary};
  font-size: 0.8rem;
  cursor: pointer;
  transition: all ${soloLevelingTheme.animations.transition.fast};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &:hover {
    background: ${soloLevelingTheme.colors.accent.orange};
    color: ${soloLevelingTheme.colors.text.primary};
    border-color: ${soloLevelingTheme.colors.accent.orange};
  }
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
          <StatCard>
            <StatIcon><FaBullseye /></StatIcon>
            <StatNumber>{stats.total}</StatNumber>
            <StatLabel>Total Goals</StatLabel>
          </StatCard>
          
          <StatCard>
            <StatIcon><FaTrophy /></StatIcon>
            <StatNumber>{stats.completed}</StatNumber>
            <StatLabel>Completed</StatLabel>
          </StatCard>
          
          <StatCard>
            <StatIcon><FaClock /></StatIcon>
            <StatNumber>{stats.inProgress}</StatNumber>
            <StatLabel>In Progress</StatLabel>
          </StatCard>
          
          <StatCard>
            <StatIcon><FaTrophy /></StatIcon>
            <StatNumber>{stats.completionRate}%</StatNumber>
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