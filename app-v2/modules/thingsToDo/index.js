import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchThingsToDoData } from './action';
import ThingsToDo from './ThingsToDo';
import { results } from './reducer';

const container = withRouter(connect(
  state => ({
    data: results(state),
    loaded: state.thingsToDo.loaded,
    errors: state.thingsToDo.errors
  }),
  {
    fetchThingsToDoData
  }
)(ThingsToDo));

/**
 * ThingsToDo Section
 */
export default {
  container,
  actions: {
    fetchThingsToDoData
  },
  defaultAction: fetchThingsToDoData
};
