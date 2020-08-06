import Loadable from 'react-loadable';
import { asyncConnect } from 'redux-connect';

import { loadLayout } from 'modules/layout/action';
import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';
import { load as loadConstants } from 'modules/quote/actions/constants';
import { switchQuote, updateRequestedTripId } from 'modules/quote/actions/quoteActivities';
import { fetchDiscountOffers } from 'modules/discountEngine/action';
import { fetchPreDefinedMessages } from 'modules/pdm/action';

import { quotesLoaded } from 'modules/quote/reducers/quoteList';
import { quoteConstantsLoaded } from 'modules/quote/reducers/constants';
import { discountOffersLoaded } from 'modules/discountEngine/reducer';
import { quotePdmsLoaded } from 'modules/pdm/reducer';

const QdpAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'qdp-webview' */ './QdpAsync'),
  loading: () => null
});

const PAGE_TYPE = 'qdp';
/**
 * Every dynamic page should set dynamicLayoutInfo in redux store. Following are use cases:
 * - Inject
 * script with component in HTML.js to include js dynamically.
 *
 * @type {*[]}
 */
const asyncItems = [
  {
    promise: ({ store: { dispatch, getState }, match: { params }}) => {
      const quoteLoaded = quotesLoaded(getState());

      return quoteLoaded
        ? Promise.resolve()
        : dispatch(fetchQuotesData({ tripId: params.requestedTripId }));
    }
  },
  {
    promise: ({ store: { dispatch, getState } }) => {
      const quoteConstantLoaded = quoteConstantsLoaded(getState());

      return quoteConstantLoaded
        ? Promise.resolve()
        : dispatch(loadConstants());
    }
  },
  {
    promise: ({ store: { dispatch, getState } }) => {
      const quotePdmLoaded = quotePdmsLoaded(getState());

      return quotePdmLoaded
        ? Promise.resolve()
        : dispatch(fetchPreDefinedMessages());
    }
  },
  {
    promise: ({ store: { dispatch, getState }, match: { params }}) => {
      const discountOfferLoaded = discountOffersLoaded(getState());

      return discountOfferLoaded
        ? Promise.resolve()
        : dispatch(fetchDiscountOffers({ tripId: parseInt(params.requestedTripId, 10) }));
    }
  },
  {
    promise: ({ store: { dispatch }, match: { params }}) => {
      return dispatch(switchQuote({ quoteId: parseInt(params.quoteid, 10) }));
    }
  },
  {
    promise: ({ store: { dispatch }, match: { params }}) => {
      return dispatch(updateRequestedTripId({ tripId: parseInt(params.requestedTripId, 10) }));
    }
  }
];

const mapStateToProps = (state) => {
  const currentQuoteId = state.quote.actions.currentQuoteId,
    quotes = state.quote.list.data && state.quote.list.data.quotes,
    currentQuote = quotes[currentQuoteId],
    requestedTripId = parseInt(state.quote.actions.requestedTripId, 10) || 0;

  return {
    layout: state.layout.data,
    quotes: quotes,
    currentQuote: currentQuote,
    currentQuoteId: currentQuoteId,
    tripId: requestedTripId,
  };
};

export default asyncConnect(asyncItems, mapStateToProps, null)(QdpAsync);
