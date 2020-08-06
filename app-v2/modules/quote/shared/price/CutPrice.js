import React from 'react';
import PropTypes from 'prop-types';

import { parsePrice } from "utils/parsers";

const CutPrice = ({ price, currency }) => (
  <span className="tdl f12">{parsePrice({ price, currency })}</span>
);

CutPrice.propTypes = {
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

CutPrice.defaultProps = {
  perPerson: '',
};

export default CutPrice;
