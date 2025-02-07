import { Box, styled, Text } from '@ignite-ui/react';

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$4',
  marginTop: '$4',
  padding: '$4',

  '@media(min-width: 768px)': {
    gridTemplateColumns: '1fr auto',
  },
});

export const FormAnnotation = styled('div', {
  marginTop: '$2',
  [`>${Text}`]: {
    fontSize: '$lg',
  },

  '@media(min-width: 768px)': {
    [`>${Text}`]: {
      fontSize: '$sm',
    },
  },
});

export const TextInput = styled('input', {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid transparent',
  backgroundColor: '$gray900',
  fontSize: '1rem',
  width: '100%',
  color: '$white',

  variants: {
    hasError: {
      true: {
        borderColor: '#ec5353',
      },
      false: {
        borderColor: '$gray500',
      },
    },
  },
});
