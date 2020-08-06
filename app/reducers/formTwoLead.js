/* eslint-disable quote-props */
import config from 'appConfig';
import { formTwoCustomizationsPath } from 'helpers/urlHelpers';
import { UPDATE_REDIS_KEY } from '../actionConstants';

const LOAD = 'formTwoLead/LOAD';
const LOAD_SUCCESS = 'formTwoLead/LOAD_SUCCESS';
const LOAD_FAIL = 'formTwoLead/LOAD_FAIL';
const RESET = 'formTwoLead/RESET';
const CUSTOMIZATIONS_LOAD = 'formTwoLead/CUSTOMIZATIONS_LOAD';
const CUSTOMIZATIONS_LOAD_SUCCESS = 'formTwoLead/CUSTOMIZATIONS_LOAD_SUCCESS';
const CUSTOMIZATION_LOAD_FAIL = 'formTwoLead/CUSTOMIZATION_LOAD_FAIL';

const initialState = {
  customizationsLoaded: false,
  loaded: false,
  prefs: null
};

function extractPreferences(prefs) {
  try {
    const customizations = {};
    const requiredCustomizations = prefs.data.requested_trip.customizations.filter(cust => (
      cust.qtype === 'attractions' || cust.qtype === 'budget'
    ));
    for (let index = 0; index < requiredCustomizations.length; index += 1) {
      const customization = requiredCustomizations[index];
      if (customization.qtype === 'attractions') {
        customizations.attractionPrefs = {
          customizationId: customization.id,
          title: customization.title,
          options: customization.options.map(option => (
            { id: option.id, name: option.name }
          ))
        };
      }
      // TODO: Budget Customization, Not coming in API
    }
    customizations.hotelBudgets = prefs.data.requested_trip.hotel_budgets || {};
    customizations.flightBudget = (prefs.data.requested_trip.flight_budget &&
      prefs.data.requested_trip.flight_budget.flight_price) || 0;
    return customizations;
  } catch (e) {
    console.log(e);
    return null;
  }
}

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
    case UPDATE_REDIS_KEY:
      return {
        ...state,
        redisKey: action.value
      };
    case CUSTOMIZATIONS_LOAD_SUCCESS:
      return {
        ...state,
        customizationsLoaded: true,
        prefs: extractPreferences(action.result)
      };
    case CUSTOMIZATION_LOAD_FAIL :
      return {
        ...state,
        customizationsLoaded: false,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.formTwoLead && globalState.formTwoLead.loaded;
}

export function redirectUrl(globalState) {
  if (!globalState.formTwoLead || !globalState.formTwoLead.data) {
    return '';
  }
  return globalState.formTwoLead.data.redirect_url || '';
}

export function localExpCustomization(globalState) {
  if (!globalState.formTwoLead || !globalState.formTwoLead.prefs) {
    return null;
  }
  return globalState.formTwoLead.prefs.attractionPrefs;
}

export function budgetCustomization(globalState) {
  if (!globalState.formTwoLead || !globalState.formTwoLead.prefs) {
    return null;
  }
  return globalState.formTwoLead.prefs.budgetPrefs;
}

export function isLoading(globalState) {
  return (globalState.packages.details && globalState.packages.details.loading) || false;
}

export function loadingError(globalState) {
  return (globalState.packages.details && globalState.packages.details.error) || null;
}

export function load(tripId = '', rtParams) {
  const data = {
    '_method': 'put',
    'is_ft': true,
    ...rtParams
  };
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.put(
      `${config.apiEndpoints.requestedTrip.formTwo.url}${tripId}`,
      { data, hostType: config.apiEndpoints.requestedTrip.formTwo.host }
    ),
  };
}

export function reset() {
  return {
    type: RESET
  };
}

export function loadCustomizations(rtripId, params) {
  return {
    types: [CUSTOMIZATIONS_LOAD, CUSTOMIZATIONS_LOAD_SUCCESS, CUSTOMIZATION_LOAD_FAIL],
    promise: client => client.get(formTwoCustomizationsPath(rtripId), {
      ...params, hostType: config.apiEndpoints.requestedTrip.customize.host
    })
  };
}

export function getBudgetOptions(globalState) {
  const userPrefs = globalState.form && globalState.form['formTwo-1ae_X'] && globalState.form['formTwo-1ae_X'].values;
  const customizationsLoaded = globalState.formTwoLead.customizationsLoaded;
  const idToStar = {
    32: '2_star',
    8: '3_star',
    7: '4_star',
    6: '5_star'
  };
  // no preferences are there
  if (!userPrefs || !customizationsLoaded) {
    return undefined;
  }
  // get flight budget
  const flightPrice = (userPrefs.cust_23 && userPrefs.cust_23 === '98')
    ? globalState.formTwoLead.prefs.flightBudget
    : 0;
  // get hotel budget
  if (userPrefs.cust_2 && userPrefs.cust_2.length > 0 && !userPrefs.cust_2.includes(96)) {
    const hotelBudgets =
      globalState.formTwoLead.prefs.hotelBudgets[idToStar[Math.min(...userPrefs.cust_2)]];
    return hotelBudgets && hotelBudgets.map(hotelBudget => (
      {
        max_price: hotelBudget.max_price + flightPrice,
        min_price: hotelBudget.min_price + flightPrice
      }
    ));
  }
  return undefined;
}

export function isFlightSelected(globalState) {
  const userPrefs = globalState.form && globalState.form['formTwo-1ae_X'] && globalState.form['formTwo-1ae_X'].values;
  const flightBudget = globalState.formTwoLead
    && globalState.formTwoLead.prefs
    && globalState.formTwoLead.prefs.flightBudget;
  // get flight budget
  const flightPrice = (userPrefs.cust_23 && userPrefs.cust_23 === '98')
    ? flightBudget
    : 0;
  return !!flightPrice;
}

export function getSelectedBudget(globalState) {
  return (
    globalState.form
    && globalState.form['formTwo-1ae_X']
    && globalState.form['formTwo-1ae_X'].values
    && globalState.form['formTwo-1ae_X'].values.budget
  ) || null;
}

export function customizationToken(globalState) {
  return (
    globalState.formOneLead
    && globalState.formOneLead.allowCustomization
  ) || '';
}

export function updateFields(fields) {
  return {
    type: fields.type,
    value: fields.value
  };
}

export function getFormTwoRedisKey(globalState) {
  if (globalState.formTwoLead && globalState.formTwoLead.redisKey) {
    return globalState.formTwoLead.redisKey;
  }
  return '';
}

