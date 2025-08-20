import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1.5rem 1rem;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FooterText = styled.p`
  color: #6c757d;
  font-size: 0.85rem;
  margin: 0;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterText>
        © {currentYear} Fernando Castañeda. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;