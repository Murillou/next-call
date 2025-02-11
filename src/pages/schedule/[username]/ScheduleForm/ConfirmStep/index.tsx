import { Button, Text, TextArea } from '@ignite-ui/react';
import { ConfirmForm, FormActions, FormHeader } from './styles';
import { CalendarBlank, Clock } from 'phosphor-react';
import { TextInput } from '@/pages/home/components/ClaimUsernameForm/styles';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormError } from '@/pages/register/styles';

export const confirmFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: 'O nome precisa de no mínimo 3 caracteres.' }),
  email: z.string().email({ message: 'Digite um e-mail válido.' }),
  observations: z.string().nullable(),
});

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

export function ConfirmStep() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });

  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data);
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          13 de Dezembro de 2024
        </Text>

        <Text>
          <Clock />
          13:00h
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" {...register('fullName')} />
        {errors.fullName && (
          <FormError size="sm">{errors.fullName?.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          type="email"
          placeholder="seuemail@example.com"
          {...register('email')}
        />

        {errors.email && (
          <FormError size="sm">{errors.email?.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>

        <Button disabled={isSubmitting} type="submit">
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  );
}
