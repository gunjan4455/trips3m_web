import dayjs from 'dayjs';

export const required = value => (value ? undefined : 'required');

export const validDate = format => value => {
  const result = (
    (value && dayjs(value, format, true).isValid())
      ? undefined
      : 'Invalid Date'
  );
  console.log(`value: ${value}: format: ${format}: result: ${result}`);
  return result;
};

export const validDateInternalFormat = value => {
  const result = (
    (value && dayjs(value, 'YYYY-MM-DD', true).isValid()) ? undefined : 'Invalid Date'
  );
  console.log(`value: ${value}: -- : result: ${result}`);
  return result;
};

export const email = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid Email';
  }
  return undefined;
};

export const number = value => (
  value && (`${value}` === `${parseInt(value, 10)}`)
  ? undefined
  : 'not valid'
);
// should be a number and number of digits between 6 and 15
export const phoneNumber = (value) => {
  if (!value) {
    return undefined;
  }
  if ((`${value}` === `${parseInt(value, 10)}`) &&
    value.length >= 5 &&
    value.length <= 15
  ) {
    return undefined;
  }
  return 'Phone number not valid';
};

// Works for only two fields. We will expand this if we find any use case
export const matchFields = (validateFields = []) => (value, fields) => (fields[validateFields[0]] === fields[validateFields[1]] ? undefined : 'Passwords did not match');

export const minLength = len => value => value.toString().length >= len ? undefined : `Must be atleast ${len} characters length`;

export const minSixChars = minLength(6);

export const requiredWithmessage = message => value => (value ? undefined : message);

export const phoneNumberRequired = (value) => {
  if (!value) {
    return 'Phone number is required';
  }
  if ((`${value}` === `${parseInt(value, 10)}`) &&
    value.length >= 5 &&
    value.length <= 15
  ) {
    return undefined;
  }
  return 'Phone number not valid';
};
