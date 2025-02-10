import { Button, Heading, MultiStep, Text } from '@ignite-ui/react';
import { Container, Header } from '../styles';

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>
    </Container>
  );
}
