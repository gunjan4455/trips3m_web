import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommonDropdown from 'modules/shared/CommonDropdown';
import PriceVal from './PriceVal';

import styled from '@emotion/styled';

const GArrowDownSpan = styled.span({
  '& svg': {
    width: '10px',
    height: '6px',
  }
});

import { DownArrow } from 'helpers/Icon/Icon';

const getDefaultMonth = (month, months) => {
  const monthVal = months.filter(monthObj => monthObj.value === parseInt(month));
  return monthVal ? monthVal[0] : null;
};

const PriceRange = ({ isSmall, priceRange, months, updatePrice, month, priceTitle }) => (
  <div>
    <div className="col-xs-7 pl0">
      <PriceVal priceTitle={priceTitle} priceRange={priceRange} isSmall={false} />
    </div>
    <div className="col-xs-5 p0">
      <p className="f12 m0 pfc4">Select Month</p>
      <div className="input-dropdown-box input-dropdown-box-small mt4 mb8 at_pricemonth">
          <GArrowDownSpan className="r10 block wauto lauto input-icon absolute-center-v arr-icon">
            <DownArrow />
          </GArrowDownSpan>
        {
          months.length ?
            <CommonDropdown
              options={months}
              clickHandler={updatePrice}
              defaultOption={getDefaultMonth(month, months)}
            /> : null
        }
      </div>
    </div>
  </div>
);

PriceRange.propTypes = {
  isSmall: PropTypes.bool,
  months: PropTypes.array.isRequired,
  priceRange: PropTypes.object.isRequired,
  updatePrice: PropTypes.func.isRequired,
  month: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  priceTitle: PropTypes.string
};

PriceRange.defaultProps = {
  isSmall: false,
  priceTitle: ''
};

export default PriceRange;

