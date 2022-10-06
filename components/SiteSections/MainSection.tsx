import React, { useEffect, useState } from 'react';
import { SiteSection } from '../../styles/stitches/SiteSection_styles';
import { Blob } from '../../styles/stitches/blob_styles';
import { MainIntro, Me } from '../../styles/stitches/frostedGlass_styles';
import Image from 'next/image';
import { useSpring, config } from 'react-spring';
import {
  GithubStyled,
  LinkedinStyled,
} from '../../styles/stitches/developerIcon_styles';
import { ResizableEmail } from '../../styles/stitches/reusable_styles';
import {
  ContactMeWrapper,
  ResizedImage,
  SvgTitleContainer,
  Resized,
} from '../../styles/stitches/main_section_styles';

const MainSection = () => {
  const growAnimation = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: config.molasses,
  });

  return (
    <SiteSection variant="TitleSection" id="Page1">
      <ContactMeWrapper>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinStyled />
        </a>
        <a
          href="https://github.com/kevinqtogitty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubStyled />
        </a>
        <a
          href="mailto:kevinq.to@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResizableEmail>
            <Image src="/email.svg" height={50} width={50} alt="email"></Image>
          </ResizableEmail>
        </a>
      </ContactMeWrapper>
      <ResizedImage>
        <Image height={800} width={800} src="/globe.svg" alt="globe" />
      </ResizedImage>
      <MainIntro>Hey! I&apos;m Kevin</MainIntro>
      <Blob style={growAnimation} />
      <SvgTitleContainer>
        <Resized>
          <Image
            height={200}
            width={200}
            src="/corner-down-right (1).svg"
            alt="arrow"
          />
        </Resized>
        <Me>
          Frontend Engineer
          <br />
          Photographer
        </Me>
      </SvgTitleContainer>
    </SiteSection>
  );
};

export default MainSection;
