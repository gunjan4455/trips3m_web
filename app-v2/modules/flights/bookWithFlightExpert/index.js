import { connect } from 'react-redux';
import _get from 'lodash/get';

import BookWithFlightExpert from './BookWithFlightExpert';
import { getDestinationSearchList, getFilteredDestinations, postFlightDetails } from '../action';


export default connect(
  state => ({
    destinations: _get(state, 'flights.destinations', []),
    currentTripId: _get(state, 'trip.currentTrip.data.id', 0)
  }),
  dispatch => ({
    getDestinationSearchList: () => dispatch(getDestinationSearchList()),
    getFilteredDestinations: (params) => dispatch(getFilteredDestinations(params)),
    postFlightDetails: (params) => dispatch(postFlightDetails(params))
  })
)(BookWithFlightExpert);
