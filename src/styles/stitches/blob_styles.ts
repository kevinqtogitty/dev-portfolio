import { createStitches, keyframes } from '@stitches/react';
import { animated } from 'react-spring';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const rotateAndMorph = keyframes({
  from: {
    transform: 'rotate(0deg)',
    borderRadius: '24% 76% 35% 65% / 27% 36% 64% 73%',
  },
  to: {
    transform: ' rotate(-640deg)',
    borderRadius: '76% 24% 33% 67% / 68% 55% 45% 32%',
  },
});

const Blob = styled(animated('div'), {
  position: 'absolute',
  top: '7rem',
  left: '15rem',
  width: '20rem',
  height: '20rem',
  background: 'rgb(255, 255, 255)',
  transition: 'ease-in',
  animation: `${rotateAndMorph} 13s infinite alternate ease-in-out`,

  '@bp1': {
    // background: 'rgb(3, 2, 1)',
    width: '30rem',
    height: '30rem',
    left: '8rem',
  },

  '@bp2': {
    width: '12rem',
    height: '12rem',
    top: '7rem',
  },
});

export { Blob };
