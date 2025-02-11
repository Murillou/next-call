import { Box, styled } from '@ignite-ui/react';

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
});

export const IntervalsContainer = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
});

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },
});

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
});

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(40%)',
  },
});

export const CheckBoxInput = styled('input', {
  appearance: 'none',
  width: '24px',
  height: '24px',
  border: '2px solid $gray600',
  borderRadius: '4px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
  position: 'relative',

  '&:checked': {
    backgroundColor: '$primary',
    borderColor: '$primary',
  },

  '&:checked::after': {
    content: '"✓"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '18px',
    color: '$ignite300',
  },
});
