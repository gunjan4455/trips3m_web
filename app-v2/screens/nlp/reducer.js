import _get from 'lodash/get';

import { GET_PREFERENCES_DATA_SUCCESS, GET_PREFERENCES_PARAMS_SUCCESS } from './action';
import { DaysInternational, DaysNational, HotelStarRating, DEFAULT_HOTEL_STAR_RATING }  from 'constants/nlp';
import { checkFlightInclusion, getMaxOfObjectKeys, getMinOfObjectKeys, getMaxRatingOfHotelAttributes } from 'helpers/nlp';

const initialState = {
  preference: {},
  matchingPreferences: {},
  rtripData: {}
};

export default function nlp(state = initialState, action = {}) {

  switch (action.type) {
    case GET_PREFERENCES_DATA_SUCCESS: {
      const matchingPreferences = formatAndHandleNlpData(action.result.data, state.preference);
      const { days, flights, maxHotelRating } = state.preference;
      let price;
      try {
        price = matchingPreferences[maxHotelRating][days][flights];
      } catch(e) {
        price = {};
      }
      return {
        ...state,
        preference: {
          ...state.preference,
          priceMin: price.min,
          priceMax: price.max
        },
        matchingPreferences
      };
    }
    case GET_PREFERENCES_PARAMS_SUCCESS: {
      return {
        ...state,
        rtripData:  action.result.data,
        preference: getPreferenceData(action.result.data)
      };
    }
    default:
      return { ...state };
  }
}

const formatAndHandleNlpData = (...data) => {
  try {
    return formatNlpData(...data);
  } catch(e) {
    return {};
  }
};

const formatNlpData = (data, preferenceObj) => {

  /* filter from destination first */
  const flightPriceObj = data.flightPrices.find((i) => i.destinationId == preferenceObj.destinationId);
  const extraFlightPriceObj = flightPriceObj && flightPriceObj.flightPrices.find((i) => i.month == preferenceObj.travelMonth);
  const extraFlightPrice = extraFlightPriceObj.price;
  const destinationPreference = data.matchingPreference.find((i) => i.destinationId == preferenceObj.destinationId);

  const hotelRatingDaysObj = {};
  if(destinationPreference) {
    destinationPreference.hotels.forEach((hotelItem) => {
      const travelMonthObj = hotelItem.travelMonths.find((i) => i.travelMonth == preferenceObj.travelMonth);
      const daysObj = {};
      travelMonthObj.days.forEach((day) => {
        daysObj[day.days] = {
          'false': { min: day.priceMin, max: day.priceMax },
          'true': { min: day.priceMin + extraFlightPrice, max: day.priceMax + extraFlightPrice }
        };
      });
      hotelRatingDaysObj[hotelItem.maxHotelRating] = daysObj;
    });
  }
  return hotelRatingDaysObj;
};

export const getTripDays = (tripDays, destinationType) => {
  const dayRangeUpperVal = destinationType === 'domestic' ? getMaxOfObjectKeys(DaysNational) : getMaxOfObjectKeys(DaysInternational);
  const dayRangeLowerVal = destinationType === 'domestic' ? getMinOfObjectKeys(DaysNational) : getMinOfObjectKeys(DaysInternational);
  let modifiedTripDays = tripDays;
  if(modifiedTripDays >= dayRangeUpperVal){
    modifiedTripDays = dayRangeUpperVal;
  }
  else if (modifiedTripDays < dayRangeLowerVal){
    modifiedTripDays = dayRangeLowerVal;
  }
  return modifiedTripDays;
};


const getPreferenceData = (data) => {
  const hotelAnswerAttributes = _get(data, 'rtrip_params.hotel_category_answers_attributes', []);
  const flightsIncluded = checkFlightInclusion(data.rtrip_params);
  const newData = {
    destinationId: data.mapped_to_loc_id,
    destinationName: data.mapped_to_loc_name,
    destinationType: data.mapped_to_type,
    days: getTripDays(+data.rtrip_params.trip_days, data.mapped_to_type),
    maxHotelRating: getMaxRatingOfHotelAttributes(hotelAnswerAttributes),
    flights: flightsIncluded,
    travelMonth: data.start_date_month,
    adult: data.rtrip_params.adult,
    child: data.rtrip_params.child
  };
  return newData;
};
