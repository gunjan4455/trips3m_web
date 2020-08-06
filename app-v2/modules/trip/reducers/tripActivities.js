import {
  SEND_ACTIVATION_MAIL_LOAD, SEND_ACTIVATION_MAIL_SUCCESS, SEND_ACTIVATION_MAIL_FAIL
} from '../actions/tripActivities';

const initialState = {
  activationMailSent: false,
  activationMailSending: false,
  activationMailSuccessMsg: ''
};

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case SEND_ACTIVATION_MAIL_LOAD: {
      return {
        ...state,
        activationMailSent: false,
        activationMailSending: true,
        activationMailSuccessMsg: ''
      };
    }
    case SEND_ACTIVATION_MAIL_SUCCESS: {

      return {
        ...state,
        activationMailSent: true,
        activationMailSending: false,
        activationMailSuccessMsg: action.result.data.message
      };
    }
    case SEND_ACTIVATION_MAIL_FAIL: {
      return {
        ...state,
        activationMailSent: false,
        activationMailSending: false,
        activationMailSuccessMsg: ''
      };
    }
    default:
      return state;
  }
}
