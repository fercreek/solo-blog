import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { sys } from '../styles/systemTokens';
import { useTranslation } from '../hooks/useTranslation';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 2rem 1rem;
  background: ${sys.color.bgDeep};
  border-top: 1px solid ${sys.color.line};
  text-align: center;
  margin-top: auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(8px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${sys.color.cyan},
      ${sys.color.cyanDeep},
      ${sys.color.cyan},
      transparent
    );
    box-shadow: ${sys.glow.soft};
    opacity: 0.8;
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
  color: ${sys.color.muted};
  text-decoration: none;
  font-size: 0.85rem;
  font-family: ${sys.font.mono};
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: all 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 0;

  &:hover {
    color: ${sys.color.cyanBright};
    text-shadow: ${sys.glow.soft};
  }

  &:focus-visible {
    outline: 2px solid ${sys.color.cyan};
    outline-offset: 2px;
  }
`;

const FooterDivider = styled.div`
  width: 60px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    ${sys.color.line},
    transparent
  );
  opacity: 0.6;
  margin: 0 auto 1.5rem;
`;

const FooterText = styled.p`
  color: ${sys.color.muted};
  font-size: 0.8rem;
  font-family: ${sys.font.mono};
  letter-spacing: 0.01em;
  margin: 0;
  line-height: 1.4;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    font-size: 0.85rem;
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
