import React from 'react';
import PropTypes from 'prop-types';
import '../ComparePackages.scss';
import StarRatings from '../../../components/Review/StarRatings';


const HotelComp = ({ hotel }) => {
  if (Object.keys(hotel).length === 0) {
    return (
      <div className='col-xs-6 p5 borderRightB'>
        <div>Not Applicable</div>
      </div>
    );
  }

  if (hotel.hotel_present) {
    return (
      <div className='col-xs-6 p5'>
        <h6 className='f14 fw9 pfc3'>{hotel.name}</h6>
        <div className='block fleft clear'>
          <StarRatings id={hotel.id} rating={hotel.category} />
        </div>
      </div>
    );
  }

  return (
    <div className='col-xs-6 p5 borderRightB'>
      <div>Not Included</div>
    </div>
  );
};

HotelComp.propTypes = {
  hotel: PropTypes.object.isRequired
};


export default HotelComp;
