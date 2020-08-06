import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { calculateGuests } from '../helpers';
import { format } from 'helpers/DateTime';
import BookableInfo from 'modules/hlp/BookableInfo';

import './HotelSearchInfoEditable.scss';

const HotelSearchInfoEditable = ({ params, checkInCheckOut, getHotelPrice, setHotelSearchParams, error }) => {

  const [canEdit, setCanEdit] = useState(false);

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  };

  const { checkInDate, checkOutDate, rooms } = params;

  return (
    <div className={`flex spaceBetween sbcw alignCenter ${canEdit ? 'flexDColumn overlay editColor' : ''}`}>
      <div className="wfull flex alignCenter spaceBetween p15 bb">
        <ul className="flex list-style-no">
          <li className={`f12 fw7 mr8 ${checkInDate && checkOutDate ? '' : 'sfc1'}`}>
            {
              checkInDate && checkInDate
                ? `${format(checkInDate, 'DD MMM')} - ${format(checkOutDate, 'DD MMM')}`
                : 'Select Date'
            }
          </li>
          <li className="f12 fw7 mr8 pr8 pl8 br bl">
            {`${calculateGuests(rooms)} Guests`}
          </li>
          <li className="f12 fw7">
            {`${rooms.length} Room`}
          </li>
        </ul>
        <a onClick={toggleEdit}
           className={`fw7 ${canEdit ? 'close pr24 relative' : 'edit pr24 relative'}`}>{canEdit ? 'Close' : 'Edit '}</a>
      </div>
      {
        canEdit
          ? <BookableInfo searchParams={params} checkInCheckOut={checkInCheckOut}
                          getHotelPrice={getHotelPrice} setHotelSearchParams={setHotelSearchParams}
                          error={error} />
          : null
      }
    </div>
  );
};

HotelSearchInfoEditable.propTypes = {
  params: PropTypes.object.isRequired,
  checkInCheckOut: PropTypes.bool.isRequired,
  getHotelPrice: PropTypes.func.isRequired,
  setHotelSearchParams: PropTypes.func.isRequired,
  error: PropTypes.object
};

HotelSearchInfoEditable.defaultProps = {
  error: {},
};

export default HotelSearchInfoEditable;
