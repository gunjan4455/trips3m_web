import { parse as parseURL, stringify as encodeURL } from 'query-string';

const queryFilterOptions = [
  'destination_type',
  'destination_type[]',
  'category[]',
  'days[]',
  'price_ranges[]',
  'hotel_ratings[]',
  'inclusions[]',
  'trip_types[]',
  'cities[]',
  'inclusion_category_tags[]',
  'exclusion_category_tags[]',
  'location_experiences[]'
];

export default function parseFilters({ query, category, destinationType }, arrayFormat = 'none') {
  const parsedDestination = { destination: '', pageNumber: 1 };
  const filters = Object.keys(query)
    .filter(key => queryFilterOptions.includes(key))
    .reduce((obj, key) => {
      obj[key] = query[key]; // eslint-disable-line no-param-reassign
      return obj;
    }, {});
  if (destinationType && destinationType !== '') {
    filters['destination_type[]'] = destinationType === 'International' ? ['international'] : ['india'];
  }
  if (parsedDestination.destination === 'international' || parsedDestination.destination === 'india') {
    filters['destination_type[]'] = parsedDestination.destination === 'international' ? ['international'] : ['india'];
  }
  // Parse destination type
  if (filters.destination_type) {
    filters['destination_type[]'] = (
      filters.destination_type === 'all' ? ['india', 'international'] : [filters.destination_type]
    );
    delete filters.destination_type;
  }
  // Parse category
  if (query.category) {
    // handling the case if user navigates to *-packages from menu bar, then the corresponding checkbox
    // should be selected by default. We are also checking in the if statement that we don't set it for 'tour'
    // listing page as it would mess with the pageCategory param on the address bar and we only want it to be currently
    // family, friends and honeymoon
    if (query.category instanceof Array && query.category.length) {
      filters['category[]'] = query.category;
    } else {
      filters['category[]'] = query.category.split(',');
    }
  } else if (category !== 'tour') {
    filters['category[]'] = [category];
  } else {
    filters['category[]'] = [];
  }

  const parsed = parseURL(encodeURL(filters), { arrayFormat: 'bracket' });
  const keyFormatted = {};
  switch (arrayFormat) {
    case 'key':
      Object.keys(parsed).forEach(
        (e) => {
          keyFormatted[e] = keyFormatted[e] || {};
          parsed[e].forEach((i) => {
            keyFormatted[e][i] = true;
          });
        }
      );
      return {
        sortBy: query.sort_by,
        filters: keyFormatted,
        pageNumber: Number(parsedDestination.pageNumber || 1),
        destination: parsedDestination.destination
      };
    default:
      return {
        sortBy: query.sort_by,
        filters: parsed,
        pageNumber: Number(parsedDestination.pageNumber || 1),
        destination: parsedDestination.destination
      };
  }
}

export const useQuery = (query) => {
  return query ? parseURL(query) : {};
};
