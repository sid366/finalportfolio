import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  projectId?: string;
}

const projects = {
  "interactive-logo": {
    title: "Interactive Logo",
    description: "An interactive logo design for a fictional surfboarding company.",
    fullDescription: `
      I created an engaging interactive logo experience to demonstrate how companies can make their web presence more memorable. The project combines clean logo design with playful web animations to create a delightful user experience.

The process started with designing a surfing-themed logo in Canva for a fictional company called "Sunny Side Surf". The design features a cute cat character riding a surfboard within a circular badge. After finalizing the design, I brought it to life using ZimJS, a powerful Canvas animation framework.

The logo features several interactive elements:
- The circular badge containing the company name continuously rotates
- Hovering over the surfing cat triggers a playful side-to-side wiggle animation
- Clicking the cat produces a meowing sound effect and special animation
- Clicking the rotating circle makes the cat perform a 360° flip trick with water splash effects
- The background smoothly transitions between colors during interactions

This project showcases how simple interactivity can transform a static logo into an engaging brand element. It's an accessible way for companies to add playful touches to their web presence.

Key Features:
- Clean, professional logo design in Canva
- Smooth animations using ZimJS Canvas Framework
- Multiple interactive elements and animations
- Sound effects integration
- Dynamic color transitions
- Responsive design that works across devices
    `,
    technologies: ["Canva", "ZimJS", "JavaScript", "HTML5 Canvas"],
    image: "/assets/projects/interactivelogo/interactivelogo.png",
    gallery: [
      "/assets/projects/interactivelogo/ic.png"
    ],
    link: "https://interactivecatlogo.onrender.com/",
    github: "#"
  },
  "gravitone": {
    title: "Gravitone",
    description: "A motion-controlled musical instrument that turns movement into music and colors.",
    fullDescription: `
      Gravitone is an interactive web-based musical instrument. Using your device's motion sensors, you control a white circle that moves through different musical zones, each triggering notes and color changes.


How to Play:
1. Open Gravitone in a mobile browser
2. Tap "START" to begin
3. Tilt your device to move the white circle
4. Explore different zones to trigger various musical scales
5. Watch as colors shift and blend based on your movement

The project was built using the ZIM Canvas Framework, which provides robust handling of device motion events and smooth graphics rendering.

I also created a desktop companion that plays chords when a circle is moved through different musical zones. You can easily play music with a friend using both the mobile and desktop versions.

Key Features:
-Motion-controlled interface using device tilt
-Six distinct musical zones
-Dynamic color transitions
-Responsive design optimized for mobile devices
-Intuitive, no-prior-music-knowledge-needed
    `,
    technologies: ["ZIM Canvas Framework", "Device Motion API", "JavaScript", "HTML5 Canvas"],
    image: "/assets/projects/gravitone/26-min.png",
    gallery: [
      "/assets/projects/gravitone/27-min.png",
      "/assets/projects/gravitone/28-min.png",
      "/assets/projects/gravitone/29-min.png"
    ],
    link: "https://gravitone.onrender.com/",
    github: "#"
  },
  "ecommerce": {
    title: "Atoms For Peace",
    description: "An interactive media installation.",
    fullDescription: `
      This immersive installation transforms the song Atoms for Peace by Thom Yorke into a multisensory visual experience using projection mapping, Adobe After Effects, and audio-reactive animation. By extracting and analyzing the song's MIDI data, the piece syncs dynamic visuals to bass, drums, piano, and vocals.

The visuals were projected onto carefully arranged sculpted foam cutouts. I used a combination of gifs, cartoons, album artwork, and videos that I took of myself.  My goal was to create a physical space for the song to exist in.

Key Features:

-MIDI-to-animation pipeline using scripting in After Effects

-Custom visuals and assets developed in Photoshop and Illustrator

-Projection mapping aligned to foam shapes for a 3D visual effect

-Responsive design triggered by individual instrumental tracks

-Visual storytelling synced to the emotional arc of the music
    `,
    technologies: ["Adobe After Effects", "MIDI to Keyframe Scripting", "Photoshop", "Projection mapping setup", "Illustrator"],
    image: "/assets/projects/atoms/16.png",
    gallery: [
      "/assets/projects/atoms/17.png",
      "/assets/projects/atoms/18.png",
      "/assets/projects/atoms/19.png",
      "/assets/projects/atoms/20.png",
      "/assets/projects/atoms/21.png",
      "/assets/projects/atoms/22.png"
    ],
    link: "https://youtu.be/hr1HHVATzQo",
    github: "#"
  },
  "social": {
    title: "Emoji Tarot",
    description: "A playful web app that gives users a daily three-card tarot reading using emojis. I implemented a backend in PHP and used the ChatGPT API to generate unique interpretations.",
    fullDescription: `
      Emoji Tarot is a web-based experience that combines the mysticism of tarot with the fun of emoji and the power of AI. Every day, users receive a new, unique 3-card reading. The cards are visually flipped on click, and each one reveals a combination of emojis that represent traditional tarot archetypes. These emojis are then sent to the ChatGPT API, which generates a personalized interpretation for the day.

The backend system uses a MySQL database to store the full 78-card tarot deck with associated emoji combinations. On page load, PHP selects three random cards and sends them to the frontend, where users interact with them through a flip animation. Once all three are revealed, the system compiles the emoji array and sends it to OpenAI's API to receive a one-of-a-kind reading.

I'm currently working on a mobile version that I hope to get on the Play Store soon.

Key Features:

-Daily randomized 3-card spread

-Interactive card flip animation

-Emoji-based representations of traditional tarot cards

-Real-time integration with the ChatGPT API for daily readings

-Backend database to manage and store card data


    `,
    technologies: ["JavaScript", "PHP", "MySQL", "ChatGPT API", "CSS Animations", "Responsive Design"],
    image: "/assets/projects/emoji-tarot/1.png",
    gallery: [
      "/assets/projects/emoji-tarot/2.png",
      "/assets/projects/emoji-tarot/3.png",
      "/assets/projects/emoji-tarot/screenshot1.png",
      "/assets/projects/emoji-tarot/screenshot2.png",
      "/assets/projects/emoji-tarot/screenshot3.png"
    ],
    link: "https://emoji-tarot-af748470b924.herokuapp.com/",
    github: "#"
  },
  "taskmanager": {
    title: "Interactive Music Box",
    description: "A collaborative musical interface built with Arduinos, PureData, and a custom acrylic enclosure. Designed for intuitive play by users of any skill level.",
    fullDescription: `
      The Interactive Music Box is a collaborative instrument designed for playful, intuitive music creation between two users. Developed as part of an Interactive Technologies course, the project merges digital and physical interaction using an Arduino-based arcade MIDI controller and a custom-built ribbon controller.

One user triggers pre-programmed chords using large arcade buttons, while the second user slides their finger along a ribbon sensor to play individual notes. This system encourages cooperative improvisation and is intended to make music creation feel accessible and fun.

Behind the scenes, two Arduino boards send MIDI signals to PureData, a visual programming language used to route and process the data. The sound is generated and shaped in real time via Ableton Live, a digital audio workstation.

To house the hardware, I designed a custom open-box enclosure in Adobe Illustrator and then laser cut from acrylic for a clean and professional finish.

Key Features:

-Two-person collaborative interaction model

-Button-based chord triggering and ribbon-based pitch control

-Real-time MIDI communication using PureData and Ableton Live

-Custom acrylic enclosure designed and laser cut from Illustrator files

-Accessible music creation for all skill levels
    `,
    technologies: ["Arduino", "PureData", "Ableton Live", "Illustrator", "Laser cutting", "MIDI"],
    image: "/assets/projects/midi-controller/7.png",
    gallery: [
      "/assets/projects/midi-controller/8.png",
      "/assets/projects/midi-controller/9.png",
      "/assets/projects/midi-controller/10.png",
      "/assets/projects/midi-controller/11.png",
      "/assets/projects/midi-controller/12.png",
      "/assets/projects/midi-controller/13.png",
      "/assets/projects/midi-controller/14.png",
      "/assets/projects/midi-controller/15.png"
    ],
    link: "https://youtube.com/shorts/3DyoIYEyWuI?feature=share",
    github: "#"
  },
  "weather": {
    title: "Timeblind",
    description: "A mobile timer app designed for users with ADHD, featuring interval-based reminders, color-shifting backgrounds, and automatic session tracking to combat time blindness.",
    fullDescription: `
      Timeblind is a timer app thoughtfully designed for people with ADHD to help manage time perception for neurodivergent individuals. The idea came from a Reddit post on the ADHD subreddit that suggested setting up constant reminders at a fixed interval to stay aware of the passage of time. I looked for an app with this functionality on the Play Store but couldn't find anything that did exactly what I wanted.

Users can select custom intervals to receive gentle reminders as time passes. A visual timer then opens up and the background changes color from the bottom up. The color used depends on the time of day (green in the morning, yellow in the afternoon, and red at night). This way, the user is always aware of the time of day and the session's progress.

When a timer completes (default: 1 hour), the app notifies the user that the session is over via a push notification and automatically starts the next.

Key Features:

-Three options for reminder intervals

-Visual timer with ambient color shift based on time of day

-Automatic session rollover after timer completion

-Push notifications to signal session changes

-Designed with ADHD support in mind

-APK built for Android deployment
    `,
    technologies: ["React Native", "Android Studio", "Node.js", "Push Notifications", "Mobile UI/UX"],
    image: "/assets/projects/timeblind/3.png",
    gallery: [
      "/assets/projects/timeblind/4.png",
      "/assets/projects/timeblind/5.png",
      "/assets/projects/timeblind/6.png"
    ],
    link: "https://drive.google.com/file/d/1OXJiW_CtOAUeTP4yLa2neCDXL2AwgLgE/view?usp=sharing",
    github: "#"
  }
};

