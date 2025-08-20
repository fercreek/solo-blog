import styled, { keyframes } from 'styled-components';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { parseMarkdownContent, processMarkdownText } from '../utils/contentParser';
import { FaTrophy, FaMedal, FaAward, FaMusic, FaCode, FaCalendarAlt } from 'react-icons/fa';

// Animaciones reutilizables
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Contenedor principal de página
export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

// Header de página con efectos visuales
export const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  box-shadow: ${soloLevelingTheme.shadows.purple};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(225, 112, 85, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

// Título de página con efectos de texto
export const PageTitle = styled.h1`
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: 1rem;
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  background: linear-gradient(
    90deg,
    ${soloLevelingTheme.colors.accent.orange} 0%,
    ${soloLevelingTheme.colors.accent.gold} 50%,
    ${soloLevelingTheme.colors.accent.orange} 100%
  );
  background-size: 200px 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s ease-in-out infinite;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
    border-radius: 2px;
  }
`;

// Contenedor de contenido con bordes decorativos
export const ContentWrapper = styled.div`
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 2rem;
  box-shadow: ${soloLevelingTheme.shadows.purple};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold},
      ${soloLevelingTheme.colors.accent.orange}
    );
    border-radius: ${soloLevelingTheme.borderRadius.lg} ${soloLevelingTheme.borderRadius.lg} 0 0;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

// Variante de título más pequeño para secciones
export const SectionTitle = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  background: linear-gradient(
    90deg,
    ${soloLevelingTheme.colors.accent.orange},
    ${soloLevelingTheme.colors.accent.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
    border-radius: 1px;
  }
`;

// Contenedor de grid para tarjetas
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

// Tarjeta base reutilizable
export const Card = styled.div`
  background: ${soloLevelingTheme.colors.gradients.secondary};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  padding: 1.5rem;
  box-shadow: ${soloLevelingTheme.shadows.purple};
  transition: ${soloLevelingTheme.animations.transition.fast};
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${soloLevelingTheme.shadows.gold};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
    border-radius: ${soloLevelingTheme.borderRadius.lg} ${soloLevelingTheme.borderRadius.lg} 0 0;
  }
`;

// Componentes para renderizar contenido markdown
const MarkdownH1 = styled.h1`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  background: linear-gradient(
    90deg,
    ${soloLevelingTheme.colors.accent.orange},
    ${soloLevelingTheme.colors.accent.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
    border-radius: 2px;
  }
`;

const MarkdownH2 = styled.h2`
  font-size: clamp(1.4rem, 4vw, 2rem);
  margin: 2rem 0 1rem 0;
  color: ${soloLevelingTheme.colors.text.primary};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.semibold};
  background: linear-gradient(
    90deg,
    ${soloLevelingTheme.colors.accent.orange},
    ${soloLevelingTheme.colors.accent.gold}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(
      90deg,
      ${soloLevelingTheme.colors.accent.orange},
      ${soloLevelingTheme.colors.accent.gold}
    );
    border-radius: 1px;
  }
`;

const MarkdownH3 = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin: 1.5rem 0 0.75rem 0;
  color: ${soloLevelingTheme.colors.accent.gold};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
`;

const MarkdownParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${soloLevelingTheme.colors.text.primary};
  margin-bottom: 1.5rem;
  
  strong {
    font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
    color: ${soloLevelingTheme.colors.accent.gold};
    text-shadow: 0 0 4px rgba(253, 203, 110, 0.2);
  }
  
  em {
    color: ${soloLevelingTheme.colors.text.secondary};
    font-style: italic;
  }
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    transition: all ${soloLevelingTheme.animations.transition.fast};
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
      text-decoration: underline;
    }
  }
  
  code {
    background: ${soloLevelingTheme.colors.secondary};
    color: ${soloLevelingTheme.colors.accent.gold};
    padding: 0.2rem 0.4rem;
    border-radius: ${soloLevelingTheme.borderRadius.sm};
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }
`;

const MarkdownListItem = styled.li`
  font-size: 1rem;
  line-height: 1.6;
  color: ${soloLevelingTheme.colors.text.primary};
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  
  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${soloLevelingTheme.colors.accent.gold};
    font-weight: bold;
  }
  
  strong {
    font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
    color: ${soloLevelingTheme.colors.accent.gold};
  }
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    transition: all ${soloLevelingTheme.animations.transition.fast};
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-decoration: underline;
    }
  }
`;

const MarkdownList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

// Descripción de página reutilizable
export const PageDescription = styled.p`
  text-align: center;
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin-top: 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    transition: all ${soloLevelingTheme.animations.transition.fast};
    text-decoration: none;
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
      text-decoration: underline;
    }
  }
`;

// Sección especializada para logros
export const AchievementSection = styled.div`
  margin: 3rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${soloLevelingTheme.colors.secondary}aa 0%, 
    ${soloLevelingTheme.colors.primary}aa 100%);
  border-radius: 15px;
  border: 1px solid ${soloLevelingTheme.colors.accent.orange}33;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, 
      ${soloLevelingTheme.colors.accent.orange}, 
      ${soloLevelingTheme.colors.accent.gold});
  }
`;

// Título de sección con icono para logros
export const AchievementSectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${soloLevelingTheme.colors.text.primary};
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(253, 203, 110, 0.3);
  
  svg {
    color: ${soloLevelingTheme.colors.accent.orange};
    filter: drop-shadow(0 0 8px rgba(253, 203, 110, 0.5));
  }
`;

// Contenedor de logros por año
export const YearGroup = styled.div`
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Título del año
export const YearTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${soloLevelingTheme.colors.accent.gold};
  font-size: 1.4rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.semiBold};
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${soloLevelingTheme.colors.accent.orange}33;
  
  svg {
    color: ${soloLevelingTheme.colors.accent.orange};
  }
