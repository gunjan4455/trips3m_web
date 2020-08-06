import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_FAIL
} from './action';

import reducer, { results, isLoaded } from './reducer';
import { careerData } from "../career/test/careerData";

const serverResponse = {
  data: {
    careers: careerData
  }
};

const initialState = {
  loaded: false,
  loading: false,
  data: {}
};

const globalState = {
  career: {
    jobDescription: {
      loaded: true,
      data: 5
    }
  }
};
describe('Job Description reducer', () => {
  let newState = { ...globalState };

  it('check load success is working as expected', () => {
    const expectedData = {
      loaded: true,
      loading: false,
      data: serverResponse.data,
      errors: null,
    };
    expect(reducer(initialState, { type: LOAD_SUCCESS, result: serverResponse })).toEqual(expectedData);
  });

  it('check load  is working as expected', () => {
    const expectedData = {
      loaded: false,
      loading: true,
      data: {}
    };
    expect(reducer(initialState, { type: LOAD, result: serverResponse })).toEqual(expectedData);
  });

  it('check load failure  is working as expected', () => {
    const error = {
      errors: "not loaded"
    };
    const expectedData = {
      loaded: false,
      loading: false,
      data: {},
      errors: "not loaded"
    };
    expect(reducer(initialState, { type: LOAD_FAIL, error: error })).toEqual(expectedData);
  });
});
