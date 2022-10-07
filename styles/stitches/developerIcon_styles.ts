import { createStitches } from '@stitches/react';
import { animated } from 'react-spring';
import {
  Nextdotjs,
  Html5,
  Javascript,
  Css3,
  Styledcomponents,
  Nodedotjs,
  Git,
  Github,
  Vercel,
  Firebase,
  Typescript,
  Astro,
  ReactLogo,
  Vite,
  Redux,
  Linkedin,
} from '@styled-icons/simple-icons';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const FirebaseStyled = styled(Firebase, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const HtmlStyled = styled(Html5, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const JavascriptStyled = styled(Javascript, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const CssStyled = styled(Css3, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const TypescriptStyled = styled(Typescript, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const NodeJsStyled = styled(Nodedotjs, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const AstroStyled = styled(Astro, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const ReactStyled = styled(ReactLogo, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const NextJsStyled = styled(Nextdotjs, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const GitStyled = styled(Git, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const StyledComponentsStyled = styled(Styledcomponents, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const VercelStyled = styled(Vercel, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const GithubStyled = styled(animated(Github), {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  cursor: 'pointer',
  '@bp1': {
    height: '2rem',
  },
});

const ViteStyled = styled(Vite, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const ReduxStyled = styled(Redux, {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  '@bp1': {
    height: '2rem',
  },
});

const IconHeader = styled('h2', {
  '@bp1': {
    fontSize: '1em',
  },
});

const LinkedinStyled = styled(animated(Linkedin), {
  color: 'rgb(3, 2, 1)',
  height: '3rem',
  cursor: 'pointer',
  '@bp1': {
    height: '2rem',
  },
});

const DevIconWrapper = styled(animated('div'), {
  height: 'fit-content',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
  alignItems: 'center',
});

const ProjectInteractionWrapper = styled('div', {
  display: 'flex',
  columnGap: '1rem',
  alignItems: 'center',
  borderRadius: '6px',

  fontSize: '1.2rem',
  justifyContent: 'center',
  padding: '.5rem',
  border: '2px solid black',
  backgroundColor: 'rgb(3, 2, 1)',
  width: 'fit-content',
  '& a': {
    textDecoration: 'none',
    fontFamily: 'Gruppo',
    color: '#fff',
  },

  '@bp2': {
    justifyContent: 'center',
  },
});

const Overlay = styled(animated('div'), {
  display: 'flex',
  width: '100%',
  height: '100%',
  zIndex: '1',
  position: 'absolute',

  justifyContent: ' flex-start',
  alignItems: 'flex-end',
});

export {
  FirebaseStyled,
  GitStyled,
  GithubStyled,
  NextJsStyled,
  AstroStyled,
  JavascriptStyled,
  CssStyled,
  TypescriptStyled,
  NodeJsStyled,
  HtmlStyled,
  ReactStyled,
  StyledComponentsStyled,
  VercelStyled,
  ViteStyled,
  ReduxStyled,
  DevIconWrapper,
  IconHeader,
  ProjectInteractionWrapper,
  LinkedinStyled,
  Overlay,
};
