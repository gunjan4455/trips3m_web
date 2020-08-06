import React from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel';
import './DestinationHotel.scss';


const DestinationHotel = ({ hotelDetails }) => {
  const hotels = hotelDetails.map((hotelDetail) => {
    const cityName = hotelDetail.city_name;
    const image = hotelDetail.hotel_details[0].picture_url;
    const imagekitUrl = hotelDetail.hotel_details[0].imagekit_url;
    const name = hotelDetail.hotel_details[0].name;
    const id = hotelDetail.id;
    const rating = hotelDetail.category || undefined;
    return (
      <Hotel cityName={cityName} image={image} imagekitUrl={imagekitUrl} name={name} rating={rating} id={id} />
    );
  });
  return (
    <div className='row row-8 detail-hotel-slider'>
      <div className='detail-hotel-slider-box'>
        {hotels}
      </div>
    </div>
  );
};

DestinationHotel.propTypes = {
  hotelDetails: PropTypes.array.isRequired
};


export default DestinationHotel;
