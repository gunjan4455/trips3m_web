import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { DiamondIcon } from 'helpers/Icon/Icon.js';

import styles from './propertyType.cm.scss';

const PropertyType = ({ luxury, budget }) => (
  <ul className="block">
    {
      luxury ?
        <li className={`flex alignCenter mr4 ${styles.pLabel} ${styles.luxury}`}>
          <span className="icon-14 mr5">
            <DiamondIcon />
          </span>
          <span>Top Rated Luxury Property</span>
        </li> : budget ?
        <li className={`flex alignCenter mr4 ${styles.pLabel}`}>
          <span className="icon-14 mr5">
            <DiamondIcon />
          </span>
          <span>Top Rated Budget Property</span>
        </li> : null
    }
  </ul>
);

PropertyType.propTypes = {
  luxury: PropTypes.bool,
  budget: PropTypes.bool
};

PropertyType.defaultProps = {
  luxury: true,
  budget: false
};

export default PropertyType;
