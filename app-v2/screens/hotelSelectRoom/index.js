import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import { hotelSearch, updateHotelSearchParams, updateHotelBookingDetails } from '../hdp/action';
import { useQuery } from 'containers/Listing/parseFilters';
import { getCookieFromServer } from 'helpers/FormDataFormatter';
import { validateSearchDate, getRoomStay, separatorMapping } from 'helpers/hotels';
import { addDays } from 'helpers/DateTime';
import { loadHotelDetails } from 'screens/hdp/reducer';

const HotelSelectRoom = Loadable({
  loader: () => import(/* webpackChunkName: 'hotel-select-room' */ './HotelSelectRoom'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: () => import('./HotelSelectRoom')
    },
    {
      promise: ({ store: { dispatch, getState }, match: { params: { hotelName } }, location: { search }, helpers: { client } }) => {
        const query = useQuery(search);
        const state = getState();
        const { searchParams, searchData } = state.hotelDetail;
        let hotelSearchParams = searchParams;

        const cookie = client.req ? client.req.get('cookie') : '';
        const hotelSearchCookie = getCookieFromServer('hotel_search', cookie);
        const hotelSearchParamsFromCookie = hotelSearchCookie ? JSON.parse(hotelSearchCookie) : {};
        let checkin = query.checkin, checkout = query.checkout;
        if (!validateSearchDate(checkin, checkout)){
          checkin = hotelSearchParamsFromCookie.checkInDate;
          checkout = hotelSearchParamsFromCookie.checkOutDate;
          if (!validateSearchDate(checkin, checkout)) {
            const today = new Date();
            checkin = addDays(today, 15);
            checkout = addDays(today, 16);
          }
        }
        const roomStay = query.roomStay && query.roomStay.split(separatorMapping.room);
        const rooms = getRoomStay(roomStay, false, hotelSearchCookie);
        hotelSearchParams = {
          checkInDate: checkin,
          checkOutDate: checkout,
          rooms
        };
        dispatch(updateHotelSearchParams(hotelSearchParams));

        return dispatch(hotelSearch({
          hotel_id: query.hotelId,
          checkInDate: hotelSearchParams.checkInDate,
          checkOutDate: hotelSearchParams.checkOutDate,
          rooms: hotelSearchParams.rooms,
          all_rooms: true
        }));
      }
    },
  ],
  state => ({
    searchParams: _get(state, 'hotelDetail.searchParams', {}),
    hotelSearchData: _get(state, 'hotelDetail.searchData', {}),
    bookingDetails: _get(state, 'hotelDetail.bookingDetails', {}),
    hotelData: _get(state, 'hotelDetail.data', {}),
  }), { updateHotelSearchParams, updateHotelBookingDetails, loadHotelDetails }
)(HotelSelectRoom);


