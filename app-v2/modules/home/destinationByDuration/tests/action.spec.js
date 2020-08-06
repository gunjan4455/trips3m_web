import {
  fetchDestinationByDuration,
  DESTINATION_BY_DURATION, DESTINATION_BY_DURATION_SUCCESS, DESTINATION_BY_DURATION_FAIL
} from '../action';

it('fetchDestinationByDuration', () => {
  const expectedAction = {
    types: [
      DESTINATION_BY_DURATION, DESTINATION_BY_DURATION_SUCCESS, DESTINATION_BY_DURATION_FAIL
    ],
    promise: () => new Promise(resolve => resolve()),
    withoutCamelCasing: false
  };
  expect(JSON.stringify(fetchDestinationByDuration({}, { params: { main_api: false } }))).toEqual(JSON.stringify(expectedAction));
});
