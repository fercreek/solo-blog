import styled from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { useTranslation } from '../hooks/useTranslation';

const FooterContainer = styled.footer`
  padding: 1.5rem 1rem;
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
    background: ${soloLevelingTheme.colors.gradients.gold};
    opacity: 0.6;
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
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
      <FooterText>
        © {currentYear} Fernando Castañeda. {t('common.footer.copyright')}
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;