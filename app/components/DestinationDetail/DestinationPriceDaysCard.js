import React from 'react';
import PropTypes from 'prop-types';



const DestinationPriceDaysCard = ({ minBudget, minDays, maxDays }) => (
  <div className='row row- sbcw pt15 pb15 pl8 pr8'>
    <div className='col-xs-7 p0'>
      <p className='f12 fw3 pfc4 pb4'>Package starting from:</p>
      <p className='f24 fw9 sfc3 pb4'>₹ {minBudget}/-</p>
      <p className='f12 fw3 pfc3'>per person</p>
    </div>
    <div className='col-xs-5 p0 text-right'>
      <p className='f12 fw3 pfc4 pb8'>Recommended Stay</p>
      <p className='f12 fw9'>{minDays} Days to {maxDays} Days</p>
    </div>
  </div>
);

DestinationPriceDaysCard.propTypes = {
  minBudget: PropTypes.number.isRequired,
  minDays: PropTypes.number.isRequired,
  maxDays: PropTypes.number.isRequired

};

export default DestinationPriceDaysCard;
