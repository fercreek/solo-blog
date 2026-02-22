import styled, { css } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: ${soloLevelingTheme.borderRadius.md};
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  font-family: ${soloLevelingTheme.typography.fontFamily.primary};
  cursor: pointer;
  transition: all ${soloLevelingTheme.animations.transition.normal};
  min-height: 44px;
  border: none;
  text-decoration: none;
  
  &:focus-visible {
    outline: 2px solid ${soloLevelingTheme.colors.accent.purple};
    outline-offset: 2px;
    box-shadow: 0 0 20px rgba(108, 92, 231, 0.4);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${props => props.$variant === 'primary' && `
    background: ${soloLevelingTheme.colors.gradients.gold};
    color: ${soloLevelingTheme.colors.primary};
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(253, 203, 110, 0.3);
    }
  `}
  
  ${props => props.$variant === 'secondary' && `
    background: ${soloLevelingTheme.colors.gradients.primary};
    color: ${soloLevelingTheme.colors.text.primary};
    border: 1px solid ${soloLevelingTheme.colors.border.accent};
    
    &:hover:not(:disabled) {
      background: ${soloLevelingTheme.colors.gradients.purple};
      border-color: ${soloLevelingTheme.colors.accent.purple};
      transform: translateY(-2px);
      box-shadow: ${soloLevelingTheme.shadows.glow};
    }
  `}
  
  ${props => props.$variant === 'ghost' && `
    background: transparent;
    color: ${soloLevelingTheme.colors.text.secondary};
    
    &:hover:not(:disabled) {
      background: rgba(108, 92, 231, 0.1);
      color: ${soloLevelingTheme.colors.text.primary};
    }
  `}
  
  ${props => props.$variant === 'outline' && `
    background: transparent;
    color: ${soloLevelingTheme.colors.text.primary};
    border: 2px solid ${soloLevelingTheme.colors.accent.purple};
    
    &:hover:not(:disabled) {
      background: rgba(108, 92, 231, 0.2);
      box-shadow: 0 0 20px rgba(108, 92, 231, 0.3);
      transform: translateY(-2px);
    }
  `}
`;

const StyledButton = styled.button`
  ${baseStyles}
`;

const StyledLink = styled.a`
  ${baseStyles}
`;

const Button = ({ variant = 'primary', as, children, href, ...props }) => {
  const isLink = as === 'a' || href;
  const Component = isLink ? StyledLink : StyledButton;
  return (
    <Component $variant={variant} href={href} {...props}>
      {children}
    </Component>
  );
};

export default Button;
