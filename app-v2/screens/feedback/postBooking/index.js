import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import { replaceReducer } from '../../../../server/store';

const PostBookingFeedback = Loadable({
  loader: () => import(/* webpackChunkName: 'postbooking-feedback' */ './Feedback'),
  loading: () => null,
  render(loaded, props) {
    replaceReducer(loaded.feedbackReducers);
    return (
      <loaded.default {...props} />
    );
  }
});

const PAGE_TYPE = 'feedback';

export default asyncConnect(
  [
    {
      promise: ({ store: { dispatch, getState }, match: { params }}) =>
        import('./Feedback').then(loaded => {
          replaceReducer(loaded.feedbackReducers);

          const promises = [];
          promises.push(dispatch(loaded.feedbackActions.getSecurityToken(params.requestedTripId)),);

          return Promise.all(promises).then(() => Promise.resolve());
        })
    },
  ],
  state => {
    return {};
  },
  {}
)(PostBookingFeedback);
