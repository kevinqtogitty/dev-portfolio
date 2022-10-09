import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, useTrail } from 'react-spring';
import { ProjectInteractionWrapper } from '../../styles/stitches/developerIcon_styles';
import {
  FrostedGlass,
  ProjectDescription,
  ProjectToolsContainer,
} from '../../styles/stitches/frostedGlass_styles';
import {
  AnimatedAnchor,
  AnimatedDiv,
  SmallTextContainer,
  StyledLI,
  StyledUL,
} from '../../styles/stitches/reusable_styles';
import {
  ImageAnimated,
  PictureAndToolsWrapper,
  ProjectSection,
} from '../../styles/stitches/SiteSection_styles';

const ReelTalk: React.FC = (): JSX.Element => {
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const [liveHovered, setLiveHovered] = useState<boolean>(false);

  const toolkit: string[] = [
    'Astro',
    'MDX',
    'React',
    'Vanilla CSS',
    'React-Router',
    'Vercel',
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
        ReelTalk Film Blog
        <ProjectDescription>
          A clean and lightning fast jamstack blog to host my thoughts on
          cinema.
          <br />
          <br />
          <StyledUL>
            <StyledLI> Built with AstroJS framework</StyledLI>
            <StyledLI>
              {' '}
              Uses Astros&apos; island architecture and server side rendering
              philosophy
            </StyledLI>
            <StyledLI> Leverages SSR for speed</StyledLI>
            <StyledLI> Fully responsive</StyledLI>
          </StyledUL>
          <ProjectInteractionWrapper>
            <AnimatedAnchor
              href="https://github.com/kevinqtogitty/rebuilt-reel-talk-blog"
              style={githubHoverAnimation}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(1)}
            >
              Source Code
            </AnimatedAnchor>
            <AnimatedAnchor
              href="https://reel-talk.vercel.app/"
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
            src="/project_photos/reeltalk.jpg"
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

export default ReelTalk;
