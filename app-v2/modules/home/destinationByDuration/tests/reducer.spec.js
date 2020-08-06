import results from '../reducer';

describe('Test suite for DestinationByDuration reducer', () => {
  it('fetchDestinationByDuration result', () => {
    const apiData = {
      xyz: ''
    };

    const state = {
      destinationByDuration: {
        data: { ...apiData }
      }
    };
    expect(results(state)).toEqual(state);
  });

  it('should return blank object when data is not there', () => {
    const state = {};

    const expectedData = {};

    expect(results(state)).toEqual(expectedData);
  });
});
