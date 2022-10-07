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

  const { ref, inView } = useInView({
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

  return (
    <ProjectSection variant="project2">
      <FrostedGlass variant="Cards" ref={ref} style={Card2Animation}>
        What&apos;s Out In my Country?
        <ProjectDescription>
          A fullstack application which queries the TMDB database for currently
          and upcoming films depending on the country you select. Allows a user
          to create an account, login, and save/delete movies to & from their
          watchlist which is stored in a database
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
            <AnimatedAnchor
              href="https://www.github.com/kevinqtogitty/Whats-playing-in-my-country"
              style={githubHoverAnimation}
              onMouseEnter={() => handleHover(1)}
              onMouseLeave={() => handleHover(1)}
            >
              Source Code
            </AnimatedAnchor>
            <AnimatedAnchor
              href="https://whatsplayinginmycountry.netlify.app/"
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
