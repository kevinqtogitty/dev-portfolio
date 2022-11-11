import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, useTrail } from 'react-spring';
import { ProjectInteractionWrapper } from '../styles/stitches/developerIcon_styles';
import {
  FrostedGlass,
  ProjectDescription,
  ProjectToolsContainer,
} from '../styles/stitches/frostedGlass_styles';
import {
  AnimatedAnchor,
  AnimatedDiv,
  SmallTextContainer,
  StyledLI,
  StyledUL,
} from '../styles/stitches/reusable_styles';
import {
  ProjectSection,
  ImageAnimated,
  PictureAndToolsWrapper,
} from '../styles/stitches/SiteSection_styles';
import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const AolMessenger: React.FC = (): JSX.Element => {
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const [liveHovered, setLiveHovered] = useState<boolean>(false);

  const toolkit: string[] = [
    'Vite',
    'React',
    'Typescript',
    'Node',
    'Express',
    'Socket.io',
    'Styled Components',
    'Vercel',
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const trailAnimation = useTrail(toolkit.length, {
    opacity: inView ? 1 : 0,
  });

  const Card1Animation = useSpring({
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
    <ProjectSection>
      <FrostedGlass variant="Cards" ref={ref} style={Card1Animation}>
        AOL Instant Messenger
        <ProjectDescription>
          A real-time chat application using websockets via socket.io. Made in
          the the style of AIM from the early 2000&apos;s. Allows a user to
          create a ScreenName and private room, other users can join that room
          given the code and chat with each other. Yes, it even contains those
          familiar AIM notification sounds!
          <br />
          <StyledUL>
            <StyledLI>
              Uses websockets to send and recieve messages via react hooks
            </StyledLI>
            <StyledLI>
              Contains notifcation sounds for new messages & users
              leaving/entering the chatroom
            </StyledLI>
            <StyledLI> Uses xp.css for the styling</StyledLI>
          </StyledUL>
          <ProjectInteractionWrapper>
            <AnimatedAnchor
              href="https://github.com/kevinqtogitty/aol-chat-app.git"
              style={githubHoverAnimation}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(1)}
            >
              Source Code
            </AnimatedAnchor>
            <AnimatedAnchor
              href="https://aol-messenger-client.vercel.app/"
              style={liveHoverAnimation}
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHover(2)}
              className="notification"
            >
              See it live
            </AnimatedAnchor>
          </ProjectInteractionWrapper>
        </ProjectDescription>
      </FrostedGlass>
      <PictureAndToolsWrapper>
        <AnimatedDiv variant="project1and3Div" style={pictureAnimation}>
          <ImageAnimated
            src="/gifs/aol-messenger.gif"
            width="565.4"
            height="322.6"
            alt="Photography Website Project"
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

export default AolMessenger;
