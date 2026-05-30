import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Solo Leveling "System" CTA — translucent panel, beveled corners,
// electric-cyan border + glow, mono uppercase label with leading marker.
const SYSTEM_CYAN = '#38bdf8';
const SYSTEM_CYAN_BRIGHT = '#7dd3fc';

const sweep = keyframes`
  0% { transform: translateX(-120%); }
  100% { transform: translateX(220%); }
`;

const baseSystem = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.6rem;
  min-height: 48px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid ${SYSTEM_CYAN};
  /* beveled top-left + bottom-right corners — the System window cut */
  clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  transition: all 0.22s ease;

  &::before {
    /* inner glow membrane */
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(56, 189, 248, 0.04));
    pointer-events: none;
  }

  &::after {
    /* diagonal light sweep on hover */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(100deg, transparent, rgba(125, 211, 252, 0.45), transparent);
    transform: translateX(-120%);
    pointer-events: none;
  }

  &:hover::after {
    animation: ${sweep} 0.7s ease;
  }

  ${props => props.$variant === 'primary' && css`
    color: #001018;
    background: linear-gradient(135deg, ${SYSTEM_CYAN} 0%, #0ea5e9 100%);
    box-shadow: 0 0 18px rgba(56, 189, 248, 0.45), inset 0 0 12px rgba(255, 255, 255, 0.15);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 26px rgba(56, 189, 248, 0.75), inset 0 0 14px rgba(255, 255, 255, 0.25);
    }
  `}

  ${props => props.$variant !== 'primary' && css`
    color: ${SYSTEM_CYAN_BRIGHT};
    background: rgba(8, 14, 28, 0.72);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.22), inset 0 0 10px rgba(56, 189, 248, 0.08);
    &:hover {
      transform: translateY(-2px);
      color: #ffffff;
      box-shadow: 0 0 22px rgba(56, 189, 248, 0.5), inset 0 0 14px rgba(56, 189, 248, 0.18);
    }
  `}

  &:focus-visible {
    outline: 2px solid ${SYSTEM_CYAN_BRIGHT};
    outline-offset: 3px;
  }

  .marker {
    font-size: 0.7rem;
    opacity: 0.9;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover::after { animation: none; }
    transition: none;
  }
`;

const SystemLink = styled(Link)`${baseSystem}`;
const SystemAnchor = styled.a`${baseSystem}`;
const SystemNative = styled.button`${baseSystem}`;

const SystemButton = ({ variant = 'primary', to, href, children, ...props }) => {
  const Component = to ? SystemLink : href ? SystemAnchor : SystemNative;
  return (
    <Component $variant={variant} to={to} href={href} {...props}>
      <span className="marker">▸</span>
      <span>{children}</span>
    </Component>
  );
};

export default SystemButton;
