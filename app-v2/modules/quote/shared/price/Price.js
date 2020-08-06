import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from "utils/parsers";

const Price = ({ price, currency }) => (
  <span className="sfc3 f18 fw7 m0 flexFull text-left at_price">{parsePrice({ price, currency })}</span>
);

Price.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

Price.defaultProps = {};

export default Price;
