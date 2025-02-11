import { Button, Checkbox, Heading, MultiStep, Text } from '@ignite-ui/react';
import { Container, Header } from '../styles';
import {
  CheckBoxInput,
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
  IntervalsContainer,
} from './styles';
import { TextInput } from '@/pages/home/components/ClaimUsernameForm/styles';
import { ArrowRight } from 'phosphor-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { getWeekDays } from '@/utils/get-week-days';

const timeIntervalsSetSchema = z.object({});

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '09:00', endTime: '17:00' },
        { weekDay: 1, enabled: true, startTime: '09:00', endTime: '17:00' },
        { weekDay: 2, enabled: true, startTime: '09:00', endTime: '17:00' },
        { weekDay: 3, enabled: true, startTime: '09:00', endTime: '17:00' },
        { weekDay: 4, enabled: true, startTime: '09:00', endTime: '17:00' },
        { weekDay: 5, enabled: true, startTime: '09:00', endTime: '17:00' },
        { weekDay: 6, enabled: false, startTime: '09:00', endTime: '17:00' },
      ],
    },
  });

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  });

  const weekDays = getWeekDays();

  const intervals = watch('intervals');

  async function handleSetTimeIntervals() {}

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

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalsContainer>
          {fields.map((field, index) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <CheckBoxInput
                          type="checkbox"
                          onChange={(checked: boolean) =>
                            field.onChange(checked)
                          }
                          checked={field.value}
                        />
                      );
                    }}
                  />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>

                <IntervalInputs>
                  <TextInput
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.startTime`)}
                  />
                  <TextInput
                    type="time"
                    step={60}
                    disabled={intervals[index].enabled === false}
                    {...register(`intervals.${index}.endTime`)}
                  />
                </IntervalInputs>
              </IntervalItem>
            );
          })}
        </IntervalsContainer>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  );
}
