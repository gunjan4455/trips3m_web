import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Packages from '../Packages';

const container = withRouter(connect(
  state => ({
    packages: state.cityBlock.data && state.cityBlock.data.popularPackages
  }))(Packages));

export default {
  container,
};

