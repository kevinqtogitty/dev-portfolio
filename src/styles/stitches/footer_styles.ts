import { styled } from '@stitches/react';

const StyledFooter = styled('footer', {
  padding: '1rem',
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgb(3, 2, 1)',
  color: 'rgb(255, 255, 255)',
});

const StyledSpan = styled('span', {
  fontSize: '1rem',
  fontFamily: 'Gruppo',
  textAlign: 'center',
});

export { StyledFooter, StyledSpan };
