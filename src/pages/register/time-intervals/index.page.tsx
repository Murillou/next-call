import { Button, Heading, MultiStep, Text } from '@ignite-ui/react';
import { Container, FormError, Header } from '../styles';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { converTimeStringToMinutes } from '@/utils/convert-time-string-to-minutes';
import { api } from '@/lib/axios';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

const timeIntervalsSchema = z.object({
  intervals: z
    .array(
      z.object({
        weekDay: z.number().min(0).max(6),
        enabled: z.boolean(),
        startTime: z.string(),
        endTime: z.string(),
      })
    )
    .length(7)
    .transform(intervals => intervals.filter(interval => interval.enabled))
    .refine(intervals => intervals.length > 0, {
      message: 'Você precisa selecionar pelo menos um dia da semana.',
    })
    .transform(intervals => {
      return intervals.map(interval => {
        return {
          weekDay: interval.weekDay,
          startTimeInMinutes: converTimeStringToMinutes(interval.startTime),
          endTimeInMinutes: converTimeStringToMinutes(interval.endTime),
        };
      });
    })
    .refine(
      intervals => {
        return intervals.every(
          interval =>
            interval.endTimeInMinutes - 60 >= interval.startTimeInMinutes
        );
      },
      {
        message:
          'O horário de término tem que ser pelo menos 1h distante do início.',
      }
    ),
});

type TimeIntervalFormInput = z.input<typeof timeIntervalsSchema>;
type TimeIntervalsFormOutput = z.output<typeof timeIntervalsSchema>;

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, errors },
  } = useForm<TimeIntervalFormInput>({
    resolver: zodResolver(timeIntervalsSchema),
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

  const router = useRouter();

  async function handleSetTimeIntervals(data: any) {
    const { intervals } = data as TimeIntervalsFormOutput;

    await api.post('/users/time-intervals', { intervals });

    await router.push('/register/update-profile');
  }

  return (
    <>
      <NextSeo title="Selecione sua disponibilidade | Next Call " noindex />
      <Container>
        <Header>
          <Heading as="strong">Quase lá</Heading>
          <Text>
            Defina o intervalo de horários que você está disponível em cada dia
            da semana.
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

          {errors.intervals?.root?.message && (
            <FormError>{errors.intervals.root?.message}</FormError>
          )}

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo <ArrowRight />
          </Button>
        </IntervalBox>
      </Container>
    </>
  );
}
