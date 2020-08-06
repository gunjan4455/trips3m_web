import React from 'react';
import PropTypes from 'prop-types';

import { Hotel } from 'helpers/Icon/Icon';
import CheckInCheckOut from 'modules/hotel/components/CheckInCheckOut';
import RoomsAndGuests from 'modules/hotel/components/RoomsAndGuests';

import styles from './BookableInfo.cm.scss';

const BookableInfo = ({ searchParams, getHotelPrice, setHotelSearchParams, checkInCheckOut, error }) => {
  return (
    <div className="pt24 pl15 pr15 pb15 sbcw bb">
      <div className="mb24 flex">
        <p className="f16a fw9">Share your travel details to get <span className="pfc5">handpicked hotels</span> by our experts</p>
        <div className={`r0 radius100 flex alignCenter justifyCenter ${styles.hotelIcon}`}>
          <div className="icon-24">
            <Hotel />
          </div>
        </div>
      </div>
      <div className="mb15">
        <CheckInCheckOut
          handleSubmit={setHotelSearchParams}
          data={searchParams}
          checkInCheckOut={checkInCheckOut}
          showError={error.checkInCheckOut}
          showErrorBorder={true}
        />
      </div>
      <span className="input-error-text mb15">{error.checkInCheckOut ? 'Check in and check out date must be filled' : ''}</span>
      <RoomsAndGuests handleSubmit={setHotelSearchParams} data={searchParams} />
      <div className="mt15">
        <button className="btn-filled-pri-large wfull" onClick={getHotelPrice}>Search</button>
      </div>
    </div>
  );
};

BookableInfo.propTypes = {
  searchParams: PropTypes.object.isRequired,
  error: PropTypes.object,
  checkInCheckOut: PropTypes.bool.isRequired,
  getHotelPrice: PropTypes.func.isRequired,
  setHotelSearchParams: PropTypes.func.isRequired,
};

BookableInfo.defaultProps = {
  error: {},
};

export default BookableInfo;
