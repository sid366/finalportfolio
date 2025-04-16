import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { PageType } from '../../App';

interface NavigationProps {
  currentPage: PageType;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    setIsOpen(false);
    
    if (href) {
      window.location.hash = href.replace('#', '');
    }
  };

  const getEmoji = () => {
    switch (currentPage) {
      case 'about':
        return '(ಠ_ʖಠ)';
      case 'portfolio':
        return '(^_^)';
      case 'project':
        return '(^_^)';
      case 'contact':
        return '(づ ￣ ³￣)づ';
      default:
        return '(-_-)';
    }
  };

  return (
    <>
      <NavButton onClick={toggleMenu}>
        {isOpen ? (
          <XIcon>✕</XIcon>
        ) : (
          <BurgerIcon>
            <Bar />
            <Bar />
          </BurgerIcon>
        )}
      </NavButton>

      <EmojiFace>{getEmoji()}</EmojiFace>

      <AnimatePresence>
        {isOpen && (
          <NavOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            <EmojiFace>{getEmoji()}</EmojiFace>
            <NavContent>
              <NavLinks>
                <NavItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <NavLink href="#home" onClick={handleNavLinkClick}>Home</NavLink>
                </NavItem>
                <NavItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <NavLink href="#portfolio" onClick={handleNavLinkClick}>Portfolio</NavLink>
                </NavItem>
                <NavItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <NavLink href="#contact" onClick={handleNavLinkClick}>Contact</NavLink>
                </NavItem>
                <NavItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <NavLink href="#about" onClick={handleNavLinkClick}>About me</NavLink>
                </NavItem>
              </NavLinks>
              <ContactInfo>
                <ContactItem>
                  <ContactLink href="https://www.linkedin.com/in/siddharth-satish-kumar/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </ContactLink>
                </ContactItem>
                <ContactItem>(437)601-4756</ContactItem>
                <ContactItem>siddharth0471s@gmail.com</ContactItem>
              </ContactInfo>
              <NavFooter>Siddharth Satish Kumar</NavFooter>
            </NavContent>
          </NavOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

// Styled Components
const EmojiFace = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 1.2rem;
  z-index: 1000;
`;

const NavButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BurgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 15px;
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.colors.primary};
`;

const XIcon = styled.div`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
`;

const NavOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.secondary};
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${props => props.theme.spacing.xlarge};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 ${props => props.theme.spacing.medium};
    justify-content: space-between;
    padding-top: 80px;
    padding-bottom: 100px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

const NavItem = styled(motion.li)`
  margin: ${props => props.theme.spacing.medium} 0;
`;

const NavLink = styled.a`
  font-size: ${props => props.theme.fontSizes.xxlarge};
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: calc(${props => props.theme.fontSizes.xlarge} * 1.3);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${props => props.theme.spacing.xlarge};
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 60px;
  }
`;

const ContactItem = styled.div`
  margin: ${props => props.theme.spacing.small} 0;
  font-size: ${props => props.theme.fontSizes.medium};
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

const NavFooter = styled.div`
  position: absolute;
  bottom: ${props => props.theme.spacing.xlarge};
  right: ${props => props.theme.spacing.xlarge};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: bold;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    position: relative;
    right: auto;
    left: auto;
    bottom: auto;
    text-align: center;
    width: 100%;
    margin-top: ${props => props.theme.spacing.large};
  }
`;

export default Navigation; 