import { createStitches, keyframes } from '@stitches/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { animated } from 'react-spring';
import { Link } from 'react-scroll';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const AnimatedLink = styled(animated(Link), {
  cursor: 'pointer',
  color: '#fff',
  transition: 'color 300ms ease-in',
  fontFamily: 'Syncopate',

  '&:hover': {
    color: 'hotpink',
  },
});

const MenuLink = styled('a', {
  cursor: 'pointer',
  color: '#fff',
  transition: 'color 300ms ease-in',
  fontFamily: 'Syncopate',

  '&:hover': {
    color: 'hotpink',
  },
});

export { AnimatedLink, MenuLink };
