import React from 'react';
import { AnimatedLink, MenuLink } from '../styles/stitches/navigation_styles';
import { createStitches } from '@stitches/react';
import {
  LinkedinStyled,
  GithubStyled,
} from '../styles/stitches/developerIcon_styles';
import { ContactMeWrapper } from '../styles/stitches/main_section_styles';
import Image from 'next/image';

const NavigationBar: React.FC = (): JSX.Element => {
  const email: string = process.env.NEXT_PUBLIC_EMAIL!;
  const github: string = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
  const fullEmailToLink: string = `mailto:${email}`;
  const githubFullUrl: string = `https://github.com/${github}`;

  return (
    <NavBar>
      <ContactMeWrapper>
        <a
          href="https://www.linkedin.com/in/kevinqto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinStyled />
        </a>
        <a href={githubFullUrl} target="_blank" rel="noopener noreferrer">
          <GithubStyled />
        </a>
        <a
          href={fullEmailToLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <MenuLink>Email</MenuLink>
        </a>
        <a
          href="/assets/documents/KevinToResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <MenuLink>Resume</MenuLink>
        </a>
      </ContactMeWrapper>
      <MenuLinksWrapper>
        <AnimatedLink
          to="Page1"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </AnimatedLink>
        <AnimatedLink
          to="Page2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About
        </AnimatedLink>
        <AnimatedLink
          to="Page3"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Projects
        </AnimatedLink>
        <AnimatedLink
          to="Page4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact
        </AnimatedLink>
      </MenuLinksWrapper>
    </NavBar>
  );
};

export default NavigationBar;

export const { styled, css } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const NavBar = styled('nav', {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '2rem',
  top: '0rem',
  right: '0rem',
  zIndex: 3,
  backdropFilter: 'blur(2px)',
  columnGap: '2rem',
  backgroundColor: 'rgba(3, 2, 1, .8)',
  borderBottom: '.5px solid grey',
  paddingTop: '1rem',
  paddingBottom: '1rem',
  '@bp1': {
    justifyContent: 'center',
  },
});

const MenuLinksWrapper = styled('div', {
  display: 'flex',
  columnGap: '1rem',
  alignItems: 'center',
  marginRight: '1rem',
  '@bp1': {
    marginRight: '0rem',
  },
});

const ImageStyled = styled(Image, {
  filter: 'invert(100%)',
  transition: '300ms ease-in-out',

  '&:hover': {
    fill: 'hotpink',
  },
});
