import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { sys } from '../../styles/systemTokens';

// Canonical "System window" panel: beveled glass surface with cyan
// border, animated top rail, hover lift + glow + light sweep.
// Use for any card-like container. Compose children freely.

const railGlow = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;
const sweep = keyframes`
  0% { transform: translateX(-130%) skewX(-12deg); }
  100% { transform: translateX(230%) skewX(-12deg); }
`;

export const SystemPanel = styled(motion.div).withConfig({
  shouldForwardProp: (p) => !['$reduced', '$compact', '$interactive'].includes(p),
})`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 100%;
  padding: ${props => (props.$compact ? '1.35rem 1.3rem' : '2rem 1.9rem 1.8rem')};
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.06), transparent 42%),
    ${sys.color.panel};
  backdrop-filter: blur(12px);
  border: 1px solid ${sys.color.line};
  clip-path: ${props => sys.windowClip(props.$compact ? '10px' : sys.bevel)};
  box-shadow:
    0 0 0 1px rgba(56, 189, 248, 0.05),
    0 18px 40px rgba(2, 6, 16, 0.55),
    inset 0 0 22px rgba(56, 189, 248, 0.05);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease, border-color 0.35s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${props => (props.$compact ? '10px' : sys.bevel)};
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${sys.color.cyan}, ${sys.color.cyanBright}, transparent);
    opacity: 0.5;
    ${props => !props.$reduced && css`animation: ${railGlow} 3.5s ease-in-out infinite;`}
  }

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

  ${props => props.$interactive !== false && css`
    &:hover {
      transform: translateY(${props.$compact ? '-5px' : '-8px'});
      border-color: ${sys.color.cyan};
      box-shadow:
        ${sys.glow.soft},
        0 26px 60px rgba(2, 6, 16, 0.6),
        inset 0 0 26px rgba(56, 189, 248, 0.1);
      &::before { opacity: 1; }
      &::after { ${!props.$reduced && css`animation: ${sweep} 0.85s ease;`} }
    }
  `}

  @media (max-width: 768px) {
    padding: ${props => (props.$compact ? '1.2rem 1.1rem' : '1.6rem 1.4rem 1.5rem')};
    ${props => props.$interactive !== false && css`&:hover { transform: translateY(-4px); }`}
  }
`;

export default SystemPanel;
