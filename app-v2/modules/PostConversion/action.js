
import config from 'appConfig';
import { postConversionUrl, invoiceStatusUrl } from 'helpers/urlHelpers';

export const POST_CONVERSION_DATA_LOAD = 'POST_CONVERSION_DATA_LOAD';
export const POST_CONVERSION_DATA_LOAD_SUCCESS = 'POST_CONVERSION_DATA_LOAD_SUCCESS';
export const POST_CONVERSION_DATA_LOAD_FAIL = 'POST_CONVERSION_DATA_LOAD_FAIL';

export const INVOICE_STATUS_LOAD = 'INVOICE_STATUS_LOAD';
export const INVOICE_STATUS_LOAD_SUCCESS = 'INVOICE_STATUS_LOAD_SUCCESS';
export const INVOICE_STATUS_LOAD_FAIL = 'INVOICE_STATUS_LOAD_FAIL';


export const fetchPostConversionData = (requestedTripId, invoiceId) => {
  return {
	  types: [
		  POST_CONVERSION_DATA_LOAD,
		  POST_CONVERSION_DATA_LOAD_SUCCESS,
		  POST_CONVERSION_DATA_LOAD_FAIL
	  ],
	  promise: client => client.get(postConversionUrl( requestedTripId, invoiceId ), {
    hostType: config.apiEndpoints.postConversionUrl.host
	  }),
	  withoutCamelCasing: false
  };
};

export const getInvoiceStatus = (data, requestedTripId, invoiceId) => {
  return {
    types: [
      INVOICE_STATUS_LOAD,
      INVOICE_STATUS_LOAD_SUCCESS,
      INVOICE_STATUS_LOAD_FAIL
    ],
    promise: client => client.post(invoiceStatusUrl(requestedTripId, invoiceId), {
      data,
      host: config.apiEndpoints.invoiceStatusUrl.host
    }),
    withoutCamelCasing: false
  };
};
