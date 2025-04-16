import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  id: string;
}

const projects: Project[] = [
  {
    id: "ecommerce",
    title: "Atoms for Peace",
    description: "An immersive visual installation that uses MIDI-triggered animations and projection mapping to bring Thom Yorke's Atoms for Peace to life through sound-responsive visuals and sculptural foam cutouts.",
    image: "/assets/projects/atoms/16.png",
    link: "#project/ecommerce"
  },
  {
    id: "social",
    title: "Emoji Tarot",
    description: "A playful web app that gives users a daily three-card tarot reading using emojis. I implemented a backend in PHP and used the ChatGPT API to generate unique interpretations.",
    image: "/assets/projects/emoji-tarot/1.png",
    link: "#project/social"
  },
  {
    id: "taskmanager",
    title: "Interactive Music Box",
    description: "A collaborative musical interface built with Arduinos, PureData, and a custom acrylic enclosure. Designed for intuitive play by users of any skill level.",
    image: "/assets/projects/midi-controller/7.png",
    link: "#project/taskmanager"
  },
  {
    id: "weather",
    title: "Timeblind",
    description: "A mobile timer app designed for users with ADHD, featuring interval-based reminders, color-shifting backgrounds, and automatic session tracking to combat time blindness.",
    image: "/assets/projects/timeblind/3.png",
    link: "#project/weather"
  }
];

const PortfolioPage: React.FC = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PageTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        PORTFOLIO
      </PageTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ReadMoreLink href={project.link}>Read More</ReadMoreLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  padding: 80px 50px;
  min-height: 100vh;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 80px 20px;
  }
`;

const PageTitle = styled(motion.h1)`
  font-size: 8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 3.5rem;
    margin-bottom: 40px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 50px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 30px;
    padding: 0 70px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
    max-width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 15px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #666;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${props => props.theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #007bff;
    
    &:after {
      transform: scaleX(1);
      transform-origin: left;
      background-color: #007bff;
    }
  }
`;

export default PortfolioPage;