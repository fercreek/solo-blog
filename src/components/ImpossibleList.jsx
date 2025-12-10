import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaClock, FaBullseye, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { parseImpossibleListContent, getSectionIcon } from '../utils/contentParser';
import { fadeInUp } from '../styles/keyframes';

const ListContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    gap: 2.5rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  box-shadow: ${soloLevelingTheme.shadows.purple};
  overflow: hidden;
  position: relative;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
  
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
  
  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionHeader = styled.div`
  background: ${soloLevelingTheme.colors.gradients.primary};
  color: ${soloLevelingTheme.colors.text.primary};
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all ${soloLevelingTheme.animations.transition.fast};
  
  &:hover {
    background: ${soloLevelingTheme.colors.gradients.secondary};
  }
  
  @media (min-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  
  .title-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .collapse-icon {
    transition: transform ${soloLevelingTheme.animations.transition.fast};
    transform: ${props => props.collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
  
  svg {
    color: ${soloLevelingTheme.colors.accent.gold};
    filter: drop-shadow(0 0 4px rgba(253, 203, 110, 0.3));
  }
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SectionContent = styled.div`
  padding: ${props => props.collapsed ? '0' : '1.25rem'};
  max-height: ${props => props.collapsed ? '0' : '2000px'};
  overflow: hidden;
  transition: all ${soloLevelingTheme.animations.transition.medium};
  
  @media (min-width: 768px) {
    padding: ${props => props.collapsed ? '0' : '1.5rem'};
  }
`;

const GoalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
  
  ${props => props.isTravelGoals && `
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }
  `}
`;

const GoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: ${soloLevelingTheme.colors.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.md};
  transition: all ${soloLevelingTheme.animations.transition.fast};
  min-height: ${props => props.isTravelGoals ? 'auto' : '60px'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      180deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
    opacity: 0;
    transition: opacity ${soloLevelingTheme.animations.transition.fast};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${soloLevelingTheme.shadows.glow};
    border-color: ${soloLevelingTheme.colors.accent.orange};
    
    &::before {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    padding: ${props => props.isTravelGoals ? '1rem' : '1.25rem'};
    gap: 1rem;
  }
`;

const GoalIcon = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.125rem;

  svg {
    font-size: 1.1rem;
    color: ${props => props.completed ? soloLevelingTheme.colors.status.success : soloLevelingTheme.colors.accent.gold};
    filter: drop-shadow(0 0 4px ${props => props.completed ? 'rgba(104, 211, 145, 0.3)' : 'rgba(253, 203, 110, 0.3)'});
    transition: all ${soloLevelingTheme.animations.transition.fast};
  }
`;

const GoalContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const GoalText = styled.div`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${soloLevelingTheme.colors.text.primary};
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  strong {
    font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
    color: ${soloLevelingTheme.colors.accent.gold};
    text-shadow: 0 0 4px rgba(253, 203, 110, 0.2);
  }

  em {
    color: ${soloLevelingTheme.colors.text.secondary};
    font-style: italic;
    font-size: 0.9rem;
  }

  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    word-break: break-word;
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    transition: all ${soloLevelingTheme.animations.transition.fast};
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
      text-decoration: underline;
    }
  }
`;

const SubGoalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.75rem 0 0 0;
  display: grid;
  gap: 0.5rem;
`;

const SubGoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  background: ${soloLevelingTheme.colors.tertiary};
  border-radius: ${soloLevelingTheme.borderRadius.sm};
  border-left: 3px solid ${soloLevelingTheme.colors.accent.purple};
  font-size: 0.9rem;
  color: ${soloLevelingTheme.colors.text.secondary};
  transition: all ${soloLevelingTheme.animations.transition.fast};
  
  &:hover {
    background: ${soloLevelingTheme.colors.secondary};
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
    transform: translateX(4px);
  }

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 0.95rem;
  }
`;



const ImpossibleList = ({ content, searchTerm = '', filter = 'all' }) => {
  const [collapsedSections, setCollapsedSections] = useState(new Set());
  
  const sections = useMemo(() => parseImpossibleListContent(content), [content]);
  
  const filteredSections = useMemo(() => {
    return sections.map(section => {
      const filteredGoals = section.goals.filter(goal => {
        // Filter by search term
        const matchesSearch = !searchTerm || 
          goal.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (goal.subGoals && goal.subGoals.some(subGoal => 
            subGoal.text.toLowerCase().includes(searchTerm.toLowerCase())
          ));
        
        // Filter by completion status
        const matchesFilter = filter === 'all' || 
          (filter === 'completed' && goal.completed) ||
          (filter === 'progress' && !goal.completed);
        
        return matchesSearch && matchesFilter;
      }).map(goal => {
        // Also filter subgoals if they exist
        if (goal.subGoals) {
          const filteredSubGoals = goal.subGoals.filter(subGoal => {
            const matchesSearch = !searchTerm || 
              subGoal.text.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filter === 'all' || 
              (filter === 'completed' && subGoal.completed) ||
              (filter === 'progress' && !subGoal.completed);
            return matchesSearch && matchesFilter;
          });
          
          return {
            ...goal,
            subGoals: filteredSubGoals
          };
        }
        return goal;
      });
      
      return {
        ...section,
        goals: filteredGoals
      };
    }).filter(section => section.goals.length > 0);
  }, [sections, searchTerm, filter]);
  
  const toggleSection = (index) => {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(index)) {
      newCollapsed.delete(index);
    } else {
      newCollapsed.add(index);
    }
    setCollapsedSections(newCollapsed);
  };
  
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'FaCheckCircle':
        return <FaCheckCircle />;
      case 'FaClock':
        return <FaClock />;
      case 'FaBullseye':
        return <FaBullseye />;
      default:
        return <FaBullseye />;
    }
  };
  
  if (filteredSections.length === 0) {
    return (
      <ListContainer>
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem', 
          color: soloLevelingTheme.colors.text.secondary 
        }}>
          No goals found matching your criteria.
        </div>
      </ListContainer>
    );
  }
  
  return (
    <ListContainer>
      {filteredSections.map((section, index) => {
        const isCollapsed = collapsedSections.has(index);
        const isTravelGoals = section.title.toLowerCase().includes('travel goals');
        return (
          <Section key={index} index={index} fullWidth={isTravelGoals}>
            <SectionHeader onClick={() => toggleSection(index)}>
              <SectionTitle collapsed={isCollapsed}>
                <div className="title-content">
                  {renderIcon(getSectionIcon(section.title))}
                  {section.title}
                </div>
                <FaChevronDown className="collapse-icon" />
              </SectionTitle>
            </SectionHeader>
            <SectionContent collapsed={isCollapsed}>
              <GoalsList isTravelGoals={isTravelGoals}>
                {section.goals.map((goal, goalIndex) => (
                  <GoalItem key={goalIndex} completed={goal.completed} isTravelGoals={isTravelGoals}>
                    <GoalIcon completed={goal.completed}>
                      {goal.completed ? <FaCheckCircle /> : <FaClock />}
                    </GoalIcon>
                    <GoalContent>
                      <GoalText dangerouslySetInnerHTML={{ __html: goal.text }} />
                      {goal.subGoals && goal.subGoals.length > 0 && (
                        <SubGoalsList>
                          {goal.subGoals.map((subGoal, subIndex) => (
                            <SubGoalItem key={subIndex} completed={subGoal.completed}>
                              <GoalIcon completed={subGoal.completed}>
                                {subGoal.completed ? <FaCheckCircle /> : <FaClock />}
                              </GoalIcon>
                              <GoalText dangerouslySetInnerHTML={{ __html: subGoal.text }} />
                            </SubGoalItem>
                          ))}
                        </SubGoalsList>
                      )}
                    </GoalContent>
                  </GoalItem>
                ))}
              </GoalsList>
            </SectionContent>
          </Section>
        );
      })}
    </ListContainer>
  );
};

export default ImpossibleList;