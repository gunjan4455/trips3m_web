import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _get from 'lodash/get';

import { fetchBannerData } from './action';
import Banner from './Banner';

const container = withRouter(connect(
  state => ({
    banner: _get(state, 'banner.data.banner', {}) // Cityblock data banner
  }))(Banner));

const hlpContainer = withRouter(connect(
  state => ({
    banner: _get(state, 'hlp.data.data.banner', {}) // HLP data banner
  }))(Banner));

export default {
  container,
  hlpContainer,
  actions: {
    fetchBannerData
  },
  defaultAction: fetchBannerData
};
