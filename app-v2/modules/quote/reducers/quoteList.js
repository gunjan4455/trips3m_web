import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from '../actions/quoteList';
import { vouchersPath } from 'helpers/urlHelpers';
import {
  BOOK_NOW_LOAD,
  BOOK_NOW_SUCCESS,
  BOOK_NOW_FAIL,
  REACTIVATE_QUOTE_LOAD,
  REACTIVATE_QUOTE_SUCCESS,
  REACTIVATE_QUOTE_FAIL,
  REJECT_QUOTE_CONFIRM_LOAD,
  REJECT_QUOTE_CONFIRM_SUCCESS,
  REJECT_QUOTE_CONFIRM_FAIL
} from '../actions/quoteActivities';
import {
  CANCEL_BOOKING_LOAD,
  CANCEL_BOOKING_LOAD_SUCCESS,
  CANCEL_BOOKING_LOAD_FAIL,
  REACTIVATE_BOOKING_LOAD,
  REACTIVATE_BOOKING_LOAD_SUCCESS,
  REACTIVATE_BOOKING_LOAD_FAIL
} from 'modules/trip/actions/tripActivities';
import { QUOTE_STATUS } from 'constants/quoteStatus';
import { TRIP_STATUS } from 'constants/tripStatus';
import { groupBy } from 'helpers/utils';

const initialState = {
  loaded: false,
  loading: false,
  data: {
    quotes: {},
  },
  bookNowSuccess: false,
  rejectQuoteSuccess: false,
  reactivateQuoteSuccess: false,
  cancelBookingSuccess: false,
  reactivateBookingSuccess: false
};

function updateQuoteStatus(state, action) {
  return {
    ...state.data.quotes,
    [action.result.data.quote.id]: {
      ...state.data.quotes[action.result.data.quote.id],
      status: action.result.data.quote.status
    }
  };
}

function getQuotesIdArray(quotes = []) {
  return quotes.map(q => q.id);
}

function getSortedQuotes(quotesObj) {
  const quotes = Object.keys(quotesObj).map(qId => quotesObj[qId]);
  const quotesStatusGroup = groupBy(quotes, 'status');
  const sortOrder = [];
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.CHOSEN]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.INVOICED]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.PAYMENT]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.CONVERTED]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.ACTIVE]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.REQUEST_CANCELLED]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.CANCELED]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.REJECTED]));
  sortOrder.push(...getQuotesIdArray(quotesStatusGroup[QUOTE_STATUS.DECLINED]));

  return sortOrder;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true
      };
    case LOAD_SUCCESS: {
      const quotes = (action.result && action.result.data && action.result.data.quotes);
      const quoteTimeRemaining = (action.result && action.result.data.quoteTimeRemaining);
      const allQuotesObj = quotes.reduce((quotesObj, quote) => ({
        ...quotesObj,
        [quote.id]: quote
      }), {});
      const sortOrder = getSortedQuotes(allQuotesObj);

      return {
        ...state,
        loading: false,
        loaded: true,
        apiFail: false,
        data: {
          quotes: allQuotesObj,
          sortOrder,
          quoteTimeRemaining
        },
        errors: null
      };
    }
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        apiFail: true,
        errors: action.error && action.error.errors
      };
    case BOOK_NOW_LOAD:
    case REJECT_QUOTE_CONFIRM_LOAD:
    case REACTIVATE_QUOTE_LOAD:
    case CANCEL_BOOKING_LOAD:
    case REACTIVATE_BOOKING_LOAD:
      return {
        ...state,
        loading: true,
        bookNowSuccess: false,
        rejectQuoteSuccess: false,
        reactivateQuoteSuccess: false,
        cancelBookingSuccess: false,
        reactivateBookingSuccess: false
      };

    case BOOK_NOW_SUCCESS: {
      const quotes = updateQuoteStatus(state, action);
      const sortOrder = getSortedQuotes(quotes);

      return {
        ...state,
        data: {
          ...state.data,
          sortOrder,
          quotes
        },
        bookNowSuccess: true,
        loading: false
      };
    }
    case REJECT_QUOTE_CONFIRM_SUCCESS: {
      const quotes = updateQuoteStatus(state, action);
      const sortOrder = getSortedQuotes(quotes);

      return {
        ...state,
        data: {
          ...state.data,
          sortOrder,
          quotes
        },
        rejectQuoteSuccess: true,
        loading: false
      };
    }
    case REACTIVATE_QUOTE_SUCCESS: {
      const quotes = updateQuoteStatus(state, action);
      const sortOrder = getSortedQuotes(quotes);
      return {
        ...state,
        data: {
          ...state.data,
          sortOrder,
          quotes
        },
        reactivateQuoteSuccess: true,
        loading: false
      };
    }
    case CANCEL_BOOKING_LOAD_SUCCESS: {
      // mark all quotes as cancelled and save the current status
      const newQuotes = Object.keys(state.data.quotes).reduce((newObj, quoteId) => ({
        ...newObj,
        [quoteId]: {
          ...state.data.quotes[quoteId],
          previousStatus: state.data.quotes[quoteId].status,
          status: QUOTE_STATUS.REQUEST_CANCELLED,
          tripStatus: TRIP_STATUS.CANCELLED,
          invoiceDownloadUrl: '',
          invoiceShowUrl: '',
        }
      }), {});

      return {
        ...state,
        data: {
          ...state.data,
          quotes: newQuotes
        },
        cancelBookingSuccess: true,
        loading: false
      };
    }
    case REACTIVATE_BOOKING_LOAD_SUCCESS: {
      // mark all quotes as cancelled and save the current status
      const newQuotes = Object.keys(state.data.quotes).reduce((newObj, quoteId) => ({
        ...newObj,
        [quoteId]: {
          ...state.data.quotes[quoteId],
          status: QUOTE_STATUS.ACTIVE,
          tripStatus: TRIP_STATUS.ACTIVE
        }
      }), {});

      return {
        ...state,
        data: {
          ...state.data,
          quotes: newQuotes
        },
        reactivateBookingSuccess: true,
        loading: false
      };
    }
    default:
      return state;
  }
}

