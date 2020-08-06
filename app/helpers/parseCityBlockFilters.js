export const options = [
  'filter_categories[]',
  'filtered_cities[]',
  't'
];

const parseFilters = ({ query }, arrayFormat = 'none') => {
  const filters = Object.keys(query)
    .filter(key => options.includes(key))
    .reduce((obj, key) => {
      obj[key] = query[key]; // eslint-disable-line no-param-reassign
      return obj;
    }, {});

  return {filters: filters};
};

export default parseFilters;
