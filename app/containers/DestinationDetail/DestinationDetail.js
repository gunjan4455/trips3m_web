import React from 'react';
import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';

import * as destinationDetailActions from '../../actions/destinationDetail';
import { getActiveTab, setActiveDetailsTab } from '../../reducers/destinationDetail';

const DestinationDetailAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'destination-detail' */ './DestinationDetailAsync'),
  loading: () => null,
});

export default asyncConnect(
  [
    { promise: () => import('./DestinationDetailAsync') },
    {
      promise: ({ store: { dispatch }, match: { params: { destination } }}) => dispatch(
        destinationDetailActions.loadDestinationDetail(parseInt(destination, 10))
      )
    }
  ],
  state => ({
    destinationDetail: state.destinationDetail.data,
    activeTab: getActiveTab(state)
  }),
  dispatch => ({
    setActiveDetailsTab: params => dispatch(setActiveDetailsTab(params)),
  }))(DestinationDetailAsync);