const ProjectDetailPage: React.FC<ProjectDetailProps> = ({ projectId = "ecommerce" }) => {
  const project = projects[projectId as keyof typeof projects];
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <DetailContainer>
      <BackButton onClick={() => window.location.href = "#portfolio"}>
        ← Back to Projects
      </BackButton>
      
      <DetailHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectTitle>{project.title}</ProjectTitle>
      </DetailHeader>
      
      <HeroImage 
        src={project.image} 
        alt={project.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
      
      <ContentSection>
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {project.fullDescription.split('\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </Description>
        
        <TechnologiesSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <SectionTitle>Technologies Used</SectionTitle>
          <TechList>
            {project.technologies.map((tech, idx) => (
              <TechItem key={idx}>{tech}</TechItem>
            ))}
          </TechList>
        </TechnologiesSection>
        
        <GallerySection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <SectionTitle>Project Gallery</SectionTitle>
          <Gallery>
            {project.gallery.map((img, idx) => (
              <GalleryImage key={idx} src={img} alt={`${project.title} gallery ${idx + 1}`} />
            ))}
          </Gallery>
        </GallerySection>
        
        <LinksSection
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            {projectId === "gravitone" ? "Mobile Version" : "Check it out"}
          </ProjectLink>
          {projectId === "gravitone" && (
            <ProjectLink href="https://gravitone-desktop-91e6.onrender.com" target="_blank" rel="noopener noreferrer">
              Desktop Version
            </ProjectLink>
          )}
          {projectId === "taskmanager" && (
            <ProjectLink href="https://youtube.com/shorts/AwjUkXFAukI?feature=share" target="_blank" rel="noopener noreferrer">
              Ribbon Sensor Demo
            </ProjectLink>
          )}
        </LinksSection>
      </ContentSection>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  padding: 80px 50px;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 80px 40px;
  }
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  margin-bottom: 30px;
  display: inline-block;
  transition: opacity 0.3s ease;
  margin-left: 10px;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-left: 20px;
  }
`;

const DetailHeader = styled(motion.div)`
  margin-bottom: 40px;
  padding: 0 10px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 20px;
  }
`;

const ProjectTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const HeroImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: auto;
    max-height: 250px;
    padding: 0 20px;
    object-fit: contain;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 0 10px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 20px;
  }
`;

const Description = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  white-space: pre-line;
  
  p {
    margin-bottom: 20px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 1.5rem;
  }
`;

const TechnologiesSection = styled(motion.div)``;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.span`
  background-color: ${props => props.theme.colors.secondary};
  color: black;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const GallerySection = styled(motion.div)``;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: auto;
    max-height: 200px;
    width: 100%;
    object-fit: contain;
  }
`;

const LinksSection = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  text-align: center;
  
  &:hover {
    background-color: #333;
  }
`;

export default ProjectDetailPage;