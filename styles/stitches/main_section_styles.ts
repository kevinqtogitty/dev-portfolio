import { createStitches } from '@stitches/react';
import { animated } from 'react-spring';

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
  display: 'flex',
  flexWrap: 'nowrap',
  height: 'fit-content',
  width: '25rem',
  alignItems: 'center',
  top: '0rem',

  '@bp2': {
    width: '20rem',
    position: 'absolute',
    top: '-5rem',
  },
});

const Me = styled('div', {
  marginTop: '3rem',
  width: '15rem',
  '@bp2': {
    fontSize: '1rem',
  },
});

const SvgTitleContainer = styled('div', {
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  position: 'absolute',
  left: '13rem',
  top: '30rem',
  '@bp1': {
    bottom: '19rem',
    left: '0rem',
  },
  '@bp2': {
    top: '23.5rem',
    left: '1rem',
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
  left: '1rem',
  padding: '1rem',
  '& a': {
    cursor: 'pointer',
  },
});

export { ContactMeWrapper, SvgTitleContainer, Resized, ResizedImage, Me };
