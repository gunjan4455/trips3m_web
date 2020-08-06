import {
  ROSTER_VIEW_SHOW,
  ROSTER_VIEW_HIDE
} from './action';

const initialState = {
  isRosterOpen: false,
  type: '',
  message: '',
  allowTimeOut: true
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ROSTER_VIEW_SHOW:
      return {
        ...state,
        isRosterOpen: true,
        type: action.data.type,
        message: action.data.message,
        allowTimeOut: action.data.allowTimeOut
      };
    case ROSTER_VIEW_HIDE:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
