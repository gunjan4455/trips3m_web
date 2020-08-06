import React from 'react';
import { connect } from 'react-redux';
import _get from 'lodash/get';

import Banner from './Banner';

const wrapper = (props) => (
  <div>
    <div className="pt24 pb24 text-center sbcw mt8 at_tripEssentialsCard">
      <h3 className="f20 fw9 pfc3 mb8">Your Trip <span className="pfc1">Essentials</span></h3>
      <p className="f14 pr24 pl24">Value Added Services for a hassle-free <br /> Travel Experience</p>
    </div>
    <Banner { ...props} />
  </div>
);

const container = connect(
state => ({
  flightsData: _get(state, 'flights.flightsData', [])
}))(wrapper);

export default container;
