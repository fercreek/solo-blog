import styled, { keyframes, css } from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import SystemButton from './SystemButton';

// ── Solo Leveling "System" palette ──────────────────────────────
const SYS = {
  bg: 'rgba(10, 18, 34, 0.72)',
  cyan: '#38BDF8',
  cyanBright: '#7DD3FC',
  cyanDeep: '#0EA5E9',
  amber: '#7DD3FC',
  shadow: '#6D5DD3',
  text: '#E8F1FF',
  muted: '#94A8C4',
};

const borderGlow = keyframes`
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
`;

const sweep = keyframes`
  0% { transform: translateX(-130%) skewX(-12deg); }
  100% { transform: translateX(230%) skewX(-12deg); }
`;

export const getProjectAnimationType = (project) => {
  const title = (project.title || '').toLowerCase();
  if (title.includes('studio') || title.includes('link')) return 'studio';
  if (title.includes('dance') || title.includes('vayla')) return 'dance';
  if (title.includes('parcel') || title.includes('logistics') || title.includes('litebox') || title.includes('cargo')) return 'logistics';
  if (title.includes('finance') || title.includes('progreso') || title.includes('money')) return 'finance';
  return 'default';
};

export const getProjectLevel = (project) => {
  const title = (project.title || '').toLowerCase();
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash) + title.charCodeAt(i);
    hash = hash & hash;
  }
  const year = parseInt(project.date) || 2024;
  const baseLevel = year === 2025 ? 15 : 10;
  const statusBonus = project.status === 'production' ? 5 : 0;
  const uniqueOffset = Math.abs(hash) % 8;
  return baseLevel + statusBonus + uniqueOffset;
};

export const getProjectXP = (project) => {
  const year = parseInt(project.date) || 2024;
  const yearProgress = year === 2025 ? 75 : 90;
  const statusBonus = project.status === 'production' ? 15 : 5;
  return Math.min(100, yearProgress + statusBonus);
};

const BEVEL = '14px';

const Card = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.9rem 1.8rem;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.06), transparent 42%),
    ${SYS.bg};
  backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.32);
  /* System window cut */
  clip-path: polygon(${BEVEL} 0, 100% 0, 100% calc(100% - ${BEVEL}), calc(100% - ${BEVEL}) 100%, 0 100%, 0 ${BEVEL});
  box-shadow:
    0 0 0 1px rgba(56, 189, 248, 0.05),
    0 18px 40px rgba(2, 6, 16, 0.55),
    inset 0 0 22px rgba(56, 189, 248, 0.05);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  overflow: hidden;

  /* top accent rail */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${BEVEL};
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${SYS.cyan}, ${SYS.cyanBright}, transparent);
    opacity: 0.55;
    ${props => !props.$reduced && css`animation: ${borderGlow} 3.5s ease-in-out infinite;`}
  }

  /* diagonal light sweep (hover) */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
    background: linear-gradient(100deg, transparent, rgba(125, 211, 252, 0.16), transparent);
    transform: translateX(-130%) skewX(-12deg);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${SYS.cyan};
    box-shadow:
      0 0 22px rgba(56, 189, 248, 0.28),
      0 26px 60px rgba(2, 6, 16, 0.6),
      inset 0 0 26px rgba(56, 189, 248, 0.1);

    &::before { opacity: 1; }
    &::after {
      ${props => !props.$reduced && css`animation: ${sweep} 0.85s ease;`}
    }
  }

  @media (max-width: 768px) {
    padding: 1.6rem 1.4rem 1.5rem;
    &:hover { transform: translateY(-4px); }
  }
`;

const CornerTag = styled.span`
  position: absolute;
  top: 0.85rem;
  right: 1.1rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: ${SYS.cyanBright};
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.55);
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.1rem;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  ${props => props.$status === 'production' && css`
    color: #03121b;
    background: linear-gradient(135deg, ${SYS.cyan}, ${SYS.cyanDeep});
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.45);
    &::before { background: #03121b; box-shadow: 0 0 6px rgba(3, 18, 27, 0.6); }
  `}

  ${props => props.$status !== 'production' && css`
    color: ${SYS.amber};
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.45);
    &::before { background: ${SYS.amber}; box-shadow: 0 0 8px rgba(56, 189, 248, 0.7); }
  `}
`;

const Category = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${SYS.muted};
`;

const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: ${SYS.text};
  margin: 0 0 0.85rem;

  @media (max-width: 768px) { font-size: 1.3rem; }
`;

const Excerpt = styled.p`
  color: ${SYS.muted};
  line-height: 1.65;
  font-size: 0.97rem;
  margin: 0 0 1.5rem;
  flex: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) { font-size: 0.92rem; line-height: 1.55; }
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: ${SYS.muted};
  margin-bottom: 1.1rem;

  .dot { color: ${SYS.cyan}; }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  a { display: flex; width: 100%; }
`;

const parseDelay = (delayStr) => parseFloat(String(delayStr).replace('s', '')) || 0;

const ProjectCard = ({
  title,
  excerpt,
  date,
  url,
  status,
  category,
  delay = '0s',
  buttonText = 'View Project',
  statusLabel
}) => {
  const prefersReducedMotion = useReducedMotion();
  const delaySeconds = parseDelay(delay);
  const level = getProjectLevel({ title, date, status });

  return (
    <Card
      $reduced={prefersReducedMotion}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0, 0.2, 0.2, 1], delay: prefersReducedMotion ? 0 : delaySeconds }}
    >
      <CornerTag>LV.{level}</CornerTag>
      <HeaderRow>
        <StatusBadge $status={status}>
          {statusLabel || (status === 'production' ? 'In Production' : 'MVP')}
        </StatusBadge>
        <Category>{category}</Category>
      </HeaderRow>
      <Title>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      <Meta>
        <span className="dot">▸</span>
        <span>{date}</span>
      </Meta>
      <ButtonWrapper>
        <SystemButton href={url} target="_blank" rel="noopener noreferrer" variant="secondary">
          {buttonText}
        </SystemButton>
      </ButtonWrapper>
    </Card>
  );
};

export default ProjectCard;
