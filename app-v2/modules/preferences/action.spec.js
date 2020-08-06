import {
  PREFERENCE_OPTIONS_LOAD,
  PREFERENCE_OPTIONS_LOAD_SUCCESS,
  PREFERENCE_OPTIONS_LOAD_FAIL,
  fetchPreferenceOptions,
} from './action';


describe('Prefernces actions', () => {

  it('creates PREFERENCE_OPTIONS_LOAD_SUCCESS when fetching preferences has been done', () => {

    const expectedActions = {
      types: [
        PREFERENCE_OPTIONS_LOAD,
        PREFERENCE_OPTIONS_LOAD_SUCCESS,
        PREFERENCE_OPTIONS_LOAD_FAIL
      ],
      promise: client => client.get('https://demo1879445.mockable.io/preferences'),
      withoutCamelCasing: true
    };

    const result = fetchPreferenceOptions(123123);

    expect(result).toBeDefined();
    expect(result.types).toBeDefined();
    expect(result.types).toEqual([
      PREFERENCE_OPTIONS_LOAD,
      PREFERENCE_OPTIONS_LOAD_SUCCESS,
      PREFERENCE_OPTIONS_LOAD_FAIL
    ]);
    expect(result.promise).toBeDefined();
  });
});

