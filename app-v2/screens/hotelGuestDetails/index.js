import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';
import camelCaseKeys from 'camelcase-keys';

import { checkOutHotel, hotelSearch, updateHotelBookingDetails, updateHotelSearchParams } from 'screens/hdp/action';
import { useQuery } from 'containers/Listing/parseFilters';
import { getCookieFromServer } from 'helpers/FormDataFormatter';
import { getRoomStay, separatorMapping, validateSearchDate, getRecommendedAndAvailableRooms } from 'helpers/hotels';
import { addDays } from 'helpers/DateTime';
import { getHotelSearchDataObj, loadHotelDetails } from '../hdp/reducer';

const HotelGuestDetails = Loadable({
  loader: () => import(/* webpackChunkName: 'hotel-guest-details' */ './HotelGuestDetails'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: () => import('./HotelGuestDetails')
    },
    {
      promise: ({ store: { dispatch, getState }, match: { params: { hotelName } }, location: { search }, helpers: { client }, history }) => {
        const query = useQuery(search);
        const state = getState();

        const bookingDetails =  _get(state, 'hotelDetail.bookingDetails', {});
        if (!(bookingDetails && Object.keys(bookingDetails).length)) {
          return new Promise((resolve) => {
            const promises = [];
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
            const hotelSearchParams = {
              checkInDate: checkin,
              checkOutDate: checkout,
              rooms
            };
            return dispatch(hotelSearch({
              ...hotelSearchParams,
              hotel_id: query.hotelId,
              all_rooms: true
            })).then((response) => {
              const hotelData = camelCaseKeys(response && response.data, { deep: true });
              const data = getHotelSearchDataObj(hotelData);
              const { recommended, all, price } = data;
              const checkOutMode = query.stayCriteria || 'recommended';
              const { priceObj, allRooms } = getRecommendedAndAvailableRooms(checkOutMode, query, price, recommended, all);
              if (allRooms && allRooms.length) {
                const roomDetails = {
                  price: priceObj,
                  checkInDate: hotelSearchParams.checkInDate,
                  checkOutDate: hotelSearchParams.checkOutDate,
                  rooms: allRooms
                };
                const defaultDetails = {
                  price: {},
                  checkInDate: hotelSearchParams.checkInDate,
                  checkOutDate: hotelSearchParams.checkOutDate,
                  rooms: []
                };
                promises.push(dispatch(updateHotelBookingDetails({
                  recommendedDetails: roomDetails,
                  availableDetails: checkOutMode === 'recommended' ? defaultDetails : roomDetails,
                  checkOutMode: checkOutMode
                })));
                promises.push(dispatch(updateHotelSearchParams({...hotelSearchParams, rooms: allRooms})));
                promises.push(dispatch(loadHotelDetails(hotelName, { query })));
              }
              return Promise.all(promises);
            }).then(responses => {
              return resolve();
            }).catch(() => resolve());
          });
        }
        return Promise.resolve();
      }
    },
  ],
  state => ({
    searchParams: _get(state, 'hotelDetail.searchParams', {}),
    hotelSearchData: _get(state, 'hotelDetail.searchData', {}),
    bookingDetails: _get(state, 'hotelDetail.bookingDetails', {}),
  }), { checkOutHotel }
)(HotelGuestDetails);
