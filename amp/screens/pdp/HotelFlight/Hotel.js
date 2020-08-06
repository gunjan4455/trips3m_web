import React from 'react';
import PropTypes from 'prop-types';

import HotelCard from './HotelCard';

import './Hotel.scss';

const Hotel = ({ list }) => {
  const hotelElements = list
    .filter(h => h.pictures.length)
    .map((h, index) => {
      const images = {
        imageUrl: h.pictures[0].picture_details.picture,
        imagekitUrl: h.pictures[0].picture_details.imagekit_url
      };

      return (
        <div key={index}>
          <div className="row row-">
            <p className="f16 fw9 pfc1 relative iblock mr8">{h.header}</p>
          </div>
          <div className="row row- pt15" id="hotel_box-triggerlink">
            <HotelCard
              details={h}
              images={images}
              index={index}
            />
          </div>
        </div>
      );
    });

  return (
    <div className="row row-">
      <amp-carousel width="400"
                    height="390"
                    layout="responsive"
                    type="slides"
      >
        {hotelElements}
      </amp-carousel>
    </div>
  );
};

Hotel.propTypes = {
  list: PropTypes.array
};

Hotel.defaultProps = {
  list: []
};

export default Hotel;
