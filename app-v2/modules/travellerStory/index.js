import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import { fetchTravellerStories } from './action';
import TravellerStory from './TravellerStory';

const container = withRouter(connect(
  state => ({
    travellerStories: _get(state, 'travellerStories.travellerStories', {}),
    loaded: state.travellerStories.loaded,
    errors: state.travellerStories.errors,
    from: 'blog'
  }), {
    fetchTravellerStories
  }
)(TravellerStory));

export default {
  container,
  actions: {
    fetchTravellerStories
  },
  defaultAction: fetchTravellerStories
};
