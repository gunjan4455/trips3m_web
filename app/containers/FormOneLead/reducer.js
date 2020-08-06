import {
  PACKAGE_DATA,
} from './action';

const initialState = {
  data: {}
};

export default function getPackageData(state = initialState, action = {}) {
  switch (action.type) {
    case PACKAGE_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
