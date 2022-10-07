import React from 'react';
import { StyledFooter, StyledSpan } from '../styles/stitches/footer_styles';

const Footer: React.FC = (): JSX.Element => {
  return (
    <StyledFooter>
      <StyledSpan>
        Made with NextJS, Stitches, Radix-UI, React-Spring & Styled-Icons
      </StyledSpan>
    </StyledFooter>
  );
};

export default Footer;
