import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { currencyToSymbol, numberWithCommas } from 'helpers/parsers';

const PriceVal = ({ isSmall, priceRange, priceTitle }) => {
  const currencySymbol = currencyToSymbol(priceRange.currency || 'Rupee');
  const priceFrom = priceRange.priceFrom ? numberWithCommas(priceRange.priceFrom) : '';
  const priceTo = priceRange.priceTo ? numberWithCommas(priceRange.priceTo) : '';

  return (
    <div>
      <h6 style={ isSmall ? {fontSize: '12px'} : {fontSize: '16px', marginBottom: '8px'}} className="fw4 pfc4">{`${priceTitle}` || `Price Range`}</h6>
      <h5 style={{ fontSize: isSmall ? '16px': '16px' }} className="sfc3 m0 fw7 f20">
        {
          priceRange.priceFrom && priceRange.priceTo
            ? `${ currencySymbol } ${ priceFrom} - ${ currencySymbol } ${ priceTo }`
            : priceRange.priceFrom
            ? `Above ${ currencySymbol } ${ priceFrom}`
            : `Below ${ currencySymbol } ${ priceTo }`
        }
      </h5>
    </div>
  );
};

PriceVal.propTypes = {
  isSmall: PropTypes.bool.isRequired,
  priceRange: PropTypes.object.isRequired,
  priceTitle: PropTypes.string
};

PriceVal.defautProps = {
  priceTitle: ''
};

export default PriceVal;

