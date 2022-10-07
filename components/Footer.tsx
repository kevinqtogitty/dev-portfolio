import React from 'react';
import { styled } from '@stitches/react';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSpan>
        Made with NextJS, Stitches, Radix-UI, React-Spring & Styled-Icons
      </StyledSpan>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled('footer', {
  padding: '1rem',
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'flex-start',
  backgroundColor: 'rgb(235, 227, 216)',
});

const StyledSpan = styled('span', {
  fontSize: '1rem',
  fontFamily: 'Gruppo',
});
