/* eslint-disable react/jsx-key */
/* eslint-disable react/display-name */
import React from 'react';
import Card from '../../styles/stitches/card_styles';
import { styled } from '@stitches/react';
import { useInView } from 'react-intersection-observer';
import { AnimatedDiv } from '../../styles/stitches/reusable_styles';
import { SiteSection } from '../../styles/stitches/SiteSection_styles';
import { useSpring, config, useTrail } from 'react-spring';
import {
  AstroStyled,
  CssStyled,
  DevIconWrapper,
  FirebaseStyled,
  GitStyled,
  HtmlStyled,
  IconHeader,
  JavascriptStyled,
  NextJsStyled,
  NodeJsStyled,
  ReactStyled,
  ReduxStyled,
  StyledComponentsStyled,
  TypescriptStyled,
  VercelStyled,
  ViteStyled,
} from '../../styles/stitches/developerIcon_styles';

const AboutSection = () => {
  const { ref: myRef, inView: elementIsInView } = useInView({
    threshold: 0.5,
  });

  const icons = [
    [<HtmlStyled />, 'HTML5'],
    [<CssStyled />, 'CSS3'],
    [<JavascriptStyled />, 'Javascript'],
    [<TypescriptStyled />, 'TypeScript'],
    [<ReactStyled />, 'React'],
    [<NodeJsStyled />, 'NodeJS'],
    [<GitStyled />, 'Git'],
    [<AstroStyled />, 'Astro'],
    [<FirebaseStyled />, 'Firebase'],
    [<ViteStyled />, 'Vite'],
    [<VercelStyled />, 'Vercel'],
    [<StyledComponentsStyled />, 'Styled Components'],
  ];

  const learning = [
    [<ReduxStyled />, 'Redux Toolkit'],
    [<NextJsStyled />, 'NextJS'],
  ];

  const aboutCardAnimation = useSpring({
    transform: elementIsInView ? 'translateY(0%)' : 'translateY(-20%)',
    opacity: elementIsInView ? 1 : 0,
    config: config.molasses,
  });

  const trailAnimation = useTrail(icons.length, {
    opacity: elementIsInView ? 1 : 0,
    transform: elementIsInView ? 'translateY(0%)' : 'translateY(-20%)',
    config: config.wobbly,
  });
  const trailAnimation2 = useTrail(learning.length, {
    opacity: elementIsInView ? 1 : 0,
    transform: elementIsInView ? 'translateY(0%)' : 'translateY(-20%)',
    config: config.wobbly,
  });

  return (
    <SiteSection id="Page2" variant="AboutSection">
      <Card variant="AboutMe" style={aboutCardAnimation}>
        <StyledHeader> A bit about me</StyledHeader>
        My journey in programming was kickstarted after recieving a fat bill
        from one of those big website builder/hosting platforms. After teaching
        myself and building my personal photography website I was hooked
        <br />
        <br />
        I&apos;m a frontend focused engineer, who&apos;s familiarizing himself
        with more backend services, so I can deliver richer experiences for my
        end users
      </Card>
      <AnimatedDiv variant="devContainer" ref={myRef}>
        <IconHeader>My Toolkit</IconHeader>
        <AnimatedDiv variant="devIcons">
          {trailAnimation.map((animation, index: any) => (
            <DevIconWrapper style={animation} key={index}>
              {icons[index].map((item) => item)}
            </DevIconWrapper>
          ))}
        </AnimatedDiv>
        <IconHeader>I&apos;m learning</IconHeader>
        <AnimatedDiv variant="devIcons">
          {trailAnimation2.map((animation, index) => (
            <DevIconWrapper style={animation} key={index}>
              {learning[index].map((item) => item)}
            </DevIconWrapper>
          ))}
        </AnimatedDiv>
      </AnimatedDiv>
    </SiteSection>
  );
};

export default AboutSection;

const StyledHeader = styled('h2', {
  fontSize: '1rem',
});
