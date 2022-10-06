import { createStitches, keyframes } from '@stitches/react';
import { animated } from 'react-spring';
import { callbackify } from 'util';

export const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const InfiniteRotate = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const FrostedGlass = styled(animated('div'), {
  position: 'absolute',
  background: 'rgba(255, 255, 255, 1)',
  borderRadius: '16px',
  boxShadow: '0 1px 20px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(8px)',
  height: 'fit-content',
  width: '25rem',
  zIndex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',

  variants: {
    variant: {
      menuOrb: {
        height: '8rem',
        width: '8rem',
        borderRadius: '50%',
        padding: '2rem',
        backdropFilter: 'blur(500px)',
        position: 'relative',
        fontSize: '1.5rem',
        zIndex: '1',
        backgroundColor: 'rgba(3, 2, 1, 1)',
        boxShadow: '1px 5px 20px rgba(3, 2, 1, 1)',

        animation: `${InfiniteRotate} 5s linear infinite`,
        '@bp1': {
          width: '3rem',
          height: '3rem',
        },
      },
      aboutOrb: {
        borderRadius: '50%',
        left: '0rem',
        padding: '2rem',
        backgroundColor: 'rgba(3, 2, 1, 1)',
        position: 'relative',
        height: '5rem',
        width: '5rem',
        animation: `${InfiniteRotate} 5s linear infinite`,
        '@bp1': {
          width: '3rem',
          height: '3rem',
        },
      },
      projectsOrb: {
        borderRadius: '50%',
        padding: '2rem',
        backgroundColor: 'rgba(3, 2, 1, 1)',

        left: '0rem',
        height: '5rem',
        width: '5rem',
        position: 'relative',
        animation: `${InfiniteRotate} 5s linear infinite`,
        '@bp1': {
          width: '3rem',
          height: '3rem',
        },
      },
      contactOrb: {
        borderRadius: '50%',
        padding: '2rem',
        backgroundColor: 'rgba(3, 2, 1, 1)',

        left: '0rem',
        height: '5rem',
        width: '5rem',
        position: 'relative',
        animation: `${InfiniteRotate} 5s linear infinite`,
        '@bp1': {
          width: '3rem',
          height: '3rem',
        },
      },

      Cards: {
        position: 'relative',
        height: 'fit-content',
        width: '35rem',
        flexDirection: 'column',
        padding: '2rem',
        fontSize: '1.5rem',
        rowGap: '2rem',
        fontFamily: 'neuropol-x-light',
        zIndex: '0',
        marginRight: '-20rem',
        '@bp1': {
          fontSize: '1.2rem',
          padding: '1rem',
          height: 'fit-content',
          position: 'relative',
          marginLeft: '0rem',
          marginRight: '0rem',
        },

        '@bp2': {
          width: '85vw',
        },
      },
    },
  },
});

const ProjectDescription = styled('article', {
  width: '80%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  // color: '#fff',
  fontSize: '1.3rem',
  lineHeight: '1.5rem',
  fontFamily: 'Gruppo',
  '@bp1': {
    fontSize: '1rem',
  },
});

const ProjectToolsContainer = styled(animated('div'), {
  maxWidth: '40rem',
  minHeight: '1rem',
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '1rem',
  // position: 'absolute',
  // right: 'calc(100vw - 100%)',
  rowGap: '1rem',
  // marginTop: '23rem',

  variants: {
    variant: {
      whatsPlaying: {
        right: 'calc(100vw - 50%)',
        '@bp1': {
          position: 'relative',
          marginTop: '0rem',
          justifyContent: 'center',
          rowGap: '.5rem',
        },
      },

      projects1and2: {
        '@bp1': {
          position: 'relative',
          marginTop: '0rem',
          justifyContent: 'center',
          rowGap: '.5rem',
        },
      },
    },
  },
});

// const GlassBackground = styled(animated('div'), {
//   height: '35rem',
//   width: '35rem',
//   transform: 'scaleY(1) scaleX(-1) rotate(90deg)',
// });

const GlassProjectContainer = styled(animated('div'), {
  height: '20rem',
  width: '20rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@bp1': {
    height: 'fit-content',
    width: 'fit-content',
  },
});

const MainIntro = styled('div', {
  height: 'fit-content',
  width: 'max-content',
  zIndex: '1',
  display: 'flex',
  color: '#000',
  fontSize: '2rem',
  padding: '1rem',
  position: 'absolute',
  left: '5rem',
  lineHeight: '4rem',
  mixBlendMode: 'difference',
  filter: 'invert(1)',
  top: '13rem',

  '@bp2': {
    left: '2rem',
  },
});

const Me = styled(animated('div'), {
  marginTop: '3rem',
});

const MenuItemContainer = styled(animated('div'), {
  position: 'fixed',

  variants: {
    variant: {
      main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1',
        cursor: 'pointer',
        '&:hover .orbitingElement': {
          visibility: 'visible',
          opacity: '1',
        },
      },

      subMenuItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover .orbitingElement': {
          visibility: 'visible',
          opacity: '1',
        },
      },
    },
  },
});

const MenuItemText = styled('div', {
  fontSize: '1rem',
  position: 'absolute',
  display: 'flex',
  width: '100%',
  borderRadius: '50%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '2',
  color: '#fff',
  '@bp1': {
    fontSize: '.85rem',
  },
});

export {
  FrostedGlass,
  MainIntro,
  MenuItemContainer,
  MenuItemText,
  // GlassBackground,
  GlassProjectContainer,
  ProjectDescription,
  ProjectToolsContainer,
  Me,
};
