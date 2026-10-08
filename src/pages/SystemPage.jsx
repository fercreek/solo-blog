import styled from 'styled-components';
import { useReducedMotion } from 'framer-motion';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  ContentWrapper
} from '../components/PageComponents';
import { SystemPanel, SystemBadge, sys } from '../components/system';
import { useTranslation } from '../hooks/useTranslation';
import PageHead from '../components/PageHead';
import { systemSnapshot as snap, snapshotDateLabel } from '../data/systemSnapshot';

const SnapshotRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 2.5rem;
`;

const SectionLabel = styled.h2`
  font-family: ${sys.font.mono};
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${sys.color.cyanBright};
  margin: 3rem 0 1.25rem;
`;

const LayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
`;

const LayerName = styled.h3`
  font-family: ${sys.font.mono};
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${sys.color.muted};
  margin: 0 0 0.5rem;
`;

const LayerNumber = styled.p`
  font-family: ${sys.font.heading};
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.1;
  color: ${sys.color.cyanBright};
  margin: 0 0 0.6rem;
`;

const LayerUnit = styled.span`
  font-family: ${sys.font.mono};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${sys.color.muted};
  margin-left: 0.5rem;
`;

const LayerText = styled.p`
  font-family: ${sys.font.body};
  font-size: 0.98rem;
  line-height: 1.6;
  color: ${sys.color.text};
  margin: 0 0 0.75rem;
`;

const LayerStat = styled.p`
  font-family: ${sys.font.mono};
  font-size: 0.74rem;
  line-height: 1.5;
  color: ${sys.color.muted};
  margin: 0;
`;

const LoopSteps = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1rem;
  margin: 0 0 1.25rem;
  padding: 0;
`;

const LoopStep = styled.li`
  padding: 1rem 1.1rem;
  border: 1px solid ${sys.color.line};
  clip-path: ${sys.windowClip(sys.bevelSm)};
`;

const LoopIndex = styled.span`
  display: block;
  font-family: ${sys.font.mono};
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  color: ${sys.color.cyan};
  margin-bottom: 0.4rem;
`;

const LoopTitle = styled.span`
  display: block;
  font-family: ${sys.font.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${sys.color.text};
  margin-bottom: 0.3rem;
`;

const LoopText = styled.span`
  display: block;
  font-family: ${sys.font.body};
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${sys.color.muted};
`;

const PlainList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.9rem;
`;

const PlainItem = styled.li`
  font-family: ${sys.font.body};
  font-size: 0.98rem;
  line-height: 1.6;
  color: ${sys.color.text};

  a {
    color: ${sys.color.cyanBright};
    font-weight: 600;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`;

const PRODUCTS = [
  { id: 'studioLink', name: 'Studio Link', href: 'https://studiolink.online/' },
  { id: 'vayla', name: 'Vayla', href: 'https://www.vayla.dance/' },
  { id: 'litebox', name: 'Litebox Parcel', href: 'https://www.liteboxparcel.com/' },
  { id: 'cargoControl', name: 'Cargo Control' },
];

const SystemPage = () => {
  const { t, language } = useTranslation();
  const reduced = useReducedMotion();
  const reveal = {
    $reduced: reduced,
    initial: reduced ? false : { opacity: 0, y: 24 },
    whileInView: reduced ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
  };

  const layers = [
    {
      id: 'agents',
      number: snap.agents,
      stat: t('system.layers.agents.stat', {
        launches: snap.launches30d,
        own: snap.ownLaunches30d,
      }),
    },
    { id: 'skills', number: snap.skills },
    {
      id: 'guardrails',
      number: snap.hooks,
      stat: t('system.layers.guardrails.stat', {
        blocked: snap.blocked30d,
        attempts: snap.attempts30d,
      }),
    },
    { id: 'board', number: snap.boardChecks },
    {
      id: 'memory',
      number: snap.lessons,
      stat: t('system.layers.memory.stat', { repos: snap.lessonRepos }),
    },
  ];

  const loop = ['mistake', 'lesson', 'skill', 'agent'];

  return (
    <PageContainer>
      <PageHead title={t('system.title')} description={t('system.descriptionSeo')} />
      <PageHeader>
        <PageTitle>{t('system.title')}</PageTitle>
        <PageDescription>{t('system.description')}</PageDescription>
      </PageHeader>
      <ContentWrapper>
        <SnapshotRow>
          <SystemBadge $variant="amber">
            {t('system.snapshot', { date: snapshotDateLabel(language) })}
          </SystemBadge>
        </SnapshotRow>

        <SectionLabel>{t('system.sections.layers')}</SectionLabel>
        <LayerGrid>
          {layers.map((layer) => (
            <SystemPanel key={layer.id} $compact {...reveal}>
              <LayerName>{t(`system.layers.${layer.id}.name`)}</LayerName>
              <LayerNumber>
                {layer.number}
                <LayerUnit>{t(`system.layers.${layer.id}.unit`)}</LayerUnit>
              </LayerNumber>
              <LayerText>{t(`system.layers.${layer.id}.text`)}</LayerText>
              {layer.stat && <LayerStat>{layer.stat}</LayerStat>}
            </SystemPanel>
          ))}
        </LayerGrid>

        <SectionLabel>{t('system.sections.loop')}</SectionLabel>
        <SystemPanel $interactive={false} {...reveal}>
          <LoopSteps>
            {loop.map((step, index) => (
              <LoopStep key={step}>
                <LoopIndex>{`0${index + 1}`}</LoopIndex>
                <LoopTitle>{t(`system.loop.${step}.title`)}</LoopTitle>
                <LoopText>{t(`system.loop.${step}.text`)}</LoopText>
              </LoopStep>
            ))}
          </LoopSteps>
          <LayerText>{t('system.loop.note')}</LayerText>
        </SystemPanel>

        <SectionLabel>{t('system.sections.runs')}</SectionLabel>
        <SystemPanel $interactive={false} {...reveal}>
          <PlainList>
            {PRODUCTS.map((product) => (
              <PlainItem key={product.id}>
                {product.href ? (
                  <a href={product.href} target="_blank" rel="noopener noreferrer">{product.name}</a>
                ) : (
                  <strong>{product.name}</strong>
                )}
                {' · '}
                {t(`system.runs.${product.id}`)}
              </PlainItem>
            ))}
          </PlainList>
        </SystemPanel>

        <SectionLabel>{t('system.sections.openSource')}</SectionLabel>
        <SystemPanel $interactive={false} {...reveal}>
          <PlainList>
            <PlainItem>
              <a href="https://github.com/fercreek/focus-adhd" target="_blank" rel="noopener noreferrer">focus-adhd</a>
              {' · '}
              {t('system.openSource.focusAdhd')}
            </PlainItem>
            <PlainItem>{t('system.openSource.note')}</PlainItem>
          </PlainList>
        </SystemPanel>
      </ContentWrapper>
    </PageContainer>
  );
};

export default SystemPage;
