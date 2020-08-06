export const REQUEST_CALLBACK_LOAD = 'quoteDetail/quoteActivities/REQUEST_CALLBACK_LOAD';
export const REQUEST_CALLBACK_SUCCESS = 'quoteDetail/quoteActivities/REQUEST_CALLBACK_SUCCESS';
export const REQUEST_CALLBACK_FAIL = 'quoteDetail/quoteActivities/REQUEST_CALLBACK_FAIL';

import { requestCallbackUrl } from 'helpers/urlHelpers';
import config from 'appConfig';

export const requestCallback = ({ tripId, quoteId, reason = '', reasonText = '' }) => (dispatch) => {
  const rejectionOption = reason;
  let rejectionReasonOption = `${rejectionOption.substring(0, rejectionOption.length - 1)}_${rejectionOption.charAt(rejectionOption.length - 1)}`;

  if (!reason) {
    rejectionReasonOption = 'request_cta_4';
  }

  dispatch({
    types: [REQUEST_CALLBACK_LOAD, REQUEST_CALLBACK_SUCCESS, REQUEST_CALLBACK_FAIL],
    promise: client => client.post(`${requestCallbackUrl(tripId, quoteId)}`, {
      params: {
        option: rejectionReasonOption,
        request_cta_4_reason: reasonText
      },
      hostType: config.apiEndpoints.requestCallback.host
    })
  });
};
