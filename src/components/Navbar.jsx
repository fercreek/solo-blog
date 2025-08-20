import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  z-index: 1001;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  touch-action: manipulation;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: none;
  gap: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileNavLinks = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background-color: #fff;
  flex-direction: column;
  padding: 4rem 2rem 2rem;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem;
  border-radius: 4px;
  min-height: 44px;
  display: flex;
  align-items: center;

  &:hover {
    color: #0070f3;
    background-color: #f8f9fa;
  }

  &:active {
    background-color: #e9ecef;
  }
`;

const MobileNavLink = styled(NavLink)`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #f0f0f0;
`;

const SocialLinks = styled.div`
  display: none;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileSocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #f0f0f0;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  padding: 0.5rem;
  border-radius: 4px;
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #0070f3;
    background-color: #f8f9fa;
  }

  &:active {
    background-color: #e9ecef;
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavContainer>
        <Logo to="/" onClick={closeMobileMenu}>Fernando Castañeda</Logo>
        
        {/* Desktop Navigation */}
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/impossible-list">Impossible List</NavLink>
          <NavLink to="/now">Now</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
        
        {/* Desktop Social Links */}
        <SocialLinks>
          <SocialLink href="https://github.com/fercreek" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/fercreek" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com/fercreek" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
        
        {/* Mobile Menu Button */}
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContainer>
      
      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
      
      {/* Mobile Navigation */}
      <MobileNavLinks isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={closeMobileMenu}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>About</MobileNavLink>
        <MobileNavLink to="/projects" onClick={closeMobileMenu}>Projects</MobileNavLink>
        <MobileNavLink to="/impossible-list" onClick={closeMobileMenu}>Impossible List</MobileNavLink>
        <MobileNavLink to="/now" onClick={closeMobileMenu}>Now</MobileNavLink>
        <MobileNavLink to="/contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
        
        {/* Mobile Social Links */}
        <MobileSocialLinks>
          <SocialLink href="https://github.com/fercreek" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/fercreek" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://twitter.com/fercreek" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
        </MobileSocialLinks>
      </MobileNavLinks>
    </>
  );
};

export default Navbar;