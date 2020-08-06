import { QUOTE_STATUS } from 'constants/quoteStatus';

export const quoteStatusClasses = (status) => {
  let statusClassNames = 'quotesStatus';

  switch (status) {
    case QUOTE_STATUS.CONVERTED: {
      statusClassNames += ' convertedQuote sbc1';
      break;
    }
    case QUOTE_STATUS.CHOSEN:
    case QUOTE_STATUS.INVOICED:
    case QUOTE_STATUS.ACTIVE: {
      statusClassNames += ' activeQuote sbc3';
      break;
    }
    case QUOTE_STATUS.DECLINED: {
      statusClassNames += ' rejectedQuote';
      break;
    }
    case QUOTE_STATUS.CANCELED: {
      statusClassNames += ' cancelledQuote';
      break;
    }
    default: {
      statusClassNames += '';
    }
  }

  return statusClassNames;
};

export const quoteStatusText = (text) => {
  switch (text) {
    case QUOTE_STATUS.PAYMENT:
    case QUOTE_STATUS.CONVERTED:
      text = 'Booked';
      break;
    case QUOTE_STATUS.CANCELED:
    case QUOTE_STATUS.DECLINED:
      text = 'Rejected';
      break;
    case QUOTE_STATUS.CHOSEN:
      text = 'Invoice Awaited';
      break;
    case QUOTE_STATUS.INVOICED:
      text = 'Invoice Generated';
      break;
    case QUOTE_STATUS.ACTIVE:
      text = 'Active';
      break;
  }

  return text;
};

// show status in quote box for below cases only
export const statusToShow = [QUOTE_STATUS.PAYMENT, QUOTE_STATUS.CONVERTED, QUOTE_STATUS.CANCELED, QUOTE_STATUS.DECLINED,
  QUOTE_STATUS.CHOSEN, QUOTE_STATUS.INVOICED, QUOTE_STATUS.ACTIVE];

export const showStatusRibbon = (status) => {
  return statusToShow.indexOf(status.toString()) > -1;
};
