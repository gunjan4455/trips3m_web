/* eslint-disable quote-props */
/* eslint no-eval: 0 */
import config from 'appConfig';
import { requestedTripCustomizationPath } from '../helpers/urlHelpers';

const LOAD = 'formOneLead/LOAD';
const LOAD_SUCCESS = 'formOneLead/LOAD_SUCCESS';
const LOAD_FAIL = 'formOneLead/LOAD_FAIL';
const RESET = 'formOneLead/RESET';
const UPDATE_FORM_ONE_PROPS = 'formOneLead/UPDATE_DATA';

const initialState = {
  loaded: false,
  rtProps: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error,
      };
    case RESET:
      return {
        ...initialState
      };
    case UPDATE_FORM_ONE_PROPS:
      return {
        ...state,
        rtProps: action.data,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.formOneLead && globalState.formOneLead.loaded;
}

export function redirectUrl(globalState) {
  if (
    !globalState.formOneLead ||
    !globalState.formOneLead.data ||
    !globalState.formOneLead.data.data ||
    !globalState.formOneLead.data.data.requested_trip
  ) {
    return '';
  }
  return requestedTripCustomizationPath(globalState.formOneLead.data.data.requested_trip.id);
}

export function isLoading(globalState) {
  return (globalState.packages.details && globalState.packages.details.loading) || false;
}

export function loadingError(globalState) {
  return (globalState.packages.details && globalState.packages.details.error) || null;
}

export function load(values) {
  const isCreate = values.isSubmit || false;

  const { url: postURL, host: hostType } = isCreate
    ? config.apiEndpoints.requestedTrip.formOne
    : config.apiEndpoints.requestedTrip.saveInRedis;

  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.post(postURL, {
      data: { ...values }, hostType: hostType
    })
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function updateFromOneProps(rtProps) {
  return {
    type: UPDATE_FORM_ONE_PROPS,
    data: rtProps,
  };
}

export function rtData(globalState) {
  if (globalState.formOneLead && globalState.formOneLead.rtProps) {
    return globalState.formOneLead.rtProps;
  }
  return {};
}

export function getFunnelUuid(globalState) {
  if (globalState.formOneLead && globalState.formOneLead.redisKey) {
    return globalState.formOneLead.redisKey;
  }
  return '';
}

export function getNameType(question, index) {
  if (question.jsonValueType !== 'input') {
    return `${question.railsFormName}[${index + 1}]`;
  }
  return question.railsFormName;
}

export function createTripOnRedis(requestParams) {
  const postURL = config.apiEndpoints.requestedTrip.createInRedis.url;
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.post(
      postURL,
      {
        data: { ...requestParams }, hostType: config.apiEndpoints.requestedTrip.createInRedis.host
      }
    )
  };
}

