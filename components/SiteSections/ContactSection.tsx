import React, { useState } from 'react';
import { SiteSection } from '../../styles/stitches/SiteSection_styles';
import {
  GithubStyled,
  LinkedinStyled,
} from '../../styles/stitches/developerIcon_styles';
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
} from '../../styles/stitches/contact_section';
import Image from 'next/image';
import { useSpring } from 'react-spring';
import { ResizableEmail } from '../../styles/stitches/reusable_styles';

const ContactSection: React.FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isGitActive, setIsGitActive] = useState<boolean>(false);
  const [isLinkedActive, setIsLinkedActive] = useState<boolean>(false);

  const ButtonAnimation = useSpring({
    backgroundColor: isActive ? 'rgb(255, 255, 255)' : 'rgb(3, 2, 1)',
    color: isActive ? 'rgb(3, 2, 1)' : 'rgb(255, 255, 255)',
  });
  const GithubAnimation = useSpring({
    transform: isGitActive ? 'translateY(-5px)' : 'translateY(0px)',
    color: isGitActive ? 'rgb(255, 255, 255)' : 'rgb(3, 2, 1)',
  });
  const LinkedinAnimation = useSpring({
    transform: isLinkedActive ? 'translateY(-5px)' : 'translateY(0px)',
    color: isLinkedActive ? 'rgb(255, 255, 255)' : 'rgb(3, 2, 1)',
  });

  const handleAnimation: Function = (key: number): void => {
    console.log('hello');
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
      <StyledForm>
        <StyledFieldset>
          <legend>
            <h2>Say hello!</h2>
          </legend>
          <InputLabelWrapper>
            <StyledLabel htmlFor="fullName">Name: </StyledLabel>
            <StyledInput
              type="text"
              name="full_name"
              id="fullName"
              placeholder="John Doe"
            />
          </InputLabelWrapper>

          <InputLabelWrapper>
            <StyledLabel htmlFor="email">Email: </StyledLabel>
            <StyledInput
              type="text"
              name="email"
              id="email"
              placeholder="email@gmail.com"
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
          onMouseEnter={() => handleAnimation(1)}
          onMouseLeave={() => handleAnimation(1)}
        >
          Send
        </StyledButton>
      </StyledForm>
      <StyledConnectWithMeWrapper>
        <h2>Lets connect</h2>
        <StyledFindMeHere>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinStyled
              style={LinkedinAnimation}
              onMouseEnter={() => handleAnimation(3)}
              onMouseLeave={() => handleAnimation(3)}
            />
          </a>
          <a
            href="https://github.com/kevinqtogitty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubStyled
              style={GithubAnimation}
              onMouseEnter={() => handleAnimation(2)}
              onMouseLeave={() => handleAnimation(2)}
            />
          </a>
          <a
            href="mailto:kevinq.to@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResizableEmail>
              <Image
                src="/email.svg"
                height={60}
                width={60}
                alt="email"
              ></Image>
            </ResizableEmail>
          </a>
        </StyledFindMeHere>
      </StyledConnectWithMeWrapper>
    </SiteSection>
  );
};

export default ContactSection;
