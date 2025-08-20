import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;