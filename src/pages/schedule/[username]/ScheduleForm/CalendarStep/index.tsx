import { Calendar } from '@/components/Calendar';
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles';
import { Key, useState } from 'react';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query';

interface Availability {
  possibleTimes: number[];
  availableTimes: number[];
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const router = useRouter();

  const isDateSelected = !!selectedDate;
  const username = String(router.query.username);

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null;

  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null;

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null;

  const { data: availability } = useQuery({
    queryKey: ['availability', selectedDateWithoutTime],
    queryFn: async () => {
      const response = await api.get(`/users/${username}/availability`, {
        params: { date: selectedDateWithoutTime },
      });
      return response.data;
    },
    enabled: !!selectedDateWithoutTime,
  });

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            {availability?.possibleTimes?.map(
              (hour: Key | null | undefined) => {
                return (
                  <TimePickerItem
                    key={hour}
                    disabled={!availability.availableTimes.includes(hour)}
                  >
                    {String(hour).padStart(2, '0')}:00h
                  </TimePickerItem>
                );
              }
            )}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
