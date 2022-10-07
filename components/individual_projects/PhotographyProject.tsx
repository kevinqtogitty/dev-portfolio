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
  ProjectSection,
  ImageAnimated,
  PictureAndToolsWrapper,
} from '../../styles/stitches/SiteSection_styles';
import { createStitches } from '@stitches/react';

export const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const PhotographyProject: React.FC = (): JSX.Element => {
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const [liveHovered, setLiveHovered] = useState<boolean>(false);

  const toolkit: string[] = [
    'Vite',
    'React',
    'Typescript',
    'Redux Toolkit',
    'Styled Components',
    'React-Spring',
    'Stripe',
    'React-Router',
    'Vercel',
    'CloudFlare CDN',
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
        Photography Portfolio
        <ProjectDescription>
          A desktop/mobile friendly website to host my personal photography
          projects. Has a print store which uses the prebuilt checkout from the
          Stripe API. Store cart state migrated from Context API to Redux
          Toolkit. <br />
          <StyledUL>
            <StyledLI>
              {' '}
              Implemented Stripe Checkout for print purchases
            </StyledLI>
            <StyledLI> Deployed on CloudFlare CDN</StyledLI>
            <StyledLI> React-Spring menu/shopping cart animations</StyledLI>
          </StyledUL>
          <ProjectInteractionWrapper>
            <AnimatedAnchor
              href="https://www.github.com/kevinqtogitty/Kevinq.To-Photo"
              style={githubHoverAnimation}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(1)}
            >
              Source Code
            </AnimatedAnchor>
            <AnimatedAnchor
              href="https://www.kevinqtophoto.com"
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
            src="/project_photos/photography.jpg"
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

export default PhotographyProject;
