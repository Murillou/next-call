import { Button, Text, TextArea } from '@ignite-ui/react';
import { ConfirmForm, FormActions, FormHeader } from './styles';
import { CalendarBlank, Clock } from 'phosphor-react';
import { TextInput } from '@/pages/home/components/ClaimUsernameForm/styles';

export function ConfirmStep() {
  function handleConfirmScheduling() {}

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
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
        <TextInput placeholder="Seu nome"></TextInput>
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="seuemail@example.com"></TextInput>
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>

        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  );
}
