import { Box, styled } from '@ignite-ui/react';

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
