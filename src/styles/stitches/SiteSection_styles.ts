import { createStitches } from '@stitches/react';
import Image from 'next/image';
import { animated } from 'react-spring';

export const { styled } = createStitches({
  media: {
    bp1: '(max-width: 820px)',
    bp2: '(max-width: 428px)',
  },
});

const SiteSection = styled('section', {
  backgroundColor: 'rgb(3, 2, 1)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1440px',
  maxWidth: '1440px',
  variants: {
    variant: {
      TitleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'rgb(255, 255, 255)',

        '@bp1': {
          height: '100vh',
        },
        '@bp2': {
          width: '100%',
        },
      },
      ProjectSection: {
        position: 'relative',
        height: '100vh',
        flexDirection: 'column',
        color: 'rgb(255, 255, 255)',

        '@bp1': {
          width: '100%',
          height: 'fit-content',
          paddingTop: '5rem',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
      AboutSection: {
        backgroundSize: '100rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        backgroundColor: 'white',
        backgroundImage: 'url(/terrain.svg)',
        filter: 'invert(100%)',
        '&::before': {
          content: `' '`,
          position: 'absolute',
        },

        '@bp1': {
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '70vh',
          width: '100%',
        },

        '@bp2': {
          height: '120vh',
        },
      },
      ContactSection: {
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        columnGap: '1rem',
        backgroundImage: 'url("/wave.jpg")',
        maxHeight: '700px',
        color: 'rgb(255, 255, 255)',
        width: '100%',

        '@bp1': {
          height: '60vh',
          rowGap: '1rem',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        },

        '@bp2': {
          height: '110vh',
          width: '100vw',
          paddingLeft: '.5rem',
          paddingTop: '0rem',
          paddingRight: '0rem',
        },
      },
    },
  },
});

const ProjectSection = styled('section', {
  filter: 'invert(100%)',
  backgroundImage: 'url("/beam.svg")',
  backgroundColor: 'white',
  backgroundSize: '50rem',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  width: '90%',
  height: '100vh',
  maxHeight: '1000px',
  display: 'flex',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  '@bp1': {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100vw',
  },

  '@bp2': {
    alignItems: 'space-between',
    height: '120vh',
  },

  variants: {
    variant: {
      project2: {
        backgroundImage: 'url("/bentDonut.svg")',
        '@bp2': {
          height: '130vh',
        },
      },
      project3: {
        backgroundImage: 'url("/SINEE.svg")',
        height: '100vh',
      },
    },
  },
});

const PictureAndToolsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '-2rem',
  '@bp2': {
    marginRight: '0rem',
  },
});

const ImageAnimated = styled(Image, {
  borderRadius: '5px',

  '@bp2': {
    width: '20rem',
  },
});

const ProjectsHeaderWrapper = styled(animated('div'), {
  width: '100vw',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgb(255,255, 255)',
  position: 'absolute',
});

export {
  SiteSection,
  ProjectSection,
  ImageAnimated,
  ProjectsHeaderWrapper,
  PictureAndToolsWrapper,
};
