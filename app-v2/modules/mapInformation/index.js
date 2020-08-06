import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { fetchMapInformationData } from './action';
import { results } from './reducer';
import MapInformation from './MapInformation';

const container = withRouter(connect(
  state => ({
    mapInformation: results(state)
  }))(MapInformation));

export default {
  container,
  actions: {
    fetchMapInformationData
  },
  defaultAction: fetchMapInformationData
};
