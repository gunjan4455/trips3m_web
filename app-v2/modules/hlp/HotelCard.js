import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { getHotelSearchUrl } from 'modules/hotel/helpers';
import HotelCardImg from './HotelCardImg';
import HotelCardRightData from './HotelCardRightData';

const GHotelCardDiv = styled.div({
  border: '1px solid #efefef',
});

const getHdpUrl = (hotel, searchParams) => {
  const { checkInDate, checkOutDate, rooms } = searchParams;
  if (hotel.isBookableB2c && checkInDate && checkOutDate) {
    const roomsData = rooms || [{ adults: 2, children: 0 }];
    return `${hotel.url}?${getHotelSearchUrl(checkInDate, checkOutDate, roomsData)}`;
  }

  return hotel.url;
};

const HotelCard = ({ item, searchParams }) => (
  <div className="clearfix">
    <Link to={getHdpUrl(item, searchParams)} className="pfc3">
      <GHotelCardDiv className="sbcw radius2">
        <div className="wfull flex p8">
          <div className="mr8"><HotelCardImg images={item.images} available={item.available} /></div>
          <HotelCardRightData hotel={item} searchParams={searchParams} />
        </div>
      </GHotelCardDiv>
    </Link>
  </div>
);

HotelCard.propTypes = {
  item: PropTypes.object,
  searchParams: PropTypes.object
};

HotelCard.defaultProps = {
  searchParams: {}
};

export default HotelCard;
