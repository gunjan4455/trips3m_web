import React from 'react';
import { PropTypes } from 'prop-types';
import styled from '@emotion/styled';

import OverAllRating from 'modules/shared/OverAllRating';
import RatingStar from 'modules/shared/RatingStar';
import SeeMapPopUp from 'modules/mapInformation/SeeMapPopUp/SeeMapPopUp';

const GMapContainerDiv = styled.div({
  height: '400px',
  '& iframe': {
    width: '100%',
    height: '100%',
  },
});

const GMapHotelNameDiv = styled.div({
  '& h6': {
    '&:hover': {
      color: '#009688',
    },
  },
});

const MapPopup = ({ hotel }) => (
  <div className="flex sbcw p15 flexDColumn">
    <div className="flex spaceBetween mb15">
      <div>
        <GMapHotelNameDiv className="flex mb5 alignCenter">
          <h6 className="m0 f16 fw7 cursorP mr15">{hotel.name}</h6>
          <RatingStar rating={hotel.starRating}/>
        </GMapHotelNameDiv>
        <p className="m0 f12">{hotel.address && hotel.address.brief}</p>
      </div>
      <OverAllRating overallRating={hotel.userRating}/>
    </div>
    <GMapContainerDiv className="wfull relative flexFull">
      <SeeMapPopUp coordinates={hotel.map} name={hotel.name} info={hotel.userRating}/>
    </GMapContainerDiv>
  </div>
);

MapPopup.propTypes = {
  hotel : PropTypes.object
};

MapPopup.defaultProps = {
};

export default MapPopup;
