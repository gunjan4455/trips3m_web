import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Parser } from 'html-to-react';

import RatingStar from 'modules/shared/RatingStar';
import ModalHeaderCustom from 'modules/shared/headers/ModalHeaderCustom';
import FullWidthSlider from 'modules/shared/carousel/FullWidthSlider';
import SeeMapPopUp from 'modules/mapInformation/SeeMapPopUp/SeeMapPopUp';

const parser = new Parser();

const GContentDiv = styled.div({
  height: 'calc(100vh - 55px)',
  overflowY: 'auto'
});

const HotelOrAirportDetails = ({ info }) => {
  const images = info.images || [];
  const sliderImages = images.map(image => image.url);
  const coordinates = {
    lat: parseFloat(info.lat),
    long: parseFloat(info.long)
  };

  return (
    <div>
      <ModalHeaderCustom heading={info.name} />
      <GContentDiv>
        <div className='m15 mb0'>
          <FullWidthSlider images={sliderImages} />
        </div>
        <div className='sbcw m15 mb0'>
          <h4 className='f16 pfc3 pb8'>
            <span className='mr8'>{info.name}</span> <RatingStar rating={info.rating} />
          </h4>
          <a href='#' className='pl25'>
            <p className='sfc1'>{info.address}</p>
          </a>
          <a href='#' className='pl25'>
            <p className='sfc1'>{info.phone}</p>
          </a>
          <a href='#' className='pl25'>
            <p className='sfc1'>{info.email}</p>
          </a>
        </div>
        <div className='sbcw p15'>
          <SeeMapPopUp coordinates={coordinates} />
          {parser.parse(info.description)}
        </div>
      </GContentDiv>
    </div>
  );
};

HotelOrAirportDetails.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array
  }).isRequired
};

HotelOrAirportDetails.defaultProps = {};

export default HotelOrAirportDetails;
