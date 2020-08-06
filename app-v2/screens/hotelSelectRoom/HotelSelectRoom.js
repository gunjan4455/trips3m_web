import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import _isEmpty from 'lodash/isEmpty';

import RecommendedRooms from 'modules/hotel/recommendedRooms';
import AvailableRooms from 'modules/hotel/availableRooms';
import HotelSearchInfo from 'modules/hotel/components/HotelSearchInfo';
import BookableHeader from 'modules/hotel/components/BookableHeader';
import StickyPriceFooter from 'modules/hotel/components/StickyPriceFooter';
import { calculateGuests, calculateNights } from 'modules/hotel/helpers';
import { setHotelSearchParamsCookie } from 'modules/hotel/helpers';
import { useQuery } from 'containers/Listing/parseFilters';
import { separatorMapping, getSegmentObject } from 'helpers/hotels';
import { trackSegment } from 'actions/segmentEvents';
import { rescue } from 'helpers/utils';

import styles from './HotelSelectRoom.cm.scss';

class HotelSelectRoom extends Component {

  constructor(props) {
    super(props);

    const { searchParams, hotelSearchData, bookingDetails } = props;

    this.defaultDetails = {
      price: {},
      checkInDate: searchParams.checkInDate,
      checkOutDate: searchParams.checkOutDate,
      rooms: []
    };

    const recommendedRooms = hotelSearchData.recommended && hotelSearchData.recommended.rooms;
    const rooms = recommendedRooms && Object.keys(recommendedRooms).map(roomCode => {
      const room = recommendedRooms[roomCode];
      return {
        adults: room.pax.adults,
        children: room.pax.children,
        roomCode: room.roomCode,
        selectionId: room.selectionId,
        rateKey: room.rateKey
      };
    });

    const availableDetails = bookingDetails.availableDetails && bookingDetails.availableDetails.rooms.length
      ? bookingDetails.availableDetails
      : this.defaultDetails;

    this.state = {
      recommendedDetails: {
        price: hotelSearchData.price,
        checkInDate: searchParams.checkInDate,
        checkOutDate: searchParams.checkOutDate,
        rooms: rooms
      },
      availableDetails: availableDetails
    };
  }

  componentDidMount() {
    const { hotelSearchData, searchParams, history, hotelData, match: { params }, loadHotelDetails, location } = this.props;

    if (!hotelSearchData.status.available) {
      history.replace(`/hotel/sold-out?checkInDate=${searchParams.checkInDate}&checkOutDate=${searchParams.checkOutDate}`);
    }

    if (!(hotelData && Object.keys(hotelData).length)) {
      const query = useQuery(location.search);
      loadHotelDetails(params.hotelName, { query });
    }
  }

  updateAvailableDetails = (details) => {
    this.setState({ availableDetails: { ...this.state.availableDetails, ...details } });
  };

  updateBookingDetails = (checkOutMode) => {
    const { availableDetails, recommendedDetails } = this.state;
    const { match: { params }, location, searchParams } = this.props;

    this.props.updateHotelBookingDetails({
      recommendedDetails: recommendedDetails,
      availableDetails: checkOutMode === 'recommended' ? this.defaultDetails : availableDetails,
      checkOutMode: checkOutMode
    });

    const rooms = checkOutMode === 'recommended' ? recommendedDetails.rooms : availableDetails.rooms;
    const roomsObj = rooms.map(room => {
      return { adults: room.adults, children: room.children };
    });

    const keyArray = [];
    rooms.map(room => keyArray.push(`${room.adults}${separatorMapping.pax}${room.children}${separatorMapping.roomInfo}${room.roomCode}${separatorMapping.roomInfo}${room.selectionId}`));
    const roomInfo = keyArray.join(separatorMapping.rooms);

    this.props.history.push(`/hotel/${params.hotelName}/review-booking${location.search}&stayCriteria=${checkOutMode}&roomInfo=${roomInfo}`);
  };

  proceedWithRecommendedRooms = (cta) => {
    this.trackSegment({
      section: 'Recommended Rooms',
      cta,
      label: 'Combo Clicked'
    });
    this.updateBookingDetails('recommended');
  };

  proceedToReviewBookings = () => {
    const { availableDetails } = this.state;

    const checkOutMode = availableDetails.rooms.length ? 'custom' : 'recommended';
    this.updateBookingDetails(checkOutMode);
  };

  trackRoomSelection = (details) => this.trackSegment(details);

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
    const { searchParams, hotelSearchData, location, history, match: { params: { hotelName } } } = this.props;
    const { recommendedDetails, availableDetails } = this.state;
    const checkOutDetails = availableDetails.rooms.length ? availableDetails : recommendedDetails;
    const nights = calculateNights(checkOutDetails.checkInDate, checkOutDetails.checkOutDate);
    const query = useQuery(location.search);
    if (!hotelSearchData.status || (hotelSearchData.status && !hotelSearchData.status.available)) {
      return null;
    }
    return (
      <div>
        <BookableHeader heading="Select Room" backUrl={`/hotel/${hotelName}${location.search}`} />
        <Sticky innerZ={4}>
          <div className="p15 pt8 pb8" style={{ background: '#eef7fe' }}>
            <HotelSearchInfo params={searchParams} redirect={true} redirectUrl={query.return_url}
                             showEdit={false} />
          </div>
        </Sticky>
        <RecommendedRooms recommended={hotelSearchData.recommended} searchParams={searchParams}
                          price={hotelSearchData.price}
                          proceedWithRecommendedRooms={this.proceedWithRecommendedRooms} />
        <p className="sbc5 block p24 pl15 pr15 pr8 pl8 mt15 mb15 text-center">
          <span className={`wfull relative iblock ${styles.inlineSpacing}`}>or select your own room</span>
        </p>
        <AvailableRooms all={hotelSearchData.all} push={history.push} searchParams={searchParams}
                        checkOutDetails={this.state.availableDetails}
                        updateCheckOutDetails={this.updateAvailableDetails}
                        nights={nights} trackRoomSelection={this.trackRoomSelection} />
        <StickyPriceFooter cta="Proceed"
                           price={checkOutDetails.price}
                           night={nights}
                           guest={calculateGuests(checkOutDetails.rooms)}
                           ctaHandler={this.proceedToReviewBookings} />
      </div>
    );
  }
}

HotelSelectRoom.propTypes = {
  searchParams: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  hotelSearchData: PropTypes.object.isRequired,
  bookingDetails: PropTypes.object.isRequired,
  updateHotelSearchParams: PropTypes.func.isRequired,
  updateHotelBookingDetails: PropTypes.func.isRequired,
  loadHotelDetails: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  hotelData: PropTypes.object.isRequired,
};

HotelSelectRoom.defaultProps = {};

export default HotelSelectRoom;

