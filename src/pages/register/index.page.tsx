import { Button, Heading, MultiStep, Text } from '@ignite-ui/react';
import { Container, Form, FormError, Header } from './styles';
import { TextInput } from '../home/components/ClaimUsernameForm/styles';
import { ArrowRight } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z//-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform(username => username.toLowerCase()),
  fullName: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  async function handleRegister(data: RegisterFormData) {
    console.log(data);
  }

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

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Nome de usuário</Text>
          <TextInput placeholder="seu-usuario" {...register('username')} />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Seu nome" {...register('fullName')} />
          {errors.fullName && (
            <FormError size="sm">{errors.fullName.message}</FormError>
          )}
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Prŕoximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
}
