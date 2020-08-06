import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import { replaceReducer } from '../../../server/store';

const AllTripsAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'all-trips' */ './AllTripsAsync'),
  loading: () => null,
});

export default asyncConnect([
  {
    promise: ({ store: { dispatch, getState } }) =>
      import('./AllTripsAsync').then(loaded => {
        replaceReducer(loaded.rlpReducers);

        const promises = [];
        if (!loaded.tripAction.tripsLoaded(getState())) {
          promises.push(dispatch(loaded.tripAction.fetchTripsData({ view: 'basic' })),);
        }

        return Promise.all(promises).then(() => Promise.resolve());
      })
  },
])(AllTripsAsync);
