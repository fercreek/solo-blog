import { useReducedMotion } from 'framer-motion';
import { SystemPanel, SystemBadge, sys } from './system';
import styled from 'styled-components';

// ─── inner layout pieces ─────────────────────────────────────────────────────

const IconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
`;

const IconWrap = styled.div`
  font-size: 1.7rem;
  color: ${sys.color.cyan};
  filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.6));
  line-height: 1;
  transition: filter 0.3s ease, transform 0.3s ease;

  /* parent panel provides the :hover context via styled-components nesting */
`;

const CardTitle = styled.h3`
  font-family: ${sys.font.heading};
  font-size: 1.05rem;
  font-weight: 600;
  color: ${sys.color.text};
  margin: 0 0 0.5rem;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-family: ${sys.font.body};
  font-size: 0.88rem;
  line-height: 1.6;
  color: ${sys.color.muted};
  margin: 0;
  transition: color 0.3s ease;
`;

const MetaLabel = styled.span`
  font-family: ${sys.font.mono};
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${sys.color.cyanBright};
  display: block;
  margin-top: 0.85rem;
`;

// ─── badge label by type ──────────────────────────────────────────────────────
const TYPE_BADGE = {
  backend:      'DEV',
  sideProjects: 'PROJECT',
  trading:      'TRADING',
  dancing:      'DANCE',
  default:      'ACTIVE',
};

const parseDelay = (d) => parseFloat(String(d).replace('s', '')) || 0;

const NowCard = ({ type = 'default', icon, title, description, delay = '0s' }) => {
  const r = useReducedMotion();
  const badge = TYPE_BADGE[type] || TYPE_BADGE.default;
  const delaySeconds = parseDelay(delay);

  return (
    <SystemPanel
      $compact
      $reduced={r}
      as="article"
      initial={r ? false : { opacity: 0, y: 28 }}
      whileInView={r ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0, 0.2, 0.2, 1], delay: r ? 0 : delaySeconds }}
    >
      <IconRow>
        <IconWrap>{icon}</IconWrap>
        <SystemBadge $variant="cyan">{badge}</SystemBadge>
      </IconRow>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <MetaLabel>{type !== 'default' ? type.replace(/([A-Z])/g, ' $1').trim() : 'activity'}</MetaLabel>
    </SystemPanel>
  );
};

export default NowCard;
