import React from 'react';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

const LoadableDestinationByDuration = Loadable({
  loader: () => import(/* webpackChunkName: 'destination-by-duration' */ './DestinationByDuration'),
  loading: () => null
});

const DestinationByDuration = connect(
  state => ({
    destinations : _get(state, 'destinationByDuration.data', {})
  }))(LoadableDestinationByDuration);

export default DestinationByDuration;
