import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTrail, useSpring } from 'react-spring';
import { ProjectInteractionWrapper } from '../../styles/stitches/developerIcon_styles';
import {
  FrostedGlass,
  ProjectDescription,
  ProjectToolsContainer,
} from '../../styles/stitches/frostedGlass_styles';
import {
  StyledUL,
  StyledLI,
  AnimatedAnchor,
  AnimatedDiv,
  SmallTextContainer,
} from '../../styles/stitches/reusable_styles';
import {
  ProjectSection,
  PictureAndToolsWrapper,
  ImageAnimated,
} from '../../styles/stitches/SiteSection_styles';

const AnnounceItProject = () => {
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const [liveHovered, setLiveHovered] = useState<boolean>(false);

  const toolkit: string[] = [
    'Typescript',
    'React',
    'Zustand',
    'NodeJS',
    'Express',
    'TipTap',
    'Firebase Auth',
    'MongoDB',
    'Radix-UI',
    'Styled Components',
    'React-Router',
  ];

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const trailAnimation = useTrail(toolkit.length, {
    opacity: inView ? 1 : 0,
  });

  const CardAnimation = useSpring({
    transform: inView ? 'translateX(0%)' : 'translateX(-50%)',
    opacity: inView ? 1 : 0,
  });

  const pictureAnimation = useSpring({
    opacity: inView ? 1 : 0,
  });

  const githubHoverAnimation = useSpring({
    transform: githubHovered ? 'translateY(-5px)' : 'translateY(0px)',
  });

  const liveHoverAnimation = useSpring({
    transform: liveHovered ? 'translateY(-5px)' : 'translateY(0px)',
  });

  const handleHover = (key: number): void => {
    switch (key) {
      case 1:
        setGithubHovered((state) => !state);
        break;
      case 2:
        setLiveHovered((state) => !state);
        break;
      default:
        break;
    }
  };

  return (
    <ProjectSection variant="project3">
      <FrostedGlass variant="Cards" ref={ref} style={CardAnimation}>
        Announce It!
        <ProjectDescription>
          A fullstack responsive webapp to create Teams and add members via a
          randomly generated code. Allows a user to join other teams, see their
          announcements, and post their own announcements via TipTap rich text
          editor. Made to make team managment and organization simpler.
          <br />
          <br />
          <StyledUL>
            <StyledLI> MERN stack application</StyledLI>
            <StyledLI>
              Uses TipTap editor to generate/convert html to json
            </StyledLI>
            <StyledLI> Allows for CRUD operations via a RestAPI</StyledLI>
            <StyledLI> Data is saved to MongoDB</StyledLI>
            <StyledLI> Uses Radix primitves to handle accesibility</StyledLI>
            <StyledLI> Uses private routes</StyledLI>
          </StyledUL>
          <ProjectInteractionWrapper>
            <AnimatedAnchor
              href="https://github.com/kevinqtogitty/announce-it-app2"
              style={githubHoverAnimation}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(1)}
            >
              Source Code
            </AnimatedAnchor>
            <AnimatedAnchor
              href="https://announce-it-app2.vercel.app/"
              style={liveHoverAnimation}
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHover(2)}
            >
              See it live
            </AnimatedAnchor>
          </ProjectInteractionWrapper>
        </ProjectDescription>
      </FrostedGlass>
      <PictureAndToolsWrapper>
        <AnimatedDiv variant="project1and3Div" style={pictureAnimation}>
          <ImageAnimated
            src="/project_photos/announceIt.jpg"
            width="565.4"
            height="322.6"
            alt=""
          />
        </AnimatedDiv>
        <ProjectToolsContainer variant="projects1and2">
          {trailAnimation.map((animation, index) => (
            <SmallTextContainer key={index} style={animation}>
              {toolkit[index]}
            </SmallTextContainer>
          ))}
        </ProjectToolsContainer>
      </PictureAndToolsWrapper>
    </ProjectSection>
  );
};

export default AnnounceItProject;
