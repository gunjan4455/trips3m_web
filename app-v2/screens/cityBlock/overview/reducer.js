import createApiReducer from '../../../reducers/api';

export default createApiReducer([
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
]);

export const results = (globalState) => {
  try {
    return globalState.cityBlock.data || {};
  } catch (e) {
    return {};
  }
};

export const isLoaded = (globalState) => {
  try {
    return globalState.cityBlock.overview.loaded || false;
  } catch (e) {
    return false;
  }
};
