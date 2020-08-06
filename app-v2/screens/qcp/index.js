import Loadable from 'react-loadable';
import { asyncConnect } from 'redux-connect';
import { goBack } from 'react-router-redux';
import _get from 'lodash/get';

import { quotesLoaded } from 'modules/quote/reducers/quoteList';
import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';

const QcpAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'compare-quotes' */ './QcpAsync'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: ({ store: { dispatch, getState }, match: { params } }) => {
        const quoteLoaded = quotesLoaded(getState());

        return quoteLoaded
          ? Promise.resolve()
          : dispatch(fetchQuotesData({ tripId: params.requestedTripId }));
      }
    },
  ],
  (state) => ({
    quotes: _get(state, 'quote.list.data.quotes', {}),
  }),
  { goBack }
)(QcpAsync);

