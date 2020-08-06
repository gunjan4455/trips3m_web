import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from "lodash/get";

import { getBookingDetail } from './action';
import { useQuery } from 'containers/Listing/parseFilters';

const BookingDetails = Loadable({
  loader: () => import(/* webpackChunkName: 'booking-details' */ './BookingDetails'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: () => import('./BookingDetails')
    },
    {
      promise: ({ store: { dispatch }, location: { search }, }) => {
        const query = useQuery(search);
        if (query.success === "true") {
          return dispatch(getBookingDetail(query.bookable_id));
        }
        return Promise.resolve();
      }
    }
  ],
  state => ({
    details: _get(state, 'bookingDetails.data', {}),
  }), {}
)(BookingDetails);
