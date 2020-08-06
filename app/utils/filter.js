export const getParamName = filterName => {
  if (filterName.indexOf('[') > -1) {
    return filterName.substr(0, filterName.indexOf('['));
  }
  return filterName;
};
