import React from 'react';
import { PropTypes } from 'prop-types';

import { GHotelRatingDiv } from '../G';
import { StarIcon, } from 'app/helpers/Icon/Icon';

const CompareHotelsSection = ({ hotels }) => {

  return (
    <div className="flexFull p15">
      {
        hotels.map((hotel) => {
          return hotel.hotelInfos.map((hotelInfo) => {
            return (
              <div className="mb24 contentList" key={`hotel_${hotelInfo.hotelId}`}>
                <p className="f14p">{hotelInfo.name}</p>
                <GHotelRatingDiv
                  className="flex alignCenter justifyCenter p2 pl15 pr15 radius2 mt8 text-center">
                  <span className="f14p mr2 at_ratingText">{hotelInfo.rating || '-'}</span>
                  <span className="icon-14">
                    <StarIcon />
                  </span>
                </GHotelRatingDiv>
              </div>
            );
          });
        })
      }
    </div>
  );
};

CompareHotelsSection.propTypes = {
  hotels: PropTypes.array.isRequired
};

export default CompareHotelsSection;
