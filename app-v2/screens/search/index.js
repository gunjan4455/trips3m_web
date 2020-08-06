import { asyncConnect } from 'redux-connect';
import Loadable from 'react-loadable';
import { load } from './action';
import { useQuery } from 'containers/Listing/parseFilters';

const SearchAsync = Loadable({
  loader: () => import(/* webpackChunkName: 'search' */ './Search'),
  loading: () => null
});

export default asyncConnect(
  [
    { promise: () => import('./Search') },
    {
      promise: ({
                  store: { dispatch, getState },
                  location: { search }
                }) => {
        const state = getState();
        const query = useQuery(search);
        const {raw: rawData} = state.search.data;
        if (rawData.metadata && rawData.metadata.query === query.q) {
          return;
        } else {
          return dispatch(load(query.q));
        }
      }
    } 
  ],
  state => ({
    searchResult: state.search
  })
)(SearchAsync);


