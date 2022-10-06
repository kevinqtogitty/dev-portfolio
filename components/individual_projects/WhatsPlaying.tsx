import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, config, useTrail, animated } from 'react-spring';
import { ProjectInteractionWrapper } from '../../styles/stitches/developerIcon_styles';
import {
  GlassProjectContainer,
  FrostedGlass,
  ProjectDescription,
  ProjectToolsContainer,
} from '../../styles/stitches/frostedGlass_styles';
import {
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
import Image from 'next/image';

const WhatsPlaying: React.FC = (): JSX.Element => {
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const [liveHovered, setLiveHovered] = useState<boolean>(false);

  const toolkit: string[] = [
    'Vite',
    'React',
    'Typescript',
    'Firebase Services',
    'NodeJS',
    'Styled Components',
    'Axios',
    'Context API',
    'Netlify',
  ];

  const { ref: proj2, inView } = useInView({
    threshold: 0.2,
  });

  const trailAnimation = useTrail(toolkit.length, {
    opacity: inView ? 1 : 0,
  });

  const Card2Animation = useSpring({
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

  const leftArrowBounce = useSpring({
    from: { transform: 'translateX(50px)', opacity: '1' },
    to: { transform: 'translateX(0px)', opacity: '0' },
    loop: true,
    config: config.molasses,
  });

  return (
    <ProjectSection variant="project2">
      <FrostedGlass variant="Cards" ref={proj2} style={Card2Animation}>
        What&apos;s Out In my Country?
        <ProjectDescription>
          Using TMDB RESTful api I built a SPA that queries only currently
          playing and upcoming films depending on the chosen country. Why? To
          help alleviate &apos;paralysis by analysis&apos;.
          <br />
          <br />
          <StyledUL>
            <StyledLI>
              {' '}
              Implemented user authentication/storage via Firebase
            </StyledLI>
            <StyledLI>
              {' '}
              User can save/remove movies to a persistent watchlist
            </StyledLI>
            <StyledLI> Uses session storage for country chosen</StyledLI>
            <StyledLI> Fully responsive</StyledLI>
          </StyledUL>
          <ProjectInteractionWrapper>
            <animated.a
              href="https://www.github.com/kevinqtogitty/Whats-playing-in-my-country"
              style={githubHoverAnimation}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(1)}
            >
              Source Code
            </animated.a>
            <animated.a
              href="https://whatsplayinginmycountry.netlify.app/"
              style={liveHoverAnimation}
              onMouseEnter={() => handleHover(2)}
              onMouseLeave={() => handleHover(2)}
            >
              See it live
            </animated.a>
            <animated.div style={leftArrowBounce}>
              <Image
                src="/leftArrow.svg"
                height={30}
                width={30}
                alt="left_arrow"
              />
            </animated.div>
          </ProjectInteractionWrapper>
        </ProjectDescription>
      </FrostedGlass>
      <PictureAndToolsWrapper>
        <AnimatedDiv variant="project1and3Div" style={pictureAnimation}>
          <ImageAnimated
            src="/project_photos/whatsplaying.jpg"
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

export default WhatsPlaying;
