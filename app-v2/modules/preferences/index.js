import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { goBack } from 'react-router-redux';

import Preferences from './Preferences';
import { updatePreferences } from './action';

const container = withRouter(connect(
  state => ({
    currentTripId: state.trip.currentTrip.data.id,
    preferences: state.trip.preferences.preferenceOptions,
    updated: state.trip.preferences.updated,
    errors: state.trip.preferences.errors
  }),
  {
    goBack,
    updatePreferences,
  }
)(Preferences));

/**
 * Preference Section
 */
export default {
  container,
  actions: {
    updatePreferences,
  }
};
