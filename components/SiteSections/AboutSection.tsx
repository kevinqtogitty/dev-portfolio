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
  ExpressStyled,
  MongoDBStyled,
} from '../../styles/stitches/developerIcon_styles';

const AboutSection: React.FC = (): JSX.Element => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const icons = [
    [<HtmlStyled />, 'HTML5'],
    [<CssStyled />, 'CSS3'],
    [<JavascriptStyled />, 'Javascript'],
    [<TypescriptStyled />, 'TypeScript'],
    [<ReactStyled />, 'React'],
    [<NodeJsStyled />, 'NodeJS'],
    [<ExpressStyled />, 'Express'],
    [<MongoDBStyled />, 'MongoDB'],
    [<GitStyled />, 'Git'],
    [<FirebaseStyled />, 'Firebase'],
    [<ViteStyled />, 'Vite'],
    [<VercelStyled />, 'Vercel'],
    [<StyledComponentsStyled />, 'Styled Components'],
  ];

  const aboutCardAnimation = useSpring({
    transform: inView ? 'translateY(0%)' : 'translateY(-20%)',
    opacity: inView ? 1 : 0,
    config: config.molasses,
  });

  const trailAnimation = useTrail(icons.length, {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0%)' : 'translateY(-20%)',
    config: config.wobbly,
  });

  return (
    <SiteSection id="Page2" variant="AboutSection">
      <Card variant="AboutMe" style={aboutCardAnimation}>
        <StyledHeader> A bit about me</StyledHeader>
        Hey! My name is Kevin To and I&apos;m a frontend developer based in the
        the US. I work mostly with ReactJS & Typescript client side, and
        React-Spring for those physics based animations. On occassion I&apos;ll
        need a bit more functionality so Firebase or MongoDB/Express help me get
        the job done.
        <br />
        <br />
        With prior experience as a specialty coffee/cafe consultant and
        currently as a English as a foreign language teacher, I bring both
        technical know-how and team skills like leadership, open communication,
        and conflict resolution to the table.
      </Card>
      <AnimatedDiv variant="devContainer" ref={ref}>
        <IconHeader>My Toolkit</IconHeader>
        <AnimatedDiv variant="devIcons">
          {trailAnimation.map((animation, index: any) => (
            <DevIconWrapper style={animation} key={index}>
              {icons[index].map((item) => item)}
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
