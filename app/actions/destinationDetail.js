import {
  DESTINATION_DETAILS_LOAD,
  DESTINATION_DETAILS_LOAD_SUCCESS,
  DESTINATION_DETAILS_LOAD_FAIL
} from '../actionConstants';
import config from '../../config';

const loadDestinationDetail = id => ({
  types: [
    DESTINATION_DETAILS_LOAD,
    DESTINATION_DETAILS_LOAD_SUCCESS,
    DESTINATION_DETAILS_LOAD_FAIL
  ],
  promise: client => client.get(`${config.apiEndpoints.destinationDetail.url}/${id}`, {
    hostType: config.apiEndpoints.destinationDetail.host
  })
});

export {
  loadDestinationDetail
};
