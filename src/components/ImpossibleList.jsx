import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaBullseye, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { parseImpossibleListContent, getSectionIcon } from '../utils/contentParser';
import { useTranslation } from '../hooks/useTranslation';

const NoResultsWrapper = styled(motion.div)`
  grid-column: 1 / -1;
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(165deg, rgba(26, 26, 46, 0.98), rgba(22, 33, 62, 0.95));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold});
    border-radius: ${soloLevelingTheme.borderRadius.xl} ${soloLevelingTheme.borderRadius.xl} 0 0;
  }
`;

const ListContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 0;
  background: linear-gradient(165deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.95) 100%);
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  overflow: hidden;
  position: relative;
  grid-column: ${props => props.$fullWidth ? '1 / -1' : 'auto'};
  transition: border-color 0.25s ease;

  &:hover {
    border-color: ${soloLevelingTheme.colors.border.accent};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold}, ${soloLevelingTheme.colors.accent.purple});
  }
`;

const SectionHeader = styled.div`
  background: rgba(26, 26, 46, 0.95);
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: background 0.25s ease;
  border-bottom: 1px solid transparent;
  
  &:hover {
    background: rgba(108, 92, 231, 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 1rem 1.35rem;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.05rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  color: ${soloLevelingTheme.colors.text.primary};
  
  .title-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .collapse-icon {
    color: ${soloLevelingTheme.colors.accent.gold};
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    transform: ${props => props.$collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
  
  .title-content svg {
    color: ${soloLevelingTheme.colors.accent.gold};
  }
  
  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const SectionContent = styled.div`
  padding: ${props => props.$collapsed ? '0' : '0.875rem 1.25rem'};
  max-height: ${props => props.$collapsed ? '0' : '2000px'};
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: 768px) {
    padding: ${props => props.$collapsed ? '0' : '1rem 1.35rem'};
  }
`;

const GoalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    gap: 0.6rem;
  }
  
  ${props => props.$isTravelGoals && `
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.6rem;
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.75rem;
    }
  `}
`;

const GoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.9), rgba(10, 10, 15, 0.95));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  border-left: 4px solid ${props => props.$completed ? 'rgba(104, 211, 145, 0.8)' : soloLevelingTheme.colors.accent.gold};
  transition: all 0.3s ease;
  min-height: ${props => props.$isTravelGoals ? 'auto' : '48px'};
  position: relative;
  overflow: hidden;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${soloLevelingTheme.colors.border.accent};
  }

  @media (min-width: 768px) {
    padding: ${props => props.$isTravelGoals ? '0.75rem 1rem' : '0.875rem 1.1rem'};
    gap: 0.75rem;
  }
`;

const GoalIcon = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;

  svg {
    font-size: 0.95rem;
    color: ${props => props.$completed ? soloLevelingTheme.colors.status.success : soloLevelingTheme.colors.accent.gold};
  }
`;

const GoalContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const GoalText = styled.div`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${soloLevelingTheme.colors.text.primary};
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 0.9rem;
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
  margin: 0.5rem 0 0 0;
  display: grid;
  gap: 0.4rem;
`;

const SubGoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.6rem 0.875rem;
  background: rgba(22, 33, 62, 0.85);
  border-radius: ${soloLevelingTheme.borderRadius.md};
  border-left: 4px solid ${props => props.$completed ? 'rgba(104, 211, 145, 0.8)' : soloLevelingTheme.colors.accent.purple};
  font-size: 0.8125rem;
  color: ${soloLevelingTheme.colors.text.secondary};
  transition: border-color 0.2s ease;
  
  &:hover {
    border-left-color: ${soloLevelingTheme.colors.accent.gold};
  }

  @media (min-width: 768px) {
    padding: 0.7rem 1rem;
    font-size: 0.875rem;
  }
`;



const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const ImpossibleList = ({ content, searchTerm = '', filter = 'all' }) => {
  const [collapsedSections, setCollapsedSections] = useState(new Set());
  const prefersReducedMotion = useReducedMotion();
  
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
  
  const { t } = useTranslation();

  if (filteredSections.length === 0) {
    return (
      <ListContainer>
        <NoResultsWrapper
          initial={prefersReducedMotion ? false : fadeInUpVariants.hidden}
          animate={prefersReducedMotion ? undefined : fadeInUpVariants.visible}
          transition={{ duration: 0.6, ease: [0, 0.2, 0.2, 1] }}
        >
          {t('impossibleList.noResults')}
        </NoResultsWrapper>
      </ListContainer>
    );
  }
  
  return (
    <ListContainer>
      {filteredSections.map((section, index) => {
        const isCollapsed = collapsedSections.has(index);
        const isTravelGoals = section.title.toLowerCase().includes('travel goals');
        return (
          <Section
            key={index}
            $index={index}
            $fullWidth={isTravelGoals}
            initial={prefersReducedMotion ? false : fadeInUpVariants.hidden}
            animate={prefersReducedMotion ? undefined : fadeInUpVariants.visible}
            transition={{ duration: 0.6, ease: [0, 0.2, 0.2, 1], delay: prefersReducedMotion ? 0 : index * 0.08 }}
          >
            <SectionHeader onClick={() => toggleSection(index)}>
              <SectionTitle $collapsed={isCollapsed}>
                <div className="title-content">
                  {renderIcon(getSectionIcon(section.title))}
                  {section.title}
                </div>
                <FaChevronDown className="collapse-icon" />
              </SectionTitle>
            </SectionHeader>
            <SectionContent $collapsed={isCollapsed}>
              <GoalsList $isTravelGoals={isTravelGoals}>
                {section.goals.map((goal, goalIndex) => (
                  <GoalItem key={goalIndex} $completed={goal.completed} $isTravelGoals={isTravelGoals}>
                    <GoalIcon $completed={goal.completed}>
                      {goal.completed ? <FaCheckCircle /> : <FaClock />}
                    </GoalIcon>
                    <GoalContent>
                      <GoalText dangerouslySetInnerHTML={{ __html: goal.text }} />
                      {goal.subGoals && goal.subGoals.length > 0 && (
                        <SubGoalsList>
                          {goal.subGoals.map((subGoal, subIndex) => (
                            <SubGoalItem key={subIndex} $completed={subGoal.completed}>
                              <GoalIcon $completed={subGoal.completed}>
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