import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash/get';

import HotelDeals from './Deals';
import { load as fetchHotelDealsData } from './action';

const container = connect(
  state => {
    const destination = _get(state, 'hlp.data.data.city', '');
    return {
      deals: _get(state, 'hlp.data.data.hotels.hotels', []),
      destination: destination || _get(state, 'hlp.data.data.country', '')
    };
  }, {}
)(HotelDeals);

/**
 * HotelDeals Section
 */
export default {
  container,
  actions: {
    fetchHotelDealsData
  },
  defaultAction: fetchHotelDealsData
};
