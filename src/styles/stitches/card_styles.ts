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
        padding: '2rem',
        fontSize: '1.3rem',
        borderRadius: '10px',
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        backdropFilter: 'blur(3px)',
        border: '.5px solid grey',

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
