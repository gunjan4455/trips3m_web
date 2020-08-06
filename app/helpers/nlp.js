import { DEFAULT_HOTEL_STAR_RATING, HotelStarRating } from 'constants/nlp';

export const HotelRequirementMapping = {
  5: '6',
  4: '7',
  3: '8',
  2: '32',
};

export const getFlightAnswerAttributes = (inclusionAnswer) => {
  if (inclusionAnswer) {
    return { customization_id: '23', option_id: '97' };
  }
  return { customization_id: '23', option_id: '98' };
};

export const getHotelCategoryAttributes = (value) => {
  if(!value){
    return [{ customization_id: '2', option_id: HotelRequirementMapping[DEFAULT_HOTEL_STAR_RATING] }];
  }
  return [{ customization_id: '2', option_id: HotelRequirementMapping[value] }];
};

export const checkFlightInclusion = (rtripParams) => {
  return (rtripParams.flight_answer_attributes && rtripParams.flight_answer_attributes.option_id) === '97';
};

export const getMaxOfObjectKeys = (obj) => {
  if (typeof obj !== 'object') {
    return 0;
  }
  return Math.max(...Object.keys(obj));
};

export const getMinOfObjectKeys = (obj) => {
  if (typeof obj !== 'object') {
    return 0;
  }
  return Math.min(...Object.keys(obj));
};

export const getMaxRatingOfHotelAttributes = (hotelAnswerAttributes) => {
  const starRatings = hotelAnswerAttributes.map((i) => +getMaxHotelRating(i.option_id));
  const maxStarRating = Math.max(...starRatings);
  return maxStarRating ? maxStarRating : DEFAULT_HOTEL_STAR_RATING;
};

const getMaxHotelRating = (optionId) => {
  const maxHotelRating = Object.keys(HotelStarRating).find((key)=> HotelStarRating[key] == optionId);
  return maxHotelRating;
};
