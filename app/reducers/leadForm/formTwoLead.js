/* eslint-disable */
import config from 'appConfig';

const LOAD = 'formTwoLead/LOAD';
const LOAD_SUCCESS = 'Form2 Submitted';
const LOAD_FAIL = 'formTwoLead/LOAD_FAIL';

const initialState = {
  loaded: false
};

export function getBudgetOptions(globalState) {
  try {
    const sliderQuestions = globalState.slider.sliderQuestions.data;
    const formTwo = globalState.form.LeadForm.values;
    const idToStar = {
      32: '2Star',
      8: '3Star',
      7: '4Star',
      6: '5Star'
    };
    if (formTwo && formTwo.hotel_needed_answer_attributes &&
     formTwo.hotel_needed_answer_attributes.option_id === 96) {
      return {};
    }
    const toDestination = getToDestination(globalState.slider.common.properties &&
      globalState.slider.common.properties.toDestination || formTwo.to_loc);
    const budgetInfo = sliderQuestions.budgetInfo[toDestination];
    // get flight price
    let fromFlightPrice = 0;
    try {
      const fromDestination = (globalState.slider.common.properties &&
        globalState.slider.common.properties.fromDestination.toLowerCase()) || formTwo.to_loc;
      const fromDestinationId = sliderQuestions.cityCanonicalNames[fromDestination];
      fromFlightPrice = budgetInfo.flightPrice[fromDestinationId] || budgetInfo.flightPrice.default;
    } catch (error) {
      fromFlightPrice = budgetInfo.flightPrice.default;
    }

    const flightPrice = (formTwo &&
      formTwo.flight_answer_attributes &&
      formTwo.flight_answer_attributes.option_id === '97') ? fromFlightPrice : 0;

    if (budgetInfo && formTwo.hotel_category_answers_attributes &&
     formTwo.hotel_category_answers_attributes.length > 0) {
      const finalRetValue = {};
      const hotelBudgets =
        budgetInfo[idToStar[Math.min(formTwo.hotel_category_answers_attributes[formTwo.hotel_category_answers_attributes.length - 1].option_id)]];
      Object.keys(hotelBudgets).forEach((key) => {
        // hotelBudgets[key] += flightPrice;
        finalRetValue[key] = (hotelBudgets[key] * parseInt(formTwo.trip_days)) + flightPrice;
      });
      return finalRetValue;
    }
    return {};
  } catch (error) {
    return {};
  }
}


export function isFlightSelected(globalState) {
  const formTwo = globalState.form && globalState.form.LeadForm && globalState.form.LeadForm.values;
  return (formTwo && formTwo.flight_answer_attributes && formTwo.flight_answer_attributes.option_id === '97');
}

export function getSelectedBudget(globalState) {
  return (
    globalState.form
    && globalState.form.LeadForm
    && globalState.form.LeadForm.values
    && globalState.form.LeadForm.values.budget
  ) || null;
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
    default:
      return state;
  }
}

export function load(requestParams) {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.post(
      `${config.apiEndpoints.requestedTrip.saveInRedis.url}`, {
        params: {
          ...requestParams
        },
        hostType: config.apiEndpoints.requestedTrip.saveInRedis.host
      }
    )
  };
}

function getToDestination(destination) {
  let out = "";
  destination.split(" ").forEach(function (el, idx) {
      let add = el.toLowerCase();
      out += (idx === 0 ? add : add[0].toUpperCase() + add.slice(1));
  });
  return out;
}
