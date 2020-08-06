const capitalizeEveryFirstLetter = string => {
  let separator = ' ';
  if (string.match('-')) {
    separator = '-';
  }
  return string.split(separator).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(separator);
};

const currencySymbols = {
  Rupee: '₹',
  INR: '₹',
  Dollar: '$',
  Euro: '€',
  SGD: 'S$',
  MYR: 'MYR',
  PHP: 'PHP',
  GBP: '£',
  AUD: 'A$',
  CAD: 'C$',
  SAR: 'SAR',
  LBP: 'LBP',
  ZAR: 'ZAR',
  PKR: 'PKR',
  AED: 'AED',
  CHF: 'CHF',
  JPY: 'JPY',
  NZD: 'NZ$'
};

const getPercentage = ({ price = 0, discount = 0 }) => Math.round((discount / price) * 100);

const parsePrice = ({ price, currency = 'Rupee' }) =>
  `${currencyToSymbol(currency)}${numberWithCommas(Math.round(price))}`;

const currencyToSymbol = currency => (currencySymbols[currency] || currency);

const numberWithCommas = (number) => {
  const parts = (number || '').toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const parseDestinationsToShow = (destinations = [], separater = '-') => destinations.join(separater);


const parseDestinationToShow = (destination = '') => {
  if (destination) {
    return capitalizeEveryFirstLetter(destination).replace(/-/g, ' ');
  }

  return '';
};

export {
  getPercentage,
  parsePrice,
  currencyToSymbol,
  numberWithCommas,
  capitalizeFirstLetter,
  parseDestinationsToShow,
  parseDestinationToShow
};