export const getDestination = quote => {
  let destinations = '';
  try {
    destinations = quote.destinationsList.map(destination => destination.name).join(', ');
  } catch (e) {
    console.log(e);
  }

  return destinations;
};

export const getPriceInformation = (quote) => {
  if (quote && quote.pricingInfo) {
    return {
      price: quote.pricingInfo.price,
      priceInRupee: quote.pricingInfo.priceInRupee,
      currency: quote.pricingInfo.currency,
      perPerson: (quote.pricingInfo.perPersonText === 'per person')
        ? 'per person'
        : ''
    };
  }

  return {};
};

export const getDiscountInformation = (quote) => {
  return {
    discount: quote.discount,
    discountableTypeId: quote.discountableTypeId,
    discountableType: quote.discountableType
  };
};

export const getQuotesList = quotes => {
  return Object.keys(quotes).map((quoteId) => {
    const quote = quotes[quoteId];
    return {
      id: quote.id,
      status: quote.status,
      destination: getDestination(quote),
      agent: getAgentDetails(quote),
      priceInformation: getPriceInformation(quote),
      discountInformation: getDiscountInformation(quote)
    };
  });
};

export const getCurrentQuote = (state) => {
  const currentQuoteId = state.quote.actions.currentQuoteId,
    quotes = state.quote.list.data && state.quote.list.data.quotes;

  return quotes[currentQuoteId];
};

export const getAgentDetails = (quote) => {
  if (quote.agent) {
    const agent = quote.agent;
    const agentId = quote.subAccountId ? `${agent.id}_${quote.subAccountId }` : agent.id;

    return {
      id: agentId,
      name: agent.companyName,
      imageUrl: agent.profilePicture,
      star: agent.displayRating,
      tripsSold: agent.agentsConvertedTrips,
      reviewsCount: agent.reviewsCount,
      reviewLink: agent.testimonialUrl,
      email: agent.email,
      phoneNumber: agent.mobileNumber
    };
  }
  return 0;
};

export const getNavOptions = (quote) => {
  const navOptions = [];

  if (quote) {
    navOptions.push({ title: 'Itinerary', section_name: 'itinerary-sec' });
  }

  if (quote) {
    navOptions.push({ title: 'Travel Info', section_name: 'travel-info-sec' });
  }

  if (quote.hotelsDetail && quote.hotelsDetail.length || quote.hotelText) {
    navOptions.push({ title: 'Hotels', section_name: 'hotels-sec' });
  }

  if (getCabsInfo(quote)) {
    navOptions.push({ title: 'Cabs', section_name: 'cabs-sec' });
  }

  const inclusions = getInclusion(quote);
  if (inclusions && inclusions.length) {
    navOptions.push({ title: 'Inclusions', section_name: 'inclusions-sec' });
  }

  const exclusions = getExclusion(quote);
  if (exclusions && exclusions.length) {
    navOptions.push({ title: 'Exclusions', section_name: 'exclusions-sec' });
  }

  if (getFlightsInfo(quote)) {
    navOptions.push({ title: 'Flights', section_name: 'flights-sec' });
  }

  if (getAdditionalInfo(quote)) {
    navOptions.push({ title: 'Additional Info', section_name: 'additional-info-sec' });
  }

  if (getTermConditions(quote)) {
    navOptions.push({ title: 'Terms & Conditions', section_name: 'terms-conditions-sec' });
  }

  return navOptions;
};

