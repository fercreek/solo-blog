import { useState } from 'react';
import styled from 'styled-components';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  ContentWrapper
} from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { fadeInUp } from '../styles/keyframes';
import { useTranslation } from '../hooks/useTranslation';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

const ContactGridWrapper = styled.div`
  padding: 2rem;
  background: linear-gradient(165deg, rgba(22, 33, 62, 0.5), rgba(10, 10, 15, 0.6));
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold}, ${soloLevelingTheme.colors.accent.purple});
    box-shadow: 0 0 15px rgba(253, 203, 110, 0.4);
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const ContactIcon = styled.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${soloLevelingTheme.colors.accent.purple}, #5B4FCF);
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  color: ${soloLevelingTheme.colors.accent.gold};
  font-size: 1.35rem;
  box-shadow: 0 4px 20px rgba(108, 92, 231, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const ContactValue = styled.span`
  font-size: 1.0625rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  color: ${soloLevelingTheme.colors.accent.orange};
  word-break: break-word;
  transition: color 0.2s ease;
  text-shadow: 0 0 20px rgba(225, 112, 85, 0.3);
`;

const ContactAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  color: ${soloLevelingTheme.colors.accent.purple};
  margin-top: 0.65rem;
  transition: color 0.2s ease;

  svg {
    font-size: 0.75rem;
  }
`;

const CardBase = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem;
  width: 100%;
  max-width: 340px;
  min-width: 280px;
  background: linear-gradient(165deg, rgba(26, 26, 46, 0.98) 0%, rgba(22, 33, 62, 0.95) 100%);
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  color: ${soloLevelingTheme.colors.text.primary};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.6s ease-out;
  animation-fill-mode: both;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${soloLevelingTheme.colors.accent.orange}, ${soloLevelingTheme.colors.accent.gold});
    opacity: 0.9;
  }

  &:hover {
    border-color: ${soloLevelingTheme.colors.border.accent};
    box-shadow: ${soloLevelingTheme.shadows.glow}, 0 12px 40px rgba(108, 92, 231, 0.25);
    transform: translateY(-5px);

    ${ContactIcon} {
      transform: scale(1.08);
      box-shadow: 0 6px 24px rgba(108, 92, 231, 0.6);
    }

    ${ContactValue} {
      color: ${soloLevelingTheme.colors.accent.gold};
    }

    ${ContactAction} {
      color: ${soloLevelingTheme.colors.accent.gold};
    }
  }

  &:focus-visible {
    outline: 2px solid ${soloLevelingTheme.colors.accent.purple};
    outline-offset: 2px;
  }
`;

const ContactCard = styled(CardBase).attrs({ as: 'a' })`
  text-decoration: none;
`;

const ContactCardButton = styled(CardBase).attrs({ as: 'button' })`
  text-align: left;
  cursor: pointer;
  font-family: inherit;
`;

const ContactContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const ContactLabel = styled.span`
  display: block;
  font-size: 0.8125rem;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CopyFeedback = styled.span`
  color: ${soloLevelingTheme.colors.status.success};
  font-size: 0.875rem;
`;

const EMAIL = 'fercreek@gmail.com';
const PHONE = '+52 1 811 765 5605';
const PHONE_LINK = 'tel:+528117655605';
const GITHUB_URL = 'https://github.com/fercreek';
const LINKEDIN_URL = 'https://linkedin.com/in/fercreek';
const LOCATION = 'Monterrey, Nuevo León, México';
const LOCATION_URL = 'https://www.google.com/maps/search/?api=1&query=Monterrey+Nuevo+Leon+Mexico';

const ContactPage = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(`mailto:${EMAIL}`);
    }
  };

  const channels = [
    { id: 'email', icon: <FaEnvelope />, label: t('contact.email'), value: EMAIL, isButton: true },
    { id: 'phone', icon: <FaPhone />, label: t('contact.phone'), value: PHONE, href: PHONE_LINK },
    { id: 'github', icon: <FaGithub />, label: t('contact.github'), value: 'github.com/fercreek', href: GITHUB_URL },
    { id: 'linkedin', icon: <FaLinkedin />, label: t('contact.linkedin'), value: 'linkedin.com/in/fercreek', href: LINKEDIN_URL },
    { id: 'location', icon: <FaMapMarkerAlt />, label: t('contact.location'), value: LOCATION, href: LOCATION_URL }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('contact.title')}</PageTitle>
        <PageDescription>{t('contact.description')}</PageDescription>
      </PageHeader>
      <ContentWrapper>
        <ContactGridWrapper>
          <ContactGrid>
          {channels.map((channel, index) => (
            channel.isButton ? (
              <ContactCardButton
                key={channel.id}
                type="button"
                onClick={copyEmail}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ContactIcon>{channel.icon}</ContactIcon>
                <ContactContent>
                  <ContactLabel>{channel.label}</ContactLabel>
                  <ContactValue>{channel.value}</ContactValue>
                  <ContactAction>
                    <FaCopy />
                    {copied ? (
                      <CopyFeedback>{t('contact.copied')}</CopyFeedback>
                    ) : (
                      t('contact.copyEmail')
                    )}
                  </ContactAction>
                </ContactContent>
              </ContactCardButton>
            ) : channel.href ? (
              <ContactCard
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ContactIcon>{channel.icon}</ContactIcon>
                <ContactContent>
                  <ContactLabel>{channel.label}</ContactLabel>
                  <ContactValue>{channel.value}</ContactValue>
                  <ContactAction>
                    <FaExternalLinkAlt />
                    {t('contact.openLink')}
                  </ContactAction>
                </ContactContent>
              </ContactCard>
            ) : (
              <ContactCard
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ContactIcon>{channel.icon}</ContactIcon>
                <ContactContent>
                  <ContactLabel>{channel.label}</ContactLabel>
                  <ContactValue>{channel.value}</ContactValue>
                  <ContactAction>
                    <FaExternalLinkAlt />
                    {t('contact.openLink')}
                  </ContactAction>
                </ContactContent>
              </ContactCard>
            )
          ))}
          </ContactGrid>
        </ContactGridWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

export default ContactPage;
