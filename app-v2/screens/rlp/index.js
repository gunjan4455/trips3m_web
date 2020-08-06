import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import { replaceReducer } from '../../../server/store';
import { fetchTripConstants } from 'modules/trip/actions/tripConstants';
import { loadLayout } from 'modules/layout/action';
import  { getFlightDetails } from 'modules/flights/action';
import { showRoster } from 'modules/roster/action';
import { load as fetchQuotesData } from 'modules/quote/actions/quoteList';

const Rlp = Loadable({
  loader: () => import(/* webpackChunkName: 'rlp' */ './Rlp'),
  loading: () => null,
  render(loaded, props) {
    replaceReducer(loaded.rlpReducers);
    return (
      <loaded.default {...props} />
    );
  }
});

const PAGE_TYPE = 'rlp';

export default asyncConnect(
  [
    {
      promise: ({ store: { dispatch, getState }, match: { params }}) =>
        import('./Rlp').then(loaded => {
          replaceReducer(loaded.rlpReducers);

          const promises = [];
          promises.push(dispatch(loaded.rlpActions.updateRequestedTripId(parseInt(params.requestedTripId, 10))));
          if (!loaded.rlpActions.tripsLoaded(getState())) {
            promises.push(dispatch(loaded.rlpActions.fetchTripsData({ view: 'basic' })),);
          }
          promises.push(dispatch(loaded.rlpActions.fetchQuotesData({ tripId: params.requestedTripId })));
          promises.push(dispatch(getFlightDetails(params.requestedTripId)));

          return Promise.all(promises).then(() => Promise.resolve());
        })
    },
    {
      promise: ({ store: { dispatch }, match: { params } }) => {
        const requestedTripId = params.requestedTripId;
        return dispatch(loadLayout(PAGE_TYPE, requestedTripId));
      }
    }
  ],
  state => {
    return {
      trips: state.trip.list || {},
      currentTripId: state.trip.currentTrip.data.id,
      layout: state.layout.data,
      quotes: state.quote.list.data && state.quote.list.data.quotes,
    };
  },
  {
    fetchTripConstants,
    showRoster,
    fetchQuotesData
  }
)(Rlp);
