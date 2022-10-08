import { createStitches } from '@stitches/react';
import { animated } from 'react-spring';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const AnimatedDiv = styled(animated('div'), {
  height: 'fit-content',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
  variants: {
    variant: {
      project1and3Div: {
        position: 'relative',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        '@bp1': {
          margin: '0rem',
          width: '30rem',
        },

        '@bp2': {
          width: '20rem',
        },
      },
      project2Div: {
        margin: '0rem 0rem 10rem 3rem',
        boxShadow: '0 1px 20px rgba(0, 0, 0, 0.1)',
        '@bp1': {
          margin: '0rem',
          width: '30rem',
        },
      },
      devIcons: {
        flexDirection: 'row',
        width: '30rem',
        flexWrap: 'wrap',
        columnGap: '2rem',
        justifyContent: 'center',
        '@bp2': {
          width: '20rem',
        },
      },
      devContainer: {
        position: 'absolute',
        right: '5rem',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, .98)',
        borderRadius: '6px',
        padding: '1rem',
        zIndex: 1,
        '@bp1': {
          position: 'relative',
          right: '0rem',
          width: 'fit-content',
        },
      },
    },
  },
});

const SmallTextContainer = styled(animated('div'), {
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(3, 2, 1, 1)',
  borderRadius: '50px',
  fontSize: '.7rem',
  color: '#fff',
});

const ProjectDescription = styled('div', {
  border: '2px solid green',
});

const StyledUL = styled('ul', {});

const StyledLI = styled('li', {
  fontFamily: 'Gruppo',

  '&::marker': {
    content: '⟢  ',
  },
});

const ResizableEmail = styled('div', {
  '@bp2': {
    width: '2.5rem',
    height: '2.8rem',
    padding: '0rem',
  },
});

const AnimatedAnchor = styled(animated('a'), {
  '@bp2': {
    fontSize: '.9rem',
  },
});

export {
  AnimatedDiv,
  AnimatedAnchor,
  SmallTextContainer,
  ProjectDescription,
  StyledUL,
  StyledLI,
  ResizableEmail,
};
