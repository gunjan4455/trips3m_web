import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';
import { currencyToSymbol, numberWithCommas } from '../../../utils/parsers';
import { getDiscount } from '../../../helpers/utils';

const PackagePriceComp = ({ pkg }) => (
  <div className='col-xs-6 p8'>
    <p className='f16 mt5 sfc3 fw9'>
      {`${currencyToSymbol('Rupee')}${numberWithCommas(Math.round(pkg.discounted_price))}/-`}
      <span className='priceOff f12 text-right sfcw ml8 scroll-hidecomparedata'>
        {`${getDiscount(pkg.discounted_price, pkg.total_price)}% Off`}
      </span>
    </p>
    <span className='tdl pfc4 f12 scroll-hidecomparedata'>
      {`${currencyToSymbol('Rupee')}${numberWithCommas(Math.round(pkg.total_price))}/-`}
    </span>
    <span className='pfc3 f12 block mb8'>per person</span>
  </div>
);

PackagePriceComp.propTypes = {
  pkg: PropTypes.object.isRequired,
};

export default PackagePriceComp;
