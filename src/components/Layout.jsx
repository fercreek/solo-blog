import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';
import { Analytics } from '@vercel/analytics/react';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  background: ${soloLevelingTheme.colors.gradients.primary};
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(108, 92, 231, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(253, 203, 110, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(116, 185, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  background: rgba(26, 26, 46, 0.3);
  backdrop-filter: blur(10px);
  border-radius: ${soloLevelingTheme.borderRadius.xl};
  border: 1px solid ${soloLevelingTheme.colors.border.primary};
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${soloLevelingTheme.shadows.lg};

  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
      <Analytics />
    </LayoutContainer>
  );
};

export default Layout;