import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Sticky from 'react-stickynode';
import { Link } from 'react-router-dom';
import { stringify } from 'query-string';

import HotelTrust from 'modules/hotel/components/HotelTrust';
import StickyPriceFooter from 'modules/hotel/components/StickyPriceFooter';
import RoomDetail from 'modules/hotel/components/RoomDetail';
import HotelSearchInfo from 'modules/hotel/components/HotelSearchInfo';
import BasicDetails from 'modules/hotel/components/BasicDetails';
import BookableHeader from 'modules/hotel/components/BookableHeader';
import TotalAmount from 'modules/hotel/components/TotalAmount';
import { calculateNights, calculateAdultsAndChildren } from 'modules/hotel/helpers';
import { useQuery } from 'containers/Listing/parseFilters';
import ErrorPage from '../hotelError/ErrorPage';

import styles from './ReviewBooking.cm.scss';

class ReviewBooking extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleCtaClick = () => {
    this.props.history.push(`/hotel/${this.props.match.params.hotelName}/guest-details${this.props.location.search}`);
  };

  componentDidMount() {
    const { bookingDetails, history, match: { params: { hotelName } } } = this.props;
    if (!(bookingDetails && Object.keys(bookingDetails).length)) {
      setTimeout(() => {
        history.replace(`/hotel/${hotelName}`);
      }, 5000);
    }
  }

  renderCancellation = (room, index, length) => (
    <div key={`r_${index}`} className={length && index !== length-1 ? 'mb32' : ''}>
      <h3 className="f14 fw9">{room.roomName}</h3>
      <p className="f12">{`${room.boardName} & ${room.price.rateClassName}`}</p>
      {room.cancellationPolicy && <p className="f12 mt8">
        {room.cancellationPolicy.description}
      </p>}
    </div>
  );

  getSelectRoomQuery = (search) => {
    const query = useQuery(search);
    delete query['stayCriteria'];
    delete query['roomInfo'];
    return stringify(query);
  };

  render() {
    const { match: { params }, location, details: { hotel }, searchParams, hotelSearchData, bookingDetails, history } = this.props;

    if (!(bookingDetails && Object.keys(bookingDetails).length)) {
      return (
        <ErrorPage />
      );
    }

    const nights = calculateNights(searchParams.checkInDate, searchParams.checkOutDate);

    let rooms = [];
    let price = {};

    if (bookingDetails.checkOutMode === 'recommended') {
      const selectedRooms = bookingDetails.recommendedDetails.rooms;
      rooms = selectedRooms.map(r => {
        const room = hotelSearchData.recommended.rooms[r.selectionId];
        return {
          roomCode: room.roomCode,
          roomName: room.roomName,
          selectionId: room.selectionId,
          rateKey: room.rateKey,
          boardName: room.boardName,
          boardCode: room.boardCode,
          price: room.price,
          cancellationPolicy: room.cancellationPolicy,
          ...room.pax
        };
      });
      price = bookingDetails.recommendedDetails.price;
    } else {
      const selectedRooms = bookingDetails.availableDetails.rooms;
      rooms = selectedRooms.map(r => {
        const requestId = `${r.adults}@${r.children}`;
        const rooms = hotelSearchData.all.rooms[requestId];
        const room = rooms[r.roomCode];
        const board = room.boards[r.selectionId];
        return {
          roomCode: room.codeName,
          roomName: room.roomName,
          selectionId: board && board.selectionId,
          rateKey: board && board.rateKey,
          boardName: board && board.name,
          boardCode: board && board.code,
          price: board && board.price,
          cancellationPolicy: board && board.cancellationPolicy,
          ...room.pax
        };
      });
      price = bookingDetails.availableDetails.price;
    }

    const totalPax = calculateAdultsAndChildren(rooms);
    const selectRoomUrlQuery = this.getSelectRoomQuery(location.search);
    const selectRoomUrl = `/hotel/${params.hotelName}/select-room?${selectRoomUrlQuery}`;
    const hotelImage = hotel.sliderPic && hotel.sliderPic.length && hotel.sliderPic[0].pictureDetails.thumbnailImagekitUrl;
    const query = useQuery(location.search);
    return (
      <div>
        <BookableHeader heading="Review Booking" backUrl={selectRoomUrl} />
        <Sticky innerZ={4}>
          <div className="p15 pt8 pb8" style={{ background: '#eef7fe' }}>
            <HotelSearchInfo params={{ ...searchParams, rooms: rooms }} redirect={true}
                             redirectUrl={query.return_url} showEdit={false} />
          </div>
        </Sticky>
        <div className="sbc5">
          <div className="p15 pt0 mb64 sbcw">
            <BasicDetails
              hotel={{
                title: hotel.displayName,
                address: { ...hotel.address },
                image: hotelImage,
                url: '',
                starRatings: hotel.starRating
              }} />

            <div>
              <div className="flex spaceBetween mb24">
                <span className="pfc5 fw9">Room(s) Selected</span>
                <Link to={selectRoomUrl} className="fw7">Change Room</Link>
              </div>
              {
                rooms.map((room, index) => <RoomDetail room={room} index={index} nights={nights} />)
              }
            </div>
            <TotalAmount price={price} nights={nights} totalPax={totalPax} />
            <div className="mb24">
              <HotelTrust />
            </div>
          </div>
{/*          <div className="sbcw p15">
            <h2 className="f16 fw9 mb24">Cancellation & Refund Policy</h2>
            {
              rooms.map((room, index) => this.renderCancellation(room, index, rooms.length))
            }
          </div>*/}
        </div>
        <StickyPriceFooter cta="Guest Details" price={price} night={nights} guest={totalPax.adults + totalPax.children}
                           ctaHandler={this.handleCtaClick} />
      </div>
    );
  }
}

ReviewBooking.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  searchParams: PropTypes.object.isRequired,
  hotelSearchData: PropTypes.object.isRequired,
  bookingDetails: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  updateHotelSearchParams: PropTypes.func.isRequired,
};

ReviewBooking.defaultProps = {};

export default ReviewBooking;

