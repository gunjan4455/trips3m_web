import {
  LAYOUT_REQUEST,
  LAYOUT_SUCCESS,
  LAYOUT_FAILURE,
  loadLayout
} from './action';

it('loads the rlp layout', () => {
  const expectedAction = {
    types: [
      LAYOUT_REQUEST,
      LAYOUT_SUCCESS,
      LAYOUT_FAILURE
    ],
    promise: () => new Promise(resolve => resolve()),
  };
  expect(JSON.stringify(loadLayout('rlp'))).toEqual(JSON.stringify(expectedAction));
});
