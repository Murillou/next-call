import { Heading, Text, styled } from '@ignite-ui/react';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$5',
  height: '100vh',
  marginLeft: 'auto',

  '@media(min-width: 768px)': {
    maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
    flexDirection: 'row',
    gap: '$20',
  },
});

export const Hero = styled('div', {
  maxWidth: 480,
  margin: '0 auto',
  padding: '2rem',

  [`${Heading}`]: {},

  [`${Text}`]: {
    color: '$gray200',
    maskType: '$2',
  },

  '@media(min-width: 768px)': {
    padding: '0 $10',
    margin: '0',
  },
});

export const Preview = styled('div', {
  display: 'none',
  '@media(min-width: 600px)': {
    paddingRight: '$8',
    display: 'block',
  },
});
