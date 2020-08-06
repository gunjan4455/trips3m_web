import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TicketsIcon } from 'helpers/Icon/Icon';
import { format } from 'helpers/DateTime';

import styles from './BookingInfo.cm.scss';

class BookingInfo extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    checkInDate: PropTypes.string.isRequired,
    checkOutDate: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired
  };

  render() {
    const { user, checkInDate, checkOutDate, guests } = this.props;

    return (
      <div className="pb15">
        <div className="flex spaceBetween pb24">
          <div>
            <p className="f12 pfc4 mb4">Check in</p>
            <span className="fw7">{format(checkInDate, 'DD MMM YYYY')}</span>
          </div>
          <div className="text-center">
            <p className="f12 pfc4 mb4">Check out</p>
            <span className="fw7">{format(checkOutDate, 'DD MMM YYYY')}</span>
          </div>
          <div className="text-right">
            <p className="f12 pfc4 mb4">Guests</p>
            <span className="fw7">{guests} Guests</span>
          </div>
        </div>
        <div className={`radius4 p15 ${styles.mailSection}`}>
          <div className="flex alignCenter">
            <span className="mr15"><TicketsIcon /></span>
            <p className="f12">We have sent the hotel voucher to your email ID <strong>{user.email}</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingInfo;
