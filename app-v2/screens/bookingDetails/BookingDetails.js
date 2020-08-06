import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HotelBookingDetails from 'modules/hotel/bookingDetails';
import PaymentFailed from 'modules/paymentFailed';
import { useQuery } from 'containers/Listing/parseFilters';

class BookingDetails extends Component {

  render() {
    const { location: { search }, details } = this.props;
    const query = useQuery(search);
    return (
      query.success === "true"
        ? <HotelBookingDetails details={details} />
        : <PaymentFailed />
    );
  }
}

BookingDetails.propTypes = {
  details: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default BookingDetails;
