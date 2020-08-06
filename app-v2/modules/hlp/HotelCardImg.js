import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import config from 'appConfig';
import { HotelEmptyState } from 'helpers/Icon/Icon';
import Img from 'components/Common/Img';

import './HotelCardImg.scss';

const GHotelImgDiv = styled.div({
  minWidth: '120px',
  maxWidth: '120px',
  height: '175px',
  '& img': {
    minHeight: '100%',
    minWidth: '100%',
    maxWidth: 'none',
  }
});

const GHotelPlaceholderDiv = styled.div({
  '& svg': {
    width: '105px',
    height: '69px',
  }
});

const HotelCardImg = ({ images, available }) => (
  <GHotelImgDiv className="relative overflowh">
    {
      images && images.length ?
        <Img
          width="120" height="172"
          src={images[0].url.mobile}
          ikSrc={images[0].url.imagekitUrl}
          alt={images[0].altText || 'Hotel Image'}
          className={`absolute-center ${available ? '' : 'soldOutHotel'}`}
        /> :
        <GHotelPlaceholderDiv className="relative sbc5 wfull hfull flex alignCenter justifyCenter">
          <HotelEmptyState />
        </GHotelPlaceholderDiv>
    }
    {
      available ? null :
        <div className="soldOutHotel absolute t0 justifyCenter alignCenter flex">
          <div className="image-wrap z1">
            <Img src={`${config.assets.images}/public-product/hotel-images/sold_out_stamp_2.png`}
                 ikSrc={`${config.assets.images}/public-product/hotel-images/sold_out_stamp_2.png`}
                 alt="No Room(s) Selected" />
          </div>
        </div>
    }
  </GHotelImgDiv>
);

HotelCardImg.propTypes = {
  images: PropTypes.array.isRequired,
  available: PropTypes.bool,
};

HotelCardImg.defaultProps = {
  available: true,
};

export default HotelCardImg;
