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

interface Article {
  title: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "interactive-logo",
    title: "Interactive Logo",
    description: "An interactive logo design for a fictional surfboarding company, combining Canva design with ZimJS animations. Features playful interactions like animated surfing tricks, sound effects, and dynamic color transitions.",
    image: "/assets/projects/interactivelogo/interactivelogo.png",
    link: "#project/interactive-logo"
  },
  {
    id: "gravitone",
    title: "Gravitone",
    description: "A mobile app that uses motion controls to turn movement into musical notes and colors. The desktop companion plays chords when a circle is moved through different musical zones. Created using the ZIM Canvas Framework.",
    image: "/assets/projects/gravitone/27-min.png",
    link: "#project/gravitone"
  },
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

const articles: Article[] = [
  {
    title: "5 Ways to Maximize Battery Life on Your Nintendo Switch",
    link: "https://www.sportskeeda.com/gaming-tech/5-ways-maximize-battery-life-nintendo-switch"
  },
  {
    title: "5 Best Flagship Smartphones in 2024",
    link: "https://www.sportskeeda.com/gaming-tech/5-best-flagship-smartphones-2024"
  },
  {
    title: "Nintendo Switch OLED vs Nintendo Switch Lite: Which to Buy?",
    link: "https://www.sportskeeda.com/gaming-tech/nintendo-switch-oled-vs-nintendo-switch-lite-which-buy"
  },
  {
    title: "5 Best Laptops with OLED Displays",
    link: "https://www.sportskeeda.com/gaming-tech/5-best-laptops-oled-displays"
  },
  {
    title: "5 Best PS5 SSDs in 2024",
    link: "https://www.sportskeeda.com/gaming-tech/5-best-ps5-ssds-2024"
  },
  {
    title: "Gaming Headphones vs IEMs: Which is Best in 2024?",
    link: "https://www.sportskeeda.com/gaming-tech/gaming-headphones-vs-iems-which-best-2024"
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

      <WritingSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SectionTitle>Writing</SectionTitle>
        <ArticleList>
          {articles.map((article, index) => (
            <ArticleItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArticleLink href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </ArticleLink>
            </ArticleItem>
          ))}
        </ArticleList>

        <HinduSection
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <HinduText>
            Here are some of my articles that were published in The Hindu, a leading national newspaper (Click the image for more or{' '}
            <TextLink 
              href="https://drive.google.com/file/d/1i-7nP0LEnZQyyEBsM-eVJ6RjdvIl_Z9B/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here
            </TextLink>
            {' '}to read a text-only version):
          </HinduText>
          <HinduImageLink 
            href="https://drive.google.com/file/d/113n6860sR6jIeu4jKUaCd5LDZnpgBOD5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HinduImage src="/assets/hindu.png" alt="The Hindu newspaper clippings" />
          </HinduImageLink>
        </HinduSection>
      </WritingSection>

      <DesignSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <SectionTitle>Design</SectionTitle>
        <CanvaEmbed>
          <Subheading>Portfolio Website</Subheading>
          <SubheadingText>I initially opted to use a minimal Brutalist aesthetic for this site, but the elements changed over time.</SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '70.7071%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGhS_fJaY0/E7x0J_lnMZpJ3CArBmBZ1g/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGhS_fJaY0/E7x0J_lnMZpJ3CArBmBZ1g/view?utm_content=DAGhS_fJaY0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
           
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>Timeblind</Subheading>
          <SubheadingText>Timeblind started out as an idea for a smartwatch app. Here's the user research and design process:</SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.2500%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGh1U15AaQ/_vWuD7bsYnZNzH0EgVNIzw/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGh1U15AaQ/_vWuD7bsYnZNzH0EgVNIzw/view?utm_content=DAGh1U15AaQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
            
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>Spotify vs. Apple Music: Usability Study</Subheading>
          <SubheadingText>
            In this project, we conducted a comparative usability test between Spotify and Apple Music's desktop apps. Our goal was to evaluate how easily users could complete everyday tasks like finding music, sharing songs, and discovering new content. We identified pain points and proposed interface improvements to enhance the overall user experience.
          </SubheadingText>
          <SubheadingText>
            View the full user research and testing report{' '}
            <TextLink 
              href="https://docs.google.com/document/d/1gRMWZtRv9XtF5xh1O_4auiV_mhH7Ux12WDHdsxgSlOA/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </TextLink>
            .
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.2500%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGXJNTHwnQ/omDZCByT-UUPPbdgBfmJGQ/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGXJNTHwnQ/omDZCByT-UUPPbdgBfmJGQ/view?utm_content=DAGXJNTHwnQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
           
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>Microwave Interface Redesign</Subheading>
          <SubheadingText>
            In this project, I redesigned a home microwave interface to make it more intuitive, streamlined, and enjoyable to use. My goal was to remove clutter, reduce the number of steps needed for common tasks, and make setting the time feel both precise and fun. I used a 4D encoder-style knob for navigation and time setting, backed up by clear visual feedback and simple, essential controls.
          </SubheadingText>
          <SubheadingText>
            You can explore the full user research and testing process in{' '}
            <TextLink 
              href="https://docs.google.com/document/d/1T7BWeBeKxhNcMjoCWeUu4bmx5_RZHLCLFWvApSfM8K8/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              this document
            </TextLink>
            .
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '34.8614%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGc8rHx7MQ/7h4zo8xUF5njw3jeLq7P3Q/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGc8rHx7MQ/7h4zo8xUF5njw3jeLq7P3Q/view?utm_content=DAGc8rHx7MQ&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
            
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
        <Subheading>SomSom</Subheading>
        <SubheadingText>
        SomSom is a sleep-tracking app that aims to help users understand their sleep patterns. Here's the user research and design process:
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.2500%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGfm9_V1h4/6i5nox-yLyVzrN_bBki08A/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGfm9_V1h4/6i5nox-yLyVzrN_bBki08A/view?utm_content=DAGfm9_V1h4&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
           
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>Hinge Brand Analysis & User Insight</Subheading>
          <SubheadingText>
            Through brand analysis and an empathy map, I explored how Hinge aligns with user needs for meaningful, in-person connections.
          </SubheadingText>
          <SubheadingText>
            Read the brand analysis{' '}
            <TextLink 
              href="https://docs.google.com/document/d/1su9HLif96M9wtU-gbY3b9GZn3x2WuJHygNH_hjPbgxg/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </TextLink>
            {' '}and user research{' '}
            <TextLink 
              href="https://docs.google.com/document/d/1MWlUIN7Qj1dnTXaC6a7Wpic4-4_RmIFHpOgwcsKg1Wk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </TextLink>
            .
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '77.2407%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGlrOeBMfU/1SZU7H1DjpxwBI1Ew5j6Aw/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGlrOeBMfU/1SZU7H1DjpxwBI1Ew5j6Aw/view?utm_content=DAGlrOeBMfU&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
          
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>More stuff</Subheading>
          <SubheadingText>
            A collection of my work across various digital design tools (Adobe Photoshop, Illustrator, and Canva).
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '177.7778%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGWkRHqakg/2dCs4AwLkbGRR1hYR0PEYQ/watch?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGWkRHqakg/2dCs4AwLkbGRR1hYR0PEYQ/watch?utm_content=DAGWkRHqakg&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
           
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>Wireframes & User Flows</Subheading>
          <SubheadingText>
            Wireframes and user flow diagram for a scheduling app.
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '70.7838%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.canva.com/design/DAGlrvxs0h0/glHKmYKWbHFrTeuFoSXcyA/view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>
          <CanvaLink
            href="https://www.canva.com/design/DAGlrvxs0h0/glHKmYKWbHFrTeuFoSXcyA/view?utm_content=DAGlrvxs0h0&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener"
          >
           
          </CanvaLink>
          <Divider />
        </CanvaEmbed>

        <CanvaEmbed>
          <Subheading>After Effects Projects</Subheading>
          <SubheadingText>
           My motion design work in Adobe After Effects.
          </SubheadingText>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.25%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.youtube.com/embed/aKtldGi8xUk"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.25%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0
              }}
              src="https://www.youtube.com/embed/Jr2EV44-kqI"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <Divider />
        </CanvaEmbed>
      </DesignSection>
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

const WritingSection = styled(motion.div)`
  margin-top: 100px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 70px;
    margin-top: 60px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const ArticleList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const ArticleItem = styled(motion.li)`
  margin-bottom: 20px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

const ArticleLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  display: block;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const HinduSection = styled(motion.div)`
  margin-top: 60px;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const HinduText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.6;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const TextLink = styled.a`
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const HinduImageLink = styled.a`
  display: block;
  max-width: 800px;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const HinduImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const DesignSection = styled(motion.div)`
  margin-top: 100px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 70px;
    margin-top: 60px;
  }
`;

const CanvaEmbed = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CanvaLink = styled.a`
  display: block;
  text-align: center;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1rem;
  margin-top: 1em;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
  }
`;

const Subheading = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1em;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const SubheadingText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 1.5em;
  line-height: 1.5;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 0.9rem;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${props => props.theme.colors.primary};
  opacity: 0.2;
  margin: 2em 0;
`;

export default PortfolioPage;