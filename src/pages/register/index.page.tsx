import { Button, Heading, MultiStep, Text } from '@ignite-ui/react';
import { Container, Form, Header } from './styles';
import { TextInput } from '../home/components/ClaimUsernameForm/styles';
import { ArrowRight } from 'phosphor-react';

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput placeholder="seu-usuario" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" />
        </label>

        <Button type="submit">
          Prŕoximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
}
