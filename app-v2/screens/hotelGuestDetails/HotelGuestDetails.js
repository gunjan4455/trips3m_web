import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MessageLoader from 'modules/shared/messageLoader';
import BookableHeader from 'modules/hotel/components/BookableHeader';
import GuestDetails from 'modules/hotel/form/guestDetails';
import HotelTrust from 'modules/hotel/components/HotelTrust';
import StickyPriceFooter from 'modules/hotel/components/StickyPriceFooter';
import { calculateAdultsAndChildren, calculateNights } from 'modules/hotel/helpers';
import ErrorPage from '../hotelError/ErrorPage';
import { trackSegment } from 'actions/segmentEvents';
import { getSegmentObject } from 'helpers/hotels';
import { rescue } from 'helpers/utils';

class HotelGuestDetails extends Component {
  state = {
    name: '',
    email: '',
    isdCode: '+91',
    phone: '',
    formErrors: {},
    submitting: false
  };

  componentDidMount() {
    const { bookingDetails, history, match: { params: { hotelName } } } = this.props;
    if (!(bookingDetails && Object.keys(bookingDetails).length)) {
      setTimeout(() => {
        history.replace(`/hotel/${hotelName}`);
      }, 5000);
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    }, () => {
      this.validateField(name, value);
    });

  };

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;

    switch (fieldName) {
      case 'email':
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' Please enter valid email';
        break;
      case 'phone':
        const phone = value.length >= 5 && value.length <= 15;
        fieldValidationErrors.phone = phone ? '' : ' Please enter valid phone number';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
    });
  }

  handleSubmit = (cta) => {
    const { name, email, isdCode, phone } = this.state;
    const {
      searchParams: { checkInDate, checkOutDate }, hotelSearchData, bookingDetails: {
        recommendedDetails, availableDetails, checkOutMode
      }, history
    } = this.props;

    const selectedRooms = checkOutMode === 'recommended'
      ? recommendedDetails.rooms
      : availableDetails.rooms;
    const rooms = selectedRooms.map(room => {
      return {
        adults: room.adults,
        children: room.children,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
        selection_id: room.selectionId,
        rate_key: room.rateKey
      };
    });

    this.setState({ submitting: true });

    this.trackSegment({
      section: 'Bottom Sticky',
      cta,
      label: 'Guest Details Submitted'
    });

    this.props.checkOutHotel({
      bookable_id: hotelSearchData.inventoryInfo.id,
      bookable_type: 'hotel',
      line_items: rooms,
      user: {
        name: name,
        email: email,
        phone: `${isdCode}${phone}`,
      }
    }).then((response) => {
      this.setState({ submitting: false });

      if (response.data.success) {
        window.location.href = response.data.booking_details.next_url;
      } else {
        if (response.data.status && !response.data.status.available) {
          history.push(`/hotel/sold-out`);
        }
      }
    }).catch((ex) => {
      this.setState({ submitting: false });
    });
  };

  trackSegment = (segmentObject) => {
    rescue(() => {
      const { hotelSearchData } = this.props;
      const segmentData = getSegmentObject(segmentObject, hotelSearchData) || {};
      if (segmentData && Object.keys(segmentData).length) {
        trackSegment(segmentData);
      }
    });
  };

  render() {
    const { name, email, isdCode, phone, formErrors, submitting } = this.state;
    const { match: { params }, location, searchParams, bookingDetails } = this.props;
    const cta = 'Confirm & Pay';

    if (!(bookingDetails && Object.keys(bookingDetails).length)) {
      return (
        <ErrorPage />
      );
    }

    const isInvalid = !name || !email || !phone || !!(formErrors.name || formErrors.email || formErrors.phone);

    const nights = calculateNights(searchParams.checkInDate, searchParams.checkOutDate);

    let price = {}, rooms = [];
    if (bookingDetails.checkOutMode === 'recommended') {
      price = bookingDetails.recommendedDetails.price;
      rooms = bookingDetails.recommendedDetails.rooms;
    } else {
      price = bookingDetails.availableDetails.price;
      rooms = bookingDetails.availableDetails.rooms;
    }
    const totalPax = calculateAdultsAndChildren(rooms);

    const userDetails = { name, email, isdCode, phone };

    return (
      <div>
        <BookableHeader heading="Guest Details" />
        <GuestDetails userDetails={userDetails} formErrors={formErrors} handleChange={this.handleChange} />
        <div className="p15 pt0 mb64">
          <HotelTrust />
        </div>
        {
          submitting ? <MessageLoader message="Checking Room Availability" /> : null
        }
        <StickyPriceFooter cta={cta} price={price} night={nights}
                           guest={totalPax.adults + totalPax.children}
                           disabled={isInvalid || submitting} ctaHandler={() => this.handleSubmit(cta)} />
      </div>
    );
  }
}

HotelGuestDetails.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  searchParams: PropTypes.object.isRequired,
  hotelSearchData: PropTypes.object.isRequired,
  bookingDetails: PropTypes.object.isRequired,
  checkOutHotel: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

HotelGuestDetails.defaultProps = {};

export default HotelGuestDetails;
