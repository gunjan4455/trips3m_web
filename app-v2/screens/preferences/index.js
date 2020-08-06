import React from 'react';
import Loadable from 'react-loadable';
import { asyncConnect } from 'redux-connect';

import { fetchPreferenceOptions } from 'modules/preferences/action';
import { updateRequestedTripId } from 'modules/trip/actions/currentTrip';
import { replaceReducer } from '../../../server/store';

const PreferencesAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'Itinerary' */ './PreferencesAsync'),
  loading: () => null,
  render(loaded, props) {
    replaceReducer(loaded.preferenceReducers);
    return (
      <loaded.default {...props} />
    );
  }
});

/**
 * Every dynamic page should set dynamicLayoutInfo in redux store. Following are use cases:
 * - Inject script with component in HTML.js to include js dynamically.
 *
 * @type {*[]}
 */
const asyncItems = [
  {
    promise: ({ store: { dispatch, getState }, match: { params }}) =>
      import('./PreferencesAsync').then(loaded => {
        replaceReducer(loaded.preferenceReducers);

        return Promise.all([
          dispatch(updateRequestedTripId(parseInt(params.requestedTripId, 10))),
          dispatch(fetchPreferenceOptions({ requestedTripId: parseInt(params.requestedTripId, 10) }))
        ]).then(() => Promise.resolve());
      })
  }
];

const mapStateToProps = (state) => {

  return {
    currentTripId: '4980771',
  };
};

export default asyncConnect(asyncItems, mapStateToProps, null)(PreferencesAsync);
