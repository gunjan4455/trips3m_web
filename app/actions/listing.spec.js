/*eslint-disabled*/
import { loadPackages } from "./listing";
import {
  LISTING_PACKAGES_LOAD,
  LISTING_PACKAGES_LOAD_FAIL,
  LISTING_PACKAGES_LOAD_SUCCESS,
} from '../actionConstants';

const packageParams = {
  destination : 'kerala',
  listingType : 'budget',
  query : {},
  packageType : 'seo',
  sortBy :'popularity'
};

const expectedOutput = {
  types: [
    "listing/packages/LOAD",
    "listing/packages/LOAD_SUCCESS",
    "listing/packages/LOAD_FAIL"
  ],
  promise: () => new Promise(resolve => resolve())
};

describe('load packages action creator called', () => {
  it('returns an action to load packages', () => {
    expect(JSON.stringify(loadPackages(packageParams))).toEqual(JSON.stringify(expectedOutput));
  });
});
