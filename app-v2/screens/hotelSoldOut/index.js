import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import deals from 'modules/hotel/deals';
import { useQuery } from 'containers/Listing/parseFilters';

const HotelSoldOut = Loadable({
  loader: () => import(/* webpackChunkName: 'hotel-sold-out' */ './HotelSoldOut'),
  loading: () => null
});

export default asyncConnect(
  [
    {
      promise: () => import('./HotelSoldOut')
    },
    {
      promise: ({ store: { dispatch }, location: { search }, }) => {
        const query = useQuery(search);
        const params = {
          property_types: 'hotels',
          location: query.destination,
          is_bookable_b2c: true
        };
        return dispatch(deals.defaultAction({ params }));
      }
    },
  ],
  null, {}
)(HotelSoldOut);