export const getQuotesBasicInfo = quote => {
  return {
    quoteId: quote.id,
    destination: getDestination(quote),
    tripStatus: quote.tripStatus,
    downloadUrl: quote.downloadUrl,
    priceInformation: getPriceInformation(quote),
    discountInformation: getDiscountInformation(quote),
  };
};

export const getTravelInformation = (quote) => {
  if (!quote) {
    return {};
  }

  return {
    days: quote.days || 0,
    nights: quote.nights || 0,
    departureCity: quote.departureCity || '',
    adults: quote.adults || 0,
    children: quote.childs || 0,
    tripStartDate: quote.tripStartDate,
    tripEndDate: quote.tripEndDate
  };
};

export const getInclusion = (quote) => {
  const inclusionsIndex = 1;

  if (quote && quote.inclusions && quote.inclusionsText) {
    let inclusions = quote.inclusionsText;

    const data = quote.inclusions[inclusionsIndex];
    if (data && data.length) {
      inclusions = data.reduce((inclusions, inclusion) => {
        inclusions.push({
          id: inclusion.id,
          name: inclusion.name,
          category: inclusion.category,
          comments: inclusion.commentsAdded
        });
        return inclusions;
      }, []);
    }

    return inclusions;
  }

  return '';
};

export const getExclusion = (quote) => {
  const exclusionsIndex = 0;

  if (quote && quote.inclusions && quote.exclusionsText) {
    let exclusions = quote.exclusionsText;

    const data = quote.inclusions[exclusionsIndex];
    if (data && data.length) {
      exclusions = data.reduce((inclusions, inclusion) => {
        inclusions.push({
          id: inclusion.id,
          name: inclusion.name,
          category: inclusion.category,
          comments: inclusion.commentsAdded
        });
        return inclusions;
      }, []);
    }

    return exclusions;
  }
  return '';
};

export const getCabsInfo = (quote) => {
  return quote['cabsText'] || '';
};

export const getFlightsInfo = (quote) => {
  return quote['flightsText'] || '';
};

export const getAdditionalInfo = (quote) => {
  return quote['description'] || '';
};

export const getTermConditions = (quote) => {
  return quote['termsConditions'] || '';
};

export const getCurrentQuoteStatuses = (quote) => {
  const statuses = {};
  statuses.isRejected = (quote.status === QUOTE_STATUS.DECLINED);
  statuses.isInvoiced = ((quote.status === QUOTE_STATUS.INVOICED) || (quote.status === QUOTE_STATUS.PAYMENT)
    || (quote.status === QUOTE_STATUS.CONVERTED && quote.installmentInfo && !quote.installmentInfo.isAllPaymentReceived));
  statuses.isCancelled = (quote.status === QUOTE_STATUS.CANCELED);
  statuses.isRequestCancelled = (quote.tripStatus.toLowerCase() === TRIP_STATUS.CANCELLED || quote.status === QUOTE_STATUS.REQUEST_CANCELLED);
  statuses.isInvoiceRequested = (quote.status === QUOTE_STATUS.CHOSEN);
  statuses.isConverted = (quote.status === QUOTE_STATUS.CONVERTED);

  return statuses;
};

export const checkIfQuoteActiveOrChosen = (quote) => {
  return quote.status === QUOTE_STATUS.ACTIVE || quote.status === QUOTE_STATUS.CHOSEN;
};

export const getConvertedQuote = (state) => {
  const quotes = state.quote.list.data && state.quote.list.data.quotes;
  const quoteIds = Object.keys(quotes);
  const convertedQuotesId = quoteIds.filter(quoteId => quotes[quoteId].status.toLowerCase() === 'converted');

  return convertedQuotesId && convertedQuotesId.length ? quotes[convertedQuotesId[0]] : {};
};

export const getTravellerAndVouchersUrl = (quote) => {
  return {
    showVouchersUrl: !!quote.vouchers.length,
    vouchersUrl: vouchersPath(quote.id),
    travelerDetailUrl: quote.travelerDetailUrl
  };
};

export const quotesLoaded = (state) => {
  return state.quote.list.loaded || false;
};

export const quoteCtasStatus = (state) => {
  return {
    loading: state.quote.list.loading,
    bookNowSuccess: state.quote.list.bookNowSuccess,
    rejectQuoteSuccess: state.quote.list.rejectQuoteSuccess,
    reactivateQuoteSuccess: state.quote.list.reactivateQuoteSuccess,
    cancelBookingSuccess: state.quote.list.cancelBookingSuccess,
    reactivateBookingSuccess: state.quote.list.reactivateBookingSuccess
  };
};
