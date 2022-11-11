import { createStitches } from '@stitches/react';
import * as Label from '@radix-ui/react-label';
import { animated } from 'react-spring';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 810px)',
    bp2: '(max-width: 428px)',
  },
});

const StyledLabel = styled(Label.Root, {
  borderRadius: '5px',
});

const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  background: 'rgba(255, 255, 255, 0)',
  borderRadius: '16px',

  zIndex: '1',
  marginLeft: '2rem',
  alignItems: 'flex-start',

  '@bp1': {
    marginLeft: '0rem',
  },
});

const InputLabelWrapper = styled('div', {
  padding: '.5rem',
  rowGap: '.8rem',
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
});

const StyledInput = styled('input', {
  border: 'none',
  borderBottom: '2px solid black',
  width: '20rem',
  padding: '.7rem',
  fontFamily: 'Gruppo',
  fontSize: '1.3rem',
  borderRadius: '5px',
  '&:focus': {
    outline: 'none',
  },
});

const StyledTextArea = styled('textarea', {
  margin: '1rem',
  border: 'none',
  borderBottom: '2px solid black',
  fontFamily: 'Gruppo',
  fontSize: '1.3rem',
  padding: '1rem',
  height: '10rem',
  borderRadius: '6px',
  width: '90%',
  '&:focus': {
    outline: 'none',
  },

  '@bp2': {
    width: '83%',
  },
});

const StyledFieldset = styled('fieldset', {
  border: '0',
  display: 'flex',

  '@bp2': {
    flexDirection: 'column',
  },
});

const StyledFindMeHere = styled('div', {
  width: '100%',
  height: 'fit-content',
  padding: '1rem',
  display: 'flex',
  columnGap: '1rem',
  alignItems: 'center',
  '@bp1': {
    justifyContent: 'center',
    width: '100%',
    padding: '0rem',
  },
});

const StyledConnectWithMeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
});

const StyledButton = styled(animated('button'), {
  color: 'rgb(255, 255, 255)',
  borderRadius: '6px',
  border: 'none',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'cemter',
  backgroundColor: 'rgb(3, 2, 1)',
  cursor: 'pointer',
  marginLeft: '1rem',
});

export {
  StyledConnectWithMeWrapper,
  StyledFieldset,
  StyledFindMeHere,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledLabel,
  InputLabelWrapper,
  StyledButton,
};
