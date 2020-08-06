import layoutReducer from './reducer';
import { LAYOUT_SUCCESS } from './action';

describe('layout reducer', () => {
  const initialState = {
    loading: false,
    loaded: false,
    data: {}
  };

  it('initializes with default state', () => {
    expect(layoutReducer(initialState, {})).toEqual(initialState);
  });

  it('checks if `LAYOUT_SUCCESS` is working as expected', () => {
    const serverResponse = {
      data: {
        layout: 'RLP',
        stage: 'LEAD-CREATED',
        components: [
          {
            id: 1,
            name: 'RtripSubHeader',
            sequence: 1,
          },
          {
            id: 2,
            name: 'PreferencesSection',
            sequence: 2,
          },
          {
            id: 3,
            name: 'TravelerReview',
            sequence: 3,
          },
        ],
        version: 1,
        actions: [],
      },
    };

    const expectedData = {
      loaded: true,
      loading: false,
      data: serverResponse.data,
    };

    expect(layoutReducer(initialState, { type: LAYOUT_SUCCESS, result: serverResponse }))
      .toEqual(expectedData);
  });
});
