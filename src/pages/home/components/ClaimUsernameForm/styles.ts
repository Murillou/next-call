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

  [`> ${Text}`]: {
    color: '$gray400',
  },
});
