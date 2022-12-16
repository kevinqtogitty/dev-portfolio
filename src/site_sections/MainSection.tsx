import React from 'react';
import { SiteSection } from '../styles/stitches/SiteSection_styles';
import { Blob } from '../styles/stitches/blob_styles';
import { MainIntro } from '../styles/stitches/frostedGlass_styles';
import Image from 'next/image';
import { useSpring, config } from 'react-spring';
import {
  ResizedImage,
  SvgTitleContainer,
  Resized,
  Me,
} from '../styles/stitches/main_section_styles';
import { styled } from '@stitches/react';

const MainSection: React.FC = (): JSX.Element => {
  const growAnimation = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: config.molasses,
  });

  return (
    <SiteSection variant="TitleSection" id="Page1">
      <ResizedImage className="globe">
        <ImageStyled height={750} width={750} src="/globe.svg" alt="globe" />
      </ResizedImage>
      <MainIntro>Hey! I&apos;m Kevin</MainIntro>
      <Blob style={growAnimation} />
      <SvgTitleContainer>
        <Resized>
          <ImageStyled
            height={200}
            width={200}
            src="/corner-down-right.svg"
            alt="arrow"
          />
          <Me>Frontend Developer</Me>
        </Resized>
      </SvgTitleContainer>
    </SiteSection>
  );
};

export default MainSection;

const ImageStyled = styled(Image, {
  filter: 'invert(100%)',

  '&.globe': {
    position: 'absolute',
    top: '10rem',
  },
});
