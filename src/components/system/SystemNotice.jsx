import styled, { keyframes, css } from 'styled-components';
import { sys } from '../../styles/systemTokens';

// Solo Leveling "System notification" bar: [ SYSTEM ] mono label + message,
// beveled, cyan glow, blinking status dot.
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
`;

const Bar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 0.9rem;
  font-family: ${sys.font.mono};
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${sys.color.cyanBright};
  background: rgba(56, 189, 248, 0.07);
  border: 1px solid rgba(56, 189, 248, 0.4);
  clip-path: ${sys.windowClip('8px')};
  box-shadow: ${sys.glow.soft}, inset 0 0 10px rgba(56, 189, 248, 0.06);

  .tag { color: ${sys.color.cyan}; font-weight: 700; }
  .msg { color: ${sys.color.muted}; }

  .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${sys.color.cyan};
    box-shadow: 0 0 8px ${sys.color.cyan};
    ${props => !props.$reduced && css`animation: ${blink} 1.6s ease-in-out infinite;`}
  }
`;

const SystemNotice = ({ label = 'SYSTEM', children, reduced = false, ...props }) => (
  <Bar $reduced={reduced} {...props}>
    <span className="dot" />
    <span className="tag">[ {label} ]</span>
    <span className="msg">{children}</span>
  </Bar>
);

export default SystemNotice;
