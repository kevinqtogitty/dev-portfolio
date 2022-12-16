import React, { useEffect, useState } from 'react';
import {
  animated,
  useTrail,
  config,
  useTransition,
  useSpring,
  useSpringRef,
  useChain,
} from 'react-spring';
import { SiteSection } from '../styles/stitches/SiteSection_styles';
import { createStitches } from '@stitches/react';
import { useInView } from 'react-intersection-observer';
import data from '../data/data.json';
import Image from 'next/image';
import {
  AnimatedDiv,
  SmallTextContainer,
  StyledLI,
  StyledUL,
} from '../styles/stitches/reusable_styles';

interface Project {
  projectName: string;
  thumbnail: string;
  gif: string;
  info: {
    card_description: string;
    description: string;
    bulletPoints: string[];
  };
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  isFullyFunctional: boolean;
}

const ProjectsSection: React.FC = (): JSX.Element => {
  const [projectsDisplayed, setProjectsDisplayed] = useState(false);
  const [isDialogActive, setIsDialogActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [activeProject, setActiveProject] = useState<Project>({
    projectName: '',
    thumbnail: '',
    gif: '',
    info: {
      card_description: '',
      description: '',
      bulletPoints: [],
    },
    technologies: [],
    githubUrl: '',
    liveUrl: '',
    isFullyFunctional: false,
  });
  // console.log(loading);
  useEffect(() => {
    if (inView && !projectsDisplayed) {
      setLoading(true);
      setProjectsDisplayed(true);
      setTimeout(() => {
        setLoading((state) => !state);
      }, 4500);
    }
  }, [inView, projectsDisplayed]);

  const projects = data.map((project) => project);

  const modalMaskTransition = useTransition(isDialogActive, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const modalSpring = useTransition(isDialogActive, {
    from: { opacity: 0, scale: '0%' },
    enter: { opacity: 1, scale: '100%' },
    leave: { opacity: 0, scale: '0%' },
  });

  const headerAnimation = useSpring({
    opacity: projectsDisplayed ? 1 : 0,
    y: projectsDisplayed ? '0%' : '-200%',
    delay: 5000,
  });

  const trail = useTrail(projects.length, {
    opacity: projectsDisplayed ? 1 : 0,
    config: config.molasses,
    delay: 4100,
  });

  const transitionRef = useSpringRef();
  const loadingAppear = useTransition(loading, {
    ref: transitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  });

  const springRef = useSpringRef();
  const { number } = useSpring({
    ref: springRef,
    number: loading ? 100 : 0,
    config: config.molasses,
  });

  useChain([transitionRef, springRef], [0, 1]);

  const handleDialogTrigger = (project: Project) => {
    setIsDialogActive((state) => !state);
    setActiveProject(project);
  };

  return (
    <SiteSection id="Page3" variant="ProjectSection">
      <ProjectCardContainer ref={ref}>
        {trail.map((spring, i) => (
          <animated.div style={spring} key={i}>
            <Card>
              <Image
                style={{ borderBottom: '.8px solid grey' }}
                src={`${projects[i].gif}`}
                width="300"
                height="168"
                alt=""
              />
              <ProjectNameInfoContainer>
                <ProjectName>{projects[i].projectName}</ProjectName>
                <Border />
                <CardDescription>
                  {projects[i].info.card_description}
                </CardDescription>
              </ProjectNameInfoContainer>
              <Border />
              <DialogTrigger onClick={() => handleDialogTrigger(projects[i])}>
                More info...
              </DialogTrigger>
            </Card>
          </animated.div>
        ))}
        {loadingAppear(
          (spring, item) =>
            item && (
              <LoadingPercentage style={spring}>
                {number.interpolate((x) => x.toFixed(0))}
              </LoadingPercentage>
            )
        )}
      </ProjectCardContainer>
      <ProjectsSectionHeader style={headerAnimation}>
        Projects
      </ProjectsSectionHeader>
      {modalMaskTransition(
        (spring, item) =>
          item && (
            <ModalMask
              style={spring}
              onClick={() => setIsDialogActive((state) => !state)}
            />
          )
      )}
      {modalSpring(
        (spring, item) =>
          item && (
            <Modal style={spring}>
              <MainModalContent>
                <ModalContentLeft>
                  <Image
                    src={`${activeProject.gif}`}
                    width="500"
                    height="281"
                    alt=""
                  />
                  <StyledUL>
                    {activeProject.info.bulletPoints.map(
                      (element, i: number) => (
                        <StyledLI key={i}>{element}</StyledLI>
                      )
                    )}
                  </StyledUL>
                  <AnchorWrapper>
                    <Anchor
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source code
                    </Anchor>
                    <Anchor
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        activeProject.isFullyFunctional ? '' : 'notification'
                      }
                    >
                      See it live
                    </Anchor>
                  </AnchorWrapper>
                </ModalContentLeft>
                <ModalContentRight>
                  <ContentRightHeaderDescriptionWrapper>
                    <h2>{activeProject.projectName}</h2>
                    <p>{activeProject.info.description}</p>
                  </ContentRightHeaderDescriptionWrapper>
                  <ContentRightTechnologiesWrapper>
                    <h2>Technologies</h2>
                    <AnimatedDiv variant="devIcons">
                      {activeProject.technologies.map((element, index) => (
                        <SmallTextContainer key={index}>
                          {element}
                        </SmallTextContainer>
                      ))}
                    </AnimatedDiv>
                  </ContentRightTechnologiesWrapper>
                </ModalContentRight>
              </MainModalContent>
            </Modal>
          )
      )}
    </SiteSection>
  );
};

export default ProjectsSection;

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 820px)',
    bp2: '(max-width: 428px)',
  },
});

const ContentRightHeaderDescriptionWrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  '@bp2': {
    display: 'none',
  },
});

const ContentRightTechnologiesWrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  '@bp2': {
    alignItems: 'center',
  },
});

const ProjectCardContainer = styled('section', {
  position: 'relative',
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(3, 1fr)',

  '@bp1': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@bp2': {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
});

const AnchorWrapper = styled('div', {
  display: 'flex',
  columnGap: '1rem',

  '@bp2': {
    justifyContent: 'center',
  },
});

const Anchor = styled('a', {
  textDecoration: 'none',
  color: '#fff',
  '&.notification': {
    '&::after': {
      position: 'absolute',
      content:
        '*only frontend is live, please fork repo for full functionality',
      color: '#fff',
      width: '10rem',
      bottom: '1rem',
      fontSize: '.6rem',
      left: '12.5rem',
    },
  },
});

const LoadingPercentage = styled(animated.span, {
  position: 'absolute',
  alignSelf: 'center',
  justifySelf: 'center',
  fontSize: '5rem',
  fontFamily: 'syncopate',
});

const Card = styled(animated.div, {
  width: '18.7rem',
  alignItems: 'center',
  minHeight: '17rem',
  backgroundColor: 'rgba(3, 2, 1, 1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  color: 'white',
  border: '.8px solid grey',
  borderRadius: '3px',
});

const ProjectsSectionHeader = styled(animated.h1, {
  margin: '0rem',
  top: '2rem',
  position: 'absolute',
  alignSelf: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  fontFamily: 'syncopate',
});

const ProjectName = styled('h4', {
  fontSize: '1rem',
  margin: '1rem 0rem 0rem 0rem',
  paddingBottom: '.8rem',
  paddingLeft: '.3rem',
});

const ProjectNameInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '21.8rem',
  alignItems: 'center',
});

const DialogTrigger = styled('button', {
  alignSelf: 'center',
  padding: '.5rem .8rem',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
});

const ModalMask = styled(animated.div, {
  height: '300%',
  width: '1000%',
  position: 'absolute',
  zIndex: 2,
  cursor: 'pointer',
  backgroundColor: 'rgba(3, 2, 1, .5)',
  backdropFilter: 'blur(10px)',

  '@bp2': {
    height: '300vh',
    width: '100vw',
  },
});

const Modal = styled(animated.div, {
  position: 'fixed',
  top: 'calc(50vh - 18rem)',
  zIndex: 3,
  width: '65rem',
  borderRadius: '4px',
  border: '.5px solid grey',
  backgroundColor: 'rgba(3, 2, 1, .7)',
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  padding: '1rem',
  '@bp2': {
    top: '3rem',
    width: 'fit-content',
    margin: '0rem 1rem',
    overflow: 'scroll',
  },
});

const MainModalContent = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',

  '@bp2': {
    flexDirection: 'column',
  },
});

const ModalContentRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '30rem',
  justifyContent: 'flex-start',
  alignItems: 'center',
  rowGap: '5rem',
  '@bp2': {
    width: '90%',
    overflow: 'scroll',
  },
});

const ModalContentLeft = styled('div', {});

const Border = styled('span', {
  borderBottom: '.8px solid grey',
  width: '100%',
  margin: '0rem',
});

const CardDescription = styled('p', {
  fontSize: '.8rem',
  paddingLeft: '.3rem',
});
