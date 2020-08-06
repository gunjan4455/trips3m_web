import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import { fetchDestinationBlogs } from './action';
import DestinationBlogs from './DestinationBlogs';

const container = withRouter(connect(
  state => ({
    destinationBlogs: _get(state, 'destinationBlogs.blogs', {}),
    loaded: state.travellerStories.loaded,
    errors: state.travellerStories.errors,
  }), {
    fetchDestinationBlogs
  }
)(DestinationBlogs));

export default {
  container,
  actions: {
    fetchDestinationBlogs
  },
  defaultAction: fetchDestinationBlogs
};
