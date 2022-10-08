import { createStitches } from '@stitches/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { animated } from 'react-spring';
import { Link } from 'react-scroll';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const NavBar = styled(NavigationMenu.Root, {
  display: 'flex',
  width: '15rem',
  height: '15rem',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  right: '1rem',
  bottom: '1rem',
  zIndex: '10',

  '@bp1': {
    width: '12rem',
    height: '12rem',
    bottom: '0rem',
    right: '0rem',
  },

  '@bp2': {
    bottom: '5rem',
    right: '0rem',
  },
});

const NavItem = styled(NavigationMenu.Item, {
  listStyle: 'none',
});

const AnimatedLink = styled(animated(Link), {
  cursor: 'pointer',
});

export { NavBar, NavItem, AnimatedLink };
