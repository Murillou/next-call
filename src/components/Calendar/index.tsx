import { CaretLeft, CaretRight } from 'phosphor-react';
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
} from './style';

export function Calendar() {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Fevereriro <span>2025</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>

          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            <th>SEG.</th>
            <th>TER.</th>
            <th>QUA.</th>
            <th>QUI.</th>
            <th>SEX.</th>
            <th>SÁB.</th>
            <th>DOM.</th>
          </tr>
        </thead>
      </CalendarBody>
    </CalendarContainer>
  );
}
