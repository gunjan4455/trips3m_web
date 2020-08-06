import {
  SLIDER_1,
  UPDATE_REDIS_KEY,
  UPDATE_TO_DESTINATION,
  SET_DISPLAY_MODE,
  NEXT_SLIDE,
  ENABLED_FOR_SUBMIT,
  SLIDER_2_SUBMIT,
  TRIP_UPDATED_IN_REDIS, SEQUENTIAL_FORM_ONE
} from 'constants/Slider';

const initialState = {
  sliderDisplayMode: SEQUENTIAL_FORM_ONE,
  enabledForSubmit: false,
  nextSlide: SEQUENTIAL_FORM_ONE,
  slider2Submit: false,
  tripUpdatedInRedis: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_DISPLAY_MODE:
      return {
        ...state,
        sliderDisplayMode: action.value
      };
    case UPDATE_REDIS_KEY:
      return {
        ...state,
        redisKey: action.value
      };
    case UPDATE_TO_DESTINATION:
      return {
        ...state,
        properties: action.value
      };
    case TRIP_UPDATED_IN_REDIS:
      return {
        ...state,
        tripUpdatedInRedis: action.value
      };
    case NEXT_SLIDE:
      return {
        ...state,
        nextSlide: action.value
      };
    case ENABLED_FOR_SUBMIT:
      return {
        ...state,
        enabledForSubmit: action.value
      };
    case SLIDER_2_SUBMIT:
      return {
        ...state,
        slider2Submit: action.value
      };
    default:
      return state;
  }
}

export function getCommonProperties(globalState) {
  try {
    return globalState.slider.common;
  } catch (e) {
    return { sliderDisplayMode: SEQUENTIAL_FORM_ONE };
  }
}

export function getFormValues(globalState) {
  try {
    return globalState.form.LeadForm.values;
  } catch (e) {
    return {};
  }
}

export function updateFields(fields) {
  return {
    type: fields.type,
    value: fields.value
  };
}
