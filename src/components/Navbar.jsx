import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { soloLevelingTheme } from '../styles/soloLevelingTheme';

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${soloLevelingTheme.colors.gradients.primary};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${soloLevelingTheme.colors.border.accent};
  box-shadow: ${soloLevelingTheme.shadows.purple};
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${soloLevelingTheme.shadows.glow};
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: ${soloLevelingTheme.typography.fontWeight.bold};
  font-family: ${soloLevelingTheme.typography.fontFamily.heading};
  color: ${soloLevelingTheme.colors.text.primary};
  text-decoration: none;
  z-index: 1001;
  background: ${soloLevelingTheme.colors.gradients.gold};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(253, 203, 110, 0.3);

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 8px ${soloLevelingTheme.colors.accent.gold});
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${soloLevelingTheme.colors.text.primary};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  touch-action: manipulation;
  transition: all 0.3s ease;
  border-radius: ${soloLevelingTheme.borderRadius.md};

  &:hover {
    color: ${soloLevelingTheme.colors.accent.gold};
    background: rgba(108, 92, 231, 0.1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

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
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(5px);
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
  background: ${soloLevelingTheme.colors.gradients.primary};
  border-left: 1px solid ${soloLevelingTheme.colors.border.accent};
  flex-direction: column;
  padding: 4rem 2rem 2rem;
  box-shadow: ${soloLevelingTheme.shadows.xl};
  z-index: 1000;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${soloLevelingTheme.colors.text.secondary};
  text-decoration: none;
  font-weight: ${soloLevelingTheme.typography.fontWeight.medium};
  font-family: ${soloLevelingTheme.typography.fontFamily.primary};
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: ${soloLevelingTheme.borderRadius.lg};
  min-height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${soloLevelingTheme.colors.gradients.purple};
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: ${soloLevelingTheme.colors.text.primary};
    text-shadow: 0 0 8px ${soloLevelingTheme.colors.accent.purple};
    transform: translateY(-2px);
    
    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const MobileNavLink = styled(NavLink)`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid ${soloLevelingTheme.colors.border.primary};
  border-radius: 0;
  
  &:hover {
    border-bottom-color: ${soloLevelingTheme.colors.accent.gold};
  }
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
  border-top: 1px solid ${soloLevelingTheme.colors.border.primary};
  justify-content: center;
`;

const SocialLink = styled.a`
  color: ${soloLevelingTheme.colors.text.secondary};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: ${soloLevelingTheme.borderRadius.full};
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: rgba(108, 92, 231, 0.1);
  border: 1px solid ${soloLevelingTheme.colors.border.accent};

  &:hover {
    color: ${soloLevelingTheme.colors.text.primary};
    background: ${soloLevelingTheme.colors.gradients.purple};
    box-shadow: ${soloLevelingTheme.shadows.glow};
    transform: translateY(-3px) scale(1.1);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }

  &:nth-child(1):hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }

  &:nth-child(2):hover {
    box-shadow: 0 0 20px rgba(0, 119, 181, 0.4);
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
        </MobileSocialLinks>
      </MobileNavLinks>
    </>
  );
};

export default Navbar;