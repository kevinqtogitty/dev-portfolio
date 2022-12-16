import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const ResizedImage = styled('div', {
  position: 'absolute',
  top: '4rem',
  right: '3rem',

  '@bp1': {
    right: '0rem',
    top: '-6rem',
  },

  '@bp2': {
    top: '27rem',
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
  fontFamily: 'syncopate',
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
  bottom: '7rem',
  '@bp1': {
    top: '37rem',
    left: '5rem',
  },
  '@bp2': {
    top: '23.5rem',
    left: '1rem',
  },
});

const ContactMeWrapper = styled('div', {
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'row',
  columnGap: '1rem',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginLeft: '1rem',
  top: '0rem',
  '& a': {
    cursor: 'pointer',
  },

  '@bp1': {
    left: '0rem',
    display: 'none',
  },
});

const DownloadLink = styled('a', {
  color: '#000',
  textDecoration: 'none',
  position: 'absolute',
  left: '3rem',
  bottom: '.5rem',

  '@bp2': {
    left: '1rem',
    bottom: '-2rem',
  },
});

export {
  ContactMeWrapper,
  SvgTitleContainer,
  Resized,
  ResizedImage,
  Me,
  DownloadLink,
};
