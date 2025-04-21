import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <AboutContainer id="about">
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        ABOUT ME
      </PageTitle>

      <ProfileImage
        src="/assets/sid.png?v=2"
        alt="Sid's illustration"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      <ContentContainer>
        <TextBlock
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hello! I'm Sid, a passionate professional with an interest in design, technology, and storytelling.
        </TextBlock>
        <TextBlock
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I have over 5 years of experience as a Content Editor working for a popular news and entertainment website. While pursuing a post-grad in Interactive Media at Sheridan College, I've had the opportunity to work on a diverse range of projects that have honed my skills in UX/UI design, front-end development, and creative problem-solving.
        </TextBlock>
        <TextBlock
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          I believe in creating digital experiences that are not only visually appealing but also intuitive and accessible to all users. My approach combines technical expertise with a deep understanding of human behavior and needs.
        </TextBlock>
      </ContentContainer>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 80px 50px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 80px 30px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 2px;
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 6rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 4rem;
    margin-bottom: 2px;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 250px;
  height: 250px;
  margin: 0 auto 20px;
    margin-bottom: .5px;
  object-fit: contain;
  transform: scale(2.5);
  filter: brightness(0.9) contrast(1.1);
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 180px;
    height: 180px;
    margin-bottom: .5px;
  }
`;

const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextBlock = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export default AboutPage; 