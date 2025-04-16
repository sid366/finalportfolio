import React from 'react';
import styled from 'styled-components';
import Navigation from '../navigation/Navigation';
import { PageType } from '../../App';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <LayoutContainer>
      <Navigation currentPage={currentPage} />
      <Main>{children}</Main>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

const Main = styled.main`
  width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    overflow-x: hidden;
  }
`;

export default Layout; 