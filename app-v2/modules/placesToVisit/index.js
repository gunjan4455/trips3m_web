import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchPlacesToVisitData } from './action';
import { results } from './reducer';
import PlacesToVisit from './PlacesToVisit';

const container = withRouter(connect(
  state => ({
    data: results(state),
    loaded: state.placesToVisit.loaded,
    errors: state.placesToVisit.errors
  }),
  {
    fetchPlacesToVisitData
  }
)(PlacesToVisit));

/**
 * PlacesToVisit Section
 */
export default {
  container,
  actions: {
    fetchPlacesToVisitData
  },
  defaultAction: fetchPlacesToVisitData
};
