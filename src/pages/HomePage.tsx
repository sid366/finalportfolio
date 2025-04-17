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
  
  @media (max-width: 768px) {
    padding: 30px;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

const NameText = styled(motion.h1)`
  font-size: 15rem;
  font-weight: bold;
  line-height: 0.8;

  @media (max-width: 992px) {
    font-size: 10rem;
  }

  @media (max-width: 768px) {
    font-size: 6rem !important;
    text-align: left !important;
    margin-left: -11px !important;
    margin-top: 640px !important;
    margin-bottom: 20px !important;
    opacity: 1 !important;
    transform: none !important;
  }
`;

export default HomePage; 