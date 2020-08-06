import { results } from 'modules/placesToVisit/reducer';
import { stringify as encodeURL } from 'query-string';
import _isEmpty from 'lodash/isEmpty';

export {
  results
};
import { getQueryParams } from 'helpers/urlHelpers';

export function getCityBlockUrl(destination) {
  return `/${destination.toLowerCase()}-tourism/places-to-visit`;
}

export const applyPagination = (
  {
    value,
    location: { pathname },
    destination,
    category,
    push
  }
) => {
  return push({
    pathname: pathname, // getCityBlockUrl(destination, value.selected + 1),
    query: {
      page: value.selected + 1
    }
  });
};

export const resetPath = (url, push) => {
  return push({
    pathname: url
  });
};

export const applyFilters = (
  {
    values,
    location,
    filters,
    params,
    push
  }
) => {
  const query = {};
  query.filter_categories = [];
  query.filtered_cities = [];

  Object.keys(values).forEach(
    (key) => {
      if (key.includes('category')) {
        const str = key.replace('category', '');
        if (values[key] && !query.filter_categories.includes(parseInt(str))) {
          query.filter_categories.push(parseInt(str));
        }
      } else if (key.includes('city')) {
        const str = key.replace('city', '');
        if (values[key] && !query.filtered_cities.includes(parseInt(str))) {
          query.filtered_cities.push(parseInt(str));
        }
      }
    }
  );
  let url = '', urls = '', replaceConst = '';
  replaceConst = location.pathname.indexOf('places-to-visit') > -1 ? 'places-to-visit' : 'experience';
  if (query.filter_categories && query.filter_categories.length === 1 && (!query.filtered_cities ||
    query.filtered_cities.length === 0)) {
    const category = filters.filterCategories.find(function (filter) {
      return filter.destinationSchemeId === query.filter_categories[0];
    });
    query.t = 'ptv';
    if(!_isEmpty(values)){
      url = location.pathname.substr(0, location.pathname.indexOf(`/${replaceConst}`)) + `/experience` + `/${category.setUrl}?${encodeURL(query, { arrayFormat: 'bracket' })}`;
    }else {
      url = location.pathname.substr(0, location.pathname.indexOf(`/${replaceConst}`)) +  `/experience` + `/${category.setUrl}`;
    }
    return push(`${url}`);
  }
  else {
    if (params.city) {
      url = `/${params.destination}-tourism/${params.city}/places-to-visit`;
    } else {
      url = `/${params.destination}-tourism/places-to-visit`;
    }

    if(!_isEmpty(values)){
      urls = `${url}?${encodeURL(query, { arrayFormat: 'bracket' })}`;
    }else{
      urls = `${url}`;
    }
    return push(`${urls}`);
  }
};

