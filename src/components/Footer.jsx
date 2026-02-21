import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { useTranslation } from '../hooks/useTranslation';

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  background: ${soloLevelingTheme.colors.gradients.primary};
  border-top: 1px solid ${soloLevelingTheme.colors.border.accent};
  text-align: center;
  margin-top: auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${soloLevelingTheme.colors.accent.gold},
      ${soloLevelingTheme.colors.accent.purple},
      ${soloLevelingTheme.colors.accent.gold},
      transparent
    );
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const FooterLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem 1.5rem;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled(Link)`
  color: ${soloLevelingTheme.colors.text.secondary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: ${soloLevelingTheme.borderRadius.sm};
  
  &:hover {
    color: ${soloLevelingTheme.colors.text.accent};
    text-shadow: 0 0 8px ${soloLevelingTheme.colors.accent.gold};
  }
  
  &:focus-visible {
    outline: 2px solid ${soloLevelingTheme.colors.accent.purple};
    outline-offset: 2px;
  }
`;

const FooterDivider = styled.div`
  width: 60px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${soloLevelingTheme.colors.accent.purple},
    transparent
  );
  opacity: 0.5;
  margin: 0 auto 1.5rem;
`;

const FooterText = styled.p`
  color: ${soloLevelingTheme.colors.text.muted};
  font-size: 0.85rem;
  font-family: ${soloLevelingTheme.typography.fontFamily.primary};
  margin: 0;
  line-height: 1.4;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${soloLevelingTheme.colors.text.accent};
    text-shadow: 0 0 8px ${soloLevelingTheme.colors.accent.gold};
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink to="/">{t('common.nav.home')}</FooterLink>
        <FooterLink to="/about">{t('common.nav.about')}</FooterLink>
        <FooterLink to="/projects">{t('common.nav.projects')}</FooterLink>
        <FooterLink to="/impossible-list">{t('common.nav.impossibleList')}</FooterLink>
        <FooterLink to="/now">{t('common.nav.now')}</FooterLink>
        <FooterLink to="/contact">{t('common.nav.contact')}</FooterLink>
      </FooterLinks>
      <FooterDivider />
      <FooterText>
        © {currentYear} Fernando Castañeda. {t('common.footer.copyright')}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
