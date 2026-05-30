import { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import ImpossibleList from '../components/ImpossibleList';
import { PageContainer, PageHeader, PageTitle, ContentWrapper, PageDescription } from '../components/PageComponents';
import { FaTrophy, FaClock, FaBullseye, FaSearch, FaFilter, FaChartLine, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { parseImpossibleListContent } from '../utils/contentParser';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import PageHead from '../components/PageHead';
import { getImpossibleListData } from '../data/impossibleListTranslations';
import { SystemPanel, SystemBadge, sys } from '../components/system';

/* ─── Stats grid ─────────────────────────────────────────────── */
const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
  @media (min-width: 1024px) {
    gap: 1.5rem;
  }
`;

const StatPanel = styled(SystemPanel)`
  align-items: center;
  text-align: center;
  padding: 1.5rem 1rem 1.25rem;
  gap: 0.4rem;
`;

const StatIconWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.12);
  clip-path: ${sys.windowClip(sys.bevelSm)};
  margin-bottom: 0.3rem;

  svg {
    font-size: 1.05rem;
    color: ${sys.color.cyan};
    filter: drop-shadow(${sys.glow.soft});
  }
`;

const StatNumber = styled.div`
  font-family: ${sys.font.mono};
  font-size: 2rem;
  font-weight: 700;
  color: ${sys.color.cyan};
  text-shadow: ${sys.glow.mid};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-family: ${sys.font.mono};
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: ${sys.color.muted};
`;

/* ─── Recent preview ─────────────────────────────────────────── */
const RecentPanel = styled(SystemPanel)`
  margin-bottom: 2.5rem;
`;

const RecentHeader = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;
  padding: 0;
  margin-bottom: ${props => props.$collapsed ? '0' : '1.25rem'};
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-align: left;
  transition: margin 0.3s ease;

  &:focus-visible {
    outline: 2px solid ${sys.color.cyan};
    outline-offset: 2px;
  }
`;

const RecentHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const RecentIconWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.15);
  clip-path: ${sys.windowClip(sys.bevelSm)};

  svg {
    color: ${sys.color.cyan};
    font-size: 1rem;
    filter: drop-shadow(${sys.glow.soft});
  }
`;

const RecentTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${sys.color.text};
  font-family: ${sys.font.heading};
`;

const RecentSubtitle = styled.p`
  margin: 0;
  font-family: ${sys.font.mono};
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: ${sys.color.muted};
`;

const RecentChevron = styled(FaChevronDown)`
  color: ${sys.color.cyan};
  font-size: 0.9rem;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.$collapsed ? 'rotate(-90deg)' : 'rotate(0deg)'};
  filter: drop-shadow(${sys.glow.soft});
`;

const RecentContent = styled.div`
  max-height: ${props => props.$collapsed ? '0' : '500px'};
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const RecentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RecentItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: rgba(56, 189, 248, 0.06);
  border-left: 3px solid ${sys.color.cyan};
  clip-path: ${sys.windowClip(sys.bevelSm)};
  font-size: 0.875rem;
  color: ${sys.color.text};
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(56, 189, 248, 0.12);
    transform: translateX(4px);
  }

  svg {
    flex-shrink: 0;
    color: ${sys.color.cyan};
    font-size: 0.8rem;
    filter: drop-shadow(${sys.glow.soft});
  }
`;

/* ─── Controls ───────────────────────────────────────────────── */
const ControlsPanel = styled(SystemPanel)`
  margin-bottom: 2.5rem;
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
  color: ${sys.color.muted};
  font-size: 0.9rem;
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.3));
  transition: all 0.3s ease;

  ${SearchContainer}:has(input:focus) & {
    color: ${sys.color.cyan};
    filter: drop-shadow(${sys.glow.soft});
  }
