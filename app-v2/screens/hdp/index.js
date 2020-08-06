import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import { loadHotelDetails, updateTestimonials, updateMonth } from './reducer';
import { load as popularPackages } from 'screens/cityBlock/action';
import { hotelSearch, updateHotelSearchParams, updateHotelBookingDetails } from './action';
import { getRoomStay, separatorMapping, validateSearchDate } from 'helpers/hotels';
import deals from 'modules/hotel/deals';
import { useQuery } from 'containers/Listing/parseFilters';
import { getCookieFromServer } from "helpers/FormDataFormatter";

const Hdp = Loadable({
  loader: () => import(/* webpackChunkName: 'hotel-details' */ './Hdp'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: () => import('./Hdp')
    },
    {
      promise: (
        {
          store: { dispatch }, location: { search }, match: { params }, helpers: { client }
        }) => {
        const query = useQuery(search);
        return new Promise((resolve) => {
          return dispatch(loadHotelDetails(params.hotelName, { query })).then(response => {
            const promises = [];

            promises.push(dispatch(updateHotelBookingDetails()));

            if (response.data.hotel.is_bookable_b2c) {

              const hotelId = response.data.hotel.id;
              const cookie = client.req ? client.req.get('cookie') : '';
              const hotelSearchCookie = getCookieFromServer('hotel_search', cookie);
              const hotelSearchParamsFromCookie = hotelSearchCookie ? JSON.parse(hotelSearchCookie) : {};

              let hotelSearchParams = {};
              let checkin = query.checkin, checkout = query.checkout;
              if (!validateSearchDate(checkin, checkout)){
                checkin = hotelSearchParamsFromCookie.checkInDate;
                checkout = hotelSearchParamsFromCookie.checkOutDate;
                if (!validateSearchDate(checkin, checkout)) {
                  checkin = null;
                  checkout = null;
                }
              }
              const roomStay = query.roomStay && query.roomStay.split(separatorMapping.room);
              const rooms = getRoomStay(roomStay, false, hotelSearchCookie);
              hotelSearchParams = {
                checkInDate: checkin,
                checkOutDate: checkout,
                rooms,
                all_rooms: false,
                hotel_id: hotelId
              };

              if (checkin && checkout) {
                promises.push(dispatch(updateHotelSearchParams(hotelSearchParams)));
                promises.push(dispatch(hotelSearch(hotelSearchParams)));
              }

              const params = {
                property_types: 'hotels',
                location: response.data.hotel.country.name,
                is_bookable_b2c: true
              };
              promises.push(dispatch(deals.defaultAction({ params })));
            }
            return Promise.all(promises);
          }).then(responses => {
            return resolve();
          }).catch(() => resolve());
        });
      }
    },
    {
      promise: ({ store: { dispatch }, match: { params: { hotelName } }}) => {
        return dispatch(popularPackages({ destination: hotelName, queryParams: { module: 'hotel' } }));
      }
    }
  ],
  state => ({
    details: _get(state, 'hotelDetail.data', {}),
    packages: state.cityBlock.data && state.cityBlock.data.popularPackages,
    searchParams: _get(state, 'hotelDetail.searchParams', {}),
    hotelPriceLoading: _get(state, 'hotelDetail.loading', {}),
    hotelPriceLoaded: _get(state, 'hotelDetail.loaded', {}),
    hotelSearchData: _get(state, 'hotelDetail.searchData', {}),
  }), { updateTestimonials, updateMonth, updateHotelSearchParams, hotelSearch }
)(Hdp);


