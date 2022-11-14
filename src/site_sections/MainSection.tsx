import React from 'react';
import { SiteSection } from '../styles/stitches/SiteSection_styles';
import { Blob } from '../styles/stitches/blob_styles';
import { MainIntro } from '../styles/stitches/frostedGlass_styles';
import Image from 'next/image';
import { useSpring, config } from 'react-spring';
import {
  GithubStyled,
  LinkedinStyled,
} from '../styles/stitches/developerIcon_styles';
import { ResizableEmail } from '../styles/stitches/reusable_styles';
import {
  ContactMeWrapper,
  ResizedImage,
  SvgTitleContainer,
  Resized,
  Me,
} from '../styles/stitches/main_section_styles';

const MainSection: React.FC = (): JSX.Element => {
  const email: string = process.env.NEXT_PUBLIC_EMAIL!;
  const github: string = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
  const fullEmailToLink: string = `mailto:${email}`;
  const githubFullUrl: string = `https://github.com/${github}`;

  const growAnimation = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: config.molasses,
  });

  return (
    <SiteSection variant="TitleSection" id="Page1">
      <ContactMeWrapper>
        <a
          href="https://www.linkedin.com/in/kevinqto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinStyled style={{ filter: 'invert(100%)' }} />
        </a>
        <a href={githubFullUrl} target="_blank" rel="noopener noreferrer">
          <GithubStyled style={{ filter: 'invert(100%)' }} />
        </a>
        <a href={fullEmailToLink} target="_blank" rel="noopener noreferrer">
          <ResizableEmail>
            <Image
              src="/email.svg"
              style={{ filter: 'invert(100%)' }}
              height={45}
              width={45}
              alt="email"
            />
          </ResizableEmail>
        </a>
        <a
          href="/assets/documents/KevinToCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResizableEmail>
            <Image
              src="/cv.png"
              style={{ filter: 'invert(100%)' }}
              height={45}
              width={45}
              alt="CV"
            />
          </ResizableEmail>
        </a>
      </ContactMeWrapper>
      <ResizedImage>
        <Image
          height={800}
          style={{ filter: 'invert(100%)' }}
          width={800}
          src="/globe.svg"
          alt="globe"
        />
      </ResizedImage>
      <MainIntro style={{ fontFamily: 'syncopate' }}>
        Hey! I&apos;m Kevin
      </MainIntro>
      <Blob style={growAnimation} />
      <SvgTitleContainer>
        <Resized>
          <Image
            height={200}
            width={200}
            style={{ filter: 'invert(100%)' }}
            src="/corner-down-right.svg"
            alt="arrow"
          />
          <Me style={{ fontFamily: 'syncopate' }}>Frontend Developer</Me>
        </Resized>
      </SvgTitleContainer>
    </SiteSection>
  );
};

export default MainSection;
