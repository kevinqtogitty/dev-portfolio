import React from 'react';
import { createStitches } from '@stitches/react';
import { animated } from 'react-spring';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const Card = styled(animated('div'), {
  variants: {
    variant: {
      AboutMe: {
        width: '30rem',
        height: 'fit-content',
        position: 'absolute',
        left: '5rem',
        padding: '3rem',
        fontFamily: 'Gruppo',
        fontSize: '1.3rem',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: 'black',

        '@bp1': {
          position: 'static',
          fontSize: '1rem',
          padding: '1rem',
        },

        '@bp2': {
          width: '20rem',
        },
      },
    },
  },
});

export default Card;
