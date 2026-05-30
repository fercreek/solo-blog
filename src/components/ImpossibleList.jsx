import { useState, useMemo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaBullseye, FaChevronDown } from 'react-icons/fa';
import { parseImpossibleListContent, getSectionIcon } from '../utils/contentParser';
import { useTranslation } from '../hooks/useTranslation';
import { SystemBadge, sys } from '../components/system';

/* ─── Animations ─────────────────────────────────────────────── */
const railGlow = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

/* ─── List container ─────────────────────────────────────────── */
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

/* ─── No results ─────────────────────────────────────────────── */
const NoResultsWrapper = styled(motion.div)`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  background: ${sys.color.panel};
  backdrop-filter: blur(12px);
  border: 1px solid ${sys.color.line};
  clip-path: ${sys.windowClip(sys.bevel)};
  color: ${sys.color.muted};
  font-family: ${sys.font.mono};
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${sys.bevel};
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${sys.color.cyan}, ${sys.color.cyanBright}, transparent);
    opacity: 0.5;
  }
`;

/* ─── Section panel ──────────────────────────────────────────── */
const Section = styled(motion.section)`
  position: relative;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.06), transparent 42%),
    ${sys.color.panel};
  backdrop-filter: blur(12px);
  border: 1px solid ${sys.color.line};
  clip-path: ${sys.windowClip(sys.bevel)};
  box-shadow:
    0 0 0 1px rgba(56, 189, 248, 0.05),
    0 18px 40px rgba(2, 6, 16, 0.55),
    inset 0 0 22px rgba(56, 189, 248, 0.05);
  overflow: hidden;
  grid-column: ${props => props.$fullWidth ? '1 / -1' : 'auto'};
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  /* animated top rail */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${sys.bevel};
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${sys.color.cyan}, ${sys.color.cyanBright}, transparent);
    opacity: 0.5;
  }

  &:hover {
    border-color: ${sys.color.cyan};
    box-shadow:
      ${sys.glow.soft},
      0 26px 60px rgba(2, 6, 16, 0.6),
      inset 0 0 26px rgba(56, 189, 248, 0.1);
    &::before { opacity: 1; }
  }
`;

/* Separate rail animation wrapper so we can conditionally animate */
const SectionWithRail = styled(Section)`
  ${props => !props.$reduced && css`
    &::before { animation: ${railGlow} 3.5s ease-in-out infinite; }
  `}
`;

/* ─── Section header ─────────────────────────────────────────── */
const SectionHeader = styled.div`
  padding: 0.875rem 1.25rem;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.06);
  }

  @media (min-width: 768px) {
    padding: 1rem 1.35rem;
  }
`;

const SectionTitleRow = styled.h2`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: ${sys.font.mono};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  color: ${sys.color.cyanBright};

  .title-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${sys.color.cyan};
      filter: drop-shadow(${sys.glow.soft});
    }
  }

  .collapse-icon {
    color: ${sys.color.cyan};
    font-size: 0.8rem;
    flex-shrink: 0;
    filter: drop-shadow(${sys.glow.soft});
    transition: transform 0.3s ease;
    transform: ${props => props.$collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

/* ─── Section content ────────────────────────────────────────── */
const SectionContent = styled.div`
  padding: ${props => props.$collapsed ? '0' : '0.875rem 1.25rem'};
  max-height: ${props => props.$collapsed ? '0' : '2000px'};
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: ${props => props.$collapsed ? '0' : '1rem 1.35rem'};
  }
`;

/* ─── Goals list ─────────────────────────────────────────────── */
const GoalsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;

  @media (min-width: 768px) {
    gap: 0.6rem;
  }

  ${props => props.$isTravelGoals && css`
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

/* ─── Goal item ──────────────────────────────────────────────── */
const GoalItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  padding: 0.75rem 1rem;
  background: rgba(56, 189, 248, 0.04);
  border: 1px solid rgba(56, 189, 248, 0.12);
  clip-path: ${sys.windowClip(sys.bevelSm)};
  /* cyan accent stripe left */
  border-left: 3px solid ${props => props.$completed ? sys.color.cyan : 'rgba(56, 189, 248, 0.3)'};
  min-height: ${props => props.$isTravelGoals ? 'auto' : '48px'};
  position: relative;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.08);
    border-color: ${sys.color.cyan};
    border-left-color: ${sys.color.cyan};
  }

  @media (min-width: 768px) {
    padding: ${props => props.$isTravelGoals ? '0.75rem 1rem' : '0.875rem 1.1rem'};
    gap: 0.75rem;
  }
`;

const GoalIconWrap = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;

  svg {
    font-size: 0.95rem;
    color: ${props => props.$completed ? sys.color.cyan : sys.color.muted};
    ${props => props.$completed && css`filter: drop-shadow(${sys.glow.soft});`}
  }
`;

const GoalContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const GoalText = styled.div`
  font-size: 0.875rem;
  line-height: 1.45;
  color: ${sys.color.text};
  word-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  strong {
    font-weight: 700;
    color: ${sys.color.cyanBright};
    text-shadow: 0 0 6px rgba(56, 189, 248, 0.3);
  }

  em {
    font-family: ${sys.font.mono};
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    color: ${sys.color.muted};
    font-style: normal;
  }

  a {
    color: ${sys.color.cyan};
    text-decoration: none;
    word-break: break-word;
    font-weight: 500;
    transition: color 0.2s ease, text-shadow 0.2s ease;

    &:hover {
      color: ${sys.color.cyanBright};
      text-shadow: 0 0 8px rgba(56, 189, 248, 0.5);
      text-decoration: underline;
    }
  }
`;

const GoalMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.4rem;
`;

/* ─── Sub goals ──────────────────────────────────────────────── */
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
  padding: 0.55rem 0.875rem;
  background: rgba(56, 189, 248, 0.03);
  border-left: 3px solid ${props => props.$completed ? sys.color.cyan : sys.color.line};
  clip-path: ${sys.windowClip(sys.bevelSm)};
  font-size: 0.8125rem;
  color: ${props => props.$completed ? sys.color.text : sys.color.muted};
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.07);
    border-left-color: ${sys.color.cyan};
  }

  @media (min-width: 768px) {
    padding: 0.65rem 1rem;
    font-size: 0.875rem;
  }
`;

/* ─── Fade variants ──────────────────────────────────────────── */
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

/* ─── Component ──────────────────────────────────────────────── */
const ImpossibleList = ({ content, searchTerm = '', filter = 'all' }) => {
  const [collapsedSections, setCollapsedSections] = useState(new Set());
  const prefersReducedMotion = useReducedMotion();

  const sections = useMemo(() => parseImpossibleListContent(content), [content]);

  const filteredSections = useMemo(() => {
    return sections.map(section => {
      const filteredGoals = section.goals.filter(goal => {
        const matchesSearch = !searchTerm ||
          goal.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (goal.subGoals && goal.subGoals.some(sg =>
            sg.text.toLowerCase().includes(searchTerm.toLowerCase())
          ));
        const matchesFilter = filter === 'all' ||
          (filter === 'completed' && goal.completed) ||
          (filter === 'progress' && !goal.completed);
        return matchesSearch && matchesFilter;
      }).map(goal => {
        if (goal.subGoals) {
          const filteredSubGoals = goal.subGoals.filter(sg => {
            const matchesSearch = !searchTerm ||
              sg.text.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filter === 'all' ||
              (filter === 'completed' && sg.completed) ||
              (filter === 'progress' && !sg.completed);
            return matchesSearch && matchesFilter;
          });
          return { ...goal, subGoals: filteredSubGoals };
        }
        return goal;
      });
      return { ...section, goals: filteredGoals };
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
      case 'FaCheckCircle': return <FaCheckCircle />;
      case 'FaClock':       return <FaClock />;
      case 'FaBullseye':    return <FaBullseye />;
      default:              return <FaBullseye />;
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
          <SectionWithRail
            key={index}
            $fullWidth={isTravelGoals}
            $reduced={prefersReducedMotion}
            initial={prefersReducedMotion ? false : fadeInUpVariants.hidden}
            animate={prefersReducedMotion ? undefined : fadeInUpVariants.visible}
            transition={{ duration: 0.6, ease: [0, 0.2, 0.2, 1], delay: prefersReducedMotion ? 0 : index * 0.08 }}
          >
            <SectionHeader onClick={() => toggleSection(index)}>
              <SectionTitleRow $collapsed={isCollapsed}>
                <div className="title-content">
                  {renderIcon(getSectionIcon(section.title))}
                  {section.title}
                </div>
                <FaChevronDown className="collapse-icon" />
              </SectionTitleRow>
            </SectionHeader>
            <SectionContent $collapsed={isCollapsed}>
              <GoalsList $isTravelGoals={isTravelGoals}>
                {section.goals.map((goal, goalIndex) => (
                  <GoalItem key={goalIndex} $completed={goal.completed} $isTravelGoals={isTravelGoals}>
                    <GoalIconWrap $completed={goal.completed}>
                      {goal.completed ? <FaCheckCircle /> : <FaClock />}
                    </GoalIconWrap>
                    <GoalContent>
                      <GoalText dangerouslySetInnerHTML={{ __html: goal.text }} />
                      <GoalMeta>
                        <SystemBadge $variant={goal.completed ? 'cyan' : 'shadow'}>
                          {goal.completed ? t('impossibleList.filters.completed') : t('impossibleList.filters.progress')}
                        </SystemBadge>
                      </GoalMeta>
                      {goal.subGoals && goal.subGoals.length > 0 && (
                        <SubGoalsList>
                          {goal.subGoals.map((subGoal, subIndex) => (
                            <SubGoalItem key={subIndex} $completed={subGoal.completed}>
                              <GoalIconWrap $completed={subGoal.completed}>
                                {subGoal.completed ? <FaCheckCircle /> : <FaClock />}
                              </GoalIconWrap>
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
          </SectionWithRail>
        );
      })}
    </ListContainer>
  );
};

export default ImpossibleList;
