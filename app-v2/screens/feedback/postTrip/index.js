import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import { replaceReducer } from '../../../../server/store';

const PostTripFeedback = Loadable({
  loader: () => import(/* webpackChunkName: 'posttrip-feedback' */ './Feedback'),
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
      promise: ({ store: { dispatch, getState }, params }) =>
        import('./Feedback').then(loaded => {
          replaceReducer(loaded.feedbackReducers);
        })
    },
  ],
  state => {
    return {};
  },
  {}
)(PostTripFeedback);