`;

const SystemSearchInput = styled.input`
  width: 100%;
  padding: 0.65rem 1rem 0.65rem 2.75rem;
  background: rgba(56, 189, 248, 0.05);
  border: 1px solid ${sys.color.line};
  clip-path: ${sys.windowClip(sys.bevelSm)};
  color: ${sys.color.text};
  font-family: ${sys.font.mono};
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  outline: none;
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${sys.color.muted};
    font-family: ${sys.font.mono};
    letter-spacing: 0.06em;
  }

  &:focus {
    border-color: ${sys.color.cyan};
    background: rgba(56, 189, 248, 0.09);
    box-shadow: ${sys.glow.soft};
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const SystemFilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  font-family: ${sys.font.mono};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  clip-path: ${sys.windowClip(sys.bevelSm)};
  cursor: pointer;
  border: none;
  transition: background 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;

  ${props => props.$active ? css`
    background: linear-gradient(135deg, ${sys.color.cyan}, ${sys.color.cyanDeep});
    color: #03121b;
    box-shadow: ${sys.glow.mid};
  ` : css`
    background: rgba(56, 189, 248, 0.07);
    color: ${sys.color.muted};
    border: 1px solid ${sys.color.line};
    &:hover {
      background: rgba(56, 189, 248, 0.14);
      color: ${sys.color.cyanBright};
      border-color: ${sys.color.cyan};
    }
  `}
`;

/* ─── Page component ─────────────────────────────────────────── */
const ImpossibleListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [recentCollapsed, setRecentCollapsed] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();

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
        {/* ── Stats ── */}
        <StatsGrid
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0.2, 0.2, 1] }}
        >
          {[
            { icon: <FaBullseye />, value: stats.total,          label: t('impossibleList.stats.totalGoals') },
            { icon: <FaTrophy />,   value: stats.completed,      label: t('impossibleList.stats.completed') },
            { icon: <FaClock />,    value: stats.inProgress,     label: t('impossibleList.stats.inProgress') },
            { icon: <FaChartLine />,value: `${stats.completionRate}%`, label: t('impossibleList.stats.completionRate') },
          ].map((s, i) => (
            <StatPanel
              key={i}
              $compact
              $reduced={prefersReducedMotion}
              $interactive={false}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : i * 0.08 }}
            >
              <StatIconWrap>{s.icon}</StatIconWrap>
              <StatNumber>{s.value}</StatNumber>
              <StatLabel>{s.label}</StatLabel>
            </StatPanel>
          ))}
        </StatsGrid>

        {/* ── Recent preview ── */}
        {recentGoals.length > 0 && (
          <RecentPanel
            $reduced={prefersReducedMotion}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0, 0.2, 0.2, 1], delay: 0.2 }}
          >
            <RecentHeader
              type="button"
              $collapsed={recentCollapsed}
              onClick={() => setRecentCollapsed(!recentCollapsed)}
              aria-expanded={!recentCollapsed}
              aria-controls="recent-preview-list"
            >
              <RecentHeaderLeft>
                <RecentIconWrap><FaCheckCircle /></RecentIconWrap>
                <div>
                  <RecentTitle>{t('impossibleList.recentPreview.title')}</RecentTitle>
                  <RecentSubtitle>{t('impossibleList.recentPreview.subtitle')}</RecentSubtitle>
                </div>
              </RecentHeaderLeft>
              <RecentChevron $collapsed={recentCollapsed} />
            </RecentHeader>
            <RecentContent $collapsed={recentCollapsed} id="recent-preview-list">
              <RecentList>
                {recentGoals.map((text, i) => (
                  <RecentItem key={i}>
                    <FaCheckCircle />
                    <span>{text}</span>
                  </RecentItem>
                ))}
              </RecentList>
            </RecentContent>
          </RecentPanel>
        )}

        {/* ── Controls ── */}
        <ControlsPanel
          $reduced={prefersReducedMotion}
          $compact
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <ControlsContainer>
            <SearchContainer>
              <SearchIcon />
              <SystemSearchInput
                type="text"
                placeholder={t('impossibleList.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>

            <FilterContainer>
              <SystemFilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>
                <FaFilter /> {t('impossibleList.filters.all')}
              </SystemFilterButton>
              <SystemFilterButton $active={filter === 'completed'} onClick={() => setFilter('completed')}>
                <FaTrophy /> {t('impossibleList.filters.completed')}
              </SystemFilterButton>
              <SystemFilterButton $active={filter === 'progress'} onClick={() => setFilter('progress')}>
                <FaClock /> {t('impossibleList.filters.progress')}
              </SystemFilterButton>
            </FilterContainer>
          </ControlsContainer>
        </ControlsPanel>

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
