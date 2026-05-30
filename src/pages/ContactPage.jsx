import { useState } from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  ContentWrapper
} from '../components/PageComponents';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { useTranslation } from '../hooks/useTranslation';
import PageHead from '../components/PageHead';
import SystemButton from '../components/SystemButton';
import { sys } from '../styles/systemTokens';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaCopy, FaExternalLinkAlt } from 'react-icons/fa';

const HeroCtaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  margin: 0 auto 2.5rem;
`;

const HeroCtaNote = styled.span`
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${soloLevelingTheme.colors.accent.blue};
  opacity: 0.85;
`;

const ContactGridWrapper = styled.div`
  padding: 2rem;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.05), transparent 45%),
    ${sys.color.panel};
  backdrop-filter: blur(12px);
  border: 1px solid ${sys.color.line};
  clip-path: ${sys.windowClip()};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: ${sys.bevel};
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${sys.color.cyan}, ${sys.color.cyanBright}, transparent);
    box-shadow: 0 0 14px rgba(56, 189, 248, 0.5);
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
  background: linear-gradient(135deg, ${sys.color.cyan}, ${sys.color.cyanDeep});
  clip-path: ${sys.windowClip('10px')};
  color: #03121b;
  font-size: 1.35rem;
  box-shadow: ${sys.glow.mid};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const ContactValue = styled.span`
  font-size: 1.0625rem;
  font-weight: 600;
  color: ${sys.color.cyanBright};
  word-break: break-word;
  transition: color 0.2s ease;
  text-shadow: 0 0 18px rgba(56, 189, 248, 0.3);
`;

const ContactAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: ${sys.font.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${sys.color.muted};
  margin-top: 0.65rem;
  transition: color 0.2s ease;

  svg {
    font-size: 0.7rem;
  }
`;

const CardBase = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 1.75rem;
  width: 100%;
  max-width: 340px;
  min-width: 280px;
  background:
    linear-gradient(135deg, rgba(56, 189, 248, 0.06), transparent 42%),
    ${sys.color.panel};
  backdrop-filter: blur(10px);
  border: 1px solid ${sys.color.line};
  clip-path: ${sys.windowClip('10px')};
  color: ${sys.color.text};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${sys.color.cyan}, ${sys.color.cyanBright}, transparent);
    opacity: 0.7;
  }

  &:hover {
    border-color: ${sys.color.cyan};
    box-shadow: ${sys.glow.soft}, 0 16px 40px rgba(2, 6, 16, 0.5);
    transform: translateY(-5px);

    ${ContactIcon} {
      transform: scale(1.08);
      box-shadow: ${sys.glow.strong};
    }

    ${ContactValue} {
      color: #fff;
    }

    ${ContactAction} {
      color: ${sys.color.cyanBright};
    }
  }

  &:focus-visible {
    outline: 2px solid ${sys.color.cyanBright};
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
  font-family: ${sys.font.mono};
  font-size: 0.7rem;
  color: ${sys.color.muted};
  font-weight: 500;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
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

const fadeInUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: [0, 0.2, 0.2, 1] } };

const ContactPage = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
      <PageHead title={t('contact.title')} description={t('contact.description')} />
      <PageHeader>
        <PageTitle>{t('contact.title')}</PageTitle>
        <PageDescription>{t('contact.description')}</PageDescription>
      </PageHeader>
      <ContentWrapper>
        <HeroCtaWrapper>
          <SystemButton
            variant="primary"
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('Operations Audit — 15 min')}`}
          >
            {t('contact.ctaAudit')}
          </SystemButton>
          <HeroCtaNote>{t('contact.ctaReply')}</HeroCtaNote>
        </HeroCtaWrapper>
        <ContactGridWrapper>
          <ContactGrid>
          {channels.map((channel, index) => (
            channel.isButton ? (
              <ContactCardButton
                key={channel.id}
                type="button"
                onClick={copyEmail}
                initial={prefersReducedMotion ? false : fadeInUp.initial}
                animate={prefersReducedMotion ? undefined : fadeInUp.animate}
                transition={{ ...fadeInUp.transition, delay: prefersReducedMotion ? 0 : index * 0.1 }}
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
                initial={prefersReducedMotion ? false : fadeInUp.initial}
                animate={prefersReducedMotion ? undefined : fadeInUp.animate}
                transition={{ ...fadeInUp.transition, delay: prefersReducedMotion ? 0 : index * 0.1 }}
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
                initial={prefersReducedMotion ? false : fadeInUp.initial}
                animate={prefersReducedMotion ? undefined : fadeInUp.animate}
                transition={{ ...fadeInUp.transition, delay: prefersReducedMotion ? 0 : index * 0.1 }}
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
