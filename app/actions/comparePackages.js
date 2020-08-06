import config from 'appConfig';

export const COMPARE_PACKAGES = 'COMPARE_PACKAGES';
export const COMPARE_PACKAGES_SUCCESS = 'COMPARE_PACKAGES_SUCCESS';
export const COMPARE_PACKAGES_FAIL = 'COMPARE_PACKAGES_FAIL';
export const COMPARE_PACKAGES_ADD_TO_COMPARING = 'COMPARE_PACKAGES_ADD_TO_COMPARING';
export const COMPARE_PACKAGES_REMOVE_FROM_COMPARING =
  'COMPARE_PACKAGES_REMOVE_FROM_COMPARING';
export const REMOVE_PACKAGE = 'REMOVE_PACKAGE';
export const REMOVE_COMPARE_DATA = 'REMOVE_COMPARE_DATA';

export const addToComparingPackages = pkg => ({
  type: COMPARE_PACKAGES_ADD_TO_COMPARING,
  pkg
});

export const removeFromComparingPackages = pkg => ({
  type: COMPARE_PACKAGES_REMOVE_FROM_COMPARING,
  pkg
});

export const loadDetails = ids => ({
  types: [
    COMPARE_PACKAGES,
    COMPARE_PACKAGES_SUCCESS,
    COMPARE_PACKAGES_FAIL,
  ],
  promise: client =>
    client.get(config.apiEndpoints.comparePackages.url, {
      params: { ids },
      hostType: config.apiEndpoints.comparePackages.host
    }),
});

export const removePackage = (pkg, i) => ({
  type: REMOVE_PACKAGE,
  pkg,
  i
});

export const removeCompareData = () => ({
  type: REMOVE_COMPARE_DATA
});
