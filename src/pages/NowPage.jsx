import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  ContentWrapper,
  PageDescription
} from '../components/PageComponents';
import { SystemPanel, SystemBadge, sys } from '../components/system';
import { FaClock, FaMapMarkerAlt, FaCode, FaDumbbell, FaChartLine, FaUsers, FaBullseye, FaLaptopCode, FaProjectDiagram, FaCoins, FaMusic, FaRocket, FaCalendarAlt } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';
import PageHead from '../components/PageHead';
import NowCard from '../components/NowCard';
import { formatDate } from '../utils/formatDate';

// ─── section title ────────────────────────────────────────────────────────────
const SectionTitle = styled.h2`
  font-family: ${sys.font.heading};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${sys.color.cyanBright};
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 3.5rem 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: '▸';
    color: ${sys.color.cyan};
    font-size: 1rem;
  }
`;

// ─── highlight (location / intro) ────────────────────────────────────────────
const HighlightSection = motion(styled.div`
  /* SystemPanel provides most of the look; this adds a slight amber accent strip */
`);

const LocationBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: ${sys.font.mono};
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${sys.color.cyan};
  margin-bottom: 1.25rem;

  svg {
    color: ${sys.color.cyan};
    filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.7));
  }
`;

const HighlightText = styled.p`
  font-family: ${sys.font.body};
  color: ${sys.color.text};
  font-size: 1.05rem;
  line-height: 1.85;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.97rem;
    line-height: 1.7;
  }
`;

// ─── activities grid ──────────────────────────────────────────────────────────
const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

// ─── focus section ────────────────────────────────────────────────────────────
const FocusList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FocusIcon = styled.div`
  font-size: 1.4rem;
  color: ${sys.color.cyan};
  filter: drop-shadow(0 0 7px rgba(56, 189, 248, 0.6));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transition: filter 0.3s ease;
`;

const FocusText = styled.p`
  font-family: ${sys.font.body};
  font-size: 0.95rem;
  color: ${sys.color.text};
  line-height: 1.55;
  margin: 0;
  flex: 1;
`;

const FocusRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

// ─── last updated bar ─────────────────────────────────────────────────────────
const LastUpdated = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 3rem;
  font-family: ${sys.font.mono};
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${sys.color.muted};

  svg {
    color: ${sys.color.cyan};
    filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.5));
  }
`;

// ─── helpers ──────────────────────────────────────────────────────────────────
const getActivityType = (title) => {
  const t = title.toLowerCase();
  if (t.includes('backend') || t.includes('development')) return 'backend';
  if (t.includes('side') || t.includes('project')) return 'sideProjects';
  if (t.includes('trading') || t.includes('crypto')) return 'trading';
  if (t.includes('danc')) return 'dancing';
  return 'default';
};

const getFocusIcon = (focusText) => {
  const text = focusText.toLowerCase();
  if (text.includes('revenue') || text.includes('studio link')) return <FaProjectDiagram />;
  if (text.includes('framework') || text.includes('mvp')) return <FaRocket />;
  if (text.includes('autonomous') || text.includes('agent') || text.includes('autónomo')) return <FaProjectDiagram />;
  if (text.includes('baile') || text.includes('danc')) return <FaMusic />;
  if (text.includes('trader') || text.includes('trading')) return <FaCoins />;
  if (text.includes('builder') || text.includes('elegant') || text.includes('elegante')) return <FaBullseye />;
  if (text.includes('hábito') || text.includes('habit')) return <FaCalendarAlt />;
  if (text.includes('delegar') || text.includes('delegat')) return <FaUsers />;
  if (text.includes('productividad') || text.includes('productivity')) return <FaRocket />;
  return <FaBullseye />;
};

// Update this whenever the /now content changes (month index is 0-based).
const NOW_LAST_UPDATED = new Date(2026, 4, 30);

const NowPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const r = useReducedMotion();

  const currentActivities = [
    {
      icon: <FaLaptopCode />,
      title: t('now.currentActivities.backend.title'),
      description: t('now.currentActivities.backend.description')
    },
    {
      icon: <FaProjectDiagram />,
      title: t('now.currentActivities.sideProjects.title'),
      description: t('now.currentActivities.sideProjects.description')
    },
    {
      icon: <FaCoins />,
      title: t('now.currentActivities.trading.title'),
      description: t('now.currentActivities.trading.description')
    },
    {
      icon: <FaMusic />,
      title: t('now.currentActivities.dancing.title'),
      description: t('now.currentActivities.dancing.description')
    }
  ];

  const currentFocus = [
    t('now.focus.item1'),
    t('now.focus.item2'),
    t('now.focus.item3'),
    t('now.focus.item4'),
    t('now.focus.item5')
  ];

  return (
    <PageContainer>
      <PageHead title={t('now.title')} description={t('now.descriptionSeo')} />
      <PageHeader>
        <PageTitle>{t('now.title')}</PageTitle>
        <PageDescription dangerouslySetInnerHTML={{
          __html: t('now.description', {
            sivers: '<a href="https://sivers.org/now" target="_blank" rel="noopener noreferrer">Derek Sivers</a>',
            frank: '<a href="https://collegeinfogeek.com/now/" target="_blank" rel="noopener noreferrer">Thomas Frank</a>'
          })
        }} />
      </PageHeader>

      <ContentWrapper>
        {/* ── Location / highlight panel ───────────────────────── */}
        <SystemPanel
          $reduced={r}
          initial={r ? false : { opacity: 0, y: 24 }}
          whileInView={r ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0, 0.2, 0.2, 1] }}
          style={{ marginBottom: '1rem' }}
        >
          <LocationBadge>
            <FaMapMarkerAlt />
            {t('now.location')}
          </LocationBadge>
          <HighlightText>
            {t('now.highlight')}
          </HighlightText>
        </SystemPanel>

        {/* ── Current activities ───────────────────────────────── */}
        <SectionTitle>{t('now.currentActivities.title')}</SectionTitle>
        <ActivitiesGrid>
          {currentActivities.map((activity, index) => (
            <NowCard
              key={index}
              type={getActivityType(activity.title)}
              icon={activity.icon}
              title={activity.title}
              description={activity.description}
              delay={`${index * 0.08}s`}
            />
          ))}
        </ActivitiesGrid>

        {/* ── Current focus ────────────────────────────────────── */}
        <SectionTitle>
          <FaBullseye style={{ color: sys.color.cyan, marginRight: '0.3rem' }} />
          {t('now.focus.title')}
        </SectionTitle>
        <FocusList>
          {currentFocus.map((focus, index) => (
            <SystemPanel
              key={index}
              $compact
              $reduced={r}
              initial={r ? false : { opacity: 0, y: 20 }}
              whileInView={r ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: [0, 0.2, 0.2, 1], delay: r ? 0 : index * 0.07 }}
            >
              <FocusRow>
                <FocusIcon>{getFocusIcon(focus)}</FocusIcon>
                <FocusText>{focus}</FocusText>
              </FocusRow>
            </SystemPanel>
          ))}
        </FocusList>

        {/* ── Last updated ─────────────────────────────────────── */}
        <LastUpdated>
          <FaClock />
          {t('now.lastUpdated', { date: formatDate(NOW_LAST_UPDATED, language) })}
        </LastUpdated>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NowPage;
