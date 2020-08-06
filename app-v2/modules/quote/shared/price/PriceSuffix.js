import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from "utils/parsers";

const PriceSuffix = ({ suffix }) => (
  <span className="f12 pfc4 fw4">
    {
      (suffix === 'per person') ? ' /person' : ' total'
    }
  </span>
);

PriceSuffix.propTypes = {
  suffix: PropTypes.string,
};

PriceSuffix.defaultProps = {
  suffix: '',
};

export default PriceSuffix;
