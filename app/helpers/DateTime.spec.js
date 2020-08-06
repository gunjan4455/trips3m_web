import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

import {
  numberToMonth,
  format,
  timeFromNow,
  getDateOfWeek,
} from './DateTime';

test('Get month name January for 0 number passed', () => {
  expect(numberToMonth(0)).toBe('January');
});

test('Get date object from date stirng in format passed', () => {
  expect(format('2018-01-12', 'DD-MM-YYYY')).toBe('12-01-2018');
});

test('Get time from now for a date string passed', () => {
  const fromNow = timeFromNow(dayjs().subtract(5, 'm'));
  const expectedOutput = ['6 minutes ago', '5 minutes ago'];
  expect(expectedOutput).toContain(fromNow);
});

test('Get time from now as empty string for a invalid parameter passed', () => {
  expect(timeFromNow('asdfasdf')).toBe('');
});

/*
* Adding 1 from month as initial moment js use month from 0.
* So, if moth value is passed as 2 -> March.
* We are creating dayjs object with exact month value.
* */
test('Get first date of week of passed year month and week in format provided', () => {
  expect(getDateOfWeek(2018, 3, 3, 'YYYY-MM-DD')).toBe('2018-04-22');
});

