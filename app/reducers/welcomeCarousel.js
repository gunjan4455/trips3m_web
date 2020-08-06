import config from 'appConfig';
const carouselLoaded = 'carouselLoaded';

const initialState = {
  carouselData: {},
  carouselPackages: []
};


const LOAD = 'welcomeCarouselPackages_load';
const LOAD_SUCCESS = 'welcomeCarouselPackages_load_success';
const LOAD_FAIL = 'welcomeCarouselPackages_load_fail';

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {

    case carouselLoaded:
      return {
        ...state,
        carouselData: action.data.body
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        carouselPackages: action.result.data
      };
    default:
      return state;
  }

};


export function welcomeCarouselPackages(params) {
  console.log(params);
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get(
      config.apiEndpoints.recentPackages.url,
      { params, hostType: config.apiEndpoints.recentPackages.host }
    ),
    withoutCamelCasing: true
  };
}
