import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Back2Icon, Successful } from 'helpers/Icon/Icon';
import { calculateAdultsAndChildren, calculateNights } from "../helpers";
import RoomDetail from 'modules/hotel/components/RoomDetail';
import HotelTrust from 'modules/hotel/components/HotelTrust';
import BasicDetails from 'modules/hotel/components/BasicDetails';
import BookingInfo from 'modules/hotel/components/BookingInfo';
import Tnc from 'modules/hotel/components/Tnc';
import TotalAmount from '../components/TotalAmount';

import styles from './HotelBookingDetail.cm.scss';

class HotelBookingDetail extends PureComponent {

  render() {
    const { id, hotel, user, price, rooms } = this.props.details;
    const checkInDate = rooms && rooms.length ? rooms[0].checkInDate : null;
    const checkOutDate = rooms && rooms.length ? rooms[0].checkOutDate : null;
    const nights = rooms && rooms.length ? calculateNights(checkInDate, checkOutDate) : 1;

    const formattedRooms = rooms.map(r => ({ ...r, ...r.pax }));
    const totalPax = calculateAdultsAndChildren(formattedRooms);

    return (
      <div>
        <div className="bb at_bookingdetails_header">
          <Link to="/">
            <p className={`flex p15 fw9 f16 ${styles.backArrow}`}><span className="mr15"><Back2Icon /></span>
            </p>
          </Link>
        </div>
        <div>
          <div className="flex alignCenter flexDColumn pt24 pb15 mb3">
            <div className={` mb15 ${styles.successIcon}`}><Successful /></div>
            <p className="f20 fw9 pfc5 pb4">Booking Confirmed!</p>
            <p className="f12">{`Booking ID: ${id}`}</p>
          </div>
          <div className="pl15 pr15">
            <BasicDetails hotel={hotel} />
          </div>
          <div className={`pl15 pr15 ${styles.sectionSpace}`}>
            <BookingInfo user={user} checkInDate={checkInDate} checkOutDate={checkOutDate}
                         guests={totalPax.adults + totalPax.children} />
          </div>
          <div className={`p15 ${styles.sectionSpace}`}>
            <span className="f16 fw9 pb24 block">Room(s) & Price Details</span>
            {
              formattedRooms.map((room, index) => <RoomDetail room={room} nights={nights} index={index} />)
            }
            <TotalAmount price={price} nights={nights} totalPax={totalPax} />
            <HotelTrust />
          </div>
          <Tnc rooms={formattedRooms} />
        </div>
      </div>
    );
  }
}

HotelBookingDetail.propTypes = {
  details: PropTypes.object.isRequired,
};

HotelBookingDetail.defaultProps = {};

export default HotelBookingDetail;
