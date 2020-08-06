import _isEmpty from 'lodash/isEmpty';

export const isNewDestination = (state, destination, city, scheme) => {
  const oldDestination = state.cityBlock && state.cityBlock.data && state.cityBlock.data.destination;
  const finalDestination = scheme ? scheme : (city ? city : destination);

  return !(finalDestination && oldDestination &&
    oldDestination.split(' ').join('-').toLowerCase() === finalDestination.split(' ').join('-').toLowerCase());
};

export const isEmptyPtvData = (state, tab) => {
  const ptvData = state.placesToVisit.data;

  if (ptvData && ptvData.placesToVisit && ptvData.placesToVisit.filters) {
    return tab === 'overview';
  }

  return tab === 'places_to_visit';
};

export const isEmptyTtdData = (state, tab) => {
  const ttdData = state.thingsToDo.data;

  if (ttdData && ttdData.thingsToDo && ttdData.thingsToDo.filters) {
    return tab === 'overview';
  }

  return tab === 'things_to_do';
};

export const isEmptyMapData = (state) => {
  const mapData = state.mapInformation.data;
  const data = mapData && mapData.mapInformation || {};
  return _isEmpty(data);
};

export const isEmptyTestimonialData = (state) => {
  const testimonialData = state.travelerReviews && state.travelerReviews.testimonials;
  const data = testimonialData && testimonialData.length && testimonialData || [];
  return data.length === 0;
};

// for later optimisation when destination key is added in API

// export const isNewOrEmptyEssentialInfo = (state, destination, city) => {
//   if (!state.essentialInfo.data) {
//     return true;
//   }
//
//   const oldDestination = state.essentialInfo.data.destination;
//
//   if (isNewDestination(oldDestination, destination, city)) {
//     return true;
//   }
//   return false;
// };
//
// export const isNewDestination = (oldDestination, destination, city) => {
//   const finalDestination = city ? city : destination;
//
//   if (finalDestination && oldDestination && oldDestination.toLowerCase() === finalDestination.toLowerCase())
//     return false;
//   else
//     return true;
// };

