import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import _get from 'lodash/get';

import { fetchTestimonialsInfo, loadCards } from './action';
import { parseDestinationId, testimonialsFilter } from './reducer';
import { load } from 'screens/cityBlock/action';
import { useQuery } from 'containers/Listing/parseFilters';

const Testimonials = Loadable({
  loader: () => import(/* webpackChunkName: 'testimonials' */ './Testimonials'),
  loading: () => null
});

export default asyncConnect(
  [
    { promise: () => import('./Testimonials') },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination }},
                  location: { search }
                }) => {
        const query = useQuery(search) || {};
        return dispatch(
          fetchTestimonialsInfo(
            destination,
            testimonialsFilter(query, 'query').filters,
            query.page
          )
        );
      }
    },
    {
      promise: ({
                  store: { dispatch },
                  match: { params: { destination }},
                  location: { search }
                }) => {
        const id = parseDestinationId(destination);
        const query = useQuery(search);
        if ((isNaN(id) && destination !== undefined) || (!isNaN(id) && query && query.destination)) {
          const dest = query.destination ? query.destination.toLowerCase() : destination.toLowerCase();
          return dispatch(load({
            destination: dest,
            queryParams: { module: 'hotel' }
          }));
        }
      }
    },
  ],
  state => ({
    data: _get(state, 'testimonials.data', {}),
    packages: _get(state, 'cityBlock.data.popularPackages', [])
  }),
  {
    loadCards
  }
)(Testimonials);
