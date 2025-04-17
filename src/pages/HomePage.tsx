import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <NameText
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sid
      </NameText>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 30px;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

const Emoji = styled(motion.span)`
  font-size: 2rem;
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 2;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    position: fixed;
    top: 26px;
    left: 20px;
    font-size: 1.2rem;
    z-index: 1000;
  }
`;

const NameText = styled(motion.h1)`
  font-size: 15rem;
  font-weight: bold;
  line-height: 0.8;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 10rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 6rem;
    text-align: left;
    margin-left: -11px;
    margin-top: 640px;
  }
`;

export default HomePage; 