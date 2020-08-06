import config from 'appConfig';

const LOAD = 'sliderQuestions/LOAD';
const LOAD_SUCCESS = 'sliderQuestions/LOAD_SUCCESS';
const LOAD_FAIL = 'sliderQuestions/LOAD_FAIL';

const initialState = {
  loaded: false,
  data: {}
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
        data: action.result && action.result.data,
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

export function getSliderQuestions(globalState) {
  const questions = globalState.slider.sliderQuestions.data;
  try {
    return {
      ...questions
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}

// Action Creator for Slider Questions
export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(config.apiEndpoints.requestedTrip.sliderQuestions.url, {
      params: { include_destination_questions: true }, hostType: config.apiEndpoints.requestedTrip.sliderQuestions.host
    }),
    withoutCamelCasing: false
  };
}