`;

// Lista de logros
export const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
`;

// Item individual de logro
export const AchievementItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${soloLevelingTheme.colors.primary}66;
  border-radius: 10px;
  border-left: 4px solid ${props => {
    if (props.place === '1st') return soloLevelingTheme.colors.accent.gold;
    if (props.place === '2nd') return '#C0C0C0';
    if (props.place === '3rd') return '#CD7F32';
    return soloLevelingTheme.colors.accent.orange;
  }};
  transition: all ${soloLevelingTheme.animations.transition.medium};
  
  &:hover {
    transform: translateX(5px);
    background: ${soloLevelingTheme.colors.primary}99;
    box-shadow: 0 4px 20px rgba(253, 203, 110, 0.2);
  }
`;

// Icono de medalla
export const MedalIcon = styled.div`
  font-size: 1.5rem;
  color: ${props => {
    if (props.place === '1st') return soloLevelingTheme.colors.accent.gold;
    if (props.place === '2nd') return '#C0C0C0';
    if (props.place === '3rd') return '#CD7F32';
    return soloLevelingTheme.colors.accent.orange;
  }};
  filter: drop-shadow(0 0 8px currentColor);
  animation: ${soloLevelingTheme.animations.keyframes.glow} 2s ease-in-out infinite alternate;
`;

// Texto del logro
export const AchievementText = styled.span`
  color: ${soloLevelingTheme.colors.text.primary};
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  flex: 1;
  
  a {
    color: ${soloLevelingTheme.colors.accent.orange};
    text-decoration: none;
    transition: all ${soloLevelingTheme.animations.transition.fast};
    
    &:hover {
      color: ${soloLevelingTheme.colors.accent.gold};
      text-shadow: 0 0 8px rgba(253, 203, 110, 0.5);
    }
  }
`;

// Sección de información personal
export const PersonalSection = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${soloLevelingTheme.colors.primary}aa 0%, 
    ${soloLevelingTheme.colors.secondary}aa 100%);
  border-radius: 15px;
  border: 1px solid ${soloLevelingTheme.colors.accent.orange}22;
`;

// Lista de hobbies
export const HobbyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 0;
    color: ${soloLevelingTheme.colors.text.secondary};
    font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
    
    &::before {
      content: '▶';
      color: ${soloLevelingTheme.colors.accent.orange};
      font-size: 0.8rem;
    }
  }
`;

// Componente para renderizar contenido markdown parseado
export const ParsedMarkdownContent = ({ content }) => {
  const elements = parseMarkdownContent(content);
  
  return (
    <div>
      {elements.map((element, index) => {
        switch (element.type) {
          case 'h1':
            return (
              <MarkdownH1 key={index}>
                {element.content}
              </MarkdownH1>
            );
          case 'h2':
            return (
              <MarkdownH2 key={index}>
                {element.content}
              </MarkdownH2>
            );
          case 'h3':
            return (
              <MarkdownH3 key={index}>
                {element.content}
              </MarkdownH3>
            );
          case 'paragraph':
            return (
              <MarkdownParagraph 
                key={index}
                dangerouslySetInnerHTML={{ 
                  __html: processMarkdownText(element.content) 
                }}
              />
            );
          case 'listItem':
            return (
              <MarkdownList key={index}>
                <MarkdownListItem
                  dangerouslySetInnerHTML={{ 
                    __html: processMarkdownText(element.content) 
                  }}
                />
              </MarkdownList>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};