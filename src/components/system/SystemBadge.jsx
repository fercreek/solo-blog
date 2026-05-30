import styled, { css } from 'styled-components';
import { sys } from '../../styles/systemTokens';

// System status pill — mono uppercase, beveled, dot indicator.
// variant: 'cyan' (default / live) | 'amber' (mvp / pending) | 'shadow'
export const SystemBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.7rem;
  font-family: ${sys.font.mono};
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  clip-path: ${sys.windowClip(sys.bevelSm)};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  ${props => (props.$variant ?? 'cyan') === 'cyan' && css`
    color: #03121b;
    background: linear-gradient(135deg, ${sys.color.cyan}, ${sys.color.cyanDeep});
    box-shadow: ${sys.glow.mid};
    &::before { background: #03121b; }
  `}

  ${props => props.$variant === 'amber' && css`
    color: ${sys.color.amber};
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.45);
    &::before { background: ${sys.color.amber}; box-shadow: 0 0 8px rgba(56, 189, 248, 0.7); }
  `}

  ${props => props.$variant === 'shadow' && css`
    color: ${sys.color.cyanBright};
    background: rgba(109, 93, 211, 0.12);
    border: 1px solid rgba(109, 93, 211, 0.5);
    &::before { background: ${sys.color.shadow}; box-shadow: 0 0 8px rgba(109, 93, 211, 0.7); }
  `}
`;

export default SystemBadge;
