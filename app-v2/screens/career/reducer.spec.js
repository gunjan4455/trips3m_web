import { LOAD, LOAD_SUCCESS, LOAD_FAIL } from './action';

import Reducer, { isLoaded } from './reducer';
import { careerData } from 'modules/shared/trialist/career/test/careerData';

const serverResponse = {
  data: {
    careers: careerData,
  },
};

const initialState = {
  loaded: false,
  loading: false,
  data: {},
};

const globalState = {
  career: {
    apply: {
      loaded: true,
      data: 5,
    },
  },
};
describe('Career reducer', () => {

  it('Check load success is working as expected', () => {
    const expectedData = {
      loaded: true,
      loading: false,
      data: serverResponse.data,
      errors: null,
    };
    expect(
      Reducer(initialState, { type: LOAD_SUCCESS, result: serverResponse })
    ).toEqual(expectedData);
  });

  it('Check load  is working as expected', () => {
    const expectedData = {
      loaded: false,
      loading: true,
      data: {},
    };
    expect(
      Reducer(initialState, { type: LOAD, result: serverResponse })
    ).toEqual(expectedData);
  });

  it('Check load failure  is working as expected', () => {
    const error = {
      errors: 'not loaded',
    };
    const expectedData = {
      loaded: false,
      loading: false,
      data: {},
      errors: 'not loaded',
    };
    expect(Reducer(initialState, { type: LOAD_FAIL, error: error })).toEqual(
      expectedData
    );
  });

  it('isLoaded function should return true, when loaded value passed', () => {
    expect(isLoaded(globalState)).toEqual(true);
  });

  it('isLoaded function should return false when no data pass', () => {
    expect(isLoaded()).toEqual(false);
  });

  it('isLoaded function should return false, when loaded value is not in new state', () => {
    const newState = {
      career: {
        jobDescription: {},
      },
    };
    expect(isLoaded(newState)).toEqual(false);
  });
});
