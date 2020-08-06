import reducer from './reducer';
import {
  PREFERENCE_OPTIONS_LOAD,
  PREFERENCE_OPTIONS_LOAD_SUCCESS,
  PREFERENCE_OPTIONS_LOAD_FAIL
} from './action';

const defaultPreferenceOptionsState = {
  loaded: false,
  loading: false,
  updated: false,
  updating: false,
  preferenceOptions: {},
  errors: []
};

const successAPIResp = {
  adult: 2,
  child: 0,
  data: {
    requestedTrip: 1221
  },
  status: 'Cancelled',
  start_date: '2018-05-18',
  traveler_details: {
    email: 'rahul.jain@traveltriangle.com',
    id: 1820098,
    image: '/pics/original/missing.png',
    initials: 'R',
    name: 'Rahul Jain',
    phone_no: null,
    trip_for_redirection: 2752484
  },
  primary_phone_no: {
    isd: '+',
    phone_no: null
  },
  currency: null,
  from_loc: 'Sector 18, Gurugram, Haryana 122022, India',
  trip_days: 2,
  nights: 1,
  exclusive_preferences_values: {
    cabs: 'Excluded',
    flights: 'Excluded',
    hotels: '3 Star'
  },
  budget: null,
  info: '',

};

describe('Preference reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultPreferenceOptionsState);
  });

  it('should handle PREFERENCE_OPTIONS_LOAD', () => {
    const action = {
      type: PREFERENCE_OPTIONS_LOAD,
      result: successAPIResp
    };
    const reducerResp = reducer(undefined, action);
    expect(reducerResp.loaded).toBe(false);
    expect(reducerResp.loading).toBe(true);
    expect(reducerResp.preferenceOptions).toEqual({});
  });

  it('should handle PREFERENCE_OPTIONS_LOAD_FAIL', () => {
    const action = {
      type: PREFERENCE_OPTIONS_LOAD_FAIL,
      result: {}
    };
    const reducerResp = reducer(undefined, action);
    expect(reducerResp.preferenceOptions).toEqual({});
    expect(reducerResp.loaded).toEqual(false);
    expect(reducerResp.loading).toEqual(false);

  });

  it('should handle PREFERENCE_OPTIONS_LOAD_SUCCESS', () => {
    const action = {
      type: PREFERENCE_OPTIONS_LOAD_SUCCESS,
      result: successAPIResp
    };
    const reducerResp = reducer(undefined, action);
    expect(reducerResp.loaded).toEqual(true);
    expect(reducerResp.loading).toEqual(false);
    expect(reducerResp.preferenceOptions).toBe(1221);

  });

});
