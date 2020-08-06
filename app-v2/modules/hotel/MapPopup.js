import React from 'react';
import PropTypes from 'prop-types';

import OverAllRating from 'modules/shared/OverAllRating';
import RatingStar from 'modules/shared/RatingStar';
import HotelMapTooltip from './HotelMapTooltip';
import SeeMapPopUp from 'modules/mapInformation/SeeMapPopUp/SeeMapPopUp';

import styles from './mapPopup.cm.scss';

const MapPopup = ({ hotel }) => (
  <div className="flex sbcw flexFull flexDColumn">
    <div className="p15">
        <div className="flex alignCenter pr24">
          <h6 className="m0 mr8 f16 fw7">{hotel.name}</h6>
          <RatingStar rating={hotel.starRating}/>
        </div>
      <div className="flex spaceBetween alignCenter">
        <p className="m0 flexFull mr8 f12">{hotel.address && hotel.address.brief}</p>
        <OverAllRating overallRating={hotel.userRating}/>
      </div>
    </div>
    <div className={`wfull flex relative flexFull ${styles.map}`}>
      <SeeMapPopUp coordinates={hotel.map}/>
      <div className="absolute r50 t50 z3"> <HotelMapTooltip name={hotel.name} info={hotel.userRating} /></div>
    </div>
  </div>
);

MapPopup.propTypes = {
  hotel : PropTypes.object
};

MapPopup.defaultProps = {
  hotel: {}
};

export default MapPopup;
