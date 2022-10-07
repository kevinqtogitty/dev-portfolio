import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const ResizedImage = styled('div', {
  position: 'absolute',
  top: '-5rem',
  right: '3rem',
  '@bp1': {
    right: '0rem',
    top: '-6rem',
  },
  '@bp2': {
    display: 'none',
  },
});

const Resized = styled('div', {
  left: '10rem',
  top: '30rem',
  '@bp1': {
    top: '35rem',
    left: '0rem',
  },
});

const SvgTitleContainer = styled('div', {
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  position: 'absolute',
  left: '13rem',
  bottom: '10rem',

  '@bp1': {
    bottom: '19rem',
    left: '0rem',
  },
});

const ContactMeWrapper = styled('div', {
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1rem',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  position: 'absolute',
  top: '0rem',
  left: '0rem',
  padding: '1rem',
  '& a': {
    cursor: 'pointer',
  },
});

export { ContactMeWrapper, SvgTitleContainer, Resized, ResizedImage };
