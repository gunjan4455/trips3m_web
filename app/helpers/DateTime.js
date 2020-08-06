import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/*
* Replacing moment.months method. Dayjs do not support same API.
* */
function numberToMonth(number) {
  return months[parseInt(number, 10)];
}

function format(dateStr, formatStr) {
  return dayjs(dateStr).format(formatStr);
}

function timeFromNow(dateStr) {
  const dateObj = dayjs(dateStr);
  if (!dateObj.isValid()) {
    return '';
  }
  const fromNowTime = dayjs().to(dateObj);
  return fromNowTime;
}

/*
* Adding 1 from month as initial moment js use month from 0.
* So, if moth value is passed as 2 -> March.
* We are creating dayjs object with exact month value.
* */
function getDateOfWeek(year, month, week, formatStr) {
  return dayjs(`${year}-${month + 1}`).add(week, 'w').format(formatStr);
}

const getTravelMonth = (travelmonth) => {
  const monthsArr = ["january", "february", "march", "april", "may", "june", "july",
    "august", "september", "october", "november", "december"];
  if (travelmonth && travelmonth !== 'nd') {
    const month = travelmonth.split(',')[0].toLowerCase();
    return monthsArr.indexOf(month);
  }
  return null;
};

const getCurrentMonth = (asObj) => {
  const monthsArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  const currentDate = new Date();
  if (asObj) {
    const date = monthsArr[currentDate.getMonth()] + ', ' + currentDate.getFullYear();  //For package links with current month
    return { label: date, value: date };
  }
  return currentDate.getMonth(); //For Listing API which uses 0-based month value
};

function timeFromEndOfDay(dateStr) {
  const fromNowTime = dayjs(dateStr).endOf('day').fromNow();
  if (fromNowTime === 'Invalid date') {
    return '';
  }
  return fromNowTime;
}

function timeBefore(number, unit) {
  return dayjs().subtract(number, unit).valueOf();
}

function toTimeStamp(dateStr) {
  return dayjs(dateStr).valueOf();
}

function currentDate() {
  return dayjs().toISOString();
}

const secondsToDhms = (seconds) => {
  const days = seconds / (3600 * 24);
  const hrs = (seconds % (3600 * 24)) / 3600;
  const mins = (seconds % 3600) / 60;
  const secs = seconds % 60;
  return {
    days,
    hrs,
    mins,
    secs
  };
};

const dayDifference = (startDate, endDate, unit = 'day', float = true) => {
  const date1 = dayjs(startDate);
  const date2 = dayjs(endDate);
  return date2.diff(date1, unit, float);
};

const addDays = (date, days) => {
  return dayjs(date).add(days, 'day');
};

const isExpiredDate = (date) => dayjs(date).isBefore(dayjs());

const validateDate = (date, format) => {
  const expiredDate = isExpiredDate(date);
  return dayjs(date, format).format(format) === date && !expiredDate;
};

export {
  numberToMonth,
  format,
  timeFromNow,
  getDateOfWeek,
  getTravelMonth,
  getCurrentMonth,
  timeFromEndOfDay,
  timeBefore,
  toTimeStamp,
  currentDate,
  secondsToDhms,
  dayDifference,
  addDays,
  validateDate
};
