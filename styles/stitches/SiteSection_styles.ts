import { createStitches } from '@stitches/react';
import Image from 'next/image';
import { animated } from 'react-spring';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const SiteSection = styled('section', {
  backgroundColor: 'rgb(235, 227, 216)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1500px',

  variants: {
    variant: {
      TitleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '800px',
        width: '100%',
        '@bp1': {
          height: '70vh',
        },
        '@bp2': {
          width: '100vw',
        },
      },
      ProjectSection: {
        height: 'fit-content',
        backgroundSize: '100rem',
        flexDirection: 'column',
        width: '110vw',
      },
      AboutSection: {
        backgroundImage: 'url("/terrain.svg")',
        backgroundSize: '100rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        maxHeight: '1000px',
        width: '100%',

        '@bp1': {
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '1rem',
          height: '70vh',
        },

        '@bp2': {
          height: '120vh',
          width: '100vw',
        },
      },
      ContactSection: {
        height: '55vh',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '1rem',
        columnGap: '1rem',
        backgroundImage: 'url("/wave.jpg")',
        maxHeight: '700px',

        '@bp1': {
          height: '60vh',
          paddingTop: '5rem',

          rowGap: '1rem',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '1rem',
          alignItems: 'center',
        },

        '@bp2': {
          height: '95vh',
          width: '100vw',
        },
      },
    },
  },
});

const ProjectSection = styled('section', {
  backgroundImage: 'url("/beam.svg")',
  backgroundSize: '50rem',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  width: '95%',
  height: '100vh',
  maxHeight: '1000px',
  display: 'flex',
  flexDirection: 'row',
  wrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5rem',
  '@bp1': {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '1rem',
  },

  '@bp2': {
    alignItems: 'space-between',
    height: '120vh',
    width: '100vw',
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
  marginRight: '2rem',
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
  width: '100%',
  height: '4rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: 'rgb(255,255, 255)',
  position: 'relative',
});

const BannerFill = styled(animated('div'), {
  width: '100%',

  position: 'absolute',
  height: '4rem',
});

export {
  SiteSection,
  ProjectSection,
  ImageAnimated,
  ProjectsHeaderWrapper,
  BannerFill,
  PictureAndToolsWrapper,
};
