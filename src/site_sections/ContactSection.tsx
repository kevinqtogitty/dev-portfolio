import React, { useState } from 'react';
import { SiteSection } from '../styles/stitches/SiteSection_styles';
import {
  GithubStyled,
  LinkedinStyled,
} from '../styles/stitches/developerIcon_styles';
import {
  StyledForm,
  StyledFieldset,
  InputLabelWrapper,
  StyledLabel,
  StyledInput,
  StyledTextArea,
  StyledConnectWithMeWrapper,
  StyledFindMeHere,
  StyledButton,
  StyledH2,
} from '../styles/stitches/contact_section';
import { useSpring } from 'react-spring';

const ContactSection: React.FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isGitActive, setIsGitActive] = useState<boolean>(false);
  const [isLinkedActive, setIsLinkedActive] = useState<boolean>(false);

  const email: string = process.env.NEXT_PUBLIC_EMAIL!;
  const github: string = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;

  const githubFullUrl: string = `https://github.com/${github}`;
  const formsubmitLink: string = `https://formsubmit.co/${email}`;
  const fullLinkedInLink: string = `https://www.linkedin.com/in/kevinqto/`;

  const ButtonAnimation = useSpring({
    backgroundColor: isActive ? 'rgb(255, 255, 255)' : 'rgb(3, 2, 1)',
    color: isActive ? 'rgb(3, 2, 1)' : 'rgb(255, 255, 255)',
  });
  const GithubAnimation = useSpring({
    transform: isGitActive ? 'translateY(-5px)' : 'translateY(0px)',
  });
  const LinkedinAnimation = useSpring({
    transform: isLinkedActive ? 'translateY(-5px)' : 'translateY(0px)',
  });

  const handleAnimation: Function = (key: number): void => {
    switch (key) {
      case 1:
        setIsActive((state) => !state);
        break;
      case 2:
        setIsGitActive((state) => !state);
        break;
      case 3:
        setIsLinkedActive((state) => !state);
        break;
      default:
        break;
    }
  };

  return (
    <SiteSection id="Page4" variant="ContactSection">
      <StyledH2>Say hello!</StyledH2>
      <StyledForm action={formsubmitLink} method="POST">
        <StyledFieldset>
          <InputLabelWrapper>
            <StyledLabel htmlFor="fullName">Name: </StyledLabel>
            <StyledInput
              type="text"
              name="full_name"
              id="fullName"
              placeholder="John Doe"
              required
            />
          </InputLabelWrapper>

          <InputLabelWrapper>
            <StyledLabel htmlFor="email">Email: </StyledLabel>
            <StyledInput
              type="text"
              name="email"
              id="email"
              placeholder="email@gmail.com"
              required
            />
          </InputLabelWrapper>
        </StyledFieldset>
        <StyledLabel htmlFor="message" />
        <StyledTextArea
          name="your_message"
          id="message"
          placeholder="Hey Kev!"
        />
        <StyledButton
          style={ButtonAnimation}
          type="submit"
          onMouseEnter={() => handleAnimation(1)}
          onMouseLeave={() => handleAnimation(1)}
        >
          Send
        </StyledButton>
        <input type="hidden" name="_subject" value="Someone wants to talk!" />
        <input type="hidden" name="_template" value="basic" />
      </StyledForm>
      <StyledConnectWithMeWrapper>
        <StyledH2>Let&apos;s connect</StyledH2>
        <StyledFindMeHere>
          <a href={fullLinkedInLink} target="_blank" rel="noopener noreferrer">
            <LinkedinStyled
              style={LinkedinAnimation}
              onMouseEnter={() => handleAnimation(3)}
              onMouseLeave={() => handleAnimation(3)}
            />
          </a>
          <a href={githubFullUrl} target="_blank" rel="noopener noreferrer">
            <GithubStyled
              style={GithubAnimation}
              onMouseEnter={() => handleAnimation(2)}
              onMouseLeave={() => handleAnimation(2)}
            />
          </a>
        </StyledFindMeHere>
      </StyledConnectWithMeWrapper>
    </SiteSection>
  );
};

export default ContactSection;
