import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NearbyCard from './NearbyCard';
import { DefaultIcon } from 'helpers/Icon/Icon';

const Nearby = ({ nearbyTypeList }) => (
  <div className="">
    <h2 className="m0 mb8 fwb f16 p15">Nearby</h2>
    <NearbyCard nearbyTypeList={nearbyTypeList} />
  </div>
);

export default Nearby;

Nearby.propTypes = {
  nearbyTypeList: PropTypes.array.isRequired
};
